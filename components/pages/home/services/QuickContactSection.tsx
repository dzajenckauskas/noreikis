import useIntersectionObserver from '@/app/useIntersectionObserver';
import { SectionTitle } from '@/components/layout/SectionTitle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Stack from "@mui/material/Stack";
import { useRef } from 'react';
import { getTheme } from "../../../layout/Theme";
import { Counter } from './Counter';
import { ServiceCard } from './ServiceCard';
import { Typography } from '@mui/material';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

export const QuickContactSection = () => {
    const theme = getTheme()
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeInUp');
    return (
        <Stack sx={{
            backgroundColor: theme.palette.secondary.main,
            position: 'relative',
            zIndex: 11,
        }}>

            <Stack direction={'row'} sx={{
                mb: '-1px',
                // pt: 6,
                maxWidth: 'xl',
                mx: 'auto',
                // backgroundColor: theme.palette.primary.main,
                width: '100%',
                // pt: 10, pb: 10,
                pt: 10,
                pb: 8,
                justifyContent: 'center',
                position: 'relative',
                top: '-1px', alignContent: 'center',
                px: { xl: 2, md: 2, xs: 0 }
            }}>
                <Stack direction={'column'}
                    spacing={3}
                    // width={'100%'}
                    // mr={16} 
                    id={'paslaugos'} sx={{
                        alignContent: 'center', alignItems: 'center',
                        scrollMarginTop: 120,
                        px: { xs: 2 }
                    }}>
                    {/* {<Image src={'/assets/images/logo-black.svg'} width={160} height={160} alt='noreikis logo' />} */}
                    <Stack spacing={1} sx={{ width: { xs: '100%', md: '100%' } }}>
                        <SectionTitle title={<span style={{ color: '#fff' }}>
                            Ernestas Noreikis
                        </span>} />
                        {/* <Typography variant='h2' sx={{ fontWeight: 500, textAlign: 'center', color: theme.palette.primary.main }}>
                            Ernestas Noreikis
                        </Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'center', color: theme.palette.primary.main }}>
                            Jūsų atstovas visais nekilnojamojo turto klausimais
                        </Typography> */}
                    </Stack>
                </Stack>


            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} pb={20} mx={'auto'} maxWidth={'sm'} justifyContent={'space-between'}>
                <ContactForm buttonVariant={'primary'} />
            </Stack>
        </Stack>
    )
}