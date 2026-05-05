"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Financiamento", href: "#financiamento" },
  { label: "FAQ", href: "#faq" },
];

export default function DentalNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo + badge agrupados à esquerda */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/">
            <Image
              src="/images/logos/saudecash-logo.svg"
              alt="SaúdeCash"
              width={140}
              height={36}
              priority
            />
          </Link>
          <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-gray-500">em parceria com</span>
            <span className="text-xs font-black text-[#005FB9]">Dental Athena</span>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#005FB9] transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#formulario-final"
          className="hidden md:inline-flex items-center gap-2 bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 shadow-sm"
        >
          Quero meu sorriso
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-[#005FB9] hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#formulario-final"
            className="mt-3 flex items-center justify-center bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-sm px-5 py-3 rounded-xl transition-colors duration-150"
            onClick={() => setMenuOpen(false)}
          >
            Quero meu sorriso
          </Link>
        </div>
      )}
    </header>
  );
}
