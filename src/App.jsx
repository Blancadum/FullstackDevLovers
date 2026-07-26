import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { Header, Footer, ScrollToTop, PageTransition, AutoScrollToTop } from './components';
import { useBreadcrumb } from './hooks/useBreadcrumb';
import { useHeroVisible } from './hooks/useHeroVisible';
import { Home, ModulePage, SectionPage } from './pages';
import { SectionPageWrapper } from './pages/SectionPageWrapper';

// Componente de redirección para secciones (/categoria/modulo/section → /categoria/modulo?section=section)
function RedirectToSection() {
  const { sectionId } = useParams();
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  // Toma los dos primeros segmentos (categoria/modulo)
  const basePath = `/${pathParts[0]}/${pathParts[1]}`;
  return <Navigate to={`${basePath}?section=${sectionId}`} replace />;
}
import {
  LessonGitConfiguracionInicial,
  LessonGitCrearClonarRepos,
  LessonGitCommits,
  LessonGitBranches,
  LessonGitMerge,
  LessonGitAlias,
  LessonGitErroresComunes,
  LessonGitPracticaConfigura,
  LessonGitPracticaRepositorio,
  LessonGitPracticaCommits,
  LessonGitPracticaRamas,
  LessonGitPracticaMerge,
  LessonGitPushPullFetch,
  LessonGitPullRequests,
  LessonGitPlataformasRemotas,
  LessonGitWorkflow,
  LessonGitGitHub,
  LessonGitGitLab,
  LessonGitBitbucket
} from './pages/lessons/git';
import {
  LessonAbstractClasses,
  LessonArrays,
  LessonClasses,
  LessonCollections,
  LessonControlFlow,
  LessonCRUD,
  LessonDataTypes,
  LessonExceptions,
  LessonGenerics,
  LessonInheritance,
  LessonInterfacesAbstract,
  LessonJavaInternals,
  LessonJavaOperators,
  LessonJavaVM,
  LessonJDBC,
  LessonLambdas,
  LessonPolymorphism,
  LessonRefactoring,
  LessonScanner,
  LessonStreams,
  LessonStrings
} from './pages/lessons/java';
import {
  LessonOAuth2JWT,
  LessonSpringBatch,
  LessonSpringBootControllers,
  LessonSpringBootIntroduccion,
  LessonSpringBootJPA,
  LessonSpringBootSecurity,
  LessonSpringBootServices,
  LessonSpringBootSetup,
  LessonSpringBootTesting,
  LessonSpringBootValidation,
  LessonSpringSecurityAdvanced
} from './pages/lessons/spring-boot';
import {
  LessonSQLAdvanced,
  LessonSQLBackupRecuperacion,
  LessonSQLCrearBD,
  LessonSQLDDL,
  LessonSQLDML,
  LessonSQLIntroduccion,
  LessonSQLJOINs,
  LessonSQLMongoDB,
  LessonSQLMySQL,
  LessonSQLPostgreSQL,
  LessonSQLUsuariosPermisos,
  LessonSQLVsNoSQL
} from './pages/lessons/sql';
import {
  LessonBashShell,
  LessonBitbucket,
  LessonCICD,
  LessonCloudDeployment,
  LessonCodeiumAI,
  LessonConceptoEntornoDesarrollo,
  LessonDependencias,
  LessonEclipse,
  LessonGradle,
  LessonIDEs,
  LessonIntelliJ,
  LessonMaven,
  LessonVSCode,
  LessonVSCodeExtensions
} from './pages/lessons/herramientas';
import { LessonGitHubActions } from './pages/LessonGitHubActions';
import {
  LessonAgileIntroduccion,
  LessonDevelopmentConcepts,
  LessonPatronesDiseno,
  LessonSOLID,
  LessonSoftwareTesting,
  LessonUML
} from './pages/lessons/metodologias';
import {
  LessonKubernetesDeployments,
  LessonKubernetesIntro,
  LessonKubernetesPods
} from './pages/lessons/kubernetes';
import {
  LessonKotlinGeneric,
  LessonKotlinIntroduccion,
  LessonKotlinVsJava
} from './pages/lessons/kotlin';
import {
  LessonDefinicionProyecto,
  LessonProyectoAPIs,
  LessonProyectoAgile,
  LessonProyectoArquitectura,
  LessonProyectoBackend,
  LessonProyectoDatabase,
  LessonProyectoEjemplos,
  LessonProyectoRequisitos,
  LessonProyectoRetos,
  LessonProyectoSetup,
  LessonProyectoSprint1,
  LessonProyectoSprint2,
  LessonProyectoTesting
} from './pages/lessons/proyecto';
import {
  LessonDocker,
  LessonDockerConceptos,
  LessonDockerfile,
  LessonDockerComandos,
  LessonDockerComposeNew,
  LessonDockerNetworking,
  LessonDockerVolumenes,
  LessonDockerMultistage,
  LessonDockerOptimizacion,
  LessonDockerDebugging,
  LessonDockerPracticas,
  LessonDockerPython,
  LessonDockerJava,
  LessonDockerFrontend,
  LessonDockerNodejs,
  LessonDockerCompose
} from './pages/lessons/docker';
import {
  LessonAWSAlmacenamiento,
  LessonAWSArquitectura,
  LessonAWSCloudWatch,
  LessonAWSConceptos,
  LessonAWSDeployment,
  LessonAWSDynamoDB,
  LessonAWSEC2,
  LessonAWSIAM,
  LessonAWSIntro,
  LessonAWSJava,
  LessonAWSLambda,
  LessonAWSPricing,
  LessonAWSProyecto,
  LessonAWSRDS,
  LessonAWSS3,
  LessonAWSVPC
} from './pages/lessons/aws';
import { ComparisonS3VsDocker } from './pages/ComparisonS3VsDocker';
import { ComparisonEC2VsLambda } from './pages/ComparisonEC2VsLambda';
import { ComparisonRDSVsDynamoDB } from './pages/ComparisonRDSVsDynamoDB';
import { ComparisonDockerVsKubernetes } from './pages/ComparisonDockerVsKubernetes';
import { LandingKubernetes } from './pages/LandingKubernetes';
import { CasoRealEC2 } from './pages/CasoRealEC2';
import { CasoRealRDS } from './pages/CasoRealRDS';
import { CasoRealLambda } from './pages/CasoRealLambda';
import { CasoRealS3 } from './pages/CasoRealS3';
import { CasoRealDynamoDB } from './pages/CasoRealDynamoDB';
import { LandingDevOps } from './pages/LandingDevOps';
import { LandingAWS } from './pages/LandingAWS';
import { LandingDocker } from './pages/LandingDocker';
import { LandingJava } from './pages/LandingJava';
import { LandingSpringBoot } from './pages/LandingSpringBoot';
import { LandingGit } from './pages/LandingGit';
import { LandingHerramientas } from './pages/LandingHerramientas';
import { LandingArquitectura } from './pages/LandingArquitectura';
import { LandingBuildTools } from './pages/LandingBuildTools';
import { LandingSQLBasico } from './pages/LandingSQLBasico';
import { LandingMetodologias } from './pages/LandingMetodologias';
import { MethodologyWrapper } from './pages/MethodologyWrapper';
import { LandingProyecto } from './pages/LandingProyecto';
import { LandingReact } from './pages/LandingReact';
import { LandingAngular } from './pages/LandingAngular';
import { LessonAngularGeneric } from './pages/LessonAngularGeneric';
import { LandingHTML } from './pages/LandingHTML';
import { LandingCSS } from './pages/LandingCSS';
import { LandingBootstrap } from './pages/LandingBootstrap';
import { LandingTailwindCSS } from './pages/LandingTailwindCSS';
import { LandingMongoDB } from './pages/LandingMongoDB';
import { LandingKotlin } from './pages/LandingKotlin';
import { LandingNodejs } from './pages/LandingNodejs';
import { LandingNodejsIntroduccion } from './pages/LandingNodejsIntroduccion';
import { LandingNodejsNPM } from './pages/LandingNodejsNPM';
import { LandingNodejsModulos } from './pages/LandingNodejsModulos';
import { LandingNodejsEventLoop } from './pages/LandingNodejsEventLoop';
import { LandingBackend } from './pages/LandingBackend';
import { LandingFrontend } from './pages/LandingFrontend';
import { LandingDatos } from './pages/LandingDatos';
import { LandingCloud } from './pages/LandingCloud';
import { LandingVersionamiento } from './pages/LandingVersionamiento';
import { LandingHerramientasMetodologias } from './pages/LandingHerramientasMetodologias';
import { LexicoAWS } from './pages/LexicoAWS';
import { LexicoGeneral } from './pages/LexicoGeneral';
import { EvaluacionAWS } from './pages/EvaluacionAWS';
import { EvaluacionGeneral } from './pages/EvaluacionGeneral';
import { LessonProyectoReto1 } from './pages/LessonProyectoReto1';
import { LessonProyectoReto2 } from './pages/LessonProyectoReto2';
import { LessonProyectoReto3 } from './pages/LessonProyectoReto3';
import { LessonProyectoReto4 } from './pages/LessonProyectoReto4';
import { LessonProyectoReto5 } from './pages/LessonProyectoReto5';
import { LessonProyectoReto6 } from './pages/LessonProyectoReto6';
import { LessonProyectoReto7 } from './pages/LessonProyectoReto7';
import { LessonProyectoReto8 } from './pages/LessonProyectoReto8';
import { LessonEjemplosTFC } from './pages/LessonEjemplosTFC';
import { LessonPlaceholder } from './pages/LessonPlaceholder';
import { TestLesson } from './pages/TestLesson';
import { TestLessonTemplate } from './pages/TestLessonTemplate';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const breadcrumbs = useBreadcrumb();
  const heroVisible = useHeroVisible();

  // Detectar si la ruta actual es una landing page (exactamente 2 segmentos: /categoria/modulo)
  const isLandingPage = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments.length === 2;
  };

  const shouldPassBreadcrumbs = !isHome && !isLandingPage();

  return (
    <PageTransition>
      <AutoScrollToTop />
      <Header currentPage={isHome ? 'home' : 'module'} breadcrumbs={shouldPassBreadcrumbs ? breadcrumbs : null} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestLesson />} />
          <Route path="/test-template" element={<TestLessonTemplate />} />
          {/* Rutas específicas de lecciones ANTES de comodines */}

          {/* Lecciones - Git Básicos */}
          <Route path="/control-versiones/git/basicos/configuracion-inicial" element={<LessonGitConfiguracionInicial />} />
          <Route path="/control-versiones/git/basicos/crear-clonar-repos" element={<LessonGitCrearClonarRepos />} />
          <Route path="/control-versiones/git/basicos/commits" element={<LessonGitCommits />} />
          <Route path="/control-versiones/git/basicos/branches" element={<LessonGitBranches />} />
          <Route path="/control-versiones/git/basicos/merge" element={<LessonGitMerge />} />
          <Route path="/control-versiones/git/basicos/alias" element={<LessonGitAlias />} />
          <Route path="/control-versiones/git/basicos/errores-comunes" element={<LessonGitErroresComunes />} />

          {/* Prácticas - Git */}
          <Route path="/control-versiones/git/practicas/configura-tu-git" element={<LessonGitPracticaConfigura />} />
          <Route path="/control-versiones/git/practicas/crea-tu-primer-repositorio" element={<LessonGitPracticaRepositorio />} />
          <Route path="/control-versiones/git/practicas/haz-tus-primeros-commits" element={<LessonGitPracticaCommits />} />
          <Route path="/control-versiones/git/practicas/trabaja-con-ramas" element={<LessonGitPracticaRamas />} />
          <Route path="/control-versiones/git/practicas/resuelve-conflictos-de-merge" element={<LessonGitPracticaMerge />} />

          {/* Lecciones - Git Avanzado */}
          <Route path="/control-versiones/git/avanzado/push-pull-fetch" element={<LessonGitPushPullFetch />} />
          <Route path="/control-versiones/git/avanzado/pull-requests" element={<LessonGitPullRequests />} />
          <Route path="/control-versiones/git/avanzado/plataformas-remotas" element={<LessonGitPlataformasRemotas />} />
          <Route path="/control-versiones/git/avanzado/workflow" element={<LessonGitWorkflow />} />
          <Route path="/control-versiones/git/avanzado/github" element={<LessonGitGitHub />} />
          <Route path="/control-versiones/git/avanzado/gitlab" element={<LessonGitGitLab />} />
          <Route path="/control-versiones/git/avanzado/bitbucket" element={<LessonGitBitbucket />} />

          {/* Lecciones - Java Básico */}
          <Route path="/backend/java/basico/funcionamiento" element={<LessonJavaInternals />} />
          <Route path="/backend/java/basico/tipos-datos" element={<LessonDataTypes />} />
          <Route path="/backend/java/basico/control-flujo" element={<LessonControlFlow />} />
          <Route path="/backend/java/basico/strings" element={<LessonStrings />} />
          <Route path="/backend/java/basico/arrays" element={<LessonArrays />} />
          <Route path="/backend/java/basico/scanner" element={<LessonScanner />} />
          <Route path="/backend/java/basico/excepciones" element={<LessonExceptions />} />
          <Route path="/backend/java/basico/operadores" element={<LessonJavaOperators />} />

          {/* Lecciones - Java POO */}
          <Route path="/backend/java/poo/clases-objetos" element={<LessonClasses />} />
          <Route path="/backend/java/poo/clases-abstractas" element={<LessonAbstractClasses />} />
          <Route path="/backend/java/poo/herencia" element={<LessonInheritance />} />
          <Route path="/backend/java/poo/polimorfismo" element={<LessonPolymorphism />} />
          <Route path="/backend/java/poo/interfaces-abstractas" element={<LessonInterfacesAbstract />} />

          {/* Lecciones - Java Avanzado */}
          <Route path="/backend/java/avanzado/jvm" element={<LessonJavaVM />} />
          <Route path="/backend/java/avanzado/colecciones" element={<LessonCollections />} />
          <Route path="/backend/java/avanzado/lambdas" element={<LessonLambdas />} />
          <Route path="/backend/java/avanzado/streams" element={<LessonStreams />} />
          <Route path="/backend/java/avanzado/genericos" element={<LessonGenerics />} />

          {/* Lecciones - Conexión a BD */}
          <Route path="/backend/java/bd/jdbc" element={<LessonJDBC />} />
          <Route path="/backend/java/bd/crud" element={<LessonCRUD />} />

          {/* Lecciones - Entornos de Desarrollo */}
          <Route path="/herramientas/entornos/herramientas/concepto" element={<LessonConceptoEntornoDesarrollo />} />
          <Route path="/herramientas/entornos/herramientas/ides" element={<LessonIDEs />} />
          <Route path="/herramientas/entornos/herramientas/ides/eclipse" element={<LessonEclipse />} />
          <Route path="/herramientas/entornos/herramientas/ides/intellij" element={<LessonIntelliJ />} />
          <Route path="/herramientas/entornos/herramientas/ides/vscode" element={<LessonVSCode />} />
          <Route path="/herramientas/entornos/herramientas/ides/vscode-extensions" element={<LessonVSCodeExtensions />} />
          <Route path="/herramientas/entornos/herramientas/codeium" element={<LessonCodeiumAI />} />
          <Route path="/herramientas/entornos/arquitectura/uml" element={<LessonUML />} />
          <Route path="/herramientas/entornos/arquitectura/patrones" element={<LessonPatronesDiseno />} />
          <Route path="/herramientas/entornos/arquitectura/conceptos" element={<LessonDevelopmentConcepts />} />
          <Route path="/herramientas/entornos/arquitectura/testing" element={<LessonSoftwareTesting />} />
          <Route path="/herramientas/entornos/arquitectura/refactoring" element={<LessonRefactoring />} />

          {/* Lecciones - Build & Herramientas */}
          <Route path="/herramientas/entornos/build/bash" element={<LessonBashShell />} />
          <Route path="/herramientas/entornos/build/maven" element={<LessonMaven />} />
          <Route path="/herramientas/entornos/build/gradle" element={<LessonGradle />} />
          <Route path="/herramientas/entornos/build/dependencias" element={<LessonDependencias />} />

          {/* Lecciones - Docker (nuevo módulo principal) */}
          <Route path="/cloud/docker/fundamentales/intro" element={<LessonDocker />} />
          <Route path="/cloud/docker/fundamentales/conceptos" element={<LessonDockerConceptos />} />
          <Route path="/cloud/docker/fundamentales/dockerfile" element={<LessonDockerfile />} />
          <Route path="/cloud/docker/fundamentales/comandos" element={<LessonDockerComandos />} />
          <Route path="/cloud/docker/composicion/compose" element={<LessonDockerComposeNew />} />
          <Route path="/cloud/docker/composicion/networking" element={<LessonDockerNetworking />} />
          <Route path="/cloud/docker/composicion/volumenes" element={<LessonDockerVolumenes />} />
          <Route path="/cloud/docker/avanzado/multistage" element={<LessonDockerMultistage />} />
          <Route path="/cloud/docker/avanzado/optimizacion" element={<LessonDockerOptimizacion />} />
          <Route path="/cloud/docker/avanzado/debugging" element={<LessonDockerDebugging />} />
          <Route path="/cloud/docker/avanzado/practicas" element={<LessonDockerPracticas />} />
          <Route path="/cloud/docker/frameworks/python" element={<LessonDockerPython />} />
          <Route path="/cloud/docker/frameworks/java" element={<LessonDockerJava />} />
          <Route path="/cloud/docker/frameworks/frontend" element={<LessonDockerFrontend />} />
          <Route path="/cloud/docker/frameworks/nodejs" element={<LessonDockerNodejs />} />
          <Route path="/cloud/docker/comparacion-s3-vs-docker" element={<ComparisonS3VsDocker />} />
          <Route path="/cloud/docker/comparacion-docker-vs-kubernetes" element={<ComparisonDockerVsKubernetes />} />

          {/* Lecciones - Kubernetes */}
          <Route path="/cloud/kubernetes" element={<LandingKubernetes />} />
          <Route path="/cloud/kubernetes/fundamentales/intro" element={<LessonKubernetesIntro />} />
          <Route path="/cloud/kubernetes/fundamentales/pods" element={<LessonKubernetesPods />} />
          <Route path="/cloud/kubernetes/fundamentales/deployments" element={<LessonKubernetesDeployments />} />

          {/* Lecciones - AWS (nuevo módulo principal) */}
          <Route path="/cloud/aws/fundamentales/intro" element={<LessonAWSIntro />} />
          <Route path="/cloud/aws/fundamentales/arquitectura" element={<LessonAWSArquitectura />} />
          <Route path="/cloud/aws/fundamentales/conceptos" element={<LessonAWSConceptos />} />
          <Route path="/cloud/aws/fundamentales/iam" element={<LessonAWSIAM />} />
          <Route path="/cloud/aws/fundamentales/pricing" element={<LessonAWSPricing />} />
          <Route path="/cloud/aws/servicios/ec2" element={<LessonAWSEC2 />} />
          <Route path="/cloud/aws/servicios/rds" element={<LessonAWSRDS />} />
          <Route path="/cloud/aws/servicios/s3" element={<LessonAWSS3 />} />
          <Route path="/cloud/aws/servicios/lambda" element={<LessonAWSLambda />} />
          <Route path="/cloud/aws/comparacion-ec2-vs-lambda" element={<ComparisonEC2VsLambda />} />
          <Route path="/cloud/aws/servicios/dynamodb" element={<LessonAWSDynamoDB />} />
          <Route path="/cloud/aws/comparacion-rds-vs-dynamodb" element={<ComparisonRDSVsDynamoDB />} />
          <Route path="/cloud/aws/servicios/almacenamiento" element={<LessonAWSAlmacenamiento />} />
          <Route path="/cloud/aws/redes/vpc" element={<LessonAWSVPC />} />
          <Route path="/cloud/aws/deployment/cicd" element={<LessonAWSDeployment />} />
          <Route path="/cloud/aws/deployment/beanstalk" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/deployment/ecs" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/deployment/cloudfront" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/operaciones/cloudwatch" element={<LessonAWSCloudWatch />} />
          <Route path="/cloud/aws/operaciones/seguridad" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/operaciones/backup" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/operaciones/practicas" element={<LessonPlaceholder />} />
          <Route path="/cloud/aws/integracion/java" element={<LessonAWSJava />} />
          <Route path="/cloud/aws/proyecto/final" element={<LessonAWSProyecto />} />

          {/* Casos Reales - Profundidad en servicios */}
          <Route path="/cloud/aws/casos-reales/ec2" element={<CasoRealEC2 />} />
          <Route path="/cloud/aws/casos-reales/rds" element={<CasoRealRDS />} />
          <Route path="/cloud/aws/casos-reales/lambda" element={<CasoRealLambda />} />
          <Route path="/cloud/aws/casos-reales/s3" element={<CasoRealS3 />} />
          <Route path="/cloud/aws/casos-reales/dynamodb" element={<CasoRealDynamoDB />} />

          {/* Léxico y Evaluaciones */}
          <Route path="/lexico" element={<LexicoGeneral />} />
          <Route path="/cloud/aws/lexico" element={<LexicoAWS />} />
          <Route path="/evaluacion" element={<EvaluacionGeneral />} />
          <Route path="/cloud/aws/evaluacion" element={<EvaluacionAWS />} />

          {/* Lecciones - DevOps & Deployment (referencias de Entornos) */}
          <Route path="/herramientas/entornos/devops" element={<LandingDevOps />} />
          <Route path="/herramientas/entornos/devops/docker" element={<LessonDocker />} />
          <Route path="/herramientas/entornos/devops/docker-compose" element={<LessonDockerCompose />} />
          <Route path="/herramientas/entornos/devops/cicd" element={<LessonCICD />} />
          <Route path="/herramientas/entornos/devops/github-actions" element={<LessonGitHubActions />} />
          <Route path="/herramientas/entornos/devops/cloud-deployment" element={<LessonCloudDeployment />} />

          {/* Metodologías */}
          <Route path="/agile-scrum" element={<MethodologyWrapper methodologyId="agile-scrum" />} />
          <Route path="/clean-code" element={<MethodologyWrapper methodologyId="clean-code" />} />
          <Route path="/testing" element={<MethodologyWrapper methodologyId="testing" />} />
          <Route path="/devops" element={<MethodologyWrapper methodologyId="devops" />} />

          {/* Landing Pages - Categorías Principales */}
          <Route path="/cloud/aws" element={<LandingAWS />} />
          <Route path="/cloud/docker" element={<LandingDocker />} />
          <Route path="/backend/java" element={<LandingJava />} />
          <Route path="/backend/spring-boot" element={<LandingSpringBoot />} />
          <Route path="/control-versiones/git" element={<LandingGit />} />
          <Route path="/datos/sql" element={<LandingSQLBasico />} />
          <Route path="/herramientas/metodologias" element={<LandingMetodologias />} />
          <Route path="/proyecto" element={<LandingProyecto />} />
          <Route path="/frontend/react" element={<LandingReact />} />
          <Route path="/frontend/angular" element={<LandingAngular />} />
          <Route path="/frontend/angular/introduccion" element={<LessonAngularGeneric />} />
          <Route path="/frontend/angular/componentes" element={<LessonAngularGeneric />} />
          <Route path="/frontend/angular/data-binding" element={<LessonAngularGeneric />} />
          <Route path="/frontend/angular/servicios" element={<LessonAngularGeneric />} />
          <Route path="/frontend/angular/dependency-injection" element={<LessonAngularGeneric />} />
          <Route path="/frontend/angular/httpclient" element={<LessonAngularGeneric />} />
          <Route path="/frontend/html" element={<LandingHTML />} />
          <Route path="/frontend/css" element={<LandingCSS />} />
          <Route path="/frontend/bootstrap" element={<LandingBootstrap />} />
          <Route path="/frontend/tailwindcss" element={<LandingTailwindCSS />} />
          <Route path="/datos/mongodb" element={<LandingMongoDB />} />
          <Route path="/backend/kotlin" element={<LandingKotlin />} />
          <Route path="/backend/kotlin/introduccion" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/kotlin-vs-java" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/sintaxis" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/null-safety" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/extension-functions" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/lambdas" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/corrutinas" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/clases-objetos" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/scope-functions" element={<LessonKotlinGeneric />} />
          <Route path="/backend/kotlin/dsls" element={<LessonKotlinGeneric />} />
          <Route path="/backend/nodejs" element={<LandingNodejs />} />
          <Route path="/backend/nodejs/introduccion" element={<LandingNodejsIntroduccion />} />
          <Route path="/backend/nodejs/npm" element={<LandingNodejsNPM />} />
          <Route path="/backend/nodejs/modulos" element={<LandingNodejsModulos />} />
          <Route path="/backend/nodejs/event-loop" element={<LandingNodejsEventLoop />} />

          {/* Landing Pages - Categorías Superiores */}
          <Route path="/backend" element={<LandingBackend />} />
          <Route path="/frontend" element={<LandingFrontend />} />
          <Route path="/datos" element={<LandingDatos />} />
          <Route path="/cloud" element={<LandingCloud />} />
          <Route path="/control-versiones" element={<LandingVersionamiento />} />
          <Route path="/metodologias-herramientas" element={<LandingHerramientasMetodologias />} />

          {/* Landing Pages - Subsecciones Entornos */}
          <Route path="/herramientas/entornos/herramientas" element={<LandingHerramientas />} />
          <Route path="/herramientas/entornos/arquitectura" element={<LandingArquitectura />} />
          <Route path="/herramientas/entornos/build" element={<LandingBuildTools />} />


          {/* Lecciones - SQL */}
          <Route path="/datos/sql/introduccion" element={<LessonSQLIntroduccion />} />
          <Route path="/datos/sql/ddl" element={<LessonSQLDDL />} />
          <Route path="/datos/sql/dml" element={<LessonSQLDML />} />
          <Route path="/datos/sql/joins" element={<LessonSQLJOINs />} />
          <Route path="/datos/sql/consultas-avanzadas" element={<LessonSQLAdvanced />} />
          <Route path="/datos/sql/gestion/crear-bases-datos" element={<LessonSQLCrearBD />} />
          <Route path="/datos/sql/gestion/usuarios-permisos" element={<LessonSQLUsuariosPermisos />} />
          <Route path="/datos/sql/gestion/backup-recuperacion" element={<LessonSQLBackupRecuperacion />} />
          <Route path="/datos/sql/lenguajes/sql-nosql" element={<LessonSQLVsNoSQL />} />
          <Route path="/datos/sql/lenguajes/mysql" element={<LessonSQLMySQL />} />
          <Route path="/datos/sql/lenguajes/postgresql" element={<LessonSQLPostgreSQL />} />
          <Route path="/datos/sql/lenguajes/mongodb" element={<LessonSQLMongoDB />} />

          {/* Lecciones - Spring Boot Fundamentos */}
          <Route path="/backend/spring-boot/fundamentos/introduccion" element={<LessonSpringBootIntroduccion />} />
          <Route path="/backend/spring-boot/fundamentos/configuracion" element={<LessonSpringBootSetup />} />
          <Route path="/backend/spring-boot/fundamentos/controladores" element={<LessonSpringBootControllers />} />

          {/* Lecciones - Spring Boot Avanzado */}
          <Route path="/backend/spring-boot/avanzado/servicios" element={<LessonSpringBootServices />} />
          <Route path="/backend/spring-boot/avanzado/jpa-hibernate" element={<LessonSpringBootJPA />} />
          <Route path="/backend/spring-boot/avanzado/validacion" element={<LessonSpringBootValidation />} />
          <Route path="/backend/spring-boot/avanzado/testing" element={<LessonSpringBootTesting />} />
          <Route path="/backend/spring-boot/avanzado/spring-security" element={<LessonSpringBootSecurity />} />
          <Route path="/backend/spring-boot/avanzado/oauth2-jwt" element={<LessonOAuth2JWT />} />

          {/* Rutas de módulo Proyecto */}
          <Route path="/proyecto" element={<ModulePage moduleId="proyecto" />} />

          {/* Lecciones - Proyecto Planificación */}
          <Route path="/proyecto/planificacion/definicion" element={<LessonDefinicionProyecto />} />
          <Route path="/proyecto/planificacion/requisitos" element={<LessonProyectoRequisitos />} />
          <Route path="/proyecto/planificacion/arquitectura" element={<LessonProyectoArquitectura />} />
          <Route path="/proyecto/planificacion/ejemplos" element={<LessonProyectoEjemplos />} />

          {/* Lecciones - Proyecto Metodología */}
          <Route path="/proyecto/metodologia/agile-scrum" element={<LessonProyectoAgile />} />
          <Route path="/proyecto/metodologia/sprint-1" element={<LessonProyectoSprint1 />} />
          <Route path="/proyecto/metodologia/sprint-2" element={<LessonProyectoSprint2 />} />

          {/* Lecciones - Proyecto Desarrollo */}
          <Route path="/proyecto/desarrollo/setup" element={<LessonProyectoSetup />} />
          <Route path="/proyecto/desarrollo/backend" element={<LessonProyectoBackend />} />
          <Route path="/proyecto/desarrollo/database" element={<LessonProyectoDatabase />} />
          <Route path="/proyecto/desarrollo/apis" element={<LessonProyectoAPIs />} />

          {/* Lecciones - Proyecto Testing */}
          <Route path="/proyecto/testing/unitario" element={<LessonProyectoTesting />} />
          <Route path="/proyecto/testing/integracion" element={<LessonPlaceholder />} />
          <Route path="/proyecto/testing/validacion" element={<LessonPlaceholder />} />

          {/* Lecciones - Proyecto Despliegue */}
          <Route path="/proyecto/despliegue/build" element={<LessonPlaceholder />} />
          <Route path="/proyecto/despliegue/documentacion" element={<LessonPlaceholder />} />
          <Route path="/proyecto/despliegue/cloud" element={<LessonPlaceholder />} />

          {/* Lecciones - Proyecto Retos */}
          <Route path="/proyecto/retos/1" element={<LessonProyectoReto1 />} />
          <Route path="/proyecto/retos/2" element={<LessonProyectoReto2 />} />
          <Route path="/proyecto/retos/3" element={<LessonProyectoReto3 />} />
          <Route path="/proyecto/retos/4" element={<LessonProyectoReto4 />} />
          <Route path="/proyecto/retos/5" element={<LessonProyectoReto5 />} />
          <Route path="/proyecto/retos/6" element={<LessonProyectoReto6 />} />
          <Route path="/proyecto/retos/7" element={<LessonProyectoReto7 />} />
          <Route path="/proyecto/retos/8" element={<LessonProyectoReto8 />} />
          <Route path="/proyecto/retos" element={<Navigate to="/proyecto?section=retos" replace />} />
          <Route path="/proyecto/retos/:retoId" element={<LessonProyectoRetos />} />

          {/* Lecciones - Proyecto Ejemplos de TFC */}
          <Route path="/proyecto/ejemplos" element={<Navigate to="/proyecto?section=ejemplos" replace />} />
          <Route path="/proyecto/ejemplos/:id" element={<LessonEjemplosTFC />} />

          {/* Lecciones - Metodologías Agile/SCRUM */}
          <Route path="/herramientas/metodologias/agile-scrum/introduccion" element={<LessonAgileIntroduccion />} />
          <Route path="/herramientas/metodologias/agile-scrum/scrum" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/agile-scrum/sprints" element={<LessonPlaceholder />} />

          {/* Lecciones - Clean Code */}
          <Route path="/herramientas/metodologias/clean-code/nombres" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/clean-code/funciones" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/clean-code/estructura" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/clean-code/solid" element={<LessonSOLID />} />
          <Route path="/herramientas/metodologias/clean-code/patrones" element={<LessonPatronesDiseno />} />
          <Route path="/herramientas/metodologias/clean-code/antipatrones" element={<LessonPlaceholder />} />

          {/* Lecciones - Testing */}
          <Route path="/herramientas/metodologias/testing/unitario" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/testing/integracion" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/testing/aceptacion" element={<LessonPlaceholder />} />

          {/* Lecciones - DevOps */}
          <Route path="/herramientas/metodologias/devops/introduccion" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/devops/cicd" element={<LessonPlaceholder />} />
          <Route path="/herramientas/metodologias/devops/monitoreo" element={<LessonPlaceholder />} />

          {/* Lecciones - Contacto */}
          <Route path="/contacto/general/email" element={<LessonPlaceholder />} />
          <Route path="/contacto/general/formulario" element={<LessonPlaceholder />} />
          <Route path="/contacto/general/faq" element={<LessonPlaceholder />} />

          {/* Rutas comodín para módulos (van al final) */}
          <Route path="/control-versiones/git" element={<ModulePage moduleId="git" />} />
          <Route path="/control-versiones/git/:sectionId" element={<RedirectToSection />} />
          <Route path="/backend/java" element={<ModulePage moduleId="java" />} />
          <Route path="/backend/java/:sectionId" element={<RedirectToSection />} />
          <Route path="/cloud/docker" element={<ModulePage moduleId="docker" />} />
          <Route path="/cloud/docker/:sectionId" element={<RedirectToSection />} />
          <Route path="/herramientas/entornos" element={<ModulePage moduleId="entornos" />} />
          <Route path="/herramientas/entornos/:sectionId" element={<RedirectToSection />} />
          <Route path="/datos/sql" element={<ModulePage moduleId="sql" />} />
          <Route path="/datos/sql/:sectionId" element={<RedirectToSection />} />
          <Route path="/backend/spring-boot" element={<ModulePage moduleId="spring-boot" />} />
          <Route path="/backend/spring-boot/:sectionId" element={<RedirectToSection />} />
          <Route path="/herramientas/metodologias" element={<ModulePage moduleId="metodologias" />} />
          <Route path="/herramientas/metodologias/:sectionId" element={<RedirectToSection />} />
          <Route path="/contacto" element={<ModulePage moduleId="contacto" />} />
          <Route path="/contacto/:sectionId" element={<RedirectToSection />} />
          <Route path="/proyecto" element={<ModulePage moduleId="proyecto" />} />
          <Route path="/proyecto/:sectionId" element={<RedirectToSection />} />
          <Route path="/cloud/aws" element={<ModulePage moduleId="aws" />} />
          <Route path="/cloud/aws/:sectionId" element={<RedirectToSection />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </PageTransition>
  );
}

function App() {
  return (
    <Router>
      <div className="app-root">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
