import useIntersectionObserver from '@/app/useIntersectionObserver';
import { SectionTitle } from '@/components/layout/SectionTitle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Stack from "@mui/material/Stack";
import { useRef } from 'react';
import { getTheme } from "../../../layout/Theme";
import { Counter } from './Counter';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
    const theme = getTheme()
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeInUp');

    const url = '/assets/images/photo-016.jpg'

    const ref = useRef<HTMLDivElement>(null);
    useIntersectionObserver(ref, 'animate__animated animate__fadeIn');

    return (
        <Stack sx={{
            // backgroundColor: '#000',
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
                    backgroundColor: '#ffffffB3'
                    // backgroundColor: 'rgba(0, 0, 0, 0.99)'
                }
            }}>
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
                        position: 'relative', zIndex: 0,
                        top: '-1px', alignContent: 'center',
                        px: { xl: 2, md: 2, xs: 0 }
                    }}>
                        <Stack direction={'row'} justifyContent={"space-between"}
                            pb={6} id={'paslaugos'}
                            sx={{
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

                        <Stack spacing={10} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                            <Counter />

                            <Stack px={{ md: 0, xs: 0 }} width={{ xs: '100%', md: '100%' }}
                                direction={{ sm: 'row', xs: 'column' }} sx={{ backgroundColor: '#ffffff93' }}
                                justifyContent={'space-between'} ref={ref}>
                                <Stack width={'100%'}>

                                    <ServiceCard minHeight={460} id={'paslaugos-pardavimas'}
                                        title={<>Atstovavimas <span style={{ color: theme.palette.secondary.main }}>parduodant</span> nekilnojamąjį turtą</>}
                                        icon={<HomeWorkIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                        text={"Procesas apima rinkos analizę, turto vertinimą, potencialių klientų paiešką bei intensyvias derybas dėl kainos ir sąlygų. Mano vaidmuo yra užtikrinti sėkmingą sandorio sudarymą, pasitelkiant gerus tarpininkavimo, pardavimų ir derybų įgūdžius. Esminis aspektas - suprasti klientų poreikius ir tinkamai juos atitikti, siekiant užtikrinti patenkinamą rezultatą visoms šalims."} />

                                    <ServiceCard minHeight={400} id={'paslaugos-dokumentacija'}
                                        title={<>Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>dokumentacija</span></>}
                                        icon={<FeedIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                        text={"Suteiksiu greitą ir kokybišką nekilnojamojo turto dokumentacijos paruošimą, apimančią pardavimo, pirkimo bei nuomos procesus. Be to, teiksiu nemokamą konsultaciją dėl visų susijusių klausimų, siekiant Jums suteikti visapusišką pagalbą."} />

                                </Stack>
                                <Stack width={'100%'}>
                                    <ServiceCard minHeight={460} id={'paslaugos-nuoma'}
                                        title={<>Atstovavimas <span style={{ color: theme.palette.secondary.main }}>nuomojant</span> nekilnojamąjį turtą</>}
                                        icon={<ApartmentIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                        text={"Nekilnojamojo turto nuoma prasideda nuodugnia rinkos analize, įvertinant esamų objektų kainodarą. Svarbu nustatyti maksimalią nuomos kainą, atsižvelgiant į rinkos tendencijas. Objekto pristatymui potencialiems nuomininkams reikia skirti ypatingą dėmesį, užtikrinant profesionalumą ir patrauklų pristatymą. Be to, būtina sudaryti aiškią nuomos sutartį ir paruošti visus reikiamus dokumentus, siekiant užtikrinti sklandų ir sėkmingą sandorį."} />

                                    <ServiceCard minHeight={400} id={'paslaugos-pirkimas'}
                                        title={<>Nekilnojamojo turto <span style={{ color: theme.palette.secondary.main }}>paieška</span></>}
                                        icon={<FindInPageIcon sx={{ color: theme.palette.secondary.main, fontSize: 40, position: 'relative' }} />}
                                        text={"Mano vaidmuo - rasti tinkamą nekilnojamąjį turtą pagal kliento poreikius, vykdyti derybas dėl kainos ir sąlygų bei užtikrinti sėkmingą sandorio sudarymą. Procesas apima nuodugnų rinkos tyrimą, turto vertinimą ir aktyvų bendradarbiavimą su klientais, siekiant pasiekti geriausius rezultatus pirkimo metu."} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}