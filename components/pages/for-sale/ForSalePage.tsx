import { ObjectsType } from '@/app/types/ObjectsType';
import { getTheme } from '@/components/layout/Theme';
import ObjectCard from '@/components/shared/ObjectCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useState } from 'react'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { SectionTitle } from '@/components/layout/SectionTitle';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';
import Button from '@mui/material/Button';

type Props = {
    objects?: ObjectsType | null;
    bgColor?: string;
}

export const ForSalePage = ({ objects, bgColor }: Props) => {
    const theme = getTheme()
    const filteredObjects = objects?.data?.sort((a, b) => {
        const updatedAtA = a.attributes?.updatedAt ? new Date(a.attributes.updatedAt) : new Date(0); // Epoch fallback
        const updatedAtB = b.attributes?.updatedAt ? new Date(b.attributes.updatedAt) : new Date(0);
        return updatedAtB.getTime() - updatedAtA.getTime(); // Ascending order
    });

    const [filter, setFilter] = useState<string>('all')
    const renderObjects = filteredObjects?.filter((o) => filter === 'all' ? o : o.attributes?.topbroker.list?.[0].estate_type === filter)?.map((object) => {
        return (
            <Grid key={object.id} item xs={12} sm={6} lg={3}>
                <ObjectCard object={object} />
            </Grid>
        )
    })
    return (
        <Stack sx={{ backgroundColor: bgColor ?? '#fff', position: 'relative' }} py={4}>
            <Stack sx={{ width: '100%', maxWidth: 'xl', mx: 'auto', px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }}>
                <Stack pt={4} sx={{ width: { xs: '100%', md: '50%' } }}>
                    <SectionTitle title={<>Šiuo metu&nbsp;
                        <span style={{ color: theme.palette.secondary.main }}>
                            parduodama
                        </span></>} />
                    <SectionSubtitle text={<>
                        Mano klientų parduodami nekilnojamojo turto objektai. Ieškote kažko kito?&nbsp;
                        <Link passHref href={'kontaktai'}>
                            <Typography component={'span'} sx={{ color: theme.palette.secondary.main, ":hover": { textDecoration: 'underline' } }}>
                                Susisiekime!
                            </Typography>
                        </Link>
                    </>} />
                </Stack>
                <Stack direction={'row'} mt={6} mb={4} spacing={1} justifyContent={'center'}>
                    <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'contained' : 'outlined'}>
                        Visi
                    </Button>
                    <Button onClick={() => setFilter('flat')} variant={filter === 'flat' ? 'contained' : 'outlined'}>
                        Butai
                    </Button>
                    <Button onClick={() => setFilter('house')} variant={filter === 'house' ? 'contained' : 'outlined'}>
                        Namai
                    </Button>
                </Stack>
                <Grid container direction={'row'} spacing={4} sx={{ mb: 6 }}>
                    {renderObjects}
                </Grid>
                <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 6, alignSelf: 'flex-end' }}>
                    <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                    <Link passHref target='_blank' href={`https://m.aruodas.lt/ernestas-noreikis/?obj_type=0#searchFilterBrokerPage`}>
                        <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                            {'Kiti skelbimai'}
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    )
}
