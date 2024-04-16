import useIntersectionObserver from '@/app/useIntersectionObserver'
import { AruodasIcon } from '@/components/layout/AruodasIcon'
import { theme } from '@/components/layout/Theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRef } from 'react'

export const HeroSection = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

    const titleRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(titleRef, 'animate__animated animate__fadeIn');
    const url = 'https://aruodas-img.dgn.lt/object_62_116084319/vilniaus-r-sav-antezeriu-k-gaisu-g-3.jpg'
    return (
        <Stack sx={{
            backgroundColor: '#000',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',

        }}>
            <Stack sx={{
                // top: -100,
                position: 'relative',

                // width: '100%', maxWidth: 'xl', mx: 'auto',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.89)'
                }
            }}>
                <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, width: '100%', maxWidth: 'xl', mx: 'auto', position: 'relative', zIndex: 1 }} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}
                    width={'100%'} spacing={4} my={5} >
                    <Stack width={{ xs: '100%', md: '60%' }} pt={{ xs: 15, md: 5 }}>
                        <Stack spacing={4} height={'100%'} alignItems={'flex-start'} position={'relative'}
                            justifyContent={'center'} alignContent={'flex-start'}>
                            <Typography variant='h1' color={theme.palette.info.main} fontWeight={600} ref={titleRef}>
                                <span style={{ color: theme.palette.secondary.main }}>Kiekvienus</span> namus parduodu kaip savus
                            </Typography>
                            <Typography variant='body1' color={theme.palette.info.main}>
                                Jūsų atstovas visais nekilnojamojo turto klausimais. Susisiekime jūsų poreikių ir turto įvertinimui, ir kartu ieškokime geriausios sprendimo dėl jūsų nekilnojamojo turto.
                            </Typography>
                            <Button variant='contained' size='large' color='secondary' href='#priceInquiryForm'>
                                Nemokamas turto vertinimas
                            </Button>
                            <Stack direction={'row'} spacing={2} pt={.3} sx={{ alignItems: 'center' }}>
                                <Link style={{ padding: 0, transform: 'scale(1.42)', marginLeft: '4px', marginRight: '4px' }} passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                    <AruodasIcon bgColor='#fff' />
                                </Link>
                                <Link style={{ padding: 0 }} passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                    <FacebookIcon sx={{ color: theme.palette.info.main, fontSize: 30 }} />
                                </Link>
                                <Link style={{ padding: 0 }} passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                    <LinkedInIcon sx={{ color: theme.palette.info.main, fontSize: 30 }} />
                                </Link>
                            </Stack>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{
                                pb: 5,
                                pt: 4, position: 'absolute',
                                bottom: 0, right: { xs: 0, md: 'auto' }
                            }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.info.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.info.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Parduodami objektai'}
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack width={{ xs: '100%', sm: '60%', md: '55%' }} position={'relative'} zIndex={2}>
                        <Stack ref={imgRef} sx={{
                            mt: 4,
                            position: 'relative', width: '100%', height: { xs: 500, md: 800 }, positon: 'relative',
                            top: { xs: 5, md: 40 }
                        }}>
                            {/* <Image priority alt={"Ernestas Noreikis NT nekilnojamas turtas brokeris"}
                                layout='fill' objectFit='cover' objectPosition='top' src={'/assets/images/ernestas-noreikis-NT-brokeris-no-bg.png'} /> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
