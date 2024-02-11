import { RecommendationType } from '@/app/types/RecommendationsType';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import { useRef } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { theme } from './Theme';

type Props = {
    item: RecommendationType;
}

export const RecommendationCarouselItem = ({ item }: Props) => {
    const image = item?.attributes?.image?.data?.attributes
    const src = `${process.env.NEXT_PUBLIC_API_URL}${image?.url}`
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn animate__slow');
    return (
        <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack
                className='animate__animated animate__fadeIn animate__slower'
                maxWidth={'sm'}
                mx={'auto'}
                sx={{ width: '100%' }} spacing={1}
                alignItems={'center'} p={4}>
                <Stack alignSelf={'flex-end'} position={'relative'}>
                    <FormatQuoteIcon sx={{
                        position: 'absolute', top: 18, right: -8, zIndex: 2, color: theme.palette.secondary.dark,
                        transform: 'scale(4)'
                    }} />
                    {src && <div ref={elementRef}>
                        <Image style={{ borderRadius: '0%' }} priority objectFit='cover'
                            src={src} alt={item.attributes?.text} width={150} height={150} />
                    </div>}
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
}
