import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { ObjectType, ObjectsType } from '@/app/types/ObjectsType'
import { getItem, getItems } from '@/app/utils'
import EstatePage from '@/components/pages/estate/EstatePage'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  object?: ObjectType;
  blogPosts?: BlogPostsType | null;
  objects?: ObjectsType | null;

}

export default function Home({ object, objects, blogPosts }: Props) {
  return (
    <EstatePage object={object} objects={objects} blogPosts={blogPosts} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { slug } = context.params ?? {};
  const locale = context.locale ?? context.defaultLocale ?? 'lt'

  if (!slug || typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const object = await getItem('objects', slug, 'populate=deep')
  const objects = (await getItems('objects', 'populate=deep&pagination[limit]=4')) ?? null
  const blogPosts = (await getItems('blog-posts', 'populate=deep')) ?? null
  return {
    props: {
      blogPosts: blogPosts ?? null,
      objects: objects ?? null,
      object: object?.data ?? null,
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}