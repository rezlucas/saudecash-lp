import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white/95 to-transparent">
      <Link
        href="#formulario-final"
        className="flex items-center justify-center gap-2 w-full bg-[#FBFB2F] hover:bg-[#E8E800] text-[#003F7A] font-bold text-base px-7 py-4 rounded-xl shadow-xl transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Falar com Especialista
      </Link>
    </div>
  );
}
