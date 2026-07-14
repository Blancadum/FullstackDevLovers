import { Hero, QuickAccess, About, SEO } from '../components';
import { ModulesSection } from '../components/ModulesSection';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import './Home.css';

export function Home() {
  useNavbarScroll();

  return (
    <>
      <SEO
        title="Fullstack Dev Lovers - Aprende Backend, DevOps y Cloud"
        description="Plataforma educativa completa para desarrolladores: Java, Spring Boot, Docker, AWS, SQL, Git, Patrones de Diseño y más. Ruta profesional desde cero hasta experto."
        keywords="Fullstack Developer, Java Backend, Docker, AWS, DevOps, Spring Boot, SQL, Patrones de Diseño, Aprendizaje Programación"
        url="https://fullstackdevlovers.com"
      />
      <Hero />
      <QuickAccess />
      <ModulesSection />
      <About />
    </>
  );
}
