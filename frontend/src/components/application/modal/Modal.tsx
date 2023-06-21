import React, {useEffect, FC, ReactElement, ReactNode} from 'react';
import "./Modal.css"
import "./ModalLarge.css"
import cart_icon from '../../../assets/cart.svg'
import cross_icon from '../../../assets/cross.svg'

interface ModalProps {
    width: string,
    height: string,
    children?: ReactElement | ReactNode,
    open: boolean,
    onClose: any,
    padding?: string,
}

const Modal: React.FC<ModalProps>= ({
             open,
             onClose,
             height,
             width,
             children,
             padding
} : any) => {

    useEffect(() => {
        if (open) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('modal_open');
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.classList.remove('modal_open');
        }
    }, [open]);

    if (!open) return null;

    if (!open) return null;

    return (
        <div onClick={onClose} className="modal_overlay">
            <div className="modal_animation">
                <div onClick={(e) => e.stopPropagation()} className="modal_content" style={{ width, height, padding}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;