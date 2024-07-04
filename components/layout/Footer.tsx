import { getFooterMenuItems, getServicesMenuItems } from '@/app/getFooterMenuItems'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import PinDropIcon from '@mui/icons-material/PinDrop'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { AruodasIcon } from './AruodasIcon'
import { theme } from './Theme'
import Image from 'next/image'
const Footer = () => {
    const dateNow = new Date()

    const footerMenuItems = getFooterMenuItems()
    const servicesMenuItems = getServicesMenuItems()

    const renderFooterLinks = footerMenuItems?.map(link =>
        <Link href={`/${link.slug}`} key={link.name}>
            <Typography variant='body2' color={theme.palette.info.main}>
                {link.name}
            </Typography>
        </Link>
    )
    const renderServicesLinks = servicesMenuItems?.map(link =>
        <Link href={`/${link.slug}`} key={link.name}>
            <Typography variant='body2' color={theme.palette.info.main}>
                {link.name}
            </Typography>
        </Link>
    )
    return (
        <>
            <Stack sx={{
                backgroundColor: theme.palette.primary.main,
                minHeight: 28, justifyContent: 'center',
            }}>
                <Stack sx={{
                    position: 'relative', zIndex: 0,
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px -2px 12px;',
                    // backgroundColor: theme.palette.primary.main,

                }}>
                    <Stack direction={'row'}
                        sx={{
                            px: { xl: 2, md: 4, xs: 2 },
                            width: '100%', maxWidth: 'xl', mx: 'auto', py: 5, pb: 15, pt: 10
                        }}>
                        <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 2, xs: 8 }}
                            justifyContent={'space-between'} width={'100%'} alignItems={'self-start'} pb={1}>

                            <Stack direction={{ md: 'row', xs: 'column' }}
                                spacing={{ md: 6, xs: 8 }} justifyContent={'space-evenly'} width={'100%'}>
                                <Stack width={'100%'}>
                                    <Stack spacing={3} height={'100%'}>
                                        <Stack direction={{ md: 'column', xs: 'column' }} alignItems={"flex-start"} spacing={3}>
                                            <Link href={'/'} >
                                                <Stack direction={'row'} spacing={1.5} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
                                                    <Image src={'/assets/images/logo-white.svg'} width={80} height={80} alt='noreikis logo' />
                                                </Stack>
                                            </Link>
                                            <Stack>
                                                <Typography variant='h4' sx={{ fontWeight: 500, color: theme.palette.info.main }}>
                                                    Ernestas Noreikis
                                                </Typography>
                                                <Typography variant='body2' sx={{ color: theme.palette.info.main }}>
                                                    Jūsų atstovas visais nekilnojamojo turto klausimais
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack spacing={2} pt={1} width={'100%'}>
                                            <Stack direction={'row'} spacing={1}
                                                sx={{ pl: .65, alignItems: 'center', width: '100%', justifyContent: 'flex-start' }}>
                                                <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                                    <AruodasIcon scale='1.48' mr={.2} bgColor='#fff' />
                                                </Link>
                                                <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                                    <FacebookIcon sx={{ color: theme.palette.info.main, fontSize: 30 }} />
                                                </Link>
                                                <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                                    <LinkedInIcon sx={{ color: theme.palette.info.main, fontSize: 30 }} />
                                                </Link>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </Stack>


                                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ md: 4, xs: 8 }}
                                    justifyContent={'space-evenly'} width={'100%'}>
                                    <Stack spacing={2} pt={1} width={'100%'} >
                                        <Typography variant='subtitle1' letterSpacing={4} fontWeight={700} component={'p'}
                                            color={theme.palette.secondary.main}>
                                            {'Susisiekime'.toUpperCase()}
                                        </Typography>
                                        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                            <PhoneIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                                            <Link passHref href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                                                <Typography variant='body2' color={theme.palette.info.main}>
                                                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                            <EmailIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                                            <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                                <Typography variant='body2' color={theme.palette.info.main}>
                                                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                            <PinDropIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                                            <Link passHref target='blank_' href={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}`}>
                                                <Typography variant='body2' color={theme.palette.info.main}>
                                                    {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                                                </Typography>
                                            </Link>
                                        </Stack>

                                    </Stack>
                                    <Stack spacing={2} pt={1} width={'100%'}>
                                        <Typography variant='subtitle1' letterSpacing={4} fontWeight={700}
                                            component={'p'} color={theme.palette.secondary.main}>
                                            {'Paslaugos'.toUpperCase()}
                                        </Typography>
                                        {renderServicesLinks}
                                    </Stack>
                                    <Stack spacing={2} pt={1} width={'100%'}>
                                        <Typography variant='subtitle1' letterSpacing={4} fontWeight={700}
                                            component={'p'} color={theme.palette.secondary.main}>
                                            {'Nuorodos'.toUpperCase()}
                                        </Typography>
                                        {renderFooterLinks}
                                    </Stack>

                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ position: 'relative', zIndex: 10, }}>
                    <Stack sx={{
                        // backgroundColor: theme.palette.primary.main,
                        minHeight: 28, justifyContent: 'center',
                    }}>
                        <Stack direction={{ md: 'row', xs: 'column-reverse' }}
                            spacing={{ md: 0, xs: 2 }}
                            sx={{
                                py: 2,
                                borderTop: '1px solid #fff',
                                px: { xl: 2, md: 4, xs: 2 }, alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                maxWidth: 'xl', mx: 'auto',
                            }}>
                            <Stack width={140}>
                                <Typography variant='body2' color={'#fff'}>
                                    {process.env.NEXT_PUBLIC_COMPANY_NAME?.toUpperCase()} © {dateNow.getFullYear()}
                                </Typography>
                            </Stack>



                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Footer
