import './SelectModal.css'
import {useState} from "react";
import React from "react";

export type SelectModalOption = {
    id: number;
    value: string;
    variant: string;
    price: number;
};

type SelectModalProps = {
    value: SelectModalOption | undefined;
    options: SelectModalOption[];
    onChange: (option: SelectModalOption | undefined) => void;
};

export function SelectModal({ value, options, onChange }: SelectModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<SelectModalOption | undefined>(value);
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function selectOption(option: SelectModalOption) {
        setSelectedValue(option);
        if (option !== value) onChange(option);
    }

    function isSelected(option: SelectModalOption) {
        return option === value
    }
    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
            className="select_container"
        >
            <span className="select_value">{selectedValue ? selectedValue.variant : 'Выберите товар'}</span>
            <div className={`select_caret ${isOpen ? 'caret_rotate' : ''}`}></div>
            <ul className={`select_options ${isOpen ? 'select_options_show' : ''}`}>
                {options.map((option, index) => (
                    <React.Fragment key={option.value}>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            className={`select_option ${isSelected(option) ? 'selected_option' : ''} ${index === highlightedIndex ? 'select_highlight' : ''}`}
                        >
                            {option.variant}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}