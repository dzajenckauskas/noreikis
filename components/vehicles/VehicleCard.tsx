import { VehicleType } from '@/app/types/VehiclesType'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'

type Props = {
    vehicle?: VehicleType;
}

const VehicleCard = ({ vehicle }: Props) => {
    console.log(vehicle, "vehicle");

    return (
        <Stack key={vehicle?.id}>
            <Typography>
                {vehicle?.attributes?.make}
                {vehicle?.attributes?.model}
            </Typography>
            <Link href={'/vehicles/' + vehicle?.attributes?.slug} passHref>
                {vehicle?.attributes?.firstRegDate},
                {vehicle?.attributes?.engineCapacityCC}
            </Link>
        </Stack>
    )
}

export default VehicleCard