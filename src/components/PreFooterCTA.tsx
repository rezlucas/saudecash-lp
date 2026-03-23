import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="bg-[#FBFB2F] py-16 relative overflow-hidden" aria-label="Não encontrou seu procedimento?">

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#003F7A]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#003F7A]/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left: text block */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Icon badge */}
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#003F7A]/10 border border-[#003F7A]/20 flex items-center justify-center" aria-hidden="true">
              <svg className="w-7 h-7 text-[#003F7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>

            <div>
              <p className="text-xs font-bold text-[#003F7A]/60 uppercase tracking-widest mb-2">
                Rede em expansão constante
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#003F7A] leading-snug tracking-tight">
                Não encontrou o procedimento
                <br className="hidden sm:block" />
                que você precisa?
              </h2>
              <p className="text-[#003F7A]/70 text-sm mt-2 leading-relaxed max-w-md">
                Fale com um consultor. Nossa rede cresce todo mês e a gente sempre
                encontra um caminho para te ajudar.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0 flex flex-col items-center gap-3">
            <Link
              href="#formulario-final"
              className="inline-flex items-center gap-2 bg-[#003F7A] hover:bg-[#005FB9] text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Falar com consultor
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-[#003F7A]/60 text-xs">
              Sem compromisso · Resposta em até 24h
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
