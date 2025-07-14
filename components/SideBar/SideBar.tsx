import {TSideBarProps} from '@/components/SideBar/SideBar.types';
import styles from './SideBar.module.css';
import {JSX} from 'react';

const SideBar = ({...props}: TSideBarProps): JSX.Element => {
    return (
        <div {...props}>
            SideBar
        </div>
    );
};

export default SideBar;