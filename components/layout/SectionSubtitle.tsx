import Typography from '@mui/material/Typography';
import React from 'react';

type Props = {
    text: React.ReactNode;
}

export const SectionSubtitle = ({ text }: Props) => {
    // const elementRef = useRef<HTMLDivElement>(null);
    // useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');
    return (
        <Typography pt={2} variant='body1' width={{ xs: '90%', md: '60%' }}>
            {text}
        </Typography>
    )
}
