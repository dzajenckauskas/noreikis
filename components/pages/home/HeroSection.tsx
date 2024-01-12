import { AruodasIcon } from '@/components/AruodasIcon'
import { theme } from '@/components/layout/Theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/legacy/image'
import Link from 'next/link'

export const HeroSection = () => {
    return (

        <Stack sx={{
            pt: { xl: 2, md: 4, xs: 2 },
            px: { xl: 2, md: 4, xs: 2 },
            width: '100%', maxWidth: 'xl', mx: 'auto'
        }}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} width={'100%'} spacing={4} >
                <Stack width={{ xs: '100%', md: '50%' }}>
                    <Stack spacing={4} height={'100%'} alignItems={'flex-start'} position={'relative'}
                        justifyContent={'center'} alignContent={'flex-start'}>
                        <Typography variant='h1' fontWeight={800}>
                            <span style={{ color: theme.palette.secondary.main }}>Kiekvienus</span> namus parduodu kaip savus
                        </Typography>
                        <Typography variant='body1'>
                            Jūsų atstovas visais nekilnojamojo turto klausimais. Susisiekime jūsų poreikių ir turto įvertinimui, ir kartu ieškokime geriausios sprendimo dėl jūsų nekilnojamojo turto.
                        </Typography>
                        <Button variant='contained' size='large' color='secondary' href='#priceInquiryForm'>
                            Nemokamas turto vertinimas
                        </Button>
                        <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} pt={.3} sx={{ alignItems: 'center' }}>
                            <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                <AruodasIcon />
                            </Link>
                            <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                <FacebookIcon sx={{ color: theme.palette.primary.dark, fontSize: 22 }} />
                            </Link>
                            <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                <LinkedInIcon sx={{ color: theme.palette.primary.dark, fontSize: 22 }} />
                            </Link>
                        </Stack>
                        <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, position: 'absolute', bottom: 0, right: { xs: 0, md: 'auto' } }}>
                            <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                            <Link passHref href={`/parduodami`}>
                                <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                    {'Parduodami objektai'}
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                    {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ alignItems: 'center' }}>
               <EmailIcon sx={{ color: "#fff", fontSize: 18 }} />
               <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                   <Typography variant='caption' color={'#fff'}>
                       {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                   </Typography>
               </Link>
           </Stack> */}
                </Stack>
                <Stack width={{ xs: '100%', md: '50%' }}>
                    <Stack sx={{ position: 'relative', width: '100%', height: { xs: 500, md: 800 } }}>
                        <Image priority alt={"Ernestas Noreikis NT nekilnojamas turtas brokeris"}
                            layout='fill' objectFit='cover' objectPosition='top' src={'/assets/images/ernestas-noreikis-NT-brokeris.avif'} />
                        {/* <Typography variant='h1' fontWeight={600}>
Kiekvienus namus parduodu kaip savus
</Typography> */}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}