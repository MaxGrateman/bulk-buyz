import React, { useState } from 'react';
import './Accordion.css'
import plus from '../../../assets/plus-icon.svg'

interface AccordionData {
    title: string;
    content: string;
}

interface AccordionProps {
    data: AccordionData[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<boolean[]>(new Array(data.length).fill(false));

    const handleClick = (index: number) => {
        setActiveIndex((prevActiveIndex) => {
            const newState = [...prevActiveIndex];
            newState[index] = !newState[index]; // Инвертируем состояние аккордеона
            return newState;
        });

    };

    return (
        <div>
            {data.map((accordion, index) => (
                <div className="accordion" key={index}>
                    <div
                        className={`title ${activeIndex[index] ? 'activeTitle' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {accordion.title}
                        <img
                            src={plus}
                            alt="plus-icon"
                            className={`plus ${activeIndex[index] ? 'activePlus' : ''}`}
                        />
                    </div>
                    <div className={`panel ${activeIndex[index] ? 'activePanel' : ''}`}
                         onClick={() => handleClick(index)}>
                        <div className="panel_content">{accordion.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;