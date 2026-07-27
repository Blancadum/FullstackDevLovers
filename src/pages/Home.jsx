import {
  HeroEnhanced,
  SEO,
  QuickAccessSection,
  MenuExpandible,
  OrientadorSection,
  ModuleSwitch,
  FAQ
} from '../components';
import './Home.css';

export function Home() {
  const faqData = [
    {
      question: '¿Qué nivel se requiere para empezar?',
      answer: (
        <><strong>No requieres experiencia previa.</strong> Nuestros cursos comienzan desde fundamentos absolutos. Puedes seguir una <strong>ruta estructurada</strong> desde conceptos básicos hasta nivel profesional.</>
      )
    },
    {
      question: '¿Qué tecnologías puedo aprender?',
      answer: (
        <>Ofrecemos cursos en <strong>Backend</strong> (Java, Spring Boot, Node.js), <strong>Frontend</strong> (React, Angular, HTML/CSS), <strong>Datos</strong> (SQL, MongoDB), <strong>Cloud</strong> (AWS, Docker, Kubernetes), <strong>DevOps</strong> y mucho más.</>
      )
    },
    {
      question: '¿Cuánto tiempo toma completar un módulo?',
      answer: (
        <>Esto depende de tu ritmo de aprendizaje y disponibilidad. Cada módulo está diseñado para completarse en <strong>2-4 semanas</strong> dedicando <strong>5-10 horas semanales</strong>, aunque puedes avanzar a <strong>tu propio ritmo</strong>.</>
      )
    },
    {
      question: '¿Hay proyectos prácticos?',
      answer: (
        <>Sí. Cada módulo incluye <strong>ejercicios prácticos</strong>, <strong>retos reales</strong> y <strong>proyectos de arquitectura completa (TFC)</strong> que simulan escenarios de producción para consolidar tu aprendizaje.</>
      )
    },
    {
      question: '¿Puedo cambiar de ruta si quiero explorar otras tecnologías?',
      answer: (
        <>Absolutamente. La plataforma es <strong>flexible</strong>. Puedes cambiar entre rutas de Backend, Frontend, Cloud y Datos en <strong>cualquier momento</strong>. Todos los temas están <strong>interconectados</strong>.</>
      )
    },
    {
      question: '¿Necesito instalar algo en mi computadora?',
      answer: (
        <>Sí, pero <strong>te guiamos en cada paso</strong>. Para los cursos necesitarás IDEs como IntelliJ (Java), VS Code (Frontend), y herramientas como Git, Docker y Node.js. Tenemos <strong>guías de instalación completas</strong>.</>
      )
    }
  ];

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
      <ModuleSwitch />

      <FAQ questions={faqData} />
    </>
  );
}
