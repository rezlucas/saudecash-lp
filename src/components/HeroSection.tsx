import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#005FB9] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#FBFB2F]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-white">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-3xl lg:text-4xl font-black leading-[1.15] tracking-tight mb-6"
            >
              Fez a consulta do seu procedimento estético, mas{" "}
              <span className="text-[#FBFB2F]">o orçamento pesou no bolso?</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-lg">
              A SaúdeCash te ajuda a realizar agora, com{" "}
              <strong className="text-white">atendimento consultivo</strong> e
              clínicas credenciadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
              <Link
                href="#formulario-final"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Falar com Especialista
              </Link>
              <Link
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/25 transition-all duration-200"
              >
                Como funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Mobile hero image */}
            <div className="relative mt-8 md:hidden rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/pessoas/hero-paciente-mobile.webp"
                alt="Paciente sorrindo após realizar seu procedimento com a SaúdeCash"
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
            </div>

            <p className="mt-4 text-xs text-blue-200">
              *Crédito sujeito a análise e disponibilidade. Exclusivo para correntistas Banco do Brasil com acesso à linha de crédito &ldquo;Financiamento de bens e serviços&rdquo;.
            </p>
          </div>

          {/* Hero image placeholder */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-md">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/pessoas/hero-paciente.webp"
                  alt="Paciente sorrindo após realizar seu procedimento com a SaúdeCash"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 0px, 50vw"
                />
              </div>

              {/* BB partnership card */}
              <div className="absolute top-4 inset-x-4 z-10 bg-[#003F7A]/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FBFB2F] flex items-center justify-center shrink-0 p-2">
                  <Image
                    src="/images/logos/banco-brasil-logo-curta.svg"
                    alt="Banco do Brasil"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p className="text-[#FBFB2F] text-[10px] font-bold uppercase tracking-widest mb-0.5">Parceria exclusiva</p>
                  <p className="text-white font-black text-lg leading-tight mb-0.5">Banco do Brasil</p>
                  <p className="text-blue-200 text-xs">A segurança do maior banco público do Brasil.</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#005FB9] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Financie até</p>
                  <p className="text-lg font-black text-[#005FB9] leading-tight">R$ 100.000</p>
                </div>
              </div>

              {/* Floating parcelas card */}
              <div className="absolute -bottom-4 -right-4 bg-[#FBFB2F] rounded-2xl shadow-xl p-4">
                <p className="text-xs text-[#003F7A] font-semibold">Em até</p>
                <p className="text-2xl font-black text-[#003F7A] leading-tight">60x</p>
                <p className="text-xs text-[#003F7A] font-medium">sem complicação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="grid grid-cols-3 gap-3 mt-10 md:hidden">
          {[
            { value: "R$ 100k", label: "Financiamento" },
            { value: "60x", label: "Parcelas" },
            { value: "100%", label: "Humanizado" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20"
            >
              <p className="text-xl font-black text-[#FBFB2F]">{stat.value}</p>
              <p className="text-xs text-blue-100 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
