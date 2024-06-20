import useIntersectionObserver from '@/app/useIntersectionObserver'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { ReactNode, useRef } from 'react'

type Props = {
    title: ReactNode;
    icon: ReactNode;
    text: string;
    minHeight: number;
    id: string;
}

export const ServiceCard = ({ title, icon, text, minHeight, id }: Props) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');
    return (
        <Stack spacing={2} ref={elementRef} id={id}
            width={'100%'} minHeight={{ xs: 'none', sm: minHeight }} pb={8}
            position={'relative'}
            alignSelf={'flex-start'}
            sx={{ p: { xs: 2, sm: 4, lg: 8 }, py: { xs: 4, sm: 4, lg: 8 }, ':hover': { backgroundColor: '#ffffffB3', boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
            {icon}
            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5' component={'h2'}>
                {title}
            </Typography>
            <Typography color={theme.palette.primary.main} variant='body1'>
                {text}
            </Typography>
        </Stack>
    )
}
