"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Preciso saber o valor exato do procedimento?",
    answer:
      "Não. No formulário você informa apenas o procedimento que quer realizar. O consultor te ajuda a entender o valor, verificar o crédito disponível e encontrar as melhores condições — tudo na conversa.",
  },
  {
    question: "Quem pode usar a SaúdeCash?",
    answer:
      "Qualquer correntista do Banco do Brasil que tenha limite disponível na linha 'Financiar bens e serviços'. Não tem certeza se tem limite? É exatamente isso que o consultor verifica com você.",
  },
  {
    question: "Preciso ter conta no Banco do Brasil?",
    answer:
      "Sim. O financiamento é operado pelo BB, então é necessário ser correntista. Se ainda não tem conta, abrir uma é gratuito e pode ser feito pelo app do banco. O consultor pode te orientar nisso também.",
  },
  {
    question: "Preencher o formulário gera algum compromisso?",
    answer:
      "Nenhum. O formulário é o começo de uma conversa — não de um contrato. Você recebe o contato de um consultor, tira suas dúvidas e decide com calma se quer avançar.",
  },
  {
    question: "O formulário consulta meu CPF?",
    answer:
      "Não. O formulário coleta apenas nome, WhatsApp e informações gerais sobre o procedimento. Nenhuma consulta ao CPF é realizada nessa etapa.",
  },
  {
    question: "Em quanto tempo recebo o contato?",
    answer:
      "O time da SaúdeCash entra em contato em até 1 dia útil, pelo WhatsApp ou ligação.",
  },
  {
    question: "Qual é o valor máximo financiado?",
    answer:
      "O financiamento é de até R$ 100.000, em até 60 meses, conforme o limite aprovado pelo Banco do Brasil para o seu perfil.",
  },
  {
    question: "E se meu procedimento não estiver na lista?",
    answer:
      "Fale com um consultor. A rede de especialidades e clínicas credenciadas está em expansão constante e, mesmo que o procedimento não esteja listado, vale verificar com a equipe.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-[#005FB9] transition-colors group"
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

export default function FAQSection() {
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
              Antes de preencher, talvez você{" "}
              <span className="text-[#005FB9]">queira saber:</span>
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Respondemos as dúvidas mais comuns para que você possa preencher o
              formulário com tranquilidade.
            </p>

            <div className="bg-[#005FB9] rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Ainda tem dúvidas?</p>
              <p className="text-blue-100 text-sm mb-4">
                Um consultor pode te ajudar com qualquer pergunta, sem compromisso.
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Falar com consultor
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
