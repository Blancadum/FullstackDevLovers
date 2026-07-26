/**
 * Mapeo de rutas de lecciones a componentes React
 * Permite importar lecciones dinámicamente sin crear URLs profundas
 *
 * Estrategia: Usar TabBox para secciones con 3-5 lecciones (evita URLs profundas)
 * URLs directas para secciones con 6+ lecciones (mejor navegación específica)
 */

// Git - Básicos (7 lecciones - usa TabBox)
import {
  LessonGitConfiguracionInicial,
  LessonGitCrearClonarRepos,
  LessonGitCommits,
  LessonGitBranches,
  LessonGitMerge,
  LessonGitAlias,
  LessonGitErroresComunes
} from '../pages/lessons/git';

// Git - Avanzado (7 lecciones - usa URLs directas)
import {
  LessonGitPushPullFetch,
  LessonGitPullRequests,
  LessonGitPlataformasRemotas,
  LessonGitWorkflow,
  LessonGitGitHub,
  LessonGitGitLab,
  LessonGitBitbucket
} from '../pages/lessons/git';

// Git - Prácticas (5 lecciones)
import {
  LessonGitPracticaConfigura,
  LessonGitPracticaRepositorio,
  LessonGitPracticaCommits,
  LessonGitPracticaRamas,
  LessonGitPracticaMerge
} from '../pages/lessons/git';

// AWS - Comparaciones
import { ComparisonEC2VsLambda } from '../pages/ComparisonEC2VsLambda';
import { ComparisonRDSVsDynamoDB } from '../pages/ComparisonRDSVsDynamoDB';
import { ComparisonS3VsDocker } from '../pages/ComparisonS3VsDocker';
import { ComparisonDockerVsKubernetes } from '../pages/ComparisonDockerVsKubernetes';

// Java - BD (2 lecciones - pequeña, pero dejamos URLs)
// (no se incluyen en TabBox aún)

// SQL - Básico (3 lecciones - usa TabBox)
import {
  LessonSQLIntroduccion,
  LessonSQLDDL,
  LessonSQLDML,
  LessonSQLJOINs,
  LessonSQLAdvanced
} from '../pages/lessons/sql';

// Spring Boot - Fundamentos (3 lecciones - usa TabBox)
import {
  LessonSpringBootIntroduccion,
  LessonSpringBootSetup,
  LessonSpringBootControllers,
  LessonSpringBootServices,
  LessonSpringBootJPA,
  LessonSpringBootValidation,
  LessonSpringBootTesting,
  LessonSpringBootSecurity,
  LessonOAuth2JWT
} from '../pages/lessons/spring-boot';

export const lessonComponentMap = {
  // Git - Básicos (5 lecciones)
  '/git/basicos/configuracion-inicial': {
    component: LessonGitConfiguracionInicial,
    label: 'Configuración inicial'
  },
  '/git/basicos/crear-clonar-repos': {
    component: LessonGitCrearClonarRepos,
    label: 'Crear y clonar'
  },
  '/git/basicos/commits': {
    component: LessonGitCommits,
    label: 'Commits'
  },
  '/git/basicos/branches': {
    component: LessonGitBranches,
    label: 'Branches'
  },
  '/git/basicos/merge': {
    component: LessonGitMerge,
    label: 'Merge'
  },
  '/git/basicos/alias': {
    component: LessonGitAlias,
    label: 'Alias'
  },
  '/git/basicos/errores-comunes': {
    component: LessonGitErroresComunes,
    label: 'Errores Comunes'
  },

  // Git - Avanzado (7 lecciones)
  '/git/avanzado/push-pull-fetch': {
    component: LessonGitPushPullFetch,
    label: 'Push, Pull y Fetch'
  },
  '/git/avanzado/pull-requests': {
    component: LessonGitPullRequests,
    label: 'Pull Requests'
  },
  '/git/avanzado/plataformas-remotas': {
    component: LessonGitPlataformasRemotas,
    label: 'Plataformas Remotas'
  },
  '/git/avanzado/workflow': {
    component: LessonGitWorkflow,
    label: 'Git Workflow'
  },
  '/git/avanzado/github': {
    component: LessonGitGitHub,
    label: 'GitHub'
  },
  '/git/avanzado/gitlab': {
    component: LessonGitGitLab,
    label: 'GitLab'
  },
  '/git/avanzado/bitbucket': {
    component: LessonGitBitbucket,
    label: 'Bitbucket'
  },

  // Git - Prácticas (5 lecciones)
  '/git/practicas/configura-tu-git': {
    component: LessonGitPracticaConfigura,
    label: 'Configura tu Git'
  },
  '/git/practicas/crea-tu-primer-repositorio': {
    component: LessonGitPracticaRepositorio,
    label: 'Crea tu Primer Repositorio'
  },
  '/git/practicas/haz-tus-primeros-commits': {
    component: LessonGitPracticaCommits,
    label: 'Tus Primeros Commits'
  },
  '/git/practicas/trabaja-con-ramas': {
    component: LessonGitPracticaRamas,
    label: 'Trabaja con Ramas'
  },
  '/git/practicas/resuelve-conflictos-de-merge': {
    component: LessonGitPracticaMerge,
    label: 'Resuelve Conflictos'
  },

  // SQL - Básico (3 lecciones)
  '/sql/basicos/introduccion': {
    component: LessonSQLIntroduccion,
    label: 'Introducción'
  },
  '/sql/basicos/ddl': {
    component: LessonSQLDDL,
    label: 'DDL'
  },
  '/sql/basicos/dml': {
    component: LessonSQLDML,
    label: 'DML'
  },

  // SQL - Avanzado (2 lecciones)
  '/sql/avanzado/joins': {
    component: LessonSQLJOINs,
    label: 'JOINs'
  },
  '/sql/avanzado/consultas-avanzadas': {
    component: LessonSQLAdvanced,
    label: 'Consultas Avanzadas'
  },

  // Spring Boot - Fundamentos (3 lecciones)
  '/spring-boot/fundamentos/introduccion': {
    component: LessonSpringBootIntroduccion,
    label: 'Introducción'
  },
  '/spring-boot/fundamentos/configuracion': {
    component: LessonSpringBootSetup,
    label: 'Setup y Configuración'
  },
  '/spring-boot/fundamentos/controladores': {
    component: LessonSpringBootControllers,
    label: 'Controladores y Rutas'
  },

  // Spring Boot - Avanzado (6 lecciones)
  '/spring-boot/avanzado/servicios': {
    component: LessonSpringBootServices,
    label: 'Servicios'
  },
  '/spring-boot/avanzado/jpa-hibernate': {
    component: LessonSpringBootJPA,
    label: 'JPA & Hibernate'
  },
  '/spring-boot/avanzado/validacion': {
    component: LessonSpringBootValidation,
    label: 'Validación'
  },
  '/spring-boot/avanzado/testing': {
    component: LessonSpringBootTesting,
    label: 'Testing'
  },
  '/spring-boot/avanzado/spring-security': {
    component: LessonSpringBootSecurity,
    label: 'Spring Security'
  },
  '/spring-boot/avanzado/oauth2-jwt': {
    component: LessonOAuth2JWT,
    label: 'OAuth2 & JWT'
  },

  // AWS - Comparaciones
  '/aws/comparacion-ec2-vs-lambda': {
    component: ComparisonEC2VsLambda,
    label: 'EC2 vs Lambda'
  },
  '/aws/comparacion-rds-vs-dynamodb': {
    component: ComparisonRDSVsDynamoDB,
    label: 'RDS vs DynamoDB'
  },
  '/aws/comparacion-s3-vs-docker': {
    component: ComparisonS3VsDocker,
    label: 'S3 vs Docker'
  },
  '/aws/comparacion-docker-vs-kubernetes': {
    component: ComparisonDockerVsKubernetes,
    label: 'Docker vs Kubernetes'
  }
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
