import { VehicleType } from '@/app/types/VehiclesType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

type Props = {
    vehicle?: VehicleType;
}

const VehicleCard = ({ vehicle }: Props) => {
    const image = vehicle?.attributes?.images?.data?.[0]?.attributes?.formats
    const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.thumbnail.url}`
    return (
        <Stack key={vehicle?.id}>
            <Image priority alt={vehicle?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
                width={image?.thumbnail.width} height={image?.thumbnail.height} src={imageSrc} />
            <Link href={'/vehicles/' + vehicle?.attributes?.slug} passHref>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant='h6'>
                        {vehicle?.attributes?.make}
                    </Typography>
                    <Typography variant='h6'>
                        {vehicle?.attributes?.model}
                    </Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant='body1'>
                        {vehicle?.attributes?.discountPrice ? vehicle?.attributes?.discountPrice : vehicle?.attributes?.price} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                    </Typography>
                </Stack>
            </Link>
        </Stack>
    )
}

export default VehicleCard