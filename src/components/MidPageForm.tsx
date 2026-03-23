import LeadForm from "./LeadForm";

export default function MidPageForm() {
  return (
    <section
      id="formulario"
      className="py-20 bg-white"
      aria-labelledby="midform-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text content */}
          <div>
            <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-4">
              Fale com a gente
            </span>
            <h2
              id="midform-heading"
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
            >
              Já sabe o que precisa?{" "}
              <span className="text-[#005FB9]">A gente cuida do resto.</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Preencha o formulário ao lado e um consultor entrará em contato
              pelo WhatsApp para entender seu caso, verificar seu crédito
              disponível e te indicar a melhor clínica.
            </p>

            {/* Trust points */}
            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: "⚡",
                  title: "Rápido",
                  desc: "Menos de 1 minuto para preencher",
                },
                {
                  icon: "🤝",
                  title: "Sem compromisso",
                  desc: "O formulário abre uma conversa, não assina um contrato",
                },
                {
                  icon: "🔒",
                  title: "Sem consulta de CPF",
                  desc: "Coletamos apenas nome, WhatsApp e procedimento",
                },
                {
                  icon: "💬",
                  title: "Atendimento humano",
                  desc: "Um consultor real vai entrar em contato com você",
                },
              ].map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                    {point.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{point.title}</p>
                    <p className="text-gray-500 text-sm">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <LeadForm variant="mid" />
          </div>
        </div>
      </div>
    </section>
  );
}
