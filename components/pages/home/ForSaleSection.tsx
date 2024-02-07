import { ObjectsType } from '@/app/types/ObjectsType';
import { getTheme } from '@/components/layout/Theme';
import ObjectCard from '@/components/objects/ObjectCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'

type Props = {
    objects?: ObjectsType | null;
}

export const ForSaleSection = ({ objects }: Props) => {
    const theme = getTheme()
    const renderObjects = objects?.data?.map((object) => {
        return (
            <Grid key={object.id} item xs={12} sm={6} lg={3}>
                <ObjectCard object={object} />
            </Grid>
        )
    })
    return (
        <Stack sx={{ width: '100%', maxWidth: 'xl', mx: 'auto', px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }}>

            <Stack pt={4} sx={{ width: { xs: '100%', md: '50%' } }}>
                <Typography variant='h3'
                    sx={{ fontWeight: 600 }}
                >
                    Šiuo metu&nbsp;
                    <span style={{ color: theme.palette.secondary.main }}>
                        parduodama
                    </span>
                </Typography>
                <Typography pt={2} variant='body1' width={'60%'}>
                    Mano klientų parduodami nekilnojamojo turto objektai. Ieškote kažko kito?&nbsp;
                    <Link passHref href={'kontaktai'}>
                        <Typography component={'span'} sx={{ color: theme.palette.secondary.main, ":hover": { textDecoration: 'underline' } }}>
                            Susisiekime!
                        </Typography>
                    </Link>
                </Typography>
            </Stack>
            <Grid container direction={'row'} spacing={4} sx={{ my: 10 }}>
                {renderObjects}
            </Grid>
            <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 6, alignSelf: 'flex-end' }}>
                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                <Link passHref target='_blank' href={`https://m.aruodas.lt/ernestas-noreikis/?obj_type=0#searchFilterBrokerPage`}>
                    <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                        {'Visi objektai'}
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}
