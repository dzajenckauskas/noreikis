import { BlogPostType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import useIntersectionObserver from '@/app/useIntersectionObserver'
import { getItem, getItemBySlug, getItems } from '@/app/utils'
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

  // const image = blogPost?.attributes
  // const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.medium.url}`
  console.log(blogPost, "blogPost");

  return (
    <>
      <HeadComponent slug={`naujienos/${blogPost?.attributes?.slug}`} title={blogPost?.attributes?.seo?.seoTitle ?? blogPost?.attributes?.title}
        description={blogPost?.attributes?.seo?.seoDescription ?? blogPost?.attributes?.shortContent}
        keywords={blogPost?.attributes?.seo?.seoKeywords}
      />
      <Layout startDefault>
        <Stack sx={{ maxWidth: 'xl', mx: 'auto', px: { xl: 2, md: 4, xs: 2 }, pb: 14 }}>
          <Stack ref={imgRef} sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
            {imageSrc && <Image priority alt={blogPost?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc} />}
          </Stack>
          <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, }}>
            <Typography variant='h3' component={'h1'} py={4} fontWeight={600}>
              {blogPost?.attributes?.title}
            </Typography>
            <BlocksRendererComponent content={blogPost?.attributes?.content} />
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

  const blogPost = await getItem('blog-posts', slug, 'populate=deep');
  const objects = (await getItems('objects', 'populate=deep&pagination[limit]=8')) ?? null

  return {
    props: {
      blogPost: blogPost?.data ?? null,
      objects: objects ?? null,
    }
  };
}