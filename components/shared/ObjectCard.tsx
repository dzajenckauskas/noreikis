import { ObjectType } from '@/app/types/ObjectsType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useRef } from 'react'
import Image from "next/legacy/image";
import Box from '@mui/material/Box';
import { getActionTypeText, getStatusTypeText } from '@/pages/parduodami/[slug]';
import { theme } from '../layout/Theme';
import useIntersectionObserver from '@/app/useIntersectionObserver';

type Props = {
    object?: ObjectType;
}

const ObjectCard = ({ object }: Props) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');
    const action = getActionTypeText(object?.attributes?.topbroker)
    const status = getStatusTypeText(object?.attributes?.topbroker)

    const pricePerSqM = ((Number(object?.attributes?.discountPrice) || Number(object?.attributes?.price)) / Number(object?.attributes?.areaSqM))
    const image = object?.attributes?.images?.data?.[0]?.attributes?.formats
    const imageSrc = image ? `${process.env.NEXT_PUBLIC_API_URL}${image?.small?.url ?? image?.medium?.url}` : undefined
    return (
        <Stack key={object?.id} ref={elementRef}>
            <Link href={'/parduodami/' + object?.attributes?.slug} passHref style={{ position: 'relative' }}>
                <Stack sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image priority alt={object?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
                        layout='fill' objectFit='cover' src={imageSrc ?? '/assets/images/img-placeholder.png'} />
                </Stack>
                <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 4, px: 2, left: -4 }}>
                    <Typography variant='caption' color={'#fff'}>
                        {action}
                    </Typography>
                </Box>
                {status &&
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 28, px: 2, left: -4 }}>
                        <Typography variant='caption' color={'#fff'}>
                            {status}
                        </Typography>
                    </Box>}
            </Link>
            <Stack direction={'row'} spacing={1} pt={1}>
                <Link href={'/parduodami/' + object?.attributes?.slug} passHref>
                    <Typography variant='h6' fontWeight={500} lineHeight={1.2} component={'h2'}>
                        {object?.attributes?.region},&nbsp;
                        {object?.attributes?.quartal},&nbsp;
                        {object?.attributes?.street}
                    </Typography>
                </Link>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <Typography variant='caption'>
                    {object?.attributes?.category?.data?.attributes.singularTitle} | {object?.attributes?.roomsNumber} k. | {object?.attributes?.areaSqM} m²
                </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'baseline'} justifyContent={'space-between'}>
                <Typography variant='body1' fontWeight={600}>
                    {object?.attributes?.discountPrice ? object?.attributes?.discountPrice : object?.attributes?.price} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                </Typography>
                <Typography variant='caption' textTransform={'uppercase'}>
                    {pricePerSqM?.toFixed(2)} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}/m²
                </Typography>
            </Stack>
        </Stack>
    )
}

export default ObjectCard