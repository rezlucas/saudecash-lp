import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Você preenche o formulário",
    description:
      "Nome, WhatsApp e o procedimento que você quer realizar. Leva menos de 1 minuto.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Um consultor entrará em contato",
    description:
      "A equipe da SaúdeCash te liga ou manda mensagem no WhatsApp. Juntos, vocês verificam o limite disponível no Banco do Brasil, escolhem o melhor prazo e encontram a clínica credenciada mais próxima.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Você realiza o procedimento",
    description:
      "Crédito aprovado, é só agendar na clínica. A partir daí, sua única preocupação é a recuperação ou a celebração.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Como Funciona
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Simples assim — e você{" "}
            <span className="text-[#005FB9]">não faz isso sozinho.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            O SaúdeCash facilita o seu procedimento, parcelando em até 60s, sem
            burocracia e com total segurança.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#005FB9] via-[#005FB9] to-[#005FB9] opacity-20"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start md:items-center text-left md:text-center gap-4"
              >
                {/* Step number + icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#005FB9] flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FBFB2F] flex items-center justify-center">
                    <span className="text-xs font-black text-[#003F7A]">{index + 1}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#formulario"
            className="inline-flex items-center gap-2 bg-[#005FB9] hover:bg-[#00519D] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Atendimento
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
