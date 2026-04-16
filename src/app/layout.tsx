import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logos/favicon.png",
  },
  title: "SaúdeCash — Crédito para saúde pelo Banco do Brasil",
  description:
    "Financie cirurgias, tratamentos e procedimentos estéticos com crédito do Banco do Brasil. Até R$ 100.000 em até 60x. Atendimento humanizado e clínicas credenciadas em todo o Brasil.",
  keywords: [
    "financiamento cirurgia",
    "crédito saúde",
    "banco do brasil saúde",
    "financiar procedimento estético",
    "saudecash",
  ],
  openGraph: {
    title: "SaúdeCash — Crédito para saúde pelo Banco do Brasil",
    description:
      "Realize seu procedimento agora. Parcele em até 60x com o Banco do Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "SaúdeCash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="min-h-full antialiased">
        {children}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','808078045662904');fbq('track','PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=808078045662904&ev=PageView&noscript=1" alt="" />
        </noscript>

        {/* HubSpot */}
        <Script id="hs-script-loader" src="//js.hs-scripts.com/50999563.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
