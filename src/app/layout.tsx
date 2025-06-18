import './globals.css'

export const metadata = {
  title: 'Next App - Feedback Front-end form',
  description: 'Feedback Front-end form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
