import Link from "next/link";
import { Scissors, Smile, Sparkles, HeartPulse } from "lucide-react";

const procedures = [
  {
    icon: Scissors,
    title: "Cirurgia Eletiva",
    description:
      "Rinoplastia, lipoaspiração, mamoplastia, abdominoplastia, blefaroplastia e outras. Para quem quer se olhar no espelho e reconhecer quem sempre quis ser.",
    tags: ["Rinoplastia", "Lipoaspiração", "Mamoplastia", "Abdominoplastia"],
  },
  {
    icon: Smile,
    title: "Odontologia",
    description:
      "Implantes, próteses, aparelhos, facetas. Um sorriso diferente muda postura, presença, autoconfiança, e não precisa ficar para depois.",
    tags: ["Implantes", "Facetas", "Aparelhos", "Próteses"],
  },
  {
    icon: Sparkles,
    title: "Estética e Harmonização Facial",
    description:
      "Procedimentos realizados por profissionais habilitados em clínicas credenciadas. Cuidar da aparência é também cuidar da autoestima.",
    tags: ["Harmonização", "Botox", "Preenchimento", "Skincare"],
  },
  {
    icon: HeartPulse,
    title: "Tratamentos que o seu plano não cobre",
    description:
      "Tratamentos que o plano não cobre ou que não podem mais esperar uma fila. Porque saúde não é opcional e a falta de cobertura não deveria ser um obstáculo.",
    tags: ["Urologia", "Ortopedia", "Oftalmologia", "Ginecologia"],
  },
];

export default function StagingProceduresSection() {
  return (
    <section
      id="procedimentos"
      className="py-20 bg-gray-50"
      aria-labelledby="procedures-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="procedures-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            O valor não precisa ser o motivo
            <br />
            <span className="text-[#005FB9]">de você continuar esperando.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A SaúdeCash financia uma ampla gama de procedimentos em clínicas
            credenciadas. Não encontrou o que procura? Fale com um consultor
            mesmo assim, a gente descobre como ajudar.
          </p>
        </div>

        {/* Procedure cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {procedures.map((proc) => {
            const Icon = proc.icon;
            return (
            <div
              key={proc.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#005FB9]/20 transition-all duration-200 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <Icon className="w-6 h-6 text-[#005FB9]" strokeWidth={2} />
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
                href="#formulario-final"
                className="text-[#005FB9] hover:text-[#00519D] font-semibold text-sm flex items-center gap-1 group"
              >
                Quero saber mais
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
