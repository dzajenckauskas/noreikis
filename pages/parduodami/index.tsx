import { ObjectsType } from '@/app/types/ObjectsType'
import { getItems } from '@/app/utils'
import Layout from '@/components/layout/Layout'
import { theme } from '@/components/layout/Theme'
import ObjectCard from '@/components/objects/ObjectCard'
import { Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    objects?: ObjectsType | null;
}
export default function Objects({ objects }: Props) {
    const renderObjects = objects?.data?.map((object) => {
        return (
            <Grid key={object.id} item xs={12} sm={6} lg={3}>
                <ObjectCard object={object} />
            </Grid>
        )
    })
    return (
        <>
            <Head>
                <title>{"Parduodami"}</title>
                <meta name="description" content={"Generated by create next app"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
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
                    <Grid container direction={'row'} spacing={4} sx={{ mt: 0 }}>
                        {renderObjects}
                    </Grid>
                </Stack>
            </Layout >
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const objects = (await getItems('objects', 'populate=deep')) ?? null

    return {
        props: {
            objects: objects ?? null,
        }
    }
}
