import Link from "next/link";

const procedures = [
  {
    emoji: "💉",
    title: "Cirurgia Plástica",
    description:
      "Rinoplastia, lipoaspiração, mamoplastia, abdominoplastia, blefaroplastia e outras. Para quem quer se olhar no espelho e reconhecer quem sempre quis ser.",
    tags: ["Rinoplastia", "Lipoaspiração", "Mamoplastia", "Abdominoplastia"],
  },
  {
    emoji: "😁",
    title: "Odontologia",
    description:
      "Implantes, próteses, aparelhos, facetas. Um sorriso diferente muda postura, presença, autoconfiança — e não precisa ficar para depois.",
    tags: ["Implantes", "Facetas", "Aparelhos", "Próteses"],
  },
  {
    emoji: "✨",
    title: "Estética e Harmonização Facial",
    description:
      "Procedimentos realizados por profissionais habilitados em clínicas credenciadas. Cuidar da aparência é também cuidar da autoestima.",
    tags: ["Harmonização", "Botox", "Preenchimento", "Skincare"],
  },
  {
    emoji: "🏥",
    title: "Cirurgia por Saúde",
    description:
      "Tratamentos que o plano não cobre ou que não podem mais esperar uma fila. Porque saúde não é opcional e a falta de cobertura não deveria ser um obstáculo.",
    tags: ["Bariátrica", "Ortopedia", "Oftalmologia", "Ginecologia"],
  },
];

export default function ProceduresSection() {
  return (
    <section
      id="procedimentos"
      className="py-20 bg-gray-50"
      aria-labelledby="procedures-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Procedimentos Cobertos
          </span>
          <h2
            id="procedures-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Para o que você realmente precisa{" "}
            <span className="text-[#005FB9]">e o plano muitas vezes não cobre.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A SaúdeCash financia uma ampla gama de procedimentos em clínicas
            credenciadas. Não encontrou o que procura? Fale com um consultor
            mesmo assim — a gente descobre como ajudar.
          </p>
        </div>

        {/* Procedure cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {procedures.map((proc) => (
            <div
              key={proc.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#005FB9]/20 transition-all duration-200 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl" aria-hidden="true">
                {proc.emoji}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {proc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {proc.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-blue-50 text-[#005FB9] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="#formulario"
                className="text-[#005FB9] hover:text-[#00519D] font-semibold text-sm flex items-center gap-1 group"
              >
                Quero saber mais
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Not found CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-[#005FB9]/20 rounded-2xl px-6 py-4 shadow-sm">
            <span className="text-2xl" aria-hidden="true">🔍</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#0F172A]">Não encontrou o procedimento?</p>
              <p className="text-xs text-gray-500">Fale com um consultor — nossa rede está em expansão constante.</p>
            </div>
            <Link
              href="#formulario"
              className="shrink-0 bg-[#005FB9] hover:bg-[#00519D] text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
