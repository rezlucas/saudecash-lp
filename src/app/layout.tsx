import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
