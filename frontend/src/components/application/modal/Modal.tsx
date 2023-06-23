import React, {useEffect, FC, ReactElement, ReactNode, useState} from 'react';
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

    const [scrollbarWidth, setScrollbarWidth] = useState(0);
    const [previousOverflow, setPreviousOverflow] = useState('');

    useEffect(() => {
        // Функция для получения ширины скроллбара
        const getScrollbarWidth = () => {
            const scrollDiv = document.createElement('div');
            scrollDiv.style.width = '100px';
            scrollDiv.style.height = '100px';
            scrollDiv.style.overflow = 'scroll';
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            document.body.appendChild(scrollDiv);
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        };

        setScrollbarWidth(getScrollbarWidth());
    }, []);

    useEffect(() => {
        const body = document.body as HTMLBodyElement;

        if (open) {
            setPreviousOverflow(body.style.overflow);
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            body.style.overflow = previousOverflow;
            body.style.paddingRight = '0';
        }
    }, [open, previousOverflow, scrollbarWidth]);

    if (!open) return null;


    return (
        <div onClick={onClose} className="modal_overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal_content" style={{ width, height, padding}}>
                {children}
            </div>
        </div>
    );
};

export default Modal;