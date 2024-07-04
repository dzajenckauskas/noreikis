import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PhoneIcon from '@mui/icons-material/Phone'
import { ClickAwayListener } from '@mui/material'
import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from 'react'
import { theme } from './Theme'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { getHeaderMenuItems } from '@/app/getHeaderMenuItems'
import { useRouter } from 'next/router'
import { getFooterMenuItems } from '@/app/getFooterMenuItems'
import { AruodasIcon } from './AruodasIcon'
import Image from 'next/image'
type Props = {
    startDefault?: boolean;
}

const Header = ({ startDefault }: Props) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            // console.log(currentScrollPos);

            setVisible(80 > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible]);


    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu)
    }
    const headerMenuItems = getHeaderMenuItems()
    const footerMenuItems = getFooterMenuItems()
    const renderNavLinks = headerMenuItems?.map(link => {
        return (
            <Link href={`/${link.slug}`} key={link.name} onClick={toggleMobileMenu}>
                <Typography variant='body1'
                    sx={{
                        color: (router.pathname === link.slug) ? (theme.palette.secondary.main) : ((!startDefault && visible && !openMobileMenu) ? '#fff' : '#000'),
                        fontWeight: (router.pathname === link.slug) ? 600 : 'inherit',
                        textTransform: 'none',
                        ":hover": {
                            color: (((!startDefault && visible && !openMobileMenu) ? '#fff99' : theme.palette.secondary.main)),
                        }
                    }}>
                    {link.name}
                </Typography>
            </Link>
        )
    }
    )

    const renderFooterLinks = footerMenuItems?.map(link =>
        <Link href={`/${link.slug}`} key={link.name}>
            <Typography variant='caption' color={theme.palette.text.secondary}>
                {link.name}
            </Typography>
        </Link>
    )

    return (
        <>
            <Stack sx={{
                position: 'sticky', top: -32, width: '100%', zIndex: 20,
                mb: startDefault ? 0 : '-100px',
                // backgroundColor: '#fff',
                backgroundColor: (!startDefault && visible && !openMobileMenu) ? 'transparent' : '#ffffff',
                // backgroundColor: (!startDefault && visible&& !openMobileMenu) ? '#fff' : 'transparent',
                transition: !openMobileMenu ? 'background-color .4s ease-in-out' : '',
                // animation: (!startDefault && visible&& !openMobileMenu) ? 'fadeIn .6s ease-in-out' : 'none',
                boxShadow: (!startDefault && visible && !openMobileMenu) ? '' : 'rgba(0, 0, 0, 0.08) 0px 4px 12px;'
            }}>
                <Stack sx={{ position: 'relative' }}>
                    <Stack sx={{
                        backgroundColor: theme.palette.secondary.main,
                        height: 28, justifyContent: 'center',
                    }}>
                        <Stack direction={'row'}
                            sx={{
                                px: { xl: 2, md: 4, xs: 2 }, alignItems: 'center', justifyContent: 'space-between',
                                width: '100%', maxWidth: 'xl', mx: 'auto'
                            }}>
                            <Stack direction={'row'} spacing={{ md: 4, xs: 2 }}>
                                <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: "#fff", fontSize: 18 }} />
                                    <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                        <Typography variant='body2' color={'#fff'}>
                                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                        </Typography>
                                    </Link>
                                </Stack>
                                <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ alignItems: 'center' }}>
                                    <PhoneIcon sx={{ color: "#fff", fontSize: 18 }} />
                                    <Link passHref href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                                        <Typography variant='body2' color={'#fff'}>
                                            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                        </Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} pt={.3} sx={{ alignItems: 'center' }}>
                                <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                    <AruodasIcon bgColor='#fff' />
                                </Link>
                                <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                    <FacebookIcon sx={{ color: "#fff", fontSize: 22 }} />
                                </Link>
                                <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                    <LinkedInIcon sx={{ color: "#fff", fontSize: 22 }} />
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack sx={{ position: 'sticky', top: 0 }}>
                    <Stack direction={'row'}
                        sx={{
                            minHeight: 74,
                            backgroundColor: 'transparent',
                            //  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                            zIndex: 20,
                            px: { xl: 2, md: 4, xs: 2 }, alignItems: 'center', justifyContent: 'space-between',
                            width: '100%', maxWidth: 'xl', mx: 'auto', py: 2
                        }}>
                        <Link href={'/'} style={{ position: 'relative', zIndex: 20, cursor: 'pointer' }}>
                            <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                {/* <Typography variant='h5' component={'p'} color={(!startDefault && visible && !openMobileMenu) ? '#fff' : theme.palette.secondary.main} sx={{ letterSpacing: 2, fontSize: 22, fontWeight: 600, }}>
                                    {"E."}
                                </Typography> */}
                                {(!startDefault && visible && !openMobileMenu) && <Image src={'/assets/images/logo-white.svg'} width={40} height={40} alt='noreikis logo' />}
                                {!(!startDefault && visible && !openMobileMenu) && <Image src={'/assets/images/logo-black.svg'} width={40} height={40} alt='noreikis logo' />}
                                {/* <Typography variant='h5' component={'p'} color={(!startDefault && visible && !openMobileMenu) ? '#fff' : '#000'} sx={{ letterSpacing: 2, fontSize: 22, fontWeight: 600, }}>
                                    {process.env.NEXT_PUBLIC_COMPANY_NAME?.toUpperCase()}
                                </Typography> */}
                            </Stack>
                        </Link>
                        <Stack direction={'row'} spacing={6} sx={{ textTransform: 'uppercase', alignItems: 'center', display: { md: 'flex', xs: 'none' } }}>
                            {renderNavLinks}
                            <Link href={`/${'kontaktai'}`}>
                                <Button variant='contained' color={(!startDefault && visible && !openMobileMenu) ? 'info' : 'secondary'} size="large">
                                    <Typography variant='body2' fontWeight={500}>
                                        {'Kontaktai'}
                                    </Typography>
                                </Button>
                            </Link>
                        </Stack>
                        {!openMobileMenu && <Stack direction={'row'} spacing={3} sx={{ textTransform: 'uppercase', alignItems: 'center', display: { md: 'none', xs: 'flex' } }}>
                            <Button aria-label="open mobile menu" size='small' variant={'outlined'} color={(!startDefault && visible && !openMobileMenu) ? 'info' : 'secondary'} sx={{ p: .5, minWidth: 0 }} onClick={toggleMobileMenu}>
                                <MenuRoundedIcon sx={{ color: (!startDefault && visible && !openMobileMenu) ? '#fff' : theme.palette.secondary.main }} />
                            </Button>
                        </Stack>}
                        {openMobileMenu && <Stack direction={'row'} spacing={3} sx={{ textTransform: 'uppercase', alignItems: 'center', display: { md: 'none', xs: 'flex' } }}>
                            <Button aria-label="close mobile menu" size='small' variant='outlined' color='secondary' sx={{ p: .5, minWidth: 0 }} onClick={toggleMobileMenu}>
                                <CloseRoundedIcon sx={{ color: (!startDefault && visible && !openMobileMenu) ? '#fff' : theme.palette.secondary.main }} />
                            </Button>
                        </Stack>}
                    </Stack>

                </Stack>
            </Stack>
            {openMobileMenu &&
                <ClickAwayListener onClickAway={toggleMobileMenu}>
                    <Stack sx={{
                        display: { md: 'none', xs: 'flex' }, position: 'fixed', zIndex: 12,
                        top: 70, width: { md: 500, sm: 400, xs: '100% ' }, right: 0,
                        pt: 4,
                        backgroundColor: '#fff',
                        height: 'calc(100vh - 28px)',
                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;'
                    }}>
                        <Stack spacing={3} sx={{ position: 'fixed', textTransform: 'uppercase', pl: { sm: 4, xs: 2 }, pr: { md: 4, xs: 2 }, py: 4 }}>
                            {renderNavLinks}
                            <Stack spacing={2} pt={2}>
                                {renderFooterLinks}
                            </Stack>
                            <Stack direction={'row'} spacing={4}>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />
                                    <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                        <Typography variant='caption' color={theme.palette.primary.main}>
                                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                        </Typography>
                                    </Link>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                    <PhoneIcon sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />
                                    <Link passHref href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                                        <Typography variant='caption' color={theme.palette.primary.main}>
                                            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                        </Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} spacing={1} pt={.3} sx={{ alignItems: 'center' }}>
                                <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                    <AruodasIcon bgColor={theme.palette.secondary.main} />
                                </Link>
                                <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                    <FacebookIcon sx={{ color: theme.palette.secondary.main, fontSize: 22 }} />
                                </Link>
                                <Link passHref href={'settings?.company.linkedInUrl'} aria-label="linkedin">
                                    <LinkedInIcon sx={{ color: theme.palette.secondary.main, fontSize: 22 }} />
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </ClickAwayListener>}
        </>
    )
}

export default Header