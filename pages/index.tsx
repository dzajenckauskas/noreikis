import { ObjectsType } from '@/app/types/ObjectsType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import { getItems } from '@/app/utils'
import { HomePage } from '@/components/pages/home/HomePage'
import { GetServerSideProps } from 'next'

type Props = {
  recommendations: RecommendationsType;
  objects?: ObjectsType | null;
}

export default function Home({ recommendations, objects }: Props) {

  return (
    <HomePage recommendations={recommendations} objects={objects} />
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = (await getItems('recommendations', 'populate=deep')) ?? null
  const objects = (await getItems('objects', 'populate=deep')) ?? null


  return {
    props: {
      objects: objects ?? null,
      recommendations: recommendations ?? null,
    }
  }
}
