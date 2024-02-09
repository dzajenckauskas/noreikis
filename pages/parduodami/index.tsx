import { ObjectsType } from '@/app/types/ObjectsType'
import { getItems } from '@/app/utils'
import Layout from '@/components/layout/Layout'
import { ForSaleSection } from '@/components/pages/home/ForSaleSection'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
    objects?: ObjectsType | null;
}
export default function Objects({ objects }: Props) {
    return (
        <>
            <Head>
                <title>{"Parduodami"}</title>
                <meta name="description" content={"Generated by create next app"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <ForSaleSection objects={objects} />
            </Layout >
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const objects = (await getItems('objects', 'populate=deep')) ?? null

    return {
        props: {
            objects: objects ?? null,
        }
    }
}
