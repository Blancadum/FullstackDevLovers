import { useState } from 'react';
import {
  HeroEnhanced,
  SEO,
  QuickAccessSection,
  MenuExpandible,
  OrientadorSection,
  ModuleSwitch
} from '../components';
import './Home.css';

export function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: '¿Qué nivel se requiere para empezar?',
      answer: 'No requieres experiencia previa. Nuestros cursos comienzan desde fundamentos absolutos. Puedes seguir una ruta estructurada desde conceptos básicos hasta nivel profesional.'
    },
    {
      question: '¿Qué tecnologías puedo aprender?',
      answer: 'Ofrecemos cursos en Backend (Java, Spring Boot, Node.js), Frontend (React, Angular, HTML/CSS), Datos (SQL, MongoDB), Cloud (AWS, Docker, Kubernetes), DevOps y mucho más.'
    },
    {
      question: '¿Cuánto tiempo toma completar un módulo?',
      answer: 'Esto depende de tu ritmo de aprendizaje y disponibilidad. Cada módulo está diseñado para ser completado en 2-4 semanas dedicando 5-10 horas semanales, aunque puedes avanzar a tu propio ritmo.'
    },
    {
      question: '¿Hay proyectos prácticos?',
      answer: 'Sí. Cada módulo incluye ejercicios prácticos, retos reales y proyectos de arquitectura completa (TFC) que simulan escenarios de producción para consolidar tu aprendizaje.'
    },
    {
      question: '¿Puedo cambiar de ruta si quiero explorar otras tecnologías?',
      answer: 'Absolutamente. La plataforma es flexible. Puedes cambiar entre rutas de Backend, Frontend, Cloud y Datos en cualquier momento. Todos los temas están interconectados.'
    },
    {
      question: '¿Necesito instalar algo en mi computadora?',
      answer: 'Sí, pero te guiamos en cada paso. Para los cursos necesitarás IDEs como IntelliJ (Java), VS Code (Frontend), y herramientas como Git, Docker y Node.js. Tenemos guías de instalación completas.'
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

      {/* FAQ Section */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqData.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fafafa',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontSize: '16px'
                  }}
                >
                  <span>{item.question}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    style={{
                      padding: '1.5rem',
                      background: '#fafafa',
                      borderTop: '1px solid #e0e0e0',
                      color: '#666',
                      lineHeight: '1.8'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
