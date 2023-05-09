import React, { useState } from 'react';
import Modal from 'react-modal';

import './ModalCart.css'
import cart_icon from '../../../assets/cart.svg'


function ModalCart() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div>
            <div className="modal_header">
                <img src={cart_icon} alt='cart-icon' width={24} height={24}/>
                <label className="modal_header_label">История покупок</label>
            </div>
            <div className='modal_wrapper'>
                <input placeholder='E-mail, указанный при оплате' className="modal_wrapper_input"/>
                <button className="modal_wrapper_button">Продолжить</button>
            </div>
        </div>
    );
    return(
        <div>
            <button className="navigation_cart" onClick={openModal}>
                <a href='#' style={{padding: '10px 0 0 10px'}}>Мои покупки</a>
                <div className="navigation_cart_container">
                    <img src={cart_icon} alt='cart-icon' className="navigation_cart_icon"/>
                </div>
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
                {modalContent}
            </Modal>
        </div>
    )
}

export default ModalCart