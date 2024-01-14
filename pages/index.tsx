import { RecommendationsType } from '@/app/types/RecommendationsType'
import { getItems } from '@/app/utils'
import { HomePage } from '@/components/pages/home/HomePage'
import { GetServerSideProps } from 'next'

type Props = {
  recommendations: RecommendationsType;
}

export default function Home({ recommendations }: Props) {

  return (
    <HomePage recommendations={recommendations} />
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = await getItems('recommendations', 'populate=deep') ?? null
  // const categories = await getItems('categories') ?? null

  return {
    props: {
      recommendations: recommendations ?? null,
      // categories: categories ?? null
    }
  }
}
