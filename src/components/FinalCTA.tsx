import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section
      className="py-20 bg-[#005FB9] relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FBFB2F]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left text */}
          <div className="text-white">
            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-5xl font-black mb-6 leading-tight tracking-tight"
            >
              Chega de deixar sua{" "}
              <span className="text-[#FBFB2F]">saúde para depois.</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Preencha o formulário. Um consultor da SaúdeCash entrará em
              contato, entenderá a sua situação e te mostrará o caminho mais
              fácil para realizar o seu procedimento.
            </p>

            {/* Reassurance list */}
            <ul className="flex flex-col gap-3">
              {[
                "Leva menos de 1 minuto para preencher",
                "Atendimento pelo WhatsApp ou ligação",
                "Sem compromisso e sem consulta de CPF",
                "Verificamos seu crédito BB juntos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FBFB2F] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#003F7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-blue-100 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <p className="text-xs font-bold text-[#005FB9] uppercase tracking-widest mb-1">
              É rápido e sem compromisso
            </p>
            <h3 className="text-xl font-black text-[#0F172A] mb-6">
              Conversar agora
            </h3>
            <LeadForm variant="final" />
          </div>
        </div>
      </div>
    </section>
  );
}
