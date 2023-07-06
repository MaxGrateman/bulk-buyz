import React, {useState} from 'react'
import './EmailModal.css'
import axios from "axios";

const EmailModal = ({ onSubmit } : any) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        try {
            // Отправка данных
            const response = await axios.post(
                'http://localhost:8080/backend/processForm.php',
                { email },
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            console.log(response.data); // Результат запроса

            // Очистка полей формы после отправки
            setEmail('');

            // Call the onSubmit callback function passed from the parent component
            onSubmit();
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form className="form_modal" onSubmit={handleSubmit}>
            <p className="form_modal_text">Введите ваш e-mail</p>
            <input type={email} size={12} className="form_modal_input" placeholder="Example@example.com"/>
        </form>
    );
};

export default EmailModal;