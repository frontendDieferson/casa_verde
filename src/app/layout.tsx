import './globals.css'
import { Inter, Montserrat, Elsie_Swash_Caps } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin']});
const elsie_suash_caps = Elsie_Swash_Caps({
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  title: 'Casa Verde',
  description: 'Casa Verde e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
