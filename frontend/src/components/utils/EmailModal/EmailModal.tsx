import React, {useState} from 'react'
import './EmailModal.css'
import axios from "axios";

interface EmailModalProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailModal = ({ value, onChange }: EmailModalProps) => {
    return (
        <form className="form_modal">
            <p className="form_modal_text">Введите ваш e-mail</p>
            <input
                type="text"
                value={value}
                className="form_modal_input"
                placeholder="Example@example.com"
                onChange={onChange}
            />
        </form>
    );
};

export default EmailModal;