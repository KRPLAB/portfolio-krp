import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { AboutSection } from "./components/AboutSection";
import { TechSection } from "./components/TechSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PapersSection } from "./components/PapersSection";
import { Footer } from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      {/* <PapersSection /> */}
      <Footer />
    </>
  )
}

export default App