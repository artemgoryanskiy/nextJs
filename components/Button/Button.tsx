import {IButton} from '@/components/Button/Button.types';
import styles from './Button.module.css';
import ArrowIcon from './arrow-icon.svg'
import cn from 'classnames';
import {JSX} from 'react';

const Button = ({appearance, arrow = 'none', children, className, ...props}: IButton): JSX.Element => {
    return (
        <button className={cn(styles.button, className,
            {
                [styles.primary]: appearance === 'primary',
                [styles.secondary]: appearance === 'secondary',
            }
        )} {...props}>
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow,
                {[styles.down]: arrow === 'down',}
            )}><ArrowIcon/></span>}
        </button>
    );
};

export default Button;