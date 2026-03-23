import Link from "next/link";

export default function MidPageForm() {
  return (
    <section
      id="formulario"
      className="py-20 bg-white"
      aria-labelledby="midform-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          Um consultor entrará em contato pelo WhatsApp para entender seu caso,
          verificar seu crédito disponível e te indicar a melhor clínica.
        </p>

        <Link
          href="#formulario-final"
          className="inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-black text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Preencher formulário
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
