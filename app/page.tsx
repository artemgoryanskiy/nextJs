'use client'

import {Button, HTag, Paragraph, Tag} from '@/components';
import Rating from '@/components/Rating';
import {useState} from 'react';

export default function Home() {
    const [rating, setRating] = useState(4);
    return (
        <>
            <HTag tag={'h1'}>Text</HTag>
            <Button appearance={'primary'} arrow={'down'}>Primary</Button>
            <Button appearance={'secondary'}>Secondary</Button>
            <Button appearance={'secondary'} arrow={'right'}>Secondary</Button>
            <Paragraph size={'small'}>
                Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
            </Paragraph>
            <Paragraph>
                Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
            </Paragraph>
            <Paragraph size={'large'}>
                Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
            </Paragraph>

            <Tag size={'small'}>Small</Tag>
            <Tag size={'large'} color={'red'}>Medium</Tag>

            <Rating rating={rating} isEditable={true} setRating={setRating} />

        </>
    );
}
