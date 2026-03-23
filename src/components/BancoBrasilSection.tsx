import Link from "next/link";
import Image from "next/image";

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
            {/* BB Partnership card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#FBFB2F] flex items-center justify-center shrink-0 p-3">
                <Image
                  src="/images/logos/banco-brasil-logo-curta.svg"
                  alt="Banco do Brasil"
                  width={56}
                  height={56}
                />
              </div>
              <div>
                <p className="text-[#FBFB2F] text-xs font-bold uppercase tracking-widest mb-1">Parceria exclusiva</p>
                <p className="text-white font-black text-2xl leading-tight mb-1">Banco do Brasil</p>
                <p className="text-blue-200 text-sm">A segurança do maior banco público do Brasil.</p>
              </div>
            </div>

            {/* Doctor image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/images/pessoas/medico-atendimento.webp"
                alt="Médico em atendimento humanizado pela SaúdeCash"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
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
