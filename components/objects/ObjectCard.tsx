import { ObjectType } from '@/app/types/ObjectsType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';

type Props = {
    object?: ObjectType;
}

const ObjectCard = ({ object }: Props) => {
    const getActionTypeText = () => {
        if (object?.attributes?.actionType.data.attributes.value == 'sale') return 'Parduodama'
        if (object?.attributes?.actionType.data.attributes.value == 'rent') return 'Nuomojama'
        //  object?.attributes?.actionType.data.attributes.value == 'sold' &&  'Nuomojama'
        else return null
    }
    const action = getActionTypeText()
    const pricePerSqM = ((Number(object?.attributes?.discountPrice) || Number(object?.attributes?.price)) / Number(object?.attributes?.areaSqM))
    const image = object?.attributes?.images?.data?.[0]?.attributes?.formats
    const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.small?.url ?? image?.medium?.url}`
    return (
        <Stack key={object?.id} >
            <Link href={'/parduodami/' + object?.attributes?.slug} passHref style={{ position: 'relative' }}>
                <Stack sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image priority alt={object?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
                        layout='fill' objectFit='cover' src={imageSrc} />
                </Stack>
                <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 4, px: 2, left: -4 }}>
                    <Typography variant='caption' color={'#fff'}>
                        {action}
                    </Typography>
                </Box>
            </Link>
            <Stack direction={'row'} spacing={1} pt={1}>
                <Link href={'/parduodami/' + object?.attributes?.slug} passHref>
                    <Typography variant='h6' fontWeight={500} lineHeight={1.2}>
                        {object?.attributes?.region},&nbsp;
                        {/* {object?.attributes?.district}&nbsp; */}
                        {object?.attributes?.quartal},&nbsp;
                        {object?.attributes?.street}
                    </Typography>
                </Link>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <Typography variant='caption'>
                    {object?.attributes?.category?.data.attributes.singularTitle} | {object?.attributes?.roomsNumber} k. | {object?.attributes?.areaSqM} m²
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