import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import TargetSection from "@/components/TargetSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <TargetSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
