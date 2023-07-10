import React, {ReactElement, ReactNode, useEffect, useRef, useState} from 'react';
import './IWarning.css'
import alert_icon from "../../../assets/alert_icon.svg";

interface IWarningProps {
    backgroundColor: string;
    children?: React.ReactNode | React.ReactElement;
    onClose?: () => void;
    open?: boolean;
}

const IWarning: React.FC<IWarningProps> = ({ backgroundColor, children, onClose, open }) => {
    const warningRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [warningPosition, setWarningPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const updateWarningPosition = () => {
            const warningRect = warningRef.current?.getBoundingClientRect();
            const modalRect = modalRef.current?.getBoundingClientRect();

            if (warningRect && modalRect) {
                const top = modalRect.top - warningRect.height - 10;
                const left = modalRect.left + modalRect.width + 10;

                setWarningPosition({ top, left });
            }
        };

        updateWarningPosition();

        window.addEventListener('resize', updateWarningPosition);

        return () => {
            window.removeEventListener('resize', updateWarningPosition);
        };
    }, []);


    return (
        <div className={`warning_container ${open ? 'fadeIn' : 'fadeOut'}`} style={{ backgroundColor, top: warningPosition.top, left: warningPosition.left }} ref={warningRef}>
            <div className="warning_wrapper">
                <img src={alert_icon} alt="alert_icon" width={25} height={25} />
                {children}
                <p className="warning_close" onClick={onClose}>
                    X
                </p>
            </div>
        </div>
    );
};

export default IWarning