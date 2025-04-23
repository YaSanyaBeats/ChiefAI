export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-mui-color-scheme="dark">
        <body>{children}</body>
      </html>
    )
  }