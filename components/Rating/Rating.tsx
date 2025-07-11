'use client';

import {IRating} from '@/components/Rating/Rating.types';
import styles from './Rating.module.css';
import {FC, JSX, SVGProps, useEffect, useState, KeyboardEvent} from 'react';
import StarIconSvg from './star-icon.svg';
import cn from 'classnames';

const StarIcon: FC<SVGProps<SVGSVGElement>> = StarIconSvg;

const Rating = ({isEditable = false, rating, setRating, ...props}: IRating): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i);
    };

    const handleSpace = (e: KeyboardEvent<SVGSVGElement>, i: number) => {
        if (e.code !== 'Space' || e.key !== ' ' || !setRating || !isEditable) return;
        setRating(i);
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rate: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(index + 1)}
                    key={index}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGSVGElement>) => isEditable && handleSpace(e, index + 1)}
                    />
                </span>

            );
        });
        setRatingArray(updatedArray);
        console.log(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((rating: JSX.Element, index: number) => (
                <span key={index}>{rating}</span>
            ))}
        </div>
    );
};

export default Rating;