import React from 'react'
import Head from 'next/head'

type Props = {
    title?: string;
    description?: string;
    keywords?: string;
}

export const HeadComponent = ({ title, description, keywords }: Props) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)
