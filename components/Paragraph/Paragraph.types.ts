import {HTMLAttributes, ReactNode} from 'react';

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'small' | 'large';
    children: ReactNode
}