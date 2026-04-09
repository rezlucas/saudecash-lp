"use client";

import { useState } from "react";

const procedimentos = [
  "Cirurgia Eletiva",
  "Odontologia",
  "Estética e Harmonização Facial",
  "Urologia",
  "Ortopedia",
  "Oftalmologia",
  "Ginecologia",
  "Outro procedimento",
];

interface LeadFormProps {
  variant?: "hero" | "mid" | "final";
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  variant = "mid",
  title = "Já sabe o que precisa? A gente cuida do resto.",
  subtitle = "Preencha o formulário e um consultor entrará em contato pelo WhatsApp para entender seu caso, verificar seu crédito disponível e te indicar a melhor clínica.",
}: LeadFormProps) {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    procedimento: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatWhatsApp = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    return value;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "whatsapp" ? formatWhatsApp(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with real API call
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const isHero = variant === "hero";
  const isFinal = variant === "final";

  if (submitted) {
    return (
      <div className="text-center py-8 px-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">
          Recebemos seu contato!
        </h3>
        <p className="text-gray-600 text-sm max-w-sm mx-auto">
          Um consultor da SaúdeCash entrará em contato em breve pelo WhatsApp.
          Fique de olho no seu celular! 📱
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
      aria-label="Formulário de contato SaúdeCash"
    >
      {/* Nome */}
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Seu nome completo <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(obrigatório)</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          value={form.nome}
          onChange={handleChange}
          placeholder="Ex: Maria Silva"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005FB9] focus:border-transparent transition-shadow"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label
          htmlFor="whatsapp"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(obrigatório)</span>
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          required
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="(11) 99999-9999"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005FB9] focus:border-transparent transition-shadow"
        />
      </div>

      {/* Procedimento */}
      <div>
        <label
          htmlFor="procedimento"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Procedimento de interesse{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(obrigatório)</span>
        </label>
        <select
          id="procedimento"
          name="procedimento"
          required
          value={form.procedimento}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#005FB9] focus:border-transparent transition-shadow appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Selecione o procedimento
          </option>
          {procedimentos.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !form.nome || !form.whatsapp || !form.procedimento}
        className="w-full flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] disabled:opacity-50 disabled:cursor-not-allowed text-[#003F7A] font-black text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-1"
      >
        {loading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Conversar com Atendimento
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Sem compromisso. Sem consulta de CPF. Seus dados são protegidos.
      </p>
    </form>
  );
}
