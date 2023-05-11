import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import VideosSection from "../components/VideosSection";
import DeadlinesSection from "../components/DeadlinesSection";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <main className="App">
      <header className="text-zinc-200">
        <NavBar />
        <HeroSection />
      </header>
      <section className="relative">
        <VideosSection />
      </section>
      <DeadlinesSection />
      <Footer />
    </main>
  );
}
