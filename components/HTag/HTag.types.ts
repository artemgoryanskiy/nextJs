import {ReactNode, HTMLAttributes} from 'react';

export interface IHTag extends HTMLAttributes<HTMLHeadingElement>{
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}