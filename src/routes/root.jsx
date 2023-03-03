import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MottoSection from "../components/MottoSection";

export default function Root() {
  return (
    <div className="gradient" id="hero-section">
      {/* Header and Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Motto Section */}
      <MottoSection />

      {/* Deadlines Section */}

      {/* Footer and Navigation */}
    </div>
  );
}
