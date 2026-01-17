import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import TargetSection from "@/components/TargetSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturedSectionStats />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <TargetSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
