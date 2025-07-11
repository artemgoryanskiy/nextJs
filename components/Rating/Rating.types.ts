import {HtmlHTMLAttributes} from 'react';

export interface IRating extends HtmlHTMLAttributes<HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}