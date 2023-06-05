import React, { useState } from 'react';
import './Modal.css'
import cross_icon from "../../../assets/cross-black.svg";


const Modal = ({active, setActive, children} : any) => {

    return(
        <div className={ active ? "modal activated " : "modal"} onClick={() => setActive(false)}>
            <div className={ active ? "modal_content activated " : "modal_content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal