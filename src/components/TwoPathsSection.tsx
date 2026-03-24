import Link from "next/link";

const paths = [
  {
    emoji: "✨",
    title: "Para quem tem um sonho",
    description:
      "Aquela cirurgia que você pesquisou, salvou nas redes, mostrou para alguém próximo. Que ficou para 'quando der', para 'quando juntar', para 'quando o momento certo chegar'. Um consultor da SaúdeCash pode te mostrar que o momento certo pode ser agora.",
    cta: "Quero realizar meu sonho",
    bg: "bg-[#005FB9]",
    textColor: "text-white",
    subtextColor: "text-blue-100",
    ctaClass:
      "bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    emoji: "🩺",
    title: "Para quem tem uma necessidade",
    description:
      "Um procedimento que o plano não cobre, uma cirurgia que não pode mais esperar, um tratamento que faz diferença real na sua qualidade de vida. Fale com a gente — a gente encontra um caminho.",
    cta: "Quero falar com um consultor",
    bg: "bg-white",
    textColor: "text-[#0F172A]",
    subtextColor: "text-gray-600",
    ctaClass:
      "bg-[#005FB9] hover:bg-[#00519D] text-white font-bold",
    iconBg: "bg-blue-50",
    iconColor: "text-[#005FB9]",
    border: true,
  },
];

export default function TwoPathsSection() {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="two-paths-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="two-paths-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Cada pessoa tem um motivo e{" "}
            <span className="text-[#005FB9]">todos são válidos.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem quem chegou aqui com um sonho. Tem quem chegou com uma
            necessidade. A SaúdeCash não faz distinção, pois acredita que
            cuidar de si mesmo nunca precisa de justificativa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`${path.bg} ${path.border ? "border border-gray-200" : ""} rounded-2xl p-8 shadow-lg flex flex-col gap-6`}
            >
              <div
                className={`${path.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}
                aria-hidden="true"
              >
                {path.emoji}
              </div>
              <div>
                <h3 className={`text-2xl font-black ${path.textColor} mb-3`}>
                  {path.title}
                </h3>
                <p className={`${path.subtextColor} text-base leading-relaxed`}>
                  {path.description}
                </p>
              </div>
              <Link
                href="#formulario-final"
                className={`${path.ctaClass} inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-all duration-200 mt-auto`}
              >
                {path.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center mt-10 text-lg font-bold text-[#005FB9] italic">
          "O valor não precisa mais ser o motivo de você continuar esperando."
        </p>
        <div className="text-center mt-4">
          <Link
            href="#formulario-final"
            className="inline-flex items-center gap-2 text-[#005FB9] font-semibold hover:underline text-sm"
          >
            Quero saber mais
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
