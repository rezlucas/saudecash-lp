import type { Metadata } from "next";
import StagingNavbar from "./StagingNavbar";
import StagingHeroSection from "./StagingHeroSection";
import TrustBar from "@/components/TrustBar";
import StagingHowItWorks from "./StagingHowItWorks";
import StagingProceduresSection from "./StagingProceduresSection";
import MidPageForm from "@/components/MidPageForm";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function StagingPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#005FB9] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <StagingNavbar />
      <main id="main-content">
        <StagingHeroSection />
        <TrustBar />
        <StagingProceduresSection />
        <StagingHowItWorks />
        <MidPageForm />
        <FAQSection />
        <FinalCTA />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
