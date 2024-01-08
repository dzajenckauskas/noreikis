import { getItemBySlug } from '@/app/utils'
import Layout from '@/components/layout/Layout'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
  blogPost: any
}

export default function UsefulInformation({ blogPost }: Props) {
  const image = blogPost?.attributes?.images?.data?.[0]?.attributes?.formats
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.medium?.url}`

  return (
    <>
      <Head>
        <title>{blogPost.attributes.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Stack key={blogPost.id} pt={4}>
          <Stack sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '50%', xl: '50%' }, height: 600 }}>
            <Image priority alt={blogPost?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
              layout='fill' objectFit='cover' src={imageSrc} />
          </Stack>

          <Typography variant='h6'>
            {blogPost.attributes.title}
          </Typography>
          <Typography>
            {blogPost.attributes.shortContent}
          </Typography>
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