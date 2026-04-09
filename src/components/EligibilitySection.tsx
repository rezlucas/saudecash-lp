import Image from "next/image";

const BB_LIMIT_URL =
  "https://www49.bb.com.br/m/meus-limites-de-credito/#/cm49eyJvcHIiOiJNTElNQ1JEIiwidHJhbnNhY2FvRmluYW5jZWlyYSI6InNpbSJ9";

const steps = [
  {
    number: "01",
    title: "Abra o App BB",
    description: "Faça login normalmente no aplicativo do Banco do Brasil.",
    icon: (
      <Image
        src="/images/logos/banco-brasil-logo-curta.svg"
        alt="Banco do Brasil"
        width={28}
        height={28}
      />
    ),
  },
  {
    number: "02",
    title: "Acesse seus limites",
    description: 'Toque em "Detalhar limites de crédito" para ver o crédito disponível.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Encontre a linha certa",
    description: 'Procure em Financiamentos a linha "Financiar bens e serviços".',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function EligibilitySection() {
  return (
    <section
      id="verificar-elegibilidade"
      className="py-20 bg-white"
      aria-labelledby="eligibility-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Verifique agora
          </span>
          <h2
            id="eligibility-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Você já pode ter limite{" "}
            <span className="text-[#005FB9]">disponível agora.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Se você é correntista do Banco do Brasil,{" "}<br />veja como verificar em menos de 2 minutos.
          </p>
        </div>

        {/* Steps card */}
        <div className="bg-[#005FB9] rounded-3xl shadow-lg p-8 sm:p-10 mb-8">
          <div className="grid sm:grid-cols-3 gap-0 sm:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex sm:flex-col gap-5 sm:gap-4 items-start sm:items-start py-6 sm:py-0">

                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[calc(50%+32px)] right-0 h-px border-t-2 border-dashed border-white/30" aria-hidden="true" />
                )}

                {/* Connector line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden absolute left-6 top-[68px] bottom-0 w-px border-l-2 border-dashed border-white/30" aria-hidden="true" />
                )}

                {/* Icon bubble */}
                <div className="shrink-0 relative z-10 w-12 h-12 rounded-2xl bg-[#FBFB2F] text-[#003F7A] flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-[#FBFB2F] uppercase tracking-widest">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA area */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={BB_LIMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-black text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Image
              src="/images/logos/banco-brasil-logo-curta.svg"
              alt=""
              width={22}
              height={22}
              aria-hidden="true"
            />
            Consultar limite no App BB
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <p className="text-xs text-gray-400 text-center max-w-sm">
            O link abre diretamente a tela de limites no App BB. Nenhum dado é compartilhado com a SaúdeCash nessa etapa.
          </p>
        </div>

      </div>
    </section>
  );
}
