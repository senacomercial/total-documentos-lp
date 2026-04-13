import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

// Import fonts
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Proteja Sua Marca | Consultoria PI com Vinicius Tronconi',
  description:
    'Registro de marca, patente e design no INPI. 350+ marcas protegidas. Acompanhamento 6-12 meses com especialista. Consultoria gratuita.',
  keywords: 'marca, INPI, consultoria, registro, patente, design, propriedade intelectual',
  authors: [{ name: 'Vinicius Tronconi' }],
  openGraph: {
    title: 'Proteja Sua Marca | Total Documentos Campinas',
    description: 'Registro de marca no INPI com especialista. 350+ marcas protegidas. Acompanhamento completo.',
    type: 'website',
    url: 'https://total-documentos-lp.vercel.app',
    locale: 'pt_BR',
  },
  alternates: {
    canonical: 'https://total-documentos-lp.vercel.app',
  },
}

// GA4 and Meta Pixel scripts
const GA4_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
`

const META_PIXEL_SCRIPT = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
  fbq('track', 'PageView');
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* GA4 */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: GA4_SCRIPT,
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: META_PIXEL_SCRIPT,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
