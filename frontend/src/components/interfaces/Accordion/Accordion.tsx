import React, { useState } from 'react';
import './Accordion.css'
import plus from '../../../assets/plus-icon.png'

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
                <div
                    className={`accordion ${activeIndex[index] ? 'activeBackground' : ''}`}
                    onClick={() => handleClick(index)}
                    key={index}
                >
                    <div className={`title ${activeIndex[index] ? 'activeTitle' : ''}`}>
                        {accordion.title}
                        <img
                            src={plus}
                            alt="plus-icon"
                            className={`plus ${activeIndex[index] ? 'activePlus' : ''}`}
                        />
                    </div>
                    {activeIndex[index] && <div className="panel">{accordion.content}</div>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;