'use client'
import Stack from '@mui/material/Stack'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { theme } from './Theme'
import Cookies from './Cookies'

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children, }: Props) => {
    return (
        <>
            <Header />
            <Stack minHeight={'70vh'} sx={{
                backgroundColor: theme.palette.info.main + 'A0',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <Stack
                    sx={{
                        height: '100%',
                    }}>
                    {children}
                </Stack>
            </Stack>
            <Footer />
            <Cookies />
        </>
    )
}

export default Layout