import React, {FC, ReactElement, ReactNode} from 'react';
import styles from '../../styles/Layouts.module.css'
import background_image from '../../assets/background.svg'

export enum LayoutVariant {
    image = 'image',
}

interface LayoutProps {
    height: string;
    children?: ReactNode | ReactElement;
    variant: LayoutVariant;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundAttachment: string;
    backgroundRepeat: string;
}

const Layout: React.FC<LayoutProps> =
    ({ height,
       children,
       variant,
       backgroundAttachment,
       backgroundPosition,
       backgroundRepeat,
       backgroundSize
     }) => {
    return (
        <div className={styles.layout}
             style={{ height: '100vh', background: variant === LayoutVariant.image ? `url(${background_image})` : 'white',
             backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
            {children}
        </div>
    );
};

export default Layout;