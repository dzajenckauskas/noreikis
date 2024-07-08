import useIntersectionObserver from '@/app/useIntersectionObserver';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import { getTheme } from "../../../layout/Theme";

export const AboutSection = () => {
    const theme = getTheme();
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeInUp');

    return (
        <Stack
            sx={{
                overflow: 'hidden',
                // backgroundColor: theme.palette.secondary.main,
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Stack
                direction={{ lg: 'row-reverse', xs: 'column' }}
                spacing={{ xs: 10, lg: 20 }}
                sx={{
                    mb: '-1px',
                    maxWidth: 'xl',
                    mx: 'auto',
                    pt: 8,
                    pb: 6,
                    justifyContent: 'center',
                    position: 'relative',
                    top: '-1px',
                    alignItems: 'center',
                    alignContent: 'center',
                    px: { xl: 2, md: 2, xs: 0 }
                }}
            >
                <Stack
                    width={{ xs: '100%', sm: '100%', lg: '40%' }}
                    direction={'row'}
                    id={'apie-mane'}
                    justifyContent={'center'}
                    sx={{
                        scrollMarginTop: 120,
                        px: { xs: 2 }
                    }}
                >
                    <Image src={'/assets/images/logo-white.svg'} width={280} height={280} alt='noreikis logo' />
                </Stack>
                <Stack
                    sx={{
                        pb: 8,
                        px: { xs: 2, sm: 2, md: 2 },
                    }}
                >
                    <Stack
                        direction={'column'}
                        spacing={3}
                        sx={{
                            maxWidth: 'lg',
                            mx: 'auto',
                            textAlign: 'left',
                        }}
                    >

                        <Typography ref={elementRef} variant='h2' sx={{ textAlign: 'left', fontWeight: 600, color: '#fff', lineHeight: 1 }}>
                            Ernestas Noreikis
                        </Typography>
                        <Typography variant='h6' sx={{ color: '#fff', fontWeight: 600, lineHeight: 1 }}>
                            Jūsų atstovas visais nekilnojamojo turto klausimais
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'left', color: '#fff' }}>
                            Jau daugiau nei aštuonerius metus esu įsipareigojęs padėti savo klientams rasti jų svajonių namus ar idealius investicinius objektus nekilnojamojo turto srityje.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'left', color: '#fff' }}>
                            Specializuojuosi komercinės ir gyvenamosios paskirties nekilnojamojo turto pardavime, nuomoje bei žemės sklypų pardavime. Didžiuojuosi savo pasiekimais – 98% mano klientų lieka labai patenkinti suteiktomis paslaugomis, o daugumą objektų parduodu per tris savaites ar dar greičiau.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'left', color: '#fff' }}>
                            Kiekvienas nekilnojamojo turto objektas yra unikalus ir reikalauja specifinių sprendimų. Esu pasiruošęs prisitaikyti prie kiekvieno kliento poreikių ir pasiekti geriausius rezultatus. Galiu padėti jums įsigyti, parduoti ar nuomoti NT objektus, taip pat suteikti vertingų patarimų apie rinkos tendencijas ir investavimo galimybes. Jei siekiate sėkmingai ir efektyviai įgyvendinti savo tikslus nekilnojamojo turto srityje, esu pasiruošęs būti jūsų patikimu partneriu visuose NT susijusiuose procesuose.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>


        </Stack>
    );
};
