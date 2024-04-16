import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import { PageResponseType } from '@/app/types/PageType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import { getItems, getPage } from '@/app/utils'
import { HomePage } from '@/components/pages/home/HomePage'
import { GetServerSideProps } from 'next'

type Props = {
  recommendations: RecommendationsType;
  objects?: ObjectsType | null;
  blogPosts?: BlogPostsType | null;
  homePage?: PageResponseType;
}

export default function Home({ homePage, recommendations, objects, blogPosts }: Props) {
  return (
    <HomePage page={homePage?.data} recommendations={recommendations} objects={objects} blogPosts={blogPosts} />
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = (await getItems('recommendations', 'populate=deep')) ?? null
  const objects = (await getItems('objects', 'populate=deep&pagination[limit]=4')) ?? null
  const blogPosts = (await getItems('blog-posts', 'populate=deep')) ?? null
  const homePage = (await getPage('home-page', 'populate=deep')) ?? null

  return {
    props: {
      blogPosts: blogPosts ?? null,
      objects: objects ?? null,
      recommendations: recommendations ?? null,
      homePage: homePage ?? null
    }
  }
}
