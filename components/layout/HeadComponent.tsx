import React from 'react'
import Head from 'next/head'

type Props = {
    title?: string;
    description?: string;
    keywords?: string;
    slug?: string;
}

export const HeadComponent = ({ title, description, keywords, slug }: Props) => (
    <Head>
        {title &&
            <title>{title}</title>}
        {description &&
            <meta
                name="description"
                content={description}
                key="desc"
            />}
        {keywords &&
            <meta
                name="keywords"
                content={keywords}
            />}
        <link rel="canonical" href={slug ? `${process.env.NEXT_PUBLIC_URL}/${slug}` : `${process.env.NEXT_PUBLIC_URL}`}></link>
    </Head>
)
