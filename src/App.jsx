import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import FloatingCode from './components/FloatingCode';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <FloatingCode />

      {/* Interactive particle canvas */}
      <ParticleBackground />

      {/* Floating gradient orbs */}
      <div className="bg-animation">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      {/* Noise grain texture */}
      <div className="grain-overlay"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
