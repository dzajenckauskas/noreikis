import { ObjectType } from '@/app/types/ObjectsType'
import { getItemBySlug } from '@/app/utils'
import { BlocksRendererComponent } from '@/components/BlocksRendererComponent'
import Layout from '@/components/layout/Layout'
import { Stack, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  object?: ObjectType;
}
export default function Home({ object }: Props) {
  const image = object?.attributes?.images?.data?.[0]?.attributes?.formats
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.large?.url ?? image?.medium?.url}`
  console.log(image);

  return (
    <>
      <Head>
        <title>{"Object"}</title>
        <meta name="description" content={"Generated by create next app"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Stack key={object?.id}>
          {/* <Link href={'/parduodami/' + object?.attributes?.slug} passHref> */}
          <Stack sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
            <Image priority alt={object?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc ?? '/'} />
          </Stack>

          <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }}>
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
            {/* </Link> */}
            <BlocksRendererComponent content={object?.attributes?.description} />
          </Stack>
        </Stack>

      </Layout >
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.params

  const object = await getItemBySlug('objects', slug, undefined, 'populate=deep')

  return {
    props: {
      object: object?.data?.[0] ?? null,
    }
  }
}