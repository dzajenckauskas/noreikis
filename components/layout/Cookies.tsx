import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { theme } from './Theme';

function Cookies() {
    const [cookies, setCookie] = useCookies(['gdpr-google-analytics'])
    const [showBar, setShowBar] = useState(false)
    const [mounted, setMounted] = useState(false)
    const isCookie = (cookies['gdpr-google-analytics'])
    useEffect(() => {
        setMounted(true)
        setTimeout(function () {
            setTimeout(function () {
                if (mounted && !cookies['gdpr-google-analytics'])
                    setShowBar(true);
            }, 500);
        }, 2000);

        return () => setMounted(false);
    }, [cookies, showBar, mounted]);

    if (!mounted) {
        return null
    }
    const acceptPrivacyPolicy = () => {
        setCookie('gdpr-google-analytics', 'true', { path: '/' });
    }
    const rejectPrivacyPolicy = () => {
        setCookie('gdpr-google-analytics', 'false', { path: '/' });
    }
    return (
        <>
            {isCookie && <></>}
            {!isCookie &&
                <Stack direction={'column'} justifyContent={'space-between'}
                    alignItems={{ lg: 'center', md: 'center', sm: 'center', xs: 'flex-start' }} px={{ lg: 6, md: 6, sm: 4, xs: 4 }} py={4}
                    position={'fixed'} bottom={0} left={0} zIndex={999} width={{ sm: '50%', xs: '100%' }}
                    sx={{ backgroundColor: theme.palette.primary.main, opacity: .9 }}>
                    <Stack width={'100%'} mb={4}>
                        <Typography color={'#fff'} fontWeight={600} variant='h6' pb={2} component={'p'}>
                            {"Sutikimas su privatumo politika"}
                        </Typography>
                        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'top'} pr={{ lg: 4, md: 4, sm: 0, xs: 0 }}>
                            <Typography color={'#fff'} variant='body2' fontWeight={400}>
                                {"Šios internetinės svetainės veikimui reikalingi slapukai (angl. cookies). Dėl detalesnės informacijos, kuri saugoma slapukuose, skaitykite mūsų"}&nbsp;
                                <Link href="/privatumo-politika" passHref>
                                    <span style={{ textDecoration: 'underline' }}>{"privatumo politiką."}</span>&nbsp;
                                </Link>{`Slapukų priėmimui, spauskite "Leisti".`}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} width={'100%'} spacing={2} pt={1} alignSelf={{ md: 'flex-start', sm: 'flex-start', xs: 'space-between' }}>
                        <Button fullWidth onClick={acceptPrivacyPolicy} variant={'contained'} color={'info'} >
                            <Typography color={theme.palette.primary.main} fontSize={'14px'} fontWeight={400} px={3} py={1}>{"Leisti"}</Typography>
                        </Button>
                        <Button fullWidth onClick={rejectPrivacyPolicy} variant={'outlined'} color={'info'} >
                            <Typography color={'#fff'} fontSize={'14px'} fontWeight={400} px={3} py={1}>{"Neleisti"}</Typography>
                        </Button>
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default Cookies
