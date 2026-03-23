import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TwoPathsSection from "@/components/TwoPathsSection";
import HowItWorks from "@/components/HowItWorks";
import BancoBrasilSection from "@/components/BancoBrasilSection";
import ProceduresSection from "@/components/ProceduresSection";
import MidPageForm from "@/components/MidPageForm";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
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
        <HeroSection />
        <TrustBar />
        <TwoPathsSection />
        <HowItWorks />
        <BancoBrasilSection />
        <ProceduresSection />
        <MidPageForm />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
