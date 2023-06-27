import React from 'react'
import './EmailModal.css'

const EmailModal = () => {
    return (
        <form className="form_modal">
            <p className="form_modal_text">Введите ваш e-mail</p>
            <input size={12} className="form_modal_input" placeholder="Example@example.com"/>
        </form>
    );
};

export default EmailModal;