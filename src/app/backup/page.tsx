import type { Metadata } from "next";
import BackupNavbar from "@/components/BackupNavbar";
import BackupHeroSection from "@/components/BackupHeroSection";
import TrustBar from "@/components/TrustBar";
import TwoPathsSection from "@/components/TwoPathsSection";
import BackupHowItWorks from "@/components/BackupHowItWorks";
import BancoBrasilSection from "@/components/BancoBrasilSection";
import EligibilitySection from "@/components/EligibilitySection";
import BackupProceduresSection from "@/components/BackupProceduresSection";
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

export default function BackupHomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#005FB9] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <BackupNavbar />
      <main id="main-content">
        <BackupHeroSection />
        <TrustBar />
        <BackupProceduresSection />
        <TwoPathsSection />
        <BackupHowItWorks />
        <BancoBrasilSection />
        <EligibilitySection />
        <MidPageForm />
        <FAQSection />
        <FinalCTA />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
