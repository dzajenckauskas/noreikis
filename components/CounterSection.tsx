import { getCompanyAge } from '@/app/getCompanyAge';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";
import { getTheme } from "./layout/Theme";

export const CounterSection = () => {
    const theme = getTheme()
    const { t } = useTranslation('home')
    return (
        <Stack sx={{
            mt: 6,
            maxWidth: 'xl',
            mx: 'auto',
            backgroundColor: '#fff',
            width: '100%', pt: 12, pb: 16,
            position: 'relative', zIndex: 0, top: '-1px', alignContent: 'center',
            px: { xl: 2, md: 4, xs: 2 }
        }}>
            <Stack direction={'row'} justifyContent={"space-between"} pb={6}>
                <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Typography variant='h3'
                        sx={{ fontWeight: 600 }}
                    >
                        Padėsiu&nbsp;
                        <span style={{ color: theme.palette.secondary.main }}>
                            visais
                        </span>
                        &nbsp;NT
                        <br />
                        klausimais
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack alignItems={'flex-start'} spacing={{ md: 8, xs: 6 }} sx={{ width: '30%', pt: 8 }}>

                    <Stack alignItems={'flex-start'} maxWidth={180}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            {/* <PeopleIcon sx={{ color: theme.palette.secondary.main, fontSize: 48, position: 'relative', top: 7 }} fontSize="large" /> */}
                            <Typography component={'p'} fontSize={50} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={98} />%
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            {/* {t('counterSection.employees')} */}
                            Klientų rekomenduoja
                        </Typography>
                    </Stack>


                    <Stack alignItems={'flex-start'} maxWidth={180}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            {/* <WorkspacePremiumIcon sx={{ color: theme.palette.secondary.main, fontSize: 42, position: 'relative', top: 9 }} /> */}
                            <Typography component={'p'} fontSize={50} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={85} />%
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            {/* {t('counterSection.auditors')} */}
                            NT objektų parduodama per 3 savaites
                        </Typography>
                    </Stack>


                    <Stack alignItems={'flex-start'} maxWidth={180}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            {/* <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative', top: 11 }} /> */}
                            <Typography component={'p'} fontSize={50} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={getCompanyAge()} />+
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            {/* {t('counterSection.yearsExperience')} */}
                            Metai patirties
                        </Typography>
                    </Stack>
                </Stack>

                <Stack width={'70%'} direction={'row'} justifyContent={'space-between'} spacing={0}>
                    <Stack width={'100%'}>
                        <Stack spacing={2} width={'100%'} minHeight={350} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <HomeWorkIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Atstovavimas <span style={{ color: theme.palette.secondary.main }}>parduodant</span> nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2, position: 'absolute', bottom: 60 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Daugiau'}
                                    </Typography>
                                </Link>
                            </Stack> */}
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={350} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <FeedIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>dokumentacija</span>
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2, position: 'absolute', bottom: 60 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Daugiau'}
                                    </Typography>
                                </Link>
                            </Stack> */}
                        </Stack>
                    </Stack>
                    <Stack width={'100%'}>
                        <Stack spacing={2} width={'100%'} minHeight={350} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <ApartmentIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Pagalba <span style={{ color: theme.palette.secondary.main }}>nuomojant</span> nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2, position: 'absolute', bottom: 60 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Daugiau'}
                                    </Typography>
                                </Link>
                            </Stack> */}
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={350} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <FindInPageIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>paieška</span>
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2, position: 'absolute', bottom: 60 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' fontWeight={400} color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Daugiau'}
                                    </Typography>
                                </Link>
                            </Stack> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>


        </Stack >
    )
}