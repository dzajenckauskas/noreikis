import { RecommendationsType } from '@/app/types/RecommendationsType';
import { RecommendationCarouselItem } from '@/components/layout/RecommendationCarouselItem';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';
import { SectionTitle } from '@/components/layout/SectionTitle';
import { theme } from '@/components/layout/Theme';
import EastIcon from '@mui/icons-material/East';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import WestIcon from '@mui/icons-material/West';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
    1200: { items: 1 },
};

type Props = {
    recommendations?: RecommendationsType
}

export const ReccomendationsSection = ({ recommendations }: Props) => {

    const items = recommendations?.data?.map((item) =>
        <RecommendationCarouselItem key={item.id} item={item} />
    )
    return (
        <>
            {recommendations && recommendations.data?.length > 0 &&
                <Stack id={'rekomendacijos'} sx={{
                    backgroundColor: '#f5f5f5',
                    scrollMarginTop: 50,
                    position: 'relative', mt: '-1px', zIndex: 3
                }}>
                    <Stack pt={10} pb={6} sx={{
                        justifyContent: 'space-between', width: '100%',
                        maxWidth: 'xl', mx: 'auto', position: 'relative',
                        px: { xl: 2, md: 4, xs: 2 },
                        backgroundColor: '#f5f5f5',
                        overflow: 'hidden'
                    }}>
                        <Stack direction={'row'} justifyContent={"space-between"} >
                            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                                <SectionTitle title={
                                    <>
                                        Mano klientai yra mano<br />
                                        <span style={{ color: theme.palette.secondary.main }}>
                                            partneriai.
                                        </span>
                                    </>
                                } />
                                <SectionSubtitle
                                    text={"Klientų mintys ir atsiliepimai apie kartu nuveiktus darbus ir pasiekimus:"} />
                            </Stack>
                        </Stack>
                        <Stack>
                            <AliceCarousel
                                renderPrevButton={() => { return <WestIcon sx={{ cursor: 'pointer' }} /> }}
                                renderNextButton={() => { return <EastIcon sx={{ cursor: 'pointer' }} /> }}
                                disableSlideInfo animationType={'fadeout'} autoPlayInterval={4000}
                                mouseTracking keyboardNavigation autoPlay infinite disableDotsControls
                                responsive={responsive} items={items} />
                        </Stack>
                        <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, alignSelf: 'flex-end' }}>
                            <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                            <Link passHref target='_blank' href={`https://m.aruodas.lt/read-recommendations/?broker_id=926705&return_url=%2Fernestas-noreikis%2F`}>
                                <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                    {'Kitos rekomendacijos'}
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack >}
        </>
    )
}
