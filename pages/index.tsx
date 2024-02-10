import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import { getItems } from '@/app/utils'
import { HomePage } from '@/components/pages/home/HomePage'
import { GetServerSideProps } from 'next'

type Props = {
  recommendations: RecommendationsType;
  objects?: ObjectsType | null;
  blogPosts?: BlogPostsType | null;
}

export default function Home({ recommendations, objects, blogPosts }: Props) {
  return (
    <HomePage recommendations={recommendations} objects={objects} blogPosts={blogPosts} />
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = (await getItems('recommendations', 'populate=deep')) ?? null
  const objects = (await getItems('objects', 'populate=deep')) ?? null
  const blogPosts = (await getItems('blog-posts', 'populate=deep')) ?? null

  return {
    props: {
      blogPosts: blogPosts ?? null,
      objects: objects ?? null,
      recommendations: recommendations ?? null,
    }
  }
}
