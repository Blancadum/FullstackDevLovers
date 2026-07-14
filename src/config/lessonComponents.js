/**
 * Mapeo de rutas de lecciones a componentes React
 * Permite importar lecciones dinámicamente sin crear URLs profundas
 *
 * Estrategia: Usar TabBox para secciones con 3-5 lecciones (evita URLs profundas)
 * URLs directas para secciones con 6+ lecciones (mejor navegación específica)
 */

// Git - Básicos (5 lecciones - usa TabBox)
import { LessonGitConfiguracionInicial } from '../pages/lessons/git';
import { LessonGitCrearClonarRepos } from '../pages/lessons/git';
import { LessonGitCommits } from '../pages/lessons/git';
import { LessonGitBranches } from '../pages/lessons/git';
import { LessonGitMerge } from '../pages/lessons/git';

// Git - Avanzado (7 lecciones - usa URLs directas)
// (no se incluyen en TabBox)

// Java - BD (2 lecciones - pequeña, pero dejamos URLs)
// (no se incluyen en TabBox aún)

// SQL - Básico (3 lecciones - usa TabBox)
import { LessonSQLIntroduccion } from '../pages/LessonSQLIntroduccion';
import { LessonSQLDDL } from '../pages/LessonSQLDDL';
import { LessonSQLDML } from '../pages/LessonSQLDML';

// SQL - Avanzado (2 lecciones - usa TabBox)
import { LessonSQLJOINs } from '../pages/LessonSQLJOINs';
import { LessonSQLAdvanced } from '../pages/LessonSQLAdvanced';

// Spring Boot - Fundamentos (3 lecciones - usa TabBox)
import { LessonSpringBootIntroduccion } from '../pages/LessonSpringBootIntroduccion';
import { LessonSpringBootSetup } from '../pages/LessonSpringBootSetup';
import { LessonSpringBootControllers } from '../pages/LessonSpringBootControllers';

// Spring Boot - Avanzado (6 lecciones - usa TabBox: 3-5 es rango ideal, pero este tiene 6)
import { LessonSpringBootServices } from '../pages/LessonSpringBootServices';
import { LessonSpringBootJPA } from '../pages/LessonSpringBootJPA';
import { LessonSpringBootValidation } from '../pages/LessonSpringBootValidation';
import { LessonSpringBootTesting } from '../pages/LessonSpringBootTesting';
import { LessonSpringBootSecurity } from '../pages/LessonSpringBootSecurity';
import { LessonOAuth2JWT } from '../pages/LessonOAuth2JWT';

export const lessonComponentMap = {
  // Git - Básicos (5 lecciones)
  '/git/basicos/configuracion-inicial': {
    component: LessonGitConfiguracionInicial,
    label: 'Configuración inicial',
    icon: '⚙️'
  },
  '/git/basicos/crear-clonar-repos': {
    component: LessonGitCrearClonarRepos,
    label: 'Crear y clonar',
    icon: '📁'
  },
  '/git/basicos/commits': {
    component: LessonGitCommits,
    label: 'Commits',
    icon: '💾'
  },
  '/git/basicos/branches': {
    component: LessonGitBranches,
    label: 'Branches',
    icon: '🌿'
  },
  '/git/basicos/merge': {
    component: LessonGitMerge,
    label: 'Merge',
    icon: '🔀'
  },

  // SQL - Básico (3 lecciones)
  '/sql/basicos/introduccion': {
    component: LessonSQLIntroduccion,
    label: 'Introducción',
    icon: '📚'
  },
  '/sql/basicos/ddl': {
    component: LessonSQLDDL,
    label: 'DDL',
    icon: '🏗️'
  },
  '/sql/basicos/dml': {
    component: LessonSQLDML,
    label: 'DML',
    icon: '✏️'
  },

  // SQL - Avanzado (2 lecciones)
  '/sql/avanzado/joins': {
    component: LessonSQLJOINs,
    label: 'JOINs',
    icon: '🔗'
  },
  '/sql/avanzado/consultas-avanzadas': {
    component: LessonSQLAdvanced,
    label: 'Consultas Avanzadas',
    icon: '🔍'
  },

  // Spring Boot - Fundamentos (3 lecciones)
  '/spring-boot/fundamentos/introduccion': {
    component: LessonSpringBootIntroduccion,
    label: 'Introducción',
    icon: '🚀'
  },
  '/spring-boot/fundamentos/configuracion': {
    component: LessonSpringBootSetup,
    label: 'Setup y Configuración',
    icon: '⚙️'
  },
  '/spring-boot/fundamentos/controladores': {
    component: LessonSpringBootControllers,
    label: 'Controladores y Rutas',
    icon: '🛣️'
  },

  // Spring Boot - Avanzado (6 lecciones)
  '/spring-boot/avanzado/servicios': {
    component: LessonSpringBootServices,
    label: 'Servicios',
    icon: '⚙️'
  },
  '/spring-boot/avanzado/jpa-hibernate': {
    component: LessonSpringBootJPA,
    label: 'JPA & Hibernate',
    icon: '🗄️'
  },
  '/spring-boot/avanzado/validacion': {
    component: LessonSpringBootValidation,
    label: 'Validación',
    icon: '✅'
  },
  '/spring-boot/avanzado/testing': {
    component: LessonSpringBootTesting,
    label: 'Testing',
    icon: '🧪'
  },
  '/spring-boot/avanzado/spring-security': {
    component: LessonSpringBootSecurity,
    label: 'Spring Security',
    icon: '🔒'
  },
  '/spring-boot/avanzado/oauth2-jwt': {
    component: LessonOAuth2JWT,
    label: 'OAuth2 & JWT',
    icon: '🔐'
  },
};

/**
 * Obtiene el mapeo de lecciones para un módulo y sección
 */
export function getLessonComponentsForSection(moduleId, sectionId, section) {
  if (moduleId !== 'spring-boot') {
    return null;
  }

  return section.lessons.map(lesson => ({
    ...lesson,
    componentInfo: lessonComponentMap[lesson.link]
  })).filter(lesson => lesson.componentInfo);
}
