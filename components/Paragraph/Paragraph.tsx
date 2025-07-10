import {IParagraph} from '@/components/Paragraph/Paragraph.types';
import cn from 'classnames';
import styles from './Paragraph.module.css';
import {JSX} from 'react';


const Paragraph = ({size, className, children, ...props}: IParagraph): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.small]: size === 'small',
            [styles.large]: size === 'large',
        })} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;