import Link from "next/link";

const benefits = [
  "Taxas e condições de um banco sólido, não de uma financeira",
  "Até 60 meses para pagar, com parcelas fixas",
  "O consultor verifica seu limite junto com você, sem complicação",
  "Contrato firmado com um dos bancos mais robustos do Brasil",
];

export default function BancoBrasilSection() {
  return (
    <section
      id="banco-brasil"
      className="py-20 bg-[#003F7A]"
      aria-labelledby="bb-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="flex flex-col gap-6">
            {/* BB Logo placeholder card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                {/* BB logo placeholder */}
                <div className="w-16 h-16 rounded-xl bg-[#FBFB2F] flex items-center justify-center shrink-0">
                  <span className="text-[#003F7A] font-black text-xl">BB</span>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Parceria exclusiva</p>
                  <p className="text-white font-black text-xl leading-tight">Banco do Brasil</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Financiamento facilitado pelo{" "}
                <strong className="text-white">Banco do Brasil</strong>. Faça
                seu login no App BB e acesse{" "}
                <em>"Detalhar limites de crédito"</em>.
              </p>
              <Link
                href="#formulario"
                className="mt-5 inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
              >
                Consultar limite no App BB
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "R$ 100k", label: "Máximo financiado" },
                { value: "60x", label: "Meses para pagar" },
                { value: "0%", label: "Consulta de CPF" },
                { value: "24h", label: "Retorno do consultor" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 rounded-xl p-4 border border-white/15"
                >
                  <p className="text-2xl font-black text-[#FBFB2F]">{stat.value}</p>
                  <p className="text-blue-200 text-xs font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-white">
            <span className="inline-block text-[#FBFB2F] font-bold text-sm uppercase tracking-widest mb-4">
              O Crédito
            </span>
            <h2
              id="bb-heading"
              className="text-3xl sm:text-4xl font-black mb-6 leading-tight tracking-tight"
            >
              O crédito é do{" "}
              <span className="text-[#FBFB2F]">Banco do Brasil</span> com a
              facilidade da SaúdeCash.
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              O crédito é operado diretamente pelo Banco do Brasil, o banco que
              provavelmente já faz parte da sua vida. Se você é correntista do
              BB, é possível que já tenha limite disponível agora mesmo. A
              SaúdeCash acessa essa linha de crédito e a direciona para o seu
              procedimento com as condições e a segurança que o BB oferece.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FBFB2F] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#003F7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-blue-100 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-blue-300 italic mb-6">
              *Disponibilidade de crédito sujeita à análise do Banco do Brasil.
              Exclusivo para correntistas BB.
            </p>

            <Link
              href="#formulario"
              className="inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Quero saber mais
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
