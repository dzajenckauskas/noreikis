import { ObjectType, TopbrokerType } from '@/app/types/ObjectsType'
import useIntersectionObserver from '@/app/useIntersectionObserver'
import { getItem } from '@/app/utils'
import { HeadComponent } from '@/components/layout/HeadComponent'
import { ImageCarousel } from '@/components/layout/ImageGallery'
import Layout from '@/components/layout/Layout'
import { theme } from '@/components/layout/Theme'
import { Box, Stack, Typography } from '@mui/material'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRef } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'

export const getActionTypeText = (topbroker: TopbrokerType | undefined) => {
  if (topbroker?.list?.[0].operation == 'sale') return 'Parduodama'
  if (topbroker?.list?.[0].operation == 'rent') return 'Nuomojama'
  else return null
}

export const getStatusTypeText = (topbroker: TopbrokerType | undefined) => {
  if (topbroker?.list?.[0].operation == 'reserved') return 'Rezervuota'
  else return null
}
export const getEstateTypeText = (topbroker: TopbrokerType | undefined) => {
  if (topbroker?.list?.[0].estate_type == 'house') return 'Namas'
  if (topbroker?.list?.[0].estate_type == 'flat') return 'Butas'
  else return null
}

type Props = {
  object?: ObjectType;
}

export default function Home({ object }: Props) {
  const topbroker = object?.attributes?.topbroker
  console.log(object);

  function replacePlusWithBreak(description: string): string {
    return description.replace(/\+/g, '</br>');
  }
  const renderDescription = (description: string): JSX.Element[] => {
    const sections = description.split('\n\n');
    return sections.map((section, index) => {
      const lines = section.split('\n');
      if (index === 0) {
        return <h3 key={index}>{lines[0]}</h3>;
      } else {
        return (
          <div key={index} style={{ marginTop: 10 }}>
            <h3>{lines[0]}</h3>
            <ul>
              {lines.slice(1).map((line, idx) => (
                <li key={idx} style={{ listStyle: 'none' }}>{line}</li>
              ))}
            </ul>
          </div>
        );
      }
    });
  };
  const photos = topbroker?.list[0]?.photos

  const pricePerSqM = ((Number(object?.attributes?.discountPrice) || Number(object?.attributes?.price)) / Number(object?.attributes?.areaSqM))

  const action = getActionTypeText(topbroker)
  const status = getStatusTypeText(topbroker)

  const title = `${object?.attributes?.category?.data?.attributes.singularTitle ?? ''} ${object?.attributes?.region ?? ''} ${object?.attributes?.district ?? ''} ${object?.attributes?.quartal ?? ''} ${object?.attributes?.street ?? ''} ${object?.attributes?.roomsNumber ? `${object?.attributes.roomsNumber} k.` : ''} `

  const imgRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');
  const images = object?.attributes?.images?.data?.filter((img) => img.attributes?.formats.large)
  return (
    <>
      <HeadComponent title={topbroker?.list[0].title ?? object?.attributes?.seo?.seoTitle ?? title}
        description={topbroker?.list[0].description}
        keywords={object?.attributes?.seo?.seoKeywords}
      />
      <Layout>
        <Stack key={object?.id} sx={{
          px: { xl: 2, md: 4, xs: 2 }, pt: 0,
          width: '100%', maxWidth: 'xl', mx: 'auto'
        }}>
          <Stack ref={imgRef} sx={{
            position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600,
            mb: (images && images?.length > 1) ? '140px' : '20px'
          }}>
            {photos &&
              <ImageCarousel photos={photos} />}

            <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 14, px: 2, left: -4 }}>
              <Typography variant='body1' color={'#fff'}>
                {action}
              </Typography>
            </Box>
            {status &&
              <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 42, px: 2, left: -4 }}>
                <Typography variant='body1' color={'#fff'}>
                  {status}
                </Typography>
              </Box>}
          </Stack>

          <Stack sx={{ pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }} direction={{ md: 'row', xs: 'column' }} spacing={4}>
            <Stack width={{ md: '40%', xs: "100%" }} >
              <Stack direction={'row'} spacing={1} pt={1}>
                <Typography variant='h4' fontWeight={600} component={'h1'}>
                  {/* {object?.attributes?.region},&nbsp;
                  {object?.attributes?.district}&nbsp;
                  {object?.attributes?.quartal},&nbsp;
                  {object?.attributes?.street} */}
                  {topbroker?.list[0]?.location?.formated_address}
                </Typography>
              </Stack>
              <Stack direction={'row'} py={1}>
                <Typography variant='body1'>
                  {object?.attributes?.category?.data?.attributes.singularTitle} |   {object?.attributes?.roomsNumber} k. | {object?.attributes?.areaSqM} m²
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
                    {object?.attributes?.objectState?.data?.attributes.title}
                  </Typography>
                </Stack>
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                  <Typography variant='caption'>
                    {'Šildymas'}:
                  </Typography>
                  <Typography lineHeight={1} variant='body1' fontWeight={600}>
                    {object?.attributes?.heatingType?.data?.attributes.title}
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
            <Stack width={{ md: '60%', xs: "100%" }} >
              {/* <Typography fontWeight={300}
                mt={-1} mb={0} color={'primary.main'} fontSize={'14px'} lineHeight={'18px'} dangerouslySetInnerHTML={{ __html: topbroker.list[0].description ?? "" }}>
              </Typography> */}
              <Typography component={'div'}>
                {topbroker?.list[0]?.description && renderDescription(topbroker?.list[0]?.description)}
                {/* {} */}
              </Typography>
              {/* <BlocksRendererComponent content={object?.attributes?.description} /> */}
            </Stack>
          </Stack>
        </Stack>

      </Layout >
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { slug } = context.params ?? {};

  if (!slug || typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const object = await getItem('objects', slug, 'populate=deep')

  return {
    props: {
      object: object?.data ?? null,
    }
  };
}