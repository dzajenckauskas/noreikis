import { ObjectType, TopbrokerType } from '@/app/types/ObjectsType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Image from "next/legacy/image";
import Box from '@mui/material/Box';
import { getActionTypeText, getEstateTypeText, getStatusTypeText } from '@/pages/parduodami/[slug]';
import { theme } from '../layout/Theme';
import useIntersectionObserver from '@/app/useIntersectionObserver';

type Props = {
    object?: ObjectType;
}

export const transformTopbrokerData = (topbroker: TopbrokerType) => {
    const action = getActionTypeText(topbroker)
    const status = getStatusTypeText(topbroker)
    const estateType = getEstateTypeText(topbroker)
    let data = {
        images: topbroker.list?.[0].photos,
        action: action,
        status: status,
        estateType: estateType,
        formattedLocation: topbroker.list?.[0].location.formated_address,
        price: topbroker.list?.[0].main_parameters?.find((mp) => mp.title === 'estate.sale_price'),
        area: topbroker.list?.[0].main_parameters.find((p) => p.title === 'estate.area'),
        roomCount: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.room_count')?.value,

    }
    return data
}

const ObjectCard = ({ object }: Props) => {
    const estate = object?.attributes?.topbroker && transformTopbrokerData(object?.attributes?.topbroker)
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');

    const [hovered, setHovered] = useState(false)

    return (
        <Stack key={object?.id} >
            <Link href={'/parduodami/' + object?.attributes?.slug} passHref style={{ position: 'relative' }}>
                <Stack ref={elementRef} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image priority alt={object?.attributes?.topbroker.list?.[0].title ?? ''}
                        layout='fill' objectFit='cover' objectPosition={'left'} src={estate?.images[hovered ? 1 : 0] ?? '/assets/images/img-placeholder.png'} />
                </Stack>
                {/* <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 4, px: 2, left: -4 }}>
                    <Typography variant='caption' color={'#fff'}>
                        {estate?.action}
                    </Typography>
                </Box> */}
                {/* {estate?.estateType &&
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 28, px: 2, left: -4 }}>
                        <Typography variant='caption' color={'#fff'}>
                            {estate?.estateType}
                        </Typography>
                    </Box>} */}
                {estate?.status &&
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 28, px: 2, left: -4 }}>
                        <Typography variant='caption' color={'#fff'}>
                            {estate?.status}
                        </Typography>
                    </Box>}
            </Link>
            <Stack direction={'row'} spacing={1} pt={1}>
                <Link href={'/parduodami/' + object?.attributes?.slug} passHref>
                    <Typography variant='h6' fontWeight={500} lineHeight={1.2} component={'h2'}>
                        {estate?.formattedLocation}
                    </Typography>
                </Link>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <Typography variant='caption'>
                    {estate?.estateType} | {estate?.roomCount} k. | {estate?.area?.value} m²
                </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'baseline'} justifyContent={'space-between'}>
                <Typography variant='body1' fontWeight={600}>
                    {estate?.price?.value} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                </Typography>
                <Typography variant='caption' textTransform={'uppercase'}>
                    {estate?.price?.secondary} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}/m²
                </Typography>
            </Stack>
        </Stack>
    )
}

export default ObjectCard