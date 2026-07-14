import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonRefactoring() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '♻️', title: 'Refactorización', definition: 'Proceso de reestructurar código sin cambiar funcionalidad', example: 'Renombrar variables, extraer métodos' },
    { icon: '✅', title: 'Código Limpio', definition: 'Código que es fácil de leer, mantener y entender', example: 'Nombres claros, funciones pequeñas' },
    { icon: '📏', title: 'SOLID', definition: 'Principios de diseño para código mantenible', example: 'S: Single Responsibility, O: Open/Closed' },
    { icon: '🔄', title: 'DRY (Don\'t Repeat Yourself)', definition: 'Eliminar duplicación de código', example: 'Extraer lógica común en funciones' },
  ];

  const exercises = [
    {
      title: 'Refactorizar código duplicado',
      description: 'Identifica y extrae código duplicado en funciones',
      solution: `// ANTES: Código duplicado
public int calcularSumaImpares() {
    int suma = 0;
    for (int i = 1; i <= 10; i += 2) suma += i;
    return suma;
}

public int calcularSumaPares() {
    int suma = 0;
    for (int i = 0; i <= 10; i += 2) suma += i;
    return suma;
}

// DESPUÉS: Refactorizado
private int calcularSuma(boolean impares) {
    int suma = 0;
    int inicio = impares ? 1 : 0;
    for (int i = inicio; i <= 10; i += 2) suma += i;
    return suma;
}`
    },
  ];

  const sections = [
    {
      title: 'Refactorización y SOLID',
      content: (
        <p>La refactorización es mejorar la estructura de código sin alterar su comportamiento. SOLID son principios fundamentales para escribir código mantenible.</p>
      )
    },
  ];

  const keyPoints = [
    'Refactorización: mejorar código sin cambiar funcionalidad',
    'Código limpio es más mantenible y legible',
    'SOLID: conjunto de 5 principios de diseño',
    'Single Responsibility: una clase, una razón para cambiar',
    'Open/Closed: abierto para extensión, cerrado para modificación',
    'Liskov Substitution: subclases reemplazan clases base',
    'Interface Segregation: interfaces específicas, no genéricas',
    'Dependency Inversion: depender de abstracciones, no implementaciones',
  ];

  const summary = 'La refactorización mejora la calidad del código. Los principios SOLID garantizan código flexible, mantenible y escalable.';

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}