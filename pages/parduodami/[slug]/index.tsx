import { ObjectType } from '@/app/types/ObjectsType'
import { getItem } from '@/app/utils'
import EstatePage from '@/components/pages/estate/EstatePage'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  object?: ObjectType;
}

export default function Home({ object }: Props) {
  return (
    <EstatePage object={object} />
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

  return {
    props: {
      object: object?.data ?? null,
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}