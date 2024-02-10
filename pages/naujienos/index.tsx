import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { getItems } from '@/app/utils'
import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import Image from "next/legacy/image"
import Link from 'next/link'

type Props = {
  blogPosts: BlogPostsType;
}

export default function UsefulInformation({ blogPosts }: Props) {
  const renderPosts = blogPosts.data.map((post) => {
    const image = post?.attributes?.images?.data?.[0]?.attributes?.formats
    const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.medium.url}`

    return (
      <Stack key={post.id} pt={4} direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Stack sx={{ position: 'relative', minWidth: { xs: '100%', md: 300 }, height: { xs: 300, md: 300 } }}>
          <Image priority alt={post?.attributes?.images?.data?.[0]?.attributes?.alternativeText ?? ''}
            layout='fill' objectFit='cover' src={imageSrc} />
        </Stack>
        <Stack>
          <Link passHref href={'/naujienos/' + post.attributes?.slug}>
            <Typography variant='h6'>
              {post.attributes?.title}
            </Typography>
          </Link>
          <Typography>
            {post.attributes?.shortContent}
          </Typography>
          <Stack pt={2}>
            <Link passHref href={'/naujienos/' + post.attributes?.slug}>
              <Button variant='contained' >
                Skaityti straipsnį
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    )
  })
  return (
    <>
      <HeadComponent title='Naudinga žinoti' description='Nekilnojamojo turto naujienos' />
      <Layout>
        <Stack sx={{ px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }}>
          <Typography variant='h4' fontWeight={600}>
            NAUDINGA ŽINOTI
          </Typography>
          <Stack>
            {renderPosts}
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const blogPosts = (await getItems('blog-posts', 'populate=deep')) ?? null

  return {
    props: {
      blogPosts: blogPosts ?? null
    }
  }
}
