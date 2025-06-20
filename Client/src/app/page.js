import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/Sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen overflow-x-hidden bg-white">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
