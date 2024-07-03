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
            sx={{
                position: 'relative',
                overflow: 'hidden',
                p: { xs: 2, sm: 4, lg: 8 },
                py: { xs: 4, sm: 4, lg: 8 },
                transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                // ':hover': {
                //     boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px',
                // },
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: '#ffffffB3',
                    zIndex: -1,
                    transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
                },
                ':hover::before': {
                    filter: 'blur(50px)',
                    backdropFilter: 'blur(10px)', // Apply blur effect on hover
                    backgroundColor: '#ffffff99', // Background color on hover
                },

            }}>
            <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
                <Typography color={theme.palette.primary.main} fontWeight={600}
                    width={'80%'}
                    variant='h5' component={'h2'}>
                    {title}
                </Typography>
                {icon}
            </Stack>
            <Typography color={theme.palette.primary.main} variant='body1'>
                {text}
            </Typography>
        </Stack>
    )
}
