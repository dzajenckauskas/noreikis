import { BlogPostType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import useIntersectionObserver from '@/app/useIntersectionObserver'
import { getItemBySlug, getItems } from '@/app/utils'
import { BlocksRendererComponent } from '@/components/layout/BlocksRendererComponent'
import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import { ForSaleSection } from '@/components/pages/home/ForSaleSection'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Image from "next/legacy/image"
import { useRef } from 'react'

type Props = {
  blogPost: BlogPostType;
  objects?: ObjectsType | null;
}

export default function UsefulInformation({ blogPost, objects }: Props) {
  const image = blogPost?.attributes?.images?.data?.[0]?.attributes?.formats
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.medium?.url}`
  const imgRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

  return (
    <>
      <HeadComponent title={blogPost.attributes?.title} description={blogPost.attributes?.shortContent} />
      <Layout>
        <Stack sx={{ maxWidth: 'xl', mx: 'auto', px: { xl: 2, md: 4, xs: 2 }, pb: 14 }}>
          <Stack ref={imgRef} sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
            <Image priority alt={blogPost?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc} />
          </Stack>
          <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, }}>
            <Typography variant='h3' component={'h1'} py={4} fontWeight={600}>
              {blogPost.attributes?.title}
            </Typography>
            <BlocksRendererComponent content={blogPost.attributes?.content} />
          </Stack>
        </Stack>
        <ForSaleSection objects={objects} bgColor={'#f5f5f5'} />
      </Layout>
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

  const blogPost = await getItemBySlug('blog-posts', slug, undefined, 'populate=deep');
  const objects = (await getItems('objects', 'populate=deep')) ?? null

  return {
    props: {
      blogPost: blogPost?.data?.[0] ?? null,
      objects: objects ?? null,
    }
  };
}