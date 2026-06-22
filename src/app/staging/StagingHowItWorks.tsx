import Link from "next/link";
import { ClipboardList, MessageCircle, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Você preenche o formulário",
    requirements: ["Ser correntista do Banco do Brasil", "Já ter feito a consulta"],
    description:
      "Nome, WhatsApp, o procedimento que você quer realizar e a confirmação de que é correntista do Banco do Brasil. Leva menos de 1 minuto, sem consulta de CPF e sem nenhum compromisso.",
  },
  {
    icon: MessageCircle,
    title: "Um especialista te atende pelo WhatsApp",
    description:
      "De forma humanizada, validamos sua aprovação de crédito no Banco do Brasil, simulamos o melhor prazo/parcela e credenciamos sua clínica (caso ainda não seja credenciada).",
    disclaimer:
      "*Crédito sujeito a análise e disponibilidade. Exclusivo para correntistas Banco do Brasil com acesso à linha de crédito “Financiamento de bens e serviços”.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento e procedimento",
    description:
      "Com o crédito aprovado em até 60x, você agenda e realiza seu procedimento na clínica. A partir daí, sua única preocupação é a recuperação ou a celebração.",
  },
];

export default function StagingHowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Como Funciona
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Simples assim,
            <br />
            e você{" "}
            <span className="text-[#005FB9]">não faz isso sozinho.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Sem burocracia e com total segurança, parcelando em até 60x.
          </p>
        </div>

        {/* Static vertical timeline */}
        <ol className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <li
                key={step.title}
                className="flex gap-4 sm:gap-6 sm:min-h-[300px]"
              >
                <div
                  className={`relative flex flex-col items-center shrink-0 w-24 sm:w-28 ${
                    isLast ? "justify-end" : i === 0 ? "" : "justify-center"
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 bottom-0 bg-[#005FB9] ${
                      i === 0 ? "rounded-t-full" : ""
                    } ${isLast ? "rounded-b-full" : ""}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-[3px] sm:border-4 border-[#0F172A] flex items-center justify-center shadow-sm ${
                      i === 0 ? "mt-4 sm:mt-5" : isLast ? "mb-4 sm:mb-5" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A]" strokeWidth={2} />
                  </div>
                </div>
                <div
                  className={`${isLast ? "pt-2" : "pt-2 mb-8 sm:mb-10"} ${
                    i === 0 ? "mt-4 sm:mt-5" : ""
                  }`}
                >
                  <span className="inline-block text-[#005FB9] font-bold text-xs uppercase tracking-widest mb-2">
                    Etapa {i + 1}
                  </span>
                  {step.requirements && (
                    <div className="mb-2 flex flex-col gap-1 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#005FB9]/70 mb-0.5">
                        Pré-requisitos
                      </span>
                      {step.requirements.map((req) => (
                        <span
                          key={req}
                          className="flex items-center gap-1.5 text-xs font-semibold text-[#005FB9]"
                        >
                          <svg
                            className="w-3.5 h-3.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {step.disclaimer && (
                    <p className="mt-3 text-xs text-gray-400">
                      {step.disclaimer}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="mt-4 flex justify-center">
          <Link
            href="#formulario-final"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#005FB9] hover:bg-[#00519D] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            Solicitar Atendimento
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
