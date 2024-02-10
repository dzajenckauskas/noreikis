import ContactForm from '@/components/forms/ContactForm'
import Layout from '@/components/layout/Layout'
import { theme } from '@/components/layout/Theme'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import PinDropIcon from '@mui/icons-material/PinDrop'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { AruodasIcon } from '../../layout/AruodasIcon'
import { HeadComponent } from '../../layout/HeadComponent'

type Props = {
}
export const ContactsPage = ({ }: Props) => {
    return (
        <>
            <HeadComponent
                title={"Ernestas Noreikis - Jūsų patikimas NT brokeris Vilniuje, Kaune, Palangoje"}
                description={"Nekilnojamojo turto brokeris Ernestas Noreikis. Atstovauju Jūsų NT objektus perkant, parduodant ar nuomojant NT objektus Vilniuje, Kaune ir Palangoje. Dėl nemokamo turto vertinimo ar konsultacijos, susisiekime telefonu +37062429709 arba palikite žinutę info@noreikis.com"} />
            <Layout>
                <Stack sx={{
                    backgroundColor: '#fafafa',
                    position: 'relative', zIndex: 3
                }}>
                    <Stack spacing={1} py={10} sx={{
                        justifyContent: 'space-between', width: '100%',
                        maxWidth: 'xl', mx: 'auto', position: 'relative',
                        px: { xl: 2, md: 4, xs: 2 },
                        backgroundColor: '#fafafa',
                        overflow: 'hidden'
                    }}>
                        <Stack direction={'row'} justifyContent={"space-between"} >
                            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                                <Typography variant='h3'
                                    sx={{ fontWeight: 600 }}
                                >
                                    <span style={{ color: theme.palette.secondary.main }}>
                                        Susisiekite
                                    </span>
                                    &nbsp;su manimi
                                </Typography>
                                <Typography pt={2} variant='body1' width={'60%'}>
                                    Susisiekite nurodytais kontaktais arba palikite žinutę ir as su jumis susisieksiu
                                </Typography>
                            </Stack>

                        </Stack>
                        <Stack py={6} width={'100%'} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, alignSelf: { xs: 'flex-start', md: 'flex-end' } }}>
                                <Stack spacing={2} pt={1} width={'100%'}>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', width: '100%', justifyContent: 'flex-start' }}>
                                        <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                                            <AruodasIcon bgColor={theme.palette.secondary.main} />
                                        </Link>
                                        <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                            <FacebookIcon sx={{ color: theme.palette.secondary.main, fontSize: 22 }} />
                                        </Link>
                                        <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                            <LinkedInIcon sx={{ color: theme.palette.secondary.main, fontSize: 22 }} />
                                        </Link>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                        <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                        <Link passHref href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                                            <Typography variant='body2' color={theme.palette.primary.main}>
                                                {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                            </Typography>
                                        </Link>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                        <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                        <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                            <Typography variant='body2' color={theme.palette.primary.main}>
                                                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                            </Typography>
                                        </Link>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                        <PinDropIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                        <Link passHref target='blank_' href={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}`}>
                                            <Typography variant='body2' color={theme.palette.primary.main}>
                                                {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                                            </Typography>
                                        </Link>
                                    </Stack>

                                </Stack>
                            </Stack>
                            <Stack pt={{ xs: 10 }} width={{ xs: '100%', md: '50%' }}>
                                <ContactForm />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack >
            </Layout>
        </>
    )
}
