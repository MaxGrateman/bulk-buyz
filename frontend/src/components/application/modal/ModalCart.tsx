import './ModalCart.css'
import cart_icon from '../../../assets/cart.svg'
import cross_icon from '../../../assets/cross-black.svg'
import {useEffect, useState} from "react";
import axios from "axios";

const ModalCart = ({active, setActive} : any) => {
    const sendEmail = async (email: string) => {
        try {
            const response = await axios.post('', { email });
            console.log(response.data); // Обработка ответа от сервера
        } catch (error) {
            console.error(error);
        }
    };

// Обработчик отправки формы
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailInput = document.querySelector('.modal_wrapper_input') as HTMLInputElement;
        const email = emailInput.value;

        sendEmail(email);
    };

    return(
        <div className={ active ? "modal activated " : "modal"} onClick={() => setActive(false)}>
            <div className={ active ? "modal_content_small activated " : "modal_content_small"} onClick={e => e.stopPropagation()}>
                <div className="modal_header_cart">
                    <img src={cart_icon} alt='cart-icon' width={24} height={24}/>
                    <label className="modal_header_label">История покупок</label>
                    <button className='modal_header_close' onClick={() => setActive(false)}><img  src={cross_icon} alt='black-cross-icon'/></button>
                </div>
                <form className='modal_wrapper' onSubmit={handleSubmit}>
                    <input  className="modal_wrapper_input" placeholder="Введите свой Email"/>
                    <button className="modal_wrapper_button" >Продолжить</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCart