import HubSpotForm from "./HubSpotForm";

export default function FinalCTA() {
  return (
    <section
      className="py-20 bg-[#005FB9] relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FBFB2F]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#FBFB2F] font-bold text-sm uppercase tracking-widest mb-4">
            É rápido e sem compromisso
          </span>
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-4"
          >
            Chega de deixar sua{" "}
            <span className="text-[#FBFB2F]">saúde para depois.</span>
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto">
            Preencha o formulário. Um consultor da SaúdeCash entrará em contato
            e te mostrará o caminho mais fácil para realizar o seu procedimento.
          </p>
        </div>

        {/* Form card */}
        <div id="formulario-final" className="bg-white rounded-3xl p-0 sm:p-10 shadow-2xl overflow-hidden">
          <HubSpotForm />
        </div>

        {/* Footer note */}
        <p className="text-center text-blue-200 text-xs mt-6">
          Sem consulta de CPF. Seus dados são protegidos e não serão compartilhados.
        </p>
      </div>
    </section>
  );
}
