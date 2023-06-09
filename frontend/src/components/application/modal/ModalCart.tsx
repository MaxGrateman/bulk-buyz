import './ModalCart.css'
import cart_icon from '../../../assets/cart.svg'
import cross_icon from '../../../assets/cross-black.svg'
import {useState} from "react";

const ModalCart = ({active, setActive} : any) => {


    return(
        <div className={ active ? "modal activated " : "modal"} onClick={() => setActive(false)}>
            <div className={ active ? "modal_content_small activated " : "modal_content_small"} onClick={() => setActive(false)}>
                <div className="modal_header_cart">
                    <img src={cart_icon} alt='cart-icon' width={24} height={24}/>
                    <label className="modal_header_label">История покупок</label>
                    <button className='modal_header_close' onClick={() => setActive(false)}><img  src={cross_icon} alt='black-cross-icon'/></button>
                </div>
                <div className='modal_wrapper'>
                    <input placeholder='E-mail, указанный при оплате' className="modal_wrapper_input"/>
                    <button className="modal_wrapper_button">Продолжить</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCart