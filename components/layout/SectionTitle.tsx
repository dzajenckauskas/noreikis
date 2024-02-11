import useIntersectionObserver from '@/app/useIntersectionObserver';
import Typography from '@mui/material/Typography'
import React, { useRef } from 'react'

type Props = {
    title: React.ReactNode;
}

export const SectionTitle = ({ title }: Props) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');
    return (
        <Typography variant='h3' component={'h2'}
            ref={elementRef}
            sx={{ fontWeight: 600 }}>
            {title}
        </Typography>
    )
}
