import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Image from 'next/legacy/image';
import { Box, Grid } from '@mui/material';
import { RecommendationsType } from '@/app/types/RecommendationsType';
import { getTheme } from './layout/Theme';

const handleDragStart = (e: any) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1200: { items: 4 },
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
                <Stack onDragStart={handleDragStart} sx={{ width: '100%' }} spacing={1} alignItems={'center'} py={8} px={{ lg: 5, sm: 4, xs: 8 }}>
                    {src ? <Image style={{ borderRadius: '50%' }} priority objectFit='cover' src={src} alt={item.attributes?.text} width={100} height={100} /> : <Box width={100} height={100}></Box>}
                    <Stack spacing={0}>
                        <Stack direction={'row'} alignContent={'center'}>
                            <Typography position={'relative'} variant='body2' fontWeight={300} textAlign={'center'} lineHeight={1.3} color={theme.palette.primary.dark}>
                                <FormatQuoteIcon sx={{ position: 'relative', top: 8, color: theme.palette.secondary.dark, transform: 'scale(-1)' }} />
                                {item.attributes?.text}
                                <FormatQuoteIcon sx={{ position: 'fixed', mt: -.25, color: theme.palette.secondary.dark, alignSelf: 'flex-end' }} />
                            </Typography>
                        </Stack>
                        <Stack pt={3}>
                            <Typography variant='caption' lineHeight={1.2} fontWeight={300}
                                textAlign={'right'} color={theme.palette.primary.dark}>
                                {item.attributes?.customer}
                            </Typography>
                            <Typography variant='caption' lineHeight={1.2} fontWeight={300}
                                textAlign={'right'} color={theme.palette.primary.dark}>
                                {item.attributes?.action.data?.attributes.title}
                            </Typography>
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
                    <Stack spacing={1} sx={{
                        justifyContent: 'space-between', width: '100%',
                        maxWidth: 'xl', mx: 'auto', position: 'relative',
                        px: { sm: 4, xs: 2 }, backgroundColor: '#f5f5f5',
                        overflow: 'hidden'
                    }}>
                        <Stack>
                            <AliceCarousel disableSlideInfo animationType={'fadeout'} autoPlayInterval={4000}
                                mouseTracking keyboardNavigation autoPlay disableDotsControls disableButtonsControls infinite
                                responsive={responsive} items={items} />
                        </Stack>
                        {/* <Grid container direction={'row'} sx={{ display: { lg: 'flex', xs: 'none' } }}>
                            {items}
                        </Grid> */}
                    </Stack>
                </Stack >}
        </>
    )
}
