import Typography from '@mui/material/Typography';
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link';
import React from 'react'

type Props = {
    content: any[];
}

export const BlocksRendererComponent = ({ content }: Props) => {
    return (
        <BlocksRenderer
            content={content}
            blocks={{
                paragraph: ({ children }) => <Typography variant="body1">{children}</Typography>,
                heading: ({ children, level }) => {
                    switch (level) {
                        case 1:
                            return <Typography variant="h1">{children}</Typography>
                        case 2:
                            return <Typography variant="h2">{children}</Typography>
                        case 3:
                            return <Typography variant="h3">{children}</Typography>
                        case 4:
                            return <Typography variant="h4">{children}</Typography>
                        case 5:
                            return <Typography variant="h5">{children}</Typography>
                        case 6:
                            return <Typography variant="h6" pt={2} fontWeight={500}>{children}</Typography>
                        default:
                            return <Typography variant="h1">{children}</Typography>
                    }
                },
                link: ({ children, url }) => <Link href={url}>{children}</Link>,
                list: ({ children }) => <Typography>{children}</Typography>
            }}
            modifiers={{
                bold: ({ children }) => <>{children}</>,
                italic: ({ children }) => <i>{children}</i>,
            }}
        />
    )
}
