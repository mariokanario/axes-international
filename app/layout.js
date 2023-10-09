import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import '@/styles/userDash.css'
import { Inter } from 'next/font/google'
import { Provider } from './context/Provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bonorum Group',
  description: 'Bonorum Group',
}

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  )
}
