import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import LotteryCursor from './components/LotteryCursor';
import { Pacifico } from 'next/font/google';

// Load the Pacifico font
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata = {
  title: 'Prosticon - Resultados de Lotería',
  description: 'Consulta los últimos resultados de lotería en tiempo real',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={pacifico.variable}>
        <Navbar />
        {children}
        <Footer />
        <LotteryCursor />
      </body>
    </html>
  )
}
