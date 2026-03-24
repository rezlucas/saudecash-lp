"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Você preenche o formulário",
    description:
      "Nome, WhatsApp e o procedimento que você quer realizar. Leva menos de 1 minuto, sem consulta de CPF e sem nenhum compromisso.",
  },
  {
    number: "02",
    title: "Um consultor entrará em contato",
    description:
      "A equipe da SaúdeCash te liga ou manda mensagem no WhatsApp. Juntos, vocês verificam o limite disponível no Banco do Brasil, escolhem o melhor prazo e encontram a clínica credenciada mais próxima.",
  },
  {
    number: "03",
    title: "Você realiza o procedimento",
    description:
      "Crédito aprovado, é só agendar na clínica. A partir daí, sua única preocupação é a recuperação ou a celebração.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="como-funciona"
      className="py-20 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Como Funciona
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
          >
            Simples assim, e você{" "}
            <span className="text-[#005FB9]">não faz isso sozinho.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Sem burocracia e com total segurança, parcelando em até 60x.
          </p>
        </div>

        {/* Content: Accordion + Image */}
        <div className="bg-gray-50 rounded-3xl p-0 md:p-10 flex flex-col md:flex-row gap-10 items-center shadow-sm border border-gray-100">

          {/* Left: Accordion */}
          <div className="w-full md:w-3/5 flex flex-col gap-2">
            {steps.map((step, i) => {
              const isOpen = activeStep === i;
              return (
                <div
                  key={step.number}
                  className={`rounded-2xl transition-all duration-200 ${
                    isOpen ? "bg-white shadow-md border border-gray-100" : "hover:bg-white/60"
                  }`}
                >
                  <button
                    onClick={() => setActiveStep(i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`step-content-${i}`}
                  >
                    {/* Number circle */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#005FB9] text-white shadow-md shadow-blue-200"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </div>

                    {/* Title */}
                    <span
                      className={`flex-1 font-bold text-base transition-colors duration-200 ${
                        isOpen ? "text-[#0F172A]" : "text-gray-500 group-hover:text-[#005FB9]"
                      }`}
                    >
                      {step.title}
                    </span>

                    {/* Chevron */}
                    <svg
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        isOpen ? "text-[#005FB9] rotate-180" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expandable content */}
                  {isOpen && (
                    <div
                      id={`step-content-${i}`}
                      className="px-5 pb-5"
                    >
                      <div className="md:border-l-4 border-[#005FB9] md:pl-4 ml-[52px]">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 ml-1">
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

          {/* Right: Image */}
          <div className="w-full md:w-2/5 flex justify-center pb-8 md:pb-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-[#005FB9]/10 scale-110" aria-hidden="true" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/pessoas/como-funciona-paciente.webp"
                  alt="Paciente sorrindo após realizar seu procedimento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
