import { transformTopbrokerData } from '@/app/estate/getEstate';
import { ObjectType } from '@/app/types/ObjectsType';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useRef, useState } from 'react';
import { theme } from '../layout/Theme';

type Props = {
    object?: ObjectType;
}

const ObjectCard = ({ object }: Props) => {
    const estate = object?.attributes?.topbroker && transformTopbrokerData(object?.attributes?.topbroker)
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');

    const [hovered, setHovered] = useState(false)
    return (
        <Stack key={object?.id} >
            <Link href={'/parduodami/' + object?.attributes?.slug} passHref style={{ position: 'relative' }}>
                <Stack ref={elementRef} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image priority sizes='25vw' alt={object?.attributes?.topbroker.list?.[0].title ?? ''}
                        layout='fill' objectFit='cover' objectPosition={'left'} src={estate?.images[hovered ? 1 : 0] ?? '/assets/images/img-placeholder.png'} />
                </Stack>
                <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 4, px: 2, right: -4 }}>
                    <Typography variant='body1' color={'#fff'}>
                        {estate?.action}
                    </Typography>
                </Box>
                {estate?.estateType &&
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 28, px: 2, right: -4 }}>
                        <Typography variant='body1' color={'#fff'}>
                            {estate?.estateType}
                        </Typography>
                    </Box>}
                {estate?.status &&
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 28, px: 2, right: -4 }}>
                        <Typography variant='body1' color={'#fff'}>
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
                <Typography variant='body2'>
                    {estate?.estateType} | {estate?.roomCount?.value} k. | {estate?.area?.value} m²
                </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'baseline'} justifyContent={'space-between'}>
                <Typography variant='body1' fontWeight={600}>
                    {estate?.price?.value ?? `${estate?.rentPrice?.value}`} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY} {estate?.rentPrice?.value && '/MĖN.'}
                </Typography>
                {estate?.price?.secondary && <Typography variant='body2' textTransform={'uppercase'}>
                    {estate?.price?.secondary} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}/m²
                </Typography>}
            </Stack>
        </Stack>
    )
}

export default ObjectCard