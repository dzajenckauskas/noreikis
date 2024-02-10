import { RecommendationsType } from '@/app/types/RecommendationsType';
import EastIcon from '@mui/icons-material/East';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import WestIcon from '@mui/icons-material/West';
import { Box, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getTheme } from '../../layout/Theme';

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
    const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
    };
    const theme = getTheme()

    const items = recommendations?.data?.map((item) => {
        const image = item?.attributes?.image?.data?.attributes
        const src = `${process.env.NEXT_PUBLIC_API_URL}${image?.url}`
        return (
            <Grid item key={item.id} lg={3} md={3} sm={6} xs={12}>
                <Stack
                    maxWidth={'sm'}
                    mx={'auto'}
                    onDragStart={handleDragStart} sx={{ width: '100%' }} spacing={1}
                    alignItems={'center'} p={4}
                >
                    <Stack alignSelf={'flex-end'} position={'relative'}>
                        <FormatQuoteIcon sx={{
                            position: 'absolute', top: 18, right: -8, zIndex: 2, color: theme.palette.secondary.dark,
                            transform: 'scale(4)'
                        }} />

                        {src &&
                            <Image style={{ borderRadius: '0%' }} priority objectFit='cover'
                                src={src} alt={item.attributes?.text} width={150} height={150} />}
                        {!src && <Box width={100} height={100}></Box>}
                    </Stack>
                    <Stack spacing={0} pt={4}>
                        <Stack direction={'row'}>
                            <Typography position={'relative'}
                                variant='body1' fontWeight={300} textAlign={'right'}
                                lineHeight={1.5} color={theme.palette.primary.dark}>
                                {item.attributes?.text}
                            </Typography>
                        </Stack>
                        <Stack pt={6}>
                            <Typography variant='caption' fontWeight={200} letterSpacing={2}
                                textAlign={'right'} color={theme.palette.primary.dark}>
                                {item.attributes?.action.data?.attributes.title.toUpperCase()}
                            </Typography>
                            <Typography variant='body1' fontWeight={400}
                                textAlign={'right'} color={theme.palette.primary.dark}>
                                {item.attributes?.customer}
                            </Typography>
                            <Stack direction={'row'} spacing={1} alignSelf={'flex-end'}>
                                <StarIcon sx={{ width: 16, color: theme.palette.secondary.main }} />
                                <StarIcon sx={{ width: 16, color: theme.palette.secondary.main }} />
                                <StarIcon sx={{ width: 16, color: theme.palette.secondary.main }} />
                                <StarIcon sx={{ width: 16, color: theme.palette.secondary.main }} />
                                <StarIcon sx={{ width: 16, color: theme.palette.secondary.main }} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>

        )
    })
    return (
        <>
            {recommendations && recommendations.data?.length > 0 &&
                <Stack id={'rekomendacijos'} sx={{
                    backgroundColor: '#f5f5f5',
                    scrollMarginTop: 50,
                    position: 'relative', mt: '-1px', zIndex: 3
                }}>
                    <Stack spacing={1} pt={10} pb={6} sx={{
                        justifyContent: 'space-between', width: '100%',
                        maxWidth: 'xl', mx: 'auto', position: 'relative',
                        px: { xl: 2, md: 4, xs: 2 },
                        backgroundColor: '#f5f5f5',
                        overflow: 'hidden'
                    }}>
                        <Stack direction={'row'} justifyContent={"space-between"} >
                            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                                <Typography variant='h3'
                                    sx={{ fontWeight: 600 }} component={'h2'}>
                                    Mano   klientai yra mano<br />
                                    <span style={{ color: theme.palette.secondary.main }}>
                                        partneriai.
                                    </span>
                                </Typography>

                                <Typography pt={2} variant='body1' width={'60%'}>
                                    Klientų mintys ir atsiliepimai apie kartu nuveiktus darbus ir pasiekimus:
                                </Typography>

                            </Stack>
                        </Stack>
                        <Stack pt={0}>
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
