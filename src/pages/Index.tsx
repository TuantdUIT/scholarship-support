import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProfileBuilder from "@/components/ProfileBuilder";
import ScholarshipDashboard from "@/components/ScholarshipDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScholarshipDashboard />
        <ProfileBuilder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;