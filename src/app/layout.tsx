import './globals.css'

export const metadata = {
  title: 'Beach 170',
  description: 'Beach 170 Publishing',
}

type props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
