import Link from "next/link";
import Image from "next/image";


export default function MidPageForm() {
  return (
    <section
      id="formulario"
      className="py-20 bg-gray-50"
      aria-labelledby="midform-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text + CTA */}
          <div className="order-1 md:order-1">
            <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-4">
              Fale com a gente
            </span>
            <h2
              id="midform-heading"
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-5 tracking-tight leading-tight"
            >
              Já sabe o que precisa?{" "}
              <span className="text-[#005FB9]">A gente cuida do resto.</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Um consultor entrará em contato pelo WhatsApp para entender seu
              caso, verificar seu crédito disponível e te indicar a melhor
              clínica.
            </p>

            <Link
              href="#formulario-final"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-black text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Preencher formulário
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative order-2 hidden md:block max-h-[500px]">
            {/* Accent border frame */}
            <div className="absolute inset-0 rounded-[2.5rem] border-4 border-[#FBFB2F] translate-x-4 translate-y-4" aria-hidden="true" />
            {/* Blue fill behind */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#005FB9] translate-x-2 translate-y-2" aria-hidden="true" />
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] max-h-[500px] shadow-xl">
              <Image
                src="/images/pessoas/mid-paciente.webp"
                alt="Paciente satisfeita com o atendimento SaúdeCash"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}