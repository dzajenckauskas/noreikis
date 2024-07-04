import { getActionTypeText, getStatusTypeText, transformTopbrokerData } from '@/app/estate/getEstate';
import { ObjectType, ObjectsType } from '@/app/types/ObjectsType';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import { HeadComponent } from '@/components/layout/HeadComponent';
import { ImageCarousel } from '@/components/layout/gallery/ImageGallery';
import Layout from '@/components/layout/Layout';
import { theme } from '@/components/layout/Theme';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import MainAnimation from '@/components/layout/MainAnimation';
import { BlogPostsSection } from '../home/BlogPostsSection';
import { BlogPostsType } from '@/app/types/BlogPostsTypes';
import { ForSaleSection } from '../home/ForSaleSection';

type Props = {
    object?: ObjectType;
    objects?: ObjectsType | null;
    blogPosts?: BlogPostsType | null;
}
const EstatePage = ({ object, objects, blogPosts }: Props) => {
    const { t } = useTranslation('common')
    const estate = object?.attributes?.topbroker && transformTopbrokerData(object?.attributes?.topbroker)
    const topbroker = object?.attributes?.topbroker

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
    const photos = estate?.images



    const imgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');
    const images = object?.attributes?.images?.data?.filter((img) => img.attributes?.formats.large)

    return (
        <>
            <HeadComponent title={topbroker?.list[0].title}
                description={topbroker?.list[0].description}
                keywords={object?.attributes?.seo?.seoKeywords}
            />
            <Layout startDefault>
                <Stack key={object?.id} sx={{
                    backgroundColor: '#fff', zIndex: 1,
                    px: { xl: 2, md: 4, xs: 2 }, pt: 0,
                    width: '100%', maxWidth: 'xl', mx: 'auto'
                }}>
                    <Stack ref={imgRef} sx={{
                        position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' },
                        height: 800,
                        mb: (images && images?.length > 1) ? '140px' : '20px'
                    }}>
                        {photos &&
                            <ImageCarousel photos={photos} />}

                        {/* <Box sx={{ backgroundColor: '#000', width: 'max-content', position: 'absolute', top: 14, px: 2, left: -4 }}>
                            <Typography variant='body1' color={'#fff'}>
                                {estate?.action}
                            </Typography>
                        </Box>
                        {estate?.status &&
                            <Box sx={{ backgroundColor: theme.palette.secondary.main, width: 'max-content', position: 'absolute', top: 42, px: 2, left: -4 }}>
                                <Typography variant='body1' color={'#fff'}>
                                    {estate?.status}
                                </Typography>
                            </Box>} */}
                    </Stack>

                    <Stack sx={{ pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }} direction={{ md: 'row', xs: 'column' }} spacing={4}>
                        <Stack width={{ md: '50%', xs: "100%" }} >
                            {/* {photos &&
                                <ImageCarousel photos={photos} />} */}
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
                                    {estate?.estateType} | {estate?.roomCount?.value} k. | {estate?.area?.value} m²                                </Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                <Typography variant='body1' fontWeight={600}>
                                    {estate?.price?.value} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}
                                </Typography>
                            </Stack>
                            <Stack pt={4} spacing={2}>
                                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                    <Typography variant='caption'>
                                        {'Kvadrato kaina'}:
                                    </Typography>
                                    <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                        {estate?.price?.secondary} {process.env.NEXT_PUBLIC_DEFAULT_CURRENCY}/m²
                                    </Typography>
                                </Stack>
                                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                    <Typography variant='caption'>
                                        {'Plotas'}:
                                    </Typography>
                                    <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                        {estate?.area?.value} m²
                                    </Typography>
                                </Stack>
                                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                    <Typography variant='caption'>
                                        {'Kambarių skaičius'}:
                                    </Typography>
                                    <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                        {estate?.roomCount?.value}
                                    </Typography>
                                </Stack>
                                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                    <Typography variant='caption'>
                                        {'Aukštas'}:
                                    </Typography>
                                    <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                        {estate?.floor?.unit} iš {estate?.floorCount?.value}
                                    </Typography>
                                </Stack>
                                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                    <Typography variant='caption'>
                                        {'Statybos metai'}:
                                    </Typography>
                                    <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                        {estate?.year?.value}
                                    </Typography>
                                </Stack>
                                {estate?.equipment &&
                                    <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                        <Typography variant='caption'>
                                            {'Įrengimas'}:
                                        </Typography>
                                        <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                            {t(estate?.equipment?.value)}
                                        </Typography>
                                    </Stack>}
                                {estate?.heating &&
                                    <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                        <Typography variant='caption'>
                                            {'Šildymas'}:
                                        </Typography>
                                        <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                            {t(estate?.heating?.value)}
                                        </Typography>
                                    </Stack>}
                                {estate?.features &&
                                    <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }}>
                                        <Typography variant='caption'>
                                            {t(estate?.features.title)}:
                                        </Typography>
                                        {/* <Typography lineHeight={1} variant='body1' fontWeight={600}>
                                            {estate?.features.value.length > 1 && estate?.features.value?.map((v: string) =>
                                                `${t(v)}, `
                                            )}
                                        </Typography> */}
                                        <Stack spacing={1}>
                                            {estate?.features.value.length > 1 && estate?.features.value?.map((v: string) => <Typography key={v} lineHeight={1} variant='body1' fontWeight={600}>
                                                {t(v)}
                                            </Typography>)}
                                        </Stack>
                                    </Stack>}



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
                        <Stack width={{ md: '50%', xs: "100%" }} >
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
                <MainAnimation />
                {/* <ForSaleSection bgColor={'#fff'} objects={objects} /> */}
                <BlogPostsSection blogPosts={blogPosts} />



            </Layout>
        </>
    )
}

export default EstatePage