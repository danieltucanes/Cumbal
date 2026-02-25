import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { IntroduccionSection } from "./components/introduccion-section";
import { HistoriaSection } from "./components/historia-section";
import { CosmologiaSection } from "./components/cosmologia-section";
import { ActividadesSection } from "./components/actividades-section";
import { GaleriaSection } from "./components/galeria-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroduccionSection />
        <HistoriaSection />
        <CosmologiaSection />
        <ActividadesSection />
        <GaleriaSection />
      </main>
      <Footer />
    </div>
  );
}
