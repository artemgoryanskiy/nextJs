import {ButtonHTMLAttributes, ReactNode} from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'secondary';
    arrow?: 'right' | 'down' | 'none';
}