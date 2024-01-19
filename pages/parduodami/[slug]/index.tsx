import { ObjectType } from '@/app/types/ObjectsType'
import { getItemBySlug } from '@/app/utils'
import { BlocksRendererComponent } from '@/components/BlocksRendererComponent'
import Layout from '@/components/layout/Layout'
import { theme } from '@/components/layout/Theme'
import { Box, Stack, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  object?: ObjectType;
}

export const getActionTypeText = (object?: ObjectType) => {
  if (object?.attributes?.actionType.data.attributes.value == 'sale') return 'Parduodama'
  if (object?.attributes?.actionType.data.attributes.value == 'rent') return 'Nuomojama'
  else return null
}

export const getStatusTypeText = (object?: ObjectType) => {
  if (object?.attributes?.statusType.data.attributes.value == 'reserved') return 'Rezervuota'
  else return null
}

export default function Home({ object }: Props) {
  const image = object?.attributes?.images?.data?.[0]?.attributes?.formats
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.large?.url ?? image?.medium?.url}`



  const pricePerSqM = ((Number(object?.attributes?.discountPrice) || Number(object?.attributes?.price)) / Number(object?.attributes?.areaSqM))

  const action = getActionTypeText(object)
  const status = getStatusTypeText(object)

  const title = `${object?.attributes?.category?.data.attributes.singularTitle ?? ''} ${object?.attributes?.region ?? ''} ${object?.attributes?.district ?? ''} ${object?.attributes?.quartal ?? ''} ${object?.attributes?.street ?? ''} ${object?.attributes?.roomsNumber ? `${object?.attributes.roomsNumber} k.` : ''} `
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Stack key={object?.id} sx={{
          px: { xl: 2, md: 4, xs: 2 }, pt: 4,
          width: '100%', maxWidth: 'xl', mx: 'auto'
        }}>
          {/* <Link href={'/parduodami/' + object?.attributes?.slug} passHref> */}
          <Stack sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
            <Image priority alt={object?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc ?? '/'} />
            <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', bottom: 4, px: 2, left: -4 }}>
              <Typography variant='caption' color={'#fff'}>
                {action}
              </Typography>
            </Box>
            {status &&
              <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', bottom: 28, px: 2, left: -4 }}>
                <Typography variant='caption' color={'#fff'}>
                  {status}
                </Typography>
              </Box>}
          </Stack>

          <Stack sx={{ pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }} direction={{ md: 'row', xs: 'column' }} spacing={4}>
            <Stack width={{ md: '40%', xs: "100%" }} >
              <Stack direction={'row'} spacing={1} pt={1}>
                <Typography variant='h6'>
                  {object?.attributes?.region},&nbsp;
                  {object?.attributes?.district}&nbsp;
                  {object?.attributes?.quartal},&nbsp;
                  {object?.attributes?.street}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <Typography variant='caption'>
                  {object?.attributes?.category?.data.attributes.singularTitle} |   {object?.attributes?.roomsNumber} k. | {object?.attributes?.areaSqM} m²
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <Typography variant='body1' fontWeight={600}>
                  {object?.attributes?.discountPrice ? object?.attributes?.discountPrice : object?.attributes?.price} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                </Typography>
              </Stack>
              <Stack pt={4} spacing={2}>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Kvadrato kaina'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {pricePerSqM?.toFixed(2)} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}/m²
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Plotas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.areaSqM} m²
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Kambarių skaičius'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.roomsNumber}
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Aukštas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.floorNumber} iš {object?.attributes?.totalFloors}
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Statybos metai'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.buildYear}
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Įrengimas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.objectState.data.attributes.title}
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Šildymas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.heatingType.data.attributes.title}
                  </Typography>
                </Stack>



                {object?.attributes?.landArea && <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Sklypo polotas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.landArea} a.
                  </Typography>
                </Stack>}

              </Stack>
            </Stack>
            {/* </Link> */}
            <Stack width={{ md: '60%', xs: "100%" }} >
              <BlocksRendererComponent content={object?.attributes?.description} />
            </Stack>
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
