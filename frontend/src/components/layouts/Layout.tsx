import React, {FC, ReactElement, ReactNode} from 'react';
import background_image from '../../assets/background.svg'

export enum LayoutVariant {
    image = 'image',
    white = 'white'
}

interface LayoutProps {
    height: string;
    children?: ReactNode | ReactElement;
    variant: LayoutVariant;
    backgroundPosition?: string;
    backgroundSize?: string;
    backgroundAttachment?: string;
    backgroundRepeat?: string;
}

const Layout: FC<LayoutProps> =
    ({
       height,
       children,
       variant,
       backgroundAttachment,
       backgroundPosition,
       backgroundRepeat,
       backgroundSize
     }) => {
    return (
        <div style={{ height, background: variant === LayoutVariant.image ? `url(${background_image})` : LayoutVariant.white,
             backgroundSize, backgroundAttachment, backgroundPosition, backgroundRepeat}}>
            {children}
        </div>
    );
};

export default Layout;