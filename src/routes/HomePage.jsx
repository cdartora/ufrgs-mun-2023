import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";
import VideosSection from "../components/VideosSection";
import DeadlinesSection from "../components/DeadlinesSection";

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <VideosSection />
      <DeadlinesSection />
    </PageContainer>
  );
}
