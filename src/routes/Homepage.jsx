import HeroSection from "../components/homepage/HeroSection";
import PageContainer from "../components/PageContainer";
import VideosSection from "../components/homepage/VideosSection";
import DeadlinesSection from "../components/homepage/DeadlinesSection";

export default function Homepage() {
  return (
    <PageContainer>
      <HeroSection />
      <VideosSection />
      <DeadlinesSection />
    </PageContainer>
  );
}
