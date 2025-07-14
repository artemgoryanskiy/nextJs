import {THeader} from '@/components/Header/Header.types';
import {JSX} from 'react';
import styles from './Header.module.css';

const Header = ({...props}: THeader): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};

export default Header;