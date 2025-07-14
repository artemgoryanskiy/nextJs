import {JSX} from 'react';
import {TFooterProps} from '@/components/Footer/Footer.types';

const Footer = ({...props}: TFooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};

export default Footer;