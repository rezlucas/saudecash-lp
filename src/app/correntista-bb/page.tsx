import Navbar from "@/components/Navbar";
import BancoBrasilSection from "@/components/BancoBrasilSection";
import EligibilitySection from "@/components/EligibilitySection";
import Footer from "@/components/Footer";

export default function CorrentistaBBPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#005FB9] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <BancoBrasilSection />
        <EligibilitySection />
      </main>
      <Footer />
    </>
  );
}
