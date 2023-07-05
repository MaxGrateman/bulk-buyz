import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import './IWarning.css'
import alert_icon from "../../../assets/alert_icon.svg";

interface IWarningProps {
    backgroundColor: string,
    children?: ReactNode | ReactElement,
    onClose?: any,
    open?: boolean,
}

const IWarning: React.FC<IWarningProps> = ({
    backgroundColor,
    children,
    onClose,
    open,
                                           }) => {



    if (!open) return null;


    return (
        <div className="warning_container" style={{backgroundColor}}>
            <div className="warning_wrapper">
                <img src={alert_icon} alt="alert_icon" width={25} height={25}/>
                {children}
                <p className="warning_close" onClick={onClose} >X</p>
            </div>
        </div>
    );
};

export default IWarning;