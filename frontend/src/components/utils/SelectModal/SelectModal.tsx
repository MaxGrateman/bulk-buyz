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

    function selectOption(option: SelectModalOption) {
        setSelectedValue(option);
        if (option !== value) onChange(option);
    }

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
            className="select_container"
        >
            <span className="select_value">{selectedValue ? selectedValue.variant : 'Выберите регион'}</span>
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
                            className="select_option"
                        >
                            {option.variant}
                        </li>
                        {index !== options.length - 1 && <li className="select_divider"></li>}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}