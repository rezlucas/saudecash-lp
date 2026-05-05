import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
import EligibilitySection from "@/components/EligibilitySection";
import DentalNavbar from "./DentalNavbar";
import DentalFAQ from "./DentalFAQ";

/* ═══════════════════════════════════════════════════════════════════════════
   PLACEHOLDER DE IMAGEM
   Mostra visualmente onde cada foto deve entrar e o que ela deve mostrar.
   Quando a imagem chegar, substitua o <ImagePlaceholder> por <Image>.
═══════════════════════════════════════════════════════════════════════════ */

function ImagePlaceholder({
  description,
  className = "",
  round = false,
}: {
  description: string;
  className?: string;
  round?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 bg-[#dbeafe] border-2 border-dashed border-[#93c5fd] ${round ? "rounded-full" : "rounded-2xl"} p-6 text-center ${className}`}
      role="img"
      aria-label={description}
    >
      {/* Ícone de câmera */}
      <svg
        className="w-10 h-10 text-[#3b82f6] opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
      <p className="text-[#1d4ed8] text-xs font-semibold leading-snug max-w-[180px]">
        {description}
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Alinhadores Dental Athena — Financie pelo Banco do Brasil com a SaúdeCash",
  description:
    "Seu dentista indicou o alinhador Dental Athena. A SaúdeCash financia: R$ 6.000 em até 60x pelo Banco do Brasil. Alinhador removível, com planejamento por simulação digital e resultado previsível antes de começar.",
  keywords: ["alinhadores dental athena", "financiamento alinhador", "alinhador banco do brasil", "saudecash dental", "ortodontia parcelada"],
  openGraph: {
    title: "Alinhadores Dental Athena — Financie com a SaúdeCash",
    description: "R$ 6.000 em até 60x pelo Banco do Brasil. Seu sorriso começa na clínica do seu dentista.",
    type: "website",
    locale: "pt_BR",
    siteName: "SaúdeCash",
  },
};

/* ─── Hero ───────────────────────────────────────────────────────────────── */
// Estilo clínica dental: foto em círculo à direita, elementos geométricos
// decorativos flutuando e barra de stats escura na base.

function HeroDentalAthena() {
  return (
    <section className="relative bg-[#005FB9] overflow-hidden" aria-labelledby="hero-heading">

      {/* ── Elementos decorativos geométricos (estilo dental clinic) ── */}
      {/* Quadradinhos com borda flutuantes */}
      <div className="absolute top-10 left-[48%] w-5 h-5 border-2 border-white/25 rounded-md rotate-12" aria-hidden="true" />
      <div className="absolute top-6  left-[55%] w-3 h-3 border-2 border-[#FBFB2F]/35 rounded-sm" aria-hidden="true" />
      <div className="absolute top-20 left-[52%] w-4 h-4 border-2 border-white/15 rounded-md -rotate-6" aria-hidden="true" />
      <div className="absolute bottom-28 left-[44%] w-5 h-5 border-2 border-white/20 rounded-md rotate-45" aria-hidden="true" />
      <div className="absolute top-1/2 left-6  w-3 h-3 border-2 border-[#FBFB2F]/25 rounded-sm rotate-12" aria-hidden="true" />
      <div className="absolute top-8  right-8  w-4 h-4 border-2 border-white/20 rounded-md" aria-hidden="true" />
      <div className="absolute bottom-32 right-16 w-3 h-3 border-2 border-[#FBFB2F]/30 rounded-sm rotate-12" aria-hidden="true" />

      {/* Grid de pontos — canto superior direito */}
      <div className="absolute top-6 right-[22%] flex flex-col gap-1.5" aria-hidden="true">
        {[0,1,2].map(r => (
          <div key={r} className="flex gap-1.5">
            {[0,1,2,3].map(c => <div key={c} className="w-1 h-1 rounded-full bg-white/20" />)}
          </div>
        ))}
      </div>
      {/* Grid de pontos — esquerda */}
      <div className="absolute bottom-20 left-6 flex flex-col gap-1.5" aria-hidden="true">
        {[0,1,2].map(r => (
          <div key={r} className="flex gap-1.5">
            {[0,1,2,3].map(c => <div key={c} className="w-1 h-1 rounded-full bg-white/15" />)}
          </div>
        ))}
      </div>

      {/* Setas decorativas */}
      <p className="absolute top-1/2 left-3 -translate-y-1/2 text-[#FBFB2F]/20 font-black text-xs tracking-[0.25em] [writing-mode:vertical-lr] rotate-180 select-none" aria-hidden="true">› › › ›</p>
      <p className="absolute bottom-24 left-[38%] text-white/10 font-black text-xs tracking-[0.4em] select-none" aria-hidden="true">› › › › ›</p>

      {/* ── Conteúdo principal ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0 md:pt-20 md:pb-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pb-16 md:pb-20">

          {/* Esquerda: texto */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-6">
              <div className="w-1 h-7 rounded-full bg-[#FBFB2F]" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#FBFB2F]">Parceria exclusiva</p>
                <p className="text-sm font-semibold text-white leading-tight">Dental Athena × SaúdeCash</p>
              </div>
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-6">
              Seu dentista indicou.{" "}
              <span className="text-[#FBFB2F] whitespace-nowrap">A SaúdeCash financia.</span>
              <br />
              <span className="whitespace-nowrap">Seu sorriso começa agora.</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-md">
              O alinhador Dental Athena custa R$ 6.000. Você escolhe: paga à vista pelo link que a SaúdeCash gera, ou parcela em{" "}
              <strong className="text-white">até 60x pelo Banco do Brasil.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#formulario-final"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                Quero meu sorriso
              </Link>
              <Link
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/25 transition-all duration-200"
              >
                Como funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Imagem em círculo — mobile only */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-[16px] border-[#FBFB2F]/10 -m-4" aria-hidden="true" />
                <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/dental-athena/people-images/girl-with-beautiful-smile-dentist.webp"
                    alt="Paciente com sorriso perfeito após tratamento com alinhadores Dental Athena"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="224px"
                  />
                </div>
                {/* Mini pill flutuante */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-1.5 flex items-center gap-3 border border-gray-100 whitespace-nowrap">
                  <span className="text-xs font-black text-[#005FB9]">R$ 6.000</span>
                  <div className="w-px h-4 bg-gray-200" aria-hidden="true" />
                  <span className="text-xs font-black text-[#003F7A]">em até 60×</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-blue-200">
              *Crédito sujeito a análise. Exclusivo para correntistas BB com linha &ldquo;Financiar bens e serviços&rdquo;.
            </p>
          </div>

          {/* Direita: foto em círculo com cards flutuantes */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative">
              {/* Anel decorativo externo */}
              <div className="absolute inset-0 rounded-full border-[20px] border-[#FBFB2F]/10 -m-5" aria-hidden="true" />
              {/* Anel médio */}
              <div className="absolute inset-0 rounded-full border-[8px] border-white/10 -m-2" aria-hidden="true" />

              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/dental-athena/people-images/girl-with-beautiful-smile-dentist.webp"
                  alt="Paciente com sorriso perfeito após tratamento com alinhadores Dental Athena"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* Card flutuante inferior esquerdo */}
              <div className="absolute -bottom-3 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-[#005FB9] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.4 0-4.5 1.2-5.4 3.1C5.7 8 5.7 10 6.5 12c.4.9.8 1.8.8 3 0 1.7.8 3 2.7 3 1 0 1.8-.6 2-1.5.2.9 1 1.5 2 1.5 1.9 0 2.7-1.3 2.7-3 0-1.2.4-2.1.8-3 .8-2 .8-4-.1-5.9C16.5 4.2 14.4 3 12 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Alinhadores</p>
                  <p className="text-sm font-black text-[#005FB9] leading-tight">100% personalizados</p>
                </div>
              </div>

              {/* Card flutuante superior direito */}
              <div className="absolute -top-4 -right-4 bg-[#FBFB2F] rounded-2xl shadow-xl p-3 text-center">
                <p className="text-[10px] text-[#003F7A] font-semibold leading-none mb-0.5">Em até</p>
                <p className="text-2xl font-black text-[#003F7A] leading-none">60×</p>
                <p className="text-[10px] text-[#003F7A] font-medium leading-none mt-0.5">parcelas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barra de stats escura na base (como nas referências) ── */}
      <div className="relative bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "R$ 6.000", label: "Valor do alinhador" },
              { value: "60×",      label: "Parcelas pelo Banco do Brasil" },
              { value: "À vista",  label: "Também disponível via link SC" },
              { value: "100%",     label: "Alinhadores personalizados" },
            ].map((s, i) => (
              <div key={s.label} className={`py-5 ${i === 0 ? "pr-6" : "px-6"}`}>
                <p className="text-xl font-black text-[#FBFB2F] leading-tight">{s.value}</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ──────────────────────────────────────────────────────────── */
// Layout: pills horizontais com fundo branco/opaco — diferente da barra da LP principal

const trustItems = [
  {
    icon: (
      // Dente
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.4 0-4.5 1.2-5.4 3.1C5.7 8 5.7 10 6.5 12c.4.9.8 1.8.8 3 0 1.7.8 3 2.7 3 1 0 1.8-.6 2-1.5.2.9 1 1.5 2 1.5 1.9 0 2.7-1.3 2.7-3 0-1.2.4-2.1.8-3 .8-2 .8-4-.1-5.9C16.5 4.2 14.4 3 12 3z" />
      </svg>
    ),
    text: "Alinhadores personalizados",
  },
  {
    icon: (
      // Ortodontista/médico
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    text: "Validado por ortodontistas",
  },
  {
    icon: (
      // Simulação / olho
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Resultado simulado antes de começar",
  },
  {
    icon: (
      // Crédito / cartão
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    text: "Financiamento Banco do Brasil",
  },
];

function TrustBarDental() {
  return (
    <section className="bg-[#00519D] py-5" aria-label="Diferenciais Dental Athena + SaúdeCash">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center sm:justify-between gap-3">
          {trustItems.map((item) => (
            <li key={item.text}>
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white">
                <span className="text-[#FBFB2F] shrink-0">{item.icon}</span>
                <span className="text-xs font-semibold whitespace-nowrap">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Benefits ───────────────────────────────────────────────────────────── */
// Layout: lista de features horizontais com divisores — sem cards, sem grid de caixas.
// Muito diferente da grade de cards da LP principal.

const pillars = [
  {
    icon: (
      // Balança / custo-benefício
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
    title: "Custo-Benefício Único",
    description: "O equilíbrio perfeito entre alta tecnologia e preço acessível para você conquistar seu sorriso estético.",
  },
  {
    icon: (
      // Alinhador removível — ícone de dente com seta de remoção
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.4 0-4.5 1.2-5.4 3.1C5.7 8 5.7 10 6.5 12c.4.9.8 1.8.8 3 0 1.7.8 3 2.7 3 1 0 1.8-.6 2-1.5.2.9 1 1.5 2 1.5 1.9 0 2.7-1.3 2.7-3 0-1.2.4-2.1.8-3 .8-2 .8-4-.1-5.9C16.5 4.2 14.4 3 12 3z" />
      </svg>
    ),
    title: "Livre de Limitações",
    description: "Remova para comer o que quiser e escovar os dentes sem esforço. Liberdade total na sua rotina.",
  },
  {
    icon: (
      // Microscópio / ciência
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Ciência do Movimento",
    description: "Segurança garantida por ortodontistas e simulações digitais que aceleram seus resultados.",
  },
  {
    icon: (
      // Ferramenta de precisão / calibre
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Ajuste Perfeito",
    description: "Personalização total através de corte automatizado, garantindo que o alinhador se adapte perfeitamente à sua boca.",
  },
  {
    icon: (
      // Olho / simulação de resultado
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Sorriso Previsível",
    description: "Use a tecnologia a seu favor. Com IA e 3D, você sabe exatamente como será o resultado final antes de começar.",
  },
  {
    icon: (
      // Alinhador confortável / sparkles
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Conforto Imbatível",
    description: "Polímeros de ponta que tornam o uso tão discreto e leve que você até esquece que está usando.",
  },
];

function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-white" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Por que Dental Athena
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight max-w-lg">
              Alta tecnologia para um{" "}
              <span className="text-[#005FB9]">sorriso que você já vê antes de começar.</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs sm:text-right">
              Conforto, precisão e resultado previsível em cada plaquinha.
            </p>
          </div>
        </div>

        {/* Lista horizontal de features — 2 colunas com divisores */}
        <div className="grid sm:grid-cols-2 gap-x-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`flex gap-5 py-7 ${i < pillars.length - 2 || (pillars.length % 2 === 0 && i < pillars.length - 2) ? "border-b border-gray-100" : ""}`}
              style={{ borderBottom: i < pillars.length - 2 ? undefined : i === pillars.length - 2 || i === pillars.length - 1 ? "none" : undefined }}
            >
              {/* Ícone com número sobreposto */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center text-[#005FB9]">
                  {pillar.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#005FB9] text-white text-[9px] font-black flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Texto */}
              <div className="flex-1 pt-1">
                <h3 className="font-black text-[#0F172A] text-base mb-1.5 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────────────── */
// Layout: timeline vertical com ícones dentais

const steps = [
  {
    title: "Seu dentista indica o alinhador",
    description: "Na sua consulta em uma clínica credenciada pela Dental Athena, o dentista avalia seu caso e indica o alinhador. A partir daí, você decide como quer pagar.",
    tag: "Na clínica",
    icon: (
      // Dentista / pessoa
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "A clínica gera a proposta via SaúdeCash",
    description: "A clínica lança a proposta de R$ 6.000 pela plataforma da SaúdeCash. Se você optar pelo financiamento, a SaúdeCash encaminha ao Banco do Brasil para análise de crédito.",
    tag: "Rápido e digital",
    icon: (
      // Plataforma / proposta
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "O BB aprova e você começa o tratamento",
    description: "Se o crédito for aprovado, o Banco do Brasil te envia um link direto para contratar o financiamento. Contratado — ou pago à vista — é só começar a usar os alinhadores.",
    tag: "Transformação real",
    icon: (
      // Dente / sorriso
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.4 0-4.5 1.2-5.4 3.1C5.7 8 5.7 10 6.5 12c.4.9.8 1.8.8 3 0 1.7.8 3 2.7 3 1 0 1.8-.6 2-1.5.2.9 1 1.5 2 1.5 1.9 0 2.7-1.3 2.7-3 0-1.2.4-2.1.8-3 .8-2 .8-4-.1-5.9C16.5 4.2 14.4 3 12 3z" />
      </svg>
    ),
  },
];

function HowItWorksDental() {
  return (
    <section id="como-funciona" className="py-20 bg-[#EFF6FF]" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#005FB9] font-bold text-sm uppercase tracking-widest mb-3">
            Como Funciona
          </span>
          <h2 id="how-heading" className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4 tracking-tight">
            Do consultório ao sorriso novo.{" "}
            <span className="text-[#005FB9]">Mais simples do que parece.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            O processo começa com o seu dentista e a SaúdeCash cuida do resto.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-6 md:gap-10">
              <div className="flex flex-col items-center shrink-0 w-16">
                <div className="w-16 h-16 rounded-2xl bg-[#005FB9] text-white flex items-center justify-center shadow-md shadow-blue-200 shrink-0 z-10">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px border-l-2 border-dashed border-[#005FB9]/25 my-3" aria-hidden="true" />
                )}
              </div>
              <div className={`flex-1 pt-3 ${i < steps.length - 1 ? "pb-12" : ""}`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-black text-[#005FB9] bg-white border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white border border-gray-100 px-2.5 py-1 rounded-full">
                      {step.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-black text-[#0F172A] text-xl tracking-tight mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] shadow-sm border border-blue-100 mt-14 mb-10">
          <Image
            src="/images/dental-athena/people-images/image-woman-dentist.webp"
            alt="Dentista realizando atendimento odontológico no consultório Dental Athena"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="flex justify-center">
          <Link href="#formulario-final" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Quero saber mais
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Technology Gallery ─────────────────────────────────────────────────── */

const galleryItems = [
  { src: "/images/dental-athena/gifs/Gif%204%20.gif", alt: "Simulação do movimento dentário com alinhador Dental Athena", caption: "Simulação digital", sub: "Veja o tratamento completo antes de colocar a primeira plaquinha" },
  { src: "/images/dental-athena/gifs/Gif%201.gif",    alt: "Corte automatizado do alinhador Dental Athena",              caption: "Corte automatizado", sub: "Precisão que garante encaixe perfeito para cada boca" },
  { src: "/images/dental-athena/gifs/Gif%203.gif",    alt: "Resultado com alinhador Dental Athena",                       caption: "Resultado com IA e 3D", sub: "Você sabe exatamente onde vai chegar antes de começar" },
];

function TechnologySection() {
  return (
    <section id="tecnologia" className="py-20 bg-[#0F172A]" aria-labelledby="tech-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FBFB2F] font-bold text-sm uppercase tracking-widest mb-3">O Alinhador em Ação</span>
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Você vê o resultado{" "}
            <span className="text-[#FBFB2F]">antes mesmo de começar.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Com simulação digital e corte automatizado, o alinhador é planejado para o seu caso — e o resultado final não é surpresa.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {galleryItems.map((item) => (
            <div key={item.src} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-[#FBFB2F]/30 transition-all duration-200 flex flex-col">
              <div className="h-1 bg-[#FBFB2F] shrink-0" aria-hidden="true" />
              {/* Imagem: altura fixa idêntica nos três cards */}
              <div className="relative w-full h-60 bg-[#1e293b] overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              {/* Texto: altura fixa para garantir cards iguais */}
              <div className="px-4 py-4 bg-[#1e293b] h-20 flex flex-col justify-center">
                <p className="text-sm font-black text-white leading-tight">{item.caption}</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            { value: "3D",         label: "Simulação do resultado final" },
            { value: "IA",         label: "Planejamento do tratamento" },
            { value: "Automático", label: "Corte de precisão sob medida" },
            { value: "22h",        label: "Uso diário recomendado" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0F172A] px-6 py-5 text-center">
              <p className="text-xl font-black text-[#FBFB2F] mb-1 leading-tight">{s.value}</p>
              <p className="text-xs text-gray-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Financing ──────────────────────────────────────────────────────────── */

const metrics = [
  { value: "R$ 6.000", label: "Valor do alinhador" },
  { value: "60×",      label: "Parcelas pelo Banco do Brasil" },
  { value: "À vista",  label: "Pague via link SaúdeCash" },
  { value: "0%",       label: "Consulta de CPF no formulário" },
];

const financingBenefits = [
  "Financiamento operado pelo Banco do Brasil, não por uma financeira",
  "Até 60 meses para pagar, com parcelas e taxas do BB",
  "Pagamento à vista também disponível via link gerado pela SaúdeCash",
  "O BB analisa seu crédito e te envia o link direto para contratar",
];

function FinancingSection() {
  return (
    <section id="financiamento" className="py-20 bg-[#003F7A]" aria-labelledby="financing-heading">
      {/* Faixa de métricas */}
      <div className="border-b border-white/10 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#003F7A] px-6 py-5 text-center">
                <p className="text-xl font-black text-[#FBFB2F] mb-1 leading-tight">{m.value}</p>
                <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-[#FBFB2F] flex items-center justify-center shrink-0 p-2.5">
                <Image src="/images/logos/banco-brasil-logo-curta.svg" alt="Banco do Brasil" width={44} height={44} />
              </div>
              <div>
                <p className="text-[#FBFB2F] text-[10px] font-bold uppercase tracking-widest mb-0.5">Financiamento exclusivo</p>
                <p className="text-white font-black text-xl leading-tight mb-0.5">Banco do Brasil</p>
                <p className="text-blue-200 text-sm">A segurança do maior banco público do Brasil.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/images/dental-athena/people-images/male-female-dentists-working-office-together-first-person-view.webp"
                alt="Dentistas trabalhando juntos no consultório da Dental Athena"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 border border-white/15 text-center">
                <p className="text-2xl font-black text-white mb-0.5">+500</p>
                <p className="text-xs text-blue-200">pacientes financiados</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/15 text-center">
                <p className="text-2xl font-black text-white mb-0.5">4.9★</p>
                <p className="text-xs text-blue-200">avaliação média</p>
              </div>
            </div>
          </div>

          <div className="text-white">
            <span className="inline-block text-[#FBFB2F] font-bold text-sm uppercase tracking-widest mb-4">O Crédito</span>
            <h2 id="financing-heading" className="text-2xl sm:text-3xl font-black mb-6 leading-tight tracking-tight">
              R$ 6.000 que não precisam{" "}
              <span className="text-[#FBFB2F] whitespace-nowrap">sair do seu bolso de uma vez.</span>
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              O financiamento do alinhador é operado diretamente pelo Banco do Brasil. A clínica credenciada Dental Athena lança a proposta pela plataforma da SaúdeCash, o BB analisa e, se aprovado, te manda um link para contratar — sem sair de casa. Prefere pagar à vista? A SaúdeCash também gera o link de pagamento para você.
            </p>
            <ul className="flex flex-col gap-0 mb-8 divide-y divide-white/10">
              {financingBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 py-3">
                  <svg className="w-4 h-4 text-[#FBFB2F] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-blue-100 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-blue-300 italic mb-6">
              *Disponibilidade de crédito sujeita à análise do Banco do Brasil. Exclusivo para correntistas BB com acesso à linha &lsquo;Financiar bens e serviços&rsquo;.
            </p>
            <Link href="#formulario-final" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Simular meu financiamento
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

/* ─── Final CTA ──────────────────────────────────────────────────────────── */

function FinalCTADental() {
  return (
    <section className="pt-28 pb-20 bg-[#005FB9] relative overflow-hidden" aria-labelledby="final-cta-heading">
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="cta-stripes" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-stripes)" />
      </svg>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-[48px] border-[#FBFB2F]/10 translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-[#FBFB2F] font-bold text-sm uppercase tracking-widest mb-4">
            É rápido e sem compromisso
          </span>
          <h2 id="final-cta-heading" className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Tem dúvida sobre como{" "}
            <span className="text-[#FBFB2F] whitespace-nowrap">financiar ou pagar?</span>
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto">
            Preencha o formulário. Nossa equipe entra em contato, te explica o processo e te ajuda a encontrar a clínica Dental Athena mais próxima de você.
          </p>
        </div>
        <div id="formulario-final" className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FBFB2F]">
          <div className="p-0 sm:p-10">
            <HubSpotForm />
          </div>
        </div>
        <p className="text-center text-blue-200 text-xs mt-6">
          Sem consulta de CPF. Seus dados são protegidos e não serão compartilhados.
        </p>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function DentalAthenaPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#005FB9] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Pular para o conteúdo principal
      </a>
      <DentalNavbar />
      <main id="main-content">
        <HeroDentalAthena />
        <TrustBarDental />
        <BenefitsSection />
        <HowItWorksDental />
        <TechnologySection />
        <FinancingSection />
        <EligibilitySection />
        <DentalFAQ />
        <FinalCTADental />
      </main>
      <Footer />
    </>
  );
}
