import { getCompanyAge } from '@/app/getCompanyAge';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { getTheme } from "./layout/Theme";

export const ServicesSection = () => {
    const theme = getTheme()
    return (
        <Stack sx={{
            mt: 6,
            maxWidth: 'xl',
            mx: 'auto',
            backgroundColor: '#fff',
            width: '100%', pt: 8, pb: 12,
            position: 'relative', zIndex: 0, top: '-1px', alignContent: 'center',
            px: { xl: 2, md: 4, xs: 0 }
        }}>
            <Stack direction={'row'} justifyContent={"space-between"} pb={6} id={'paslaugos'} sx={{
                scrollMarginTop: 120,
                px: { xs: 2 }
            }}>
                <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Typography variant='h3' component={'h2'}
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

            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} alignItems={{ xs: 'space-between', sm: 'flex-start' }}
                    spacing={{ md: 8, sm: 8, xs: 4 }} sx={{ width: { xs: '100%', sm: '70%', md: '33%' }, pt: 8, px: { xs: 2 } }}>

                    <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            <Typography component={'p'} fontSize={{ xs: 40, sm: 50 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={98} />%
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            Klientų rekomenduoja
                        </Typography>
                    </Stack>


                    <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            <Typography component={'p'} fontSize={{ xs: 40, sm: 50 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={85} />%
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            NT objektų parduodama per 3 savaites
                        </Typography>
                    </Stack>


                    <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                        <Stack direction={'row'} spacing={1} pb={1}>
                            <Typography component={'p'} fontSize={{ xs: 40, sm: 50 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                                <CountUp enableScrollSpy duration={3} end={getCompanyAge()} />+
                            </Typography>
                        </Stack>
                        <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                            Metai patirties
                        </Typography>
                    </Stack>
                </Stack>

                <Stack pt={{ md: 0, xs: 10 }} width={{ xs: '100%', md: '70%' }} direction={{ sm: 'row', xs: 'column' }}

                    justifyContent={'space-between'} spacing={{ xs: 0, md: 0 }}>
                    <Stack width={'100%'}>
                        <Stack spacing={2} width={'100%'} minHeight={{ xs: 'none', sm: 550 }} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: { xs: 2, sm: 4, lg: 8 }, py: { xs: 4, sm: 4, lg: 8 }, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <HomeWorkIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5' component={'h2'}>
                                Atstovavimas <span style={{ color: theme.palette.secondary.main }}>parduodant</span> nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Procesas apima rinkos analizę, turto vertinimą, potencialių klientų paiešką bei intensyvias derybas dėl kainos ir sąlygų. Mano vaidmuo yra užtikrinti sėkmingą sandorio sudarymą, pasitelkiant gerus tarpininkavimo, pardavimų ir derybų įgūdžius. Esminis aspektas - suprasti klientų poreikius ir tinkamai juos atitikti, siekiant užtikrinti patenkinamą rezultatą visoms šalims.
                            </Typography>
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={{ xs: 'none', sm: 400 }} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: { xs: 2, sm: 4, lg: 8 }, py: { xs: 4, sm: 4, lg: 8 }, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <FeedIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5' component={'h2'}>
                                Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>dokumentacija</span>
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Suteiksiu greitą ir kokybišką nekilnojamojo turto dokumentacijos paruošimą, apimančią pardavimo, pirkimo bei nuomos procesus. Be to, teiksiu nemokamą konsultaciją dėl visų susijusių klausimų, siekiant Jums suteikti visapusišką pagalbą.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'100%'}>
                        <Stack spacing={2} width={'100%'} minHeight={{ xs: 'none', sm: 550 }} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: { xs: 2, sm: 4, lg: 8 }, py: { xs: 4, sm: 4, lg: 8 }, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <ApartmentIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5' component={'h2'}>
                                Pagalba <span style={{ color: theme.palette.secondary.main }}>nuomojant</span> nekilnojamąjį turtą
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Nekilnojamojo turto nuoma prasideda nuodugnia rinkos analize, įvertinant esamų objektų kainodarą. Svarbu nustatyti maksimalią nuomos kainą, atsižvelgiant į rinkos tendencijas. Objekto pristatymui potencialiems nuomininkams reikia skirti ypatingą dėmesį, užtikrinant profesionalumą ir patrauklų pristatymą. Be to, būtina sudaryti aiškią nuomos sutartį ir paruošti visus reikiamus dokumentus, siekiant užtikrinti sklandų ir sėkmingą sandorį.
                            </Typography>
                        </Stack>
                        <Stack spacing={2} width={'100%'} minHeight={{ xs: 'none', sm: 400 }} pb={8}
                            position={'relative'}
                            alignSelf={'flex-start'}
                            sx={{ p: { xs: 2, sm: 4, lg: 8 }, py: { xs: 4, sm: 4, lg: 8 }, ':hover': { boxShadow: 'rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;' } }}>
                            <FindInPageIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />
                            <Typography color={theme.palette.primary.main} fontWeight={600} variant='h5' component={'h2'}>
                                Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>paieška</span>
                            </Typography>
                            <Typography color={theme.palette.primary.main} variant='body1'>
                                Mano vaidmuo - rasti tinkamą nekilnojamąjį turtą pagal kliento poreikius, vykdyti derybas dėl kainos ir sąlygų bei užtikrinti sėkmingą sandorio sudarymą. Procesas apima nuodugnų rinkos tyrimą, turto vertinimą ir aktyvų bendradarbiavimą su klientais, siekiant pasiekti geriausius rezultatus pirkimo metu.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>


        </Stack >
    )
}