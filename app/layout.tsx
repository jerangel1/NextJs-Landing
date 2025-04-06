import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import LotteryCursor from './components/LotteryCursor';
import { Pacifico } from 'next/font/google';
import { Metadata } from 'next';

// Load the Pacifico font
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// URL base para la aplicación
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-js-landing-teal.vercel.app';

export const metadata: Metadata = {
  title: 'Pronosticon - Resultados de Lotería en Tiempo Real',
  description: 'Consulta los resultados de lotería más recientes. Obtén información actualizada sobre los sorteos y números ganadores.',
  generator: 'Next.js',
  applicationName: 'Pronosticon',
  keywords: ['lotería', 'resultados', 'sorteos', 'números ganadores', 'pronosticon'],
  authors: [{ name: 'Pronosticon Team' }],
  creator: 'Pronosticon',
  publisher: 'Pronosticon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pronosticon - Resultados de Lotería en Tiempo Real',
    description: 'Consulta los resultados de lotería más recientes. Obtén información actualizada sobre los sorteos y números ganadores.',
    url: baseUrl,
    siteName: 'Pronosticon',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Pronosticon - Resultados de Lotería',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pronosticon - Resultados de Lotería en Tiempo Real',
    description: 'Consulta los resultados de lotería más recientes. Obtén información actualizada sobre los sorteos y números ganadores.',
    images: ['/api/og'],
    creator: '@pronosticon',
    site: '@pronosticon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con tu código real
  },
  category: 'lottery',
};

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
