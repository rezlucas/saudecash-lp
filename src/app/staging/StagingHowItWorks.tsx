"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Pra usar a SaúdeCash você precisa:",
    items: [
      "Ser correntista ativo do Banco do Brasil",
      "Já ter feito a consulta e ter o orçamento/indicação do procedimento",
    ],
  },
  {
    number: "2",
    title: "Você preenche o nosso formulário solicitando contato com nosso time",
    items: [
      "Você sinaliza qual é seu procedimento e qual a clínica que fez o seu orçamento",
    ],
  },
  {
    number: "3",
    title:
      "Um especialista entra em contato e te atende de forma humanizada direto pelo WhatsApp para:",
    items: [
      "Entender seu caso e o que você quer/precisa",
      "Validar sua aprovação de crédito para o procedimento no Banco do Brasil",
      "Simular prazo/parcela e orientar as melhores condições",
      "Credenciar a sua clínica (caso ainda não seja credenciada em nosso sistema)",
      "Caso necessário, indicar uma clínica credenciada adequada",
    ],
  },
  {
    number: "4",
    title: "Contratação do crédito em até 60x",
    items: [
      "O crédito é formalizado no Banco do Brasil. A SaúdeCash te orienta no passo a passo e fica junto com você.",
    ],
    disclaimer:
      "*Crédito sujeito a análise e disponibilidade. Exclusivo para correntistas Banco do Brasil com acesso à linha de crédito “Financiamento de bens e serviços”.",
  },
  {
    number: "5",
    title: "Agendamento e procedimento",
    items: [
      "Com crédito aprovado, você agenda e realiza seu procedimento na clínica.",
      "A partir daí, sua única preocupação é a recuperação ou a celebração.",
    ],
  },
];

const SLIDE_DURATION = 6000;

export default function StagingHowItWorks() {
  const [active, setActive] = useState(0);
  const [filled, setFilled] = useState(false);
  const [paused, setPaused] = useState(false);
  const [show, setShow] = useState(false);
  const isLast = active === steps.length - 1;

  const goTo = (i: number) => {
    setActive(i);
  };

  useEffect(() => {
    setShow(false);
    const reveal = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(reveal);
  }, [active]);

  useEffect(() => {
    setFilled(false);
    if (paused) return;

    const startFill = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFilled(true));
    });

    const advance = setTimeout(() => {
      setActive((a) => (a + 1) % steps.length);
    }, SLIDE_DURATION);

    return () => {
      cancelAnimationFrame(startFill);
      clearTimeout(advance);
    };
  }, [active, paused]);

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

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Segmented progress bar */}
          <div className="flex items-center gap-2 mb-5">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => goTo(i)}
                aria-label={`Ir para etapa ${step.number}`}
                aria-current={i === active}
                className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden cursor-pointer"
              >
                {i < active && (
                  <div className="h-full w-full rounded-full bg-[#005FB9]" />
                )}
                {i === active && (
                  <div
                    key={active}
                    className="h-full rounded-full bg-[#005FB9]"
                    style={{
                      animation: `fillBar ${SLIDE_DURATION}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Step numbers */}
          <div className="flex items-center justify-between mb-8 px-1">
            {steps.map((step, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={step.number}
                  onClick={() => goTo(i)}
                  aria-label={`Ir para etapa ${step.number}`}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-black text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#005FB9] text-white shadow-lg shadow-blue-200 scale-110"
                      : isDone
                      ? "bg-[#005FB9] text-white opacity-60"
                      : "bg-blue-50 text-[#005FB9] border border-blue-100 hover:bg-blue-100"
                  }`}
                >
                  {step.number}
                </button>
              );
            })}
          </div>

          {/* Slide content */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 min-h-[260px] flex flex-col">
            <span
              className={`inline-block text-[#005FB9] font-bold text-xs uppercase tracking-widest mb-3 transition-all duration-500 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Etapa {steps[active].number} de {steps.length}
            </span>
            <h3
              className={`font-bold text-xl sm:text-2xl text-[#0F172A] mb-5 transition-all duration-500 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "60ms" }}
            >
              {steps[active].title}
            </h3>
            <ul className="flex flex-col gap-3">
              {steps[active].items.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-500 ${
                    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${120 + i * 100}ms` }}
                >
                  <svg
                    className="w-5 h-5 text-[#005FB9] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {steps[active].disclaimer && (
              <p
                className={`mt-5 text-xs text-gray-400 transition-all duration-500 ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${120 + steps[active].items.length * 100}ms` }}
              >
                {steps[active].disclaimer}
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        {isLast && (
          <div className="mt-6 flex justify-center">
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
        )}
      </div>
    </section>
  );
}
