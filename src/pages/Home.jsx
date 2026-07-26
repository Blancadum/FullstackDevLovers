import {
  HeroEnhanced,
  SEO,
  QuickAccessSection,
  MenuExpandible,
  OrientadorSection,
  StackDominationSection
} from '../components';
import './Home.css';

export function Home() {
  return (
    <>
      <SEO
        title="Fullstack Dev Lovers - Aprende Backend, DevOps y Cloud"
        description="Plataforma educativa completa para desarrolladores: Java, Spring Boot, Docker, AWS, SQL, Git, Patrones de Diseño y más. Ruta profesional desde cero hasta experto."
        keywords="Fullstack Developer, Java Backend, Docker, AWS, DevOps, Spring Boot, SQL, Patrones de Diseño, Aprendizaje Programación"
        url="https://fullstackdevlovers.com"
      />
      <HeroEnhanced
        title="Fullstack Dev Lovers"
        subtitle="Conquista Backend, DevOps y Cloud"
        description="Java, Spring Boot, Docker, AWS y mucho más. Tu camino hacia la maestría en desarrollo"
        searchPlaceholder="Busca una tecnología..."
      />
      <QuickAccessSection />
      <MenuExpandible defaultOpen={null} />
      <OrientadorSection />
      <StackDominationSection />
    </>
  );
}
