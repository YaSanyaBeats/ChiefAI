'use client'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const theme = React.useMemo(() => {
        return createTheme({
            cssVariables: {
                colorSchemeSelector: ':root, [data-mui-color-scheme]',
                cssVarPrefix: 'template',
            },
            palette: {
                mode: 'dark',
            },
        })
    }, [])

    return (
        <html lang="en">
            <SessionProvider>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme} disableTransitionOnChange>
                        <CssBaseline enableColorScheme />
                        <body>{children}</body>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </SessionProvider>
        </html>
    )
}
