import useIntersectionObserver from '@/app/useIntersectionObserver';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRef } from 'react';
import { getTheme } from "../../../layout/Theme";
import { Counter } from './Counter';
import { ServiceCard } from './ServiceCard';
import { SectionTitle } from '@/components/layout/SectionTitle';

export const ServicesSection = () => {
    const theme = getTheme()
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeInUp');
    return (
        <Stack sx={{
            position: 'relative', zIndex: 0,
            // backgroundColor: '#fff',
            width: '100%'
        }}>
            <Stack sx={{
                mt: 6,
                maxWidth: 'xl',
                mx: 'auto',
                // backgroundColor: '#fff',
                width: '100%', pt: 8, pb: 12,
                position: 'relative', zIndex: 0, top: '-1px', alignContent: 'center',
                px: { xl: 2, md: 2, xs: 0 }
            }}>
                <Stack direction={'row'} justifyContent={"space-between"} pb={6} id={'paslaugos'} sx={{
                    scrollMarginTop: 120,
                    px: { xs: 2 }
                }}>
                    <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                        <SectionTitle title={<>Padėsiu&nbsp;
                            <span style={{ color: theme.palette.secondary.main }}>
                                visais
                            </span>
                            &nbsp;NT
                            <br />
                            klausimais</>} />
                    </Stack>
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                    <Counter />

                    <Stack pt={{ md: 0, xs: 10 }} width={{ xs: '100%', md: '70%' }} direction={{ sm: 'row', xs: 'column' }}
                        justifyContent={'space-between'} spacing={{ xs: 0, md: 0 }}>
                        <Stack width={'100%'}>

                            <ServiceCard minHeight={550}
                                title={<>Atstovavimas <span style={{ color: theme.palette.secondary.main }}>parduodant</span> nekilnojamąjį turtą</>}
                                icon={<HomeWorkIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                text={"Procesas apima rinkos analizę, turto vertinimą, potencialių klientų paiešką bei intensyvias derybas dėl kainos ir sąlygų. Mano vaidmuo yra užtikrinti sėkmingą sandorio sudarymą, pasitelkiant gerus tarpininkavimo, pardavimų ir derybų įgūdžius. Esminis aspektas - suprasti klientų poreikius ir tinkamai juos atitikti, siekiant užtikrinti patenkinamą rezultatą visoms šalims."} />

                            <ServiceCard minHeight={400}
                                title={<>Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>dokumentacija</span></>}
                                icon={<FeedIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                text={"Suteiksiu greitą ir kokybišką nekilnojamojo turto dokumentacijos paruošimą, apimančią pardavimo, pirkimo bei nuomos procesus. Be to, teiksiu nemokamą konsultaciją dėl visų susijusių klausimų, siekiant Jums suteikti visapusišką pagalbą."} />

                        </Stack>
                        <Stack width={'100%'}>
                            <ServiceCard minHeight={550}
                                title={<>Atstovavimas <span style={{ color: theme.palette.secondary.main }}>parduodant</span> nekilnojamąjį turtą</>}
                                icon={<ApartmentIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                text={"Nekilnojamojo turto nuoma prasideda nuodugnia rinkos analize, įvertinant esamų objektų kainodarą. Svarbu nustatyti maksimalią nuomos kainą, atsižvelgiant į rinkos tendencijas. Objekto pristatymui potencialiems nuomininkams reikia skirti ypatingą dėmesį, užtikrinant profesionalumą ir patrauklų pristatymą. Be to, būtina sudaryti aiškią nuomos sutartį ir paruošti visus reikiamus dokumentus, siekiant užtikrinti sklandų ir sėkmingą sandorį."} />

                            <ServiceCard minHeight={400}
                                title={<>Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>paieška</span></>}
                                icon={<FindInPageIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                text={"Mano vaidmuo - rasti tinkamą nekilnojamąjį turtą pagal kliento poreikius, vykdyti derybas dėl kainos ir sąlygų bei užtikrinti sėkmingą sandorio sudarymą. Procesas apima nuodugnų rinkos tyrimą, turto vertinimą ir aktyvų bendradarbiavimą su klientais, siekiant pasiekti geriausius rezultatus pirkimo metu."} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}