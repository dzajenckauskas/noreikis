import { ObjectType } from '@/app/types/ObjectsType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

type Props = {
    object?: ObjectType;
}

const ObjectCard = ({ object }: Props) => {
    console.log(object, "object");

    const image = object?.attributes?.images?.data?.[0]?.attributes?.formats
    const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.thumbnail.url}`
    return (
        <Stack key={object?.id}>
            <Link href={'/parduodami/' + object?.attributes?.slug} passHref>
                <Stack sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image priority alt={object?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
                        layout='fill' src={imageSrc} />
                </Stack>
                <Stack direction={'row'} spacing={1} pt={1}>
                    <Typography variant='h6'>
                        {object?.attributes?.region},&nbsp;
                        {/* {object?.attributes?.district}&nbsp; */}
                        {object?.attributes?.quartal},&nbsp;
                        {object?.attributes?.street}
                    </Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant='caption'>
                        {object?.attributes?.roomsNumber} k. | {object?.attributes?.areaSqM} m²
                    </Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant='body1' fontWeight={600}>
                        {object?.attributes?.discountPrice ? object?.attributes?.discountPrice : object?.attributes?.price} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                    </Typography>
                </Stack>
            </Link>
        </Stack>
    )
}

export default ObjectCard