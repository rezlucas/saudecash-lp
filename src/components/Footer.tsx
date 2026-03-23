import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Banco do Brasil", href: "#banco-brasil" },
  { label: "FAQ", href: "#faq" },
  { label: "Seja uma Clínica Credenciada", href: "#credenciamento" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logos/saudecash-logo-branco.svg"
                alt="SaúdeCash"
                width={140}
                height={36}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Crédito para saúde com a segurança do Banco do Brasil. Financie
              cirurgias, tratamentos e procedimentos estéticos em até 60 meses.
            </p>
            {/* Partners */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/banco-brasil-logo-amarela.svg"
                alt="Banco do Brasil"
                width={120}
                height={32}
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-[#FBFB2F] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Atendimento via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-[#FBFB2F] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Seg–Sex, das 8h às 18h</span>
              </li>
            </ul>

            <Link
              href="#formulario"
              className="mt-6 inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} SaúdeCash Serviços Financeiros Ltda. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center">
            *Crédito sujeito à análise de crédito e condições de financiamento. Sujeito a disponibilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
