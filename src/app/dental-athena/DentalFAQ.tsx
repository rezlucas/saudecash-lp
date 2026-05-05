"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Posso comprar o alinhador sem passar por um dentista?",
    answer:
      "Não. O alinhador Dental Athena só é oferecido mediante indicação de um dentista credenciado pela Dental Athena. É o dentista que avalia se o alinhador é adequado para o seu caso durante a consulta.",
  },
  {
    question: "Quanto custa o alinhador Dental Athena?",
    answer:
      "O valor é R$ 6.000. Você pode pagar à vista, a SaúdeCash gera um link de pagamento, ou financiar em até 60 meses pelo Banco do Brasil, com as condições e taxas do BB.",
  },
  {
    question: "Como funciona o financiamento pelo Banco do Brasil?",
    answer:
      "A clínica credenciada Dental Athena lança a proposta de R$ 6.000 pela plataforma da SaúdeCash. A SaúdeCash encaminha ao Banco do Brasil, que analisa seu crédito. Se aprovado, o BB te envia um link direto para contratar o financiamento, tudo sem sair de casa.",
  },
  {
    question: "Preciso ter conta no Banco do Brasil para financiar?",
    answer:
      "Sim. O financiamento é operado diretamente pelo BB, então é necessário ser correntista. Se ainda não tem conta, abrir é gratuito pelo app do banco. Se preferir não abrir conta, pode pagar à vista pelo link da SaúdeCash.",
  },
  {
    question: "Posso pagar à vista mesmo assim?",
    answer:
      "Sim. A SaúdeCash gera um link de pagamento à vista para os casos em que o cliente não quer ou não pode financiar pelo BB. Basta a clínica registrar a proposta na plataforma.",
  },
  {
    question: "Como funciona a simulação do resultado antes de começar?",
    answer:
      "Com o uso de simulação digital, o ortodontista consegue planejar todo o tratamento e mostrar como seu sorriso vai ficar ao final. Você aprova o resultado esperado antes de colocar a primeira plaquinha, sem surpresas.",
  },
  {
    question: "O alinhador é fabricado pela Dental Athena?",
    answer:
      "Não. O produto é fabricado por um fornecedor especializado, mas é comercializado exclusivamente através das clínicas credenciadas pela Dental Athena, via SaúdeCash. Isso garante controle de qualidade e a intermediação do financiamento.",
  },
  {
    question: "Como encontro uma clínica credenciada Dental Athena?",
    answer:
      "Preencha o formulário nesta página. Nossa equipe entra em contato e te indica a clínica mais próxima de você que faz parte da rede credenciada Dental Athena.",
  },
  {
    question: "Quando o tratamento começa após a aprovação do crédito?",
    answer:
      "Assim que o financiamento for contratado (ou o pagamento à vista confirmado), a clínica agenda o início do tratamento com os alinhadores personalizados para o seu caso.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer hover:text-[#005FB9] transition-colors group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0F172A] group-hover:text-[#005FB9] text-sm sm:text-base pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            open
              ? "bg-[#005FB9] text-white rotate-180"
              : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-[#005FB9]"
          }`}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="pb-5 pr-11">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </li>
  );
}

export default function DentalFAQ() {
  return (
    <section
      id="faq"
      className="py-20 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Header */}
          <div className="md:col-span-2">
            <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight"
            >
              Antes de falar com a gente,{" "}
              <span className="text-[#005FB9]">talvez isso responda.</span>
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Tudo sobre o processo de compra e financiamento dos alinhadores Dental Athena via SaúdeCash.
            </p>

            <div className="bg-[#005FB9] rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Ainda tem dúvidas?</p>
              <p className="text-blue-100 text-sm mb-4">
                Nossa equipe explica o processo completo, sem compromisso.
              </p>
              <a
                href="#formulario-final"
                className="inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Falar com a equipe
              </a>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="md:col-span-3 bg-white rounded-2xl px-6 sm:px-8 border border-gray-100 shadow-sm">
            <ul role="list" aria-label="Perguntas frequentes">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
