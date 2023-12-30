'use client'
// import { MenuItemType, SettingsType } from '@idcms/store'
import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { theme } from './Theme'

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children, }: Props) => {
    const [showChild, setShowChild] = useState(false)
    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) {
        return null
    }


    return (
        <>
            <Header />
            {/* <Stack minHeight={'75vh'}>
                {children}
            </Stack> */}
            <Stack minHeight={'70vh'} sx={{
                backgroundColor: theme.palette.info.main + 'A0',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <Stack
                    sx={{
                        height: '100%',
                        px: { xl: 2, md: 4, xs: 2 },
                        width: '100%', maxWidth: 'xl', mx: 'auto', pb: 6, pt: 6
                    }}>
                    {children}
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}

export default Layout