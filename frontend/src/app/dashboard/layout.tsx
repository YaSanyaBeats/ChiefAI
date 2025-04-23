"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}, ) {
    const theme = React.useMemo(() => {
        return createTheme({
            cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
            },
            palette: {
                mode: 'dark',
            },
        });
    }, []);
    
return (
    <SessionProvider>
        <ThemeProvider theme={theme} disableTransitionOnChange>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    </SessionProvider>
    )
}