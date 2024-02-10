import React from 'react'
import Head from 'next/head'

type Props = {
    title?: string;
    description?: string;
    keywords?: string;
}

export const HeadComponent = ({ title, description, keywords }: Props) => (
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
    </Head>
)
