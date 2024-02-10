import { getItemBySlug } from '@/app/utils'
import { BlocksRendererComponent } from '@/components/BlocksRendererComponent'
import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import Image from "next/legacy/image"

type Props = {
  blogPost: any
}

export default function UsefulInformation({ blogPost }: Props) {
  const image = blogPost?.attributes?.images?.data?.[0]?.attributes?.formats
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.medium?.url}`

  return (
    <>
      <HeadComponent title={blogPost.attributes.title} description={blogPost.attributes.shortContent} />
      <Layout>
        <Stack key={blogPost.id} pb={8}>
          <Stack sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
            <Image priority alt={blogPost?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc} />
          </Stack>
          <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, }}>

            <Typography variant='h4' py={4} fontWeight={600}>
              {blogPost.attributes.title}
            </Typography>
            <Typography>
              <BlocksRendererComponent content={blogPost.attributes.content} />
            </Typography>
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.params

  const blogPost = await getItemBySlug('blog-posts', slug, undefined, 'populate=deep')

  return {
    props: {
      blogPost: blogPost?.data?.[0] ?? null,
    }
  }
}
