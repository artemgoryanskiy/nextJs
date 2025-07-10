import {HTMLAttributes, ReactNode} from 'react';

export interface ITag extends HTMLAttributes<HTMLDivElement>{
    size?: 'small' | 'large';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}