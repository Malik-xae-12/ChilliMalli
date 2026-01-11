import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import InfoStrip from "@/components/home/InfoStrip";
import AboutSection from "@/components/home/AboutSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <InfoStrip />
      <AboutSection />
      <SpecialtiesSection />
    </MainLayout>
  );
}
