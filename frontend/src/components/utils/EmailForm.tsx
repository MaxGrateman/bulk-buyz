import React, {useState} from 'react';
import axios from "axios";

const EmailForm = () => {
    const [email, setEmail] = useState(' ')

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json'

        // Валидация формы
        if ( !email ) {
            alert('Пожалуйста, заполните все поля формы');
            return;
        }
        try {
            // Отправка данных
            const response = await axios.post('http://localhost:8080/backend/email.php',
                { email: email },
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            console.log(response.data); // Результат запроса

            // Очистка полей формы после отправки
            setEmail('');
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <form onSubmit={handleSubmit} className='modal_wrapper'>
            <input
                className="modal_wrapper_input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='E-mail указанный при оплате'
            />
            <button type="submit" className="modal_wrapper_button">Отправить</button>
        </form>
    );
};

export default EmailForm;