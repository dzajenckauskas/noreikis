import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";
import { getTheme } from "./layout/Theme";
import { getCompanyAge } from '@/app/getCompanyAge';
import Link from 'next/link';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'


export const CounterSection = () => {
    const theme = getTheme()
    const { t } = useTranslation('home')
    return (
        <Stack sx={{
            mt: 6, backgroundColor: theme.palette.info.main, width: '100%', pt: 12, pb: 16,
            position: 'relative', zIndex: 10, top: '-1px', alignContent: 'center',
            px: { xl: 2, md: 4, xs: 2 },
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
                            <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
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
                            <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
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
                            <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
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
                        <Stack spacing={2} width={'100%'} minHeight={300} pb={8} sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' } }}>
                            <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Atstovavimas parduodant nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Parduodami objektai'}
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={300} pb={8} sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' } }}>
                            <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Nekilnojamojo turto dokumentacija
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Parduodami objektai'}
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack width={'100%'}>
                        <Stack spacing={2} width={'100%'} minHeight={300} pb={8} sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' } }}>
                            <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Pagalba nuomojant nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Parduodami objektai'}
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={300} pb={8} sx={{ p: 8, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' } }}>
                            <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5'>
                                Nekilnojamojo turto paieška
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai. Jūsų nekilnojamas turtas bus
                                parduodamas bendradarbiaujant
                                profesionalų komandai
                            </Typography>
                            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 2 }}>
                                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                                <Link passHref href={`/parduodami`}>
                                    <Typography variant='body1' fontWeight={300} color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                        {'Parduodami objektai'}
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>


        </Stack >
    )
}