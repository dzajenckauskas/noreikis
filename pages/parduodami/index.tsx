import { ObjectsType } from '@/app/types/ObjectsType'
import { getItems } from '@/app/utils'
import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import { ForSalePage } from '@/components/pages/for-sale/ForSalePage'
import { GetServerSideProps } from 'next'

type Props = {
    objects?: ObjectsType | null;
}
export default function Objects({ objects }: Props) {
    return (
        <>
            <HeadComponent title={'Parduodami NT objektai'} description={'Brokerio Ernesto Noreikio parduodami Nekilnojamojo Turto NT objektai Vilniuje, Kaune, Palangoje'} />
            <Layout startDefault>
                <ForSalePage objects={objects} />
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const objects = (await getItems('objects', 'orderBy=createdAt&populate=deep')) ?? null
    return {
        props: {
            objects: objects ?? null,
        }
    }
}
