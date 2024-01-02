import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";
import { getTheme } from "./layout/Theme";
import { getCompanyAge } from '@/app/getCompanyAge';

export const CounterSection = () => {
    const theme = getTheme()
    const { t } = useTranslation('home')
    return (
        <Stack sx={{
            mt: 10, backgroundColor: theme.palette.info.main, width: '100%', py: 10,
            position: 'relative', zIndex: 10, top: '-1px', alignContent: 'center', px: { sm: 6, xs: 4 }
        }}>
            <Stack direction={{ md: 'row', xs: 'column' }} alignItems={'center'} spacing={{ md: 2, xs: 6 }} sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', justifyContent: 'space-evenly' }}>
                <Stack alignItems={'center'} minWidth={250}>
                    <Stack direction={'row'} alignContent={'center'} spacing={1}>
                        <PeopleIcon sx={{ color: theme.palette.secondary.main, fontSize: 48, position: 'relative', top: 7 }} fontSize="large" />
                        <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
                            <CountUp enableScrollSpy duration={3} end={98} />%
                        </Typography>
                    </Stack>

                    <Typography component={'p'} variant="subtitle2" color={theme.palette.primary.main} fontWeight={400}>
                        {/* {t('counterSection.employees')} */}
                        Klientų rekomenduoja
                    </Typography>
                </Stack>


                <Stack alignItems={'center'} minWidth={250}>
                    <Stack direction={'row'} alignContent={'center'} spacing={1}>
                        <WorkspacePremiumIcon sx={{ color: theme.palette.secondary.main, fontSize: 42, position: 'relative', top: 9 }} />
                        <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
                            <CountUp enableScrollSpy duration={3} end={85} />%
                        </Typography>
                    </Stack>
                    <Typography component={'p'} variant="subtitle2" color={theme.palette.primary.main} fontWeight={400}>
                        {/* {t('counterSection.auditors')} */}
                        NT objektų parduodama per 3 savaites
                    </Typography>
                </Stack>


                <Stack alignItems={'center'} minWidth={250}>
                    <Stack direction={'row'} alignContent={'center'} spacing={1}>
                        <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative', top: 11 }} />
                        <Typography component={'p'} fontSize={60} lineHeight={1} color={theme.palette.primary.main} fontWeight={700}>
                            <CountUp enableScrollSpy duration={3} end={getCompanyAge()} />+
                        </Typography>
                    </Stack>

                    <Typography component={'p'} variant="subtitle2" color={theme.palette.primary.main} fontWeight={400}>
                        {/* {t('counterSection.yearsExperience')} */}
                        Metai patirties
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}