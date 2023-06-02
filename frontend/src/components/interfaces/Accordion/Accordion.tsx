import React, { useState } from 'react';
import './Accordion.css'

interface AccordionData {
    title: string;
    content: string;
}

interface AccordionProps {
    data: AccordionData[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {data.map((accordion, index) => (
                <div
                    className={`accordion ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                    key={index}
                >
                    <div className={`title ${activeIndex === index ? 'activeTitle' : ''}`}>
                        {accordion.title}
                        <span className={`plus ${activeIndex === index ? 'activePlus' : '+'}`}>
                              {activeIndex === index ? '+' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && <div className="panel" >{accordion.content}</div>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;