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

export const AboutSection = () => {
    const theme = getTheme()
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeInUp');
    return (
        <Stack sx={{
            // pt: 6,
            maxWidth: 'xl',
            mx: 'auto',
            backgroundColor: theme.palette.primary.main,
            width: '100%', pt: 20, pb: 12,
            position: 'relative', zIndex: 0, top: '-1px', alignContent: 'center',
            px: { xl: 2, md: 2, xs: 0 }
        }}>
            <Stack direction={'row'} justifyContent={"flex-end"} pb={6} id={'paslaugos'} sx={{
                scrollMarginTop: 120,
                px: { xs: 2 }
            }}>
                <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                    <SectionTitle title={<>
                        <span style={{ color: theme.palette.info.main }}>
                            Ernestas Noreikis
                        </span>
                        {/* &nbsp;NT */}
                        <br />
                    </>} />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>

            </Stack>


        </Stack >
    )
}