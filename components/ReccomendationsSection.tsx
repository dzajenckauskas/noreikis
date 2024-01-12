import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Image from 'next/legacy/image';
import { Box, Grid } from '@mui/material';
import { RecommendationsType } from '@/app/types/RecommendationsType';
import { getTheme } from './layout/Theme';
import Link from 'next/link';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import StarIcon from '@mui/icons-material/Star';

const handleDragStart = (e: any) => e.preventDefault();
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
                //  px={{ lg: 5, sm: 4, xs: 8 }}
                >
                    <Stack alignSelf={'flex-end'} position={'relative'}>
                        <FormatQuoteIcon sx={{
                            // width: 200,
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
                                {/* <FormatQuoteIcon sx={{ position: 'relative', top: -8, color: theme.palette.secondary.dark, transform: 'scale(2)' }} /> */}
                                {item.attributes?.text}
                                {/* <FormatQuoteIcon sx={{ position: 'absolute', right: 0, mt: -.25, color: theme.palette.secondary.dark, transform: 'scale(2)', alignSelf: 'flex-end' }} /> */}
                            </Typography>
                        </Stack>
                        <Stack pt={6}>
                            {/* <FormatQuoteIcon sx={{ position: 'relative', mb: 2, color: theme.palette.secondary.dark, transform: 'scale(2)', alignSelf: 'flex-end' }} /> */}
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
                <Stack sx={{
                    backgroundColor: '#f5f5f5',
                    // boxShadow: '0px 0px 20px #1E2F9729',
                    position: 'relative', mt: '-1px', zIndex: 3
                }}>
                    <Stack spacing={1} py={10} sx={{
                        justifyContent: 'space-between', width: '100%',
                        maxWidth: 'xl', mx: 'auto', position: 'relative',
                        px: { xl: 2, md: 4, xs: 2 },
                        backgroundColor: '#f5f5f5',
                        overflow: 'hidden'
                    }}>
                        <Stack direction={'row'} justifyContent={"space-between"} >
                            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
                                <Typography variant='h3'
                                    sx={{ fontWeight: 600 }}
                                >
                                    Mano   klientai yra mano<br />
                                    {/* &nbsp; */}
                                    <span style={{ color: theme.palette.secondary.main }}>
                                        partneriai.
                                    </span>
                                </Typography>

                                <Typography pt={2} variant='body1' width={'60%'}>
                                    Klientų mintys ir atsiliepimai apie kartu nuveiktus darbus ir pasiekimus:
                                </Typography>

                            </Stack>
                        </Stack>
                        <Stack py={4}>
                            <AliceCarousel disableSlideInfo animationType={'fadeout'} autoPlayInterval={4000}
                                mouseTracking keyboardNavigation autoPlay disableButtonsControls infinite
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

                        {/* <Grid container direction={'row'} sx={{ display: { lg: 'flex', xs: 'none' } }}>
                            {items}
                        </Grid> */}
                    </Stack>
                </Stack >}
        </>
    )
}
