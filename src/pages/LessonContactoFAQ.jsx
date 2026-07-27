import { LessonLayout, FAQ } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

const CONTACT_FAQ_QUESTIONS = [
  {
    question: '¿Cómo puedo poneros en contacto para dudas o soporte?',
    answer: 'Puedes escribirnos a info@fullstackdevlovers.com, a través de nuestro formulario de contacto, o por Twitter/Discord. Respondemos en 24-48 horas.'
  },
  {
    question: '¿El contenido de la plataforma es gratuito?',
    answer: 'Sí, todo el contenido educativo de Fullstack Dev Lovers es gratuito y de acceso libre.'
  },
  {
    question: '¿Puedo sugerir un tema o reportar un error en una lección?',
    answer: 'Sí, escríbenos por email o a través del formulario de contacto indicando la URL de la lección y el detalle de tu sugerencia o del error encontrado.'
  }
];

export function LessonContactoFAQ() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Preguntas Frecuentes"
        description="Respuestas a las preguntas más comunes sobre contacto y soporte"
        breadcrumbs={breadcrumbs}
        seoTitle="Preguntas Frecuentes de Contacto | Fullstack Dev Lovers"
        seoDescription="Respuestas a las preguntas frecuentes sobre cómo contactar y recibir soporte en Fullstack Dev Lovers."
        seoKeywords="faq, preguntas frecuentes, contacto, soporte"
        url="https://fullstackdevlovers.com/contacto/general/faq"
        showTableOfContents={false}
      >
        <FAQ title="Preguntas Frecuentes sobre Contacto" questions={CONTACT_FAQ_QUESTIONS} />
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
