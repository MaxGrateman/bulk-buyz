import React, {FC, ReactElement, ReactNode} from 'react';


interface CardProps {
    width: string;
    height: string;
    children?: ReactNode | ReactElement;
    background: string;
    borderRadius: string;
    padding: string;
    boxSizing: string;
}

const ICard: React.FC<CardProps> =
    ({
        width,
        height,
        children,
        background,
        borderRadius,
        padding,
        boxSizing,

    }) => {

    return(
        <div style={{ height: '290px', width: '527px', background: 'linear-gradient(90deg, rgba(129, 106, 255, 0.6) 0.02%, rgba(170, 0, 255, 0.6) 100%)',
            borderRadius: '30px', padding: '30px 47px', boxSizing: 'border-box'}}>
            {children}
        </div>
    )
    }


export default ICard;