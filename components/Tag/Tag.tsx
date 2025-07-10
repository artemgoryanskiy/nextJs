import {ITag} from '@/components/Tag/Tag.types';
import cn from 'classnames';
import styles from './Tag.module.css';
import {JSX} from 'react';

const Tag = ({size='small', children, color='ghost', className, href, ...props}: ITag): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size === 'small',
            [styles.large]: size === 'large',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })} {...props}>
            {href && <a href={href}>{children}</a>}
            {children}
        </div>
    );
};

export default Tag;