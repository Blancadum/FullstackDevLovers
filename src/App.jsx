import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop, AutoScrollToTop } from './components';
import { Home, ModulePage, SectionPage } from './pages';
import { SectionPageWrapper } from './pages/SectionPageWrapper';

// Componente de redirección para secciones (/modulo/section → /modulo?section=section)
function RedirectToSection() {
  const { sectionId } = useParams();
  const location = useLocation();
  const moduleId = location.pathname.split('/')[1];
  return <Navigate to={`/${moduleId}?section=${sectionId}`} replace />;
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
} from './pages/lessons/git';
import { LessonLambdas } from './pages/LessonLambdas';
import { LessonStreams } from './pages/LessonStreams';
import { LessonCollections } from './pages/LessonCollections';
import { LessonDataTypes } from './pages/LessonDataTypes';
import { LessonJavaInternals } from './pages/LessonJavaInternals';
import { LessonControlFlow } from './pages/LessonControlFlow';
import { LessonClasses } from './pages/LessonClasses';
import { LessonStrings } from './pages/LessonStrings';
import { LessonArrays } from './pages/LessonArrays';
import { LessonScanner } from './pages/LessonScanner';
import { LessonExceptions } from './pages/LessonExceptions';
import { LessonInheritance } from './pages/LessonInheritance';
import { LessonPolymorphism } from './pages/LessonPolymorphism';
import { LessonInterfacesAbstract } from './pages/LessonInterfacesAbstract';
import { LessonAbstractClasses } from './pages/LessonAbstractClasses';
import { LessonGenerics } from './pages/LessonGenerics';
import { LessonJavaVM } from './pages/LessonJavaVM';
import { LessonRefactoring } from './pages/LessonRefactoring';
import { LessonJDBC } from './pages/LessonJDBC';
import { LessonCRUD } from './pages/LessonCRUD';
import { LessonUML } from './pages/LessonUML';
import { LessonDevelopmentConcepts } from './pages/LessonDevelopmentConcepts';
import { LessonIDEs } from './pages/LessonIDEs';
import { LessonCodeiumAI } from './pages/LessonCodeiumAI';
import { LessonSoftwareTesting } from './pages/LessonSoftwareTesting';
import { LessonSQLIntroduccion } from './pages/LessonSQLIntroduccion';
import { LessonSQLDDL } from './pages/LessonSQLDDL';
import { LessonSQLDML } from './pages/LessonSQLDML';
import { LessonSQLJOINs } from './pages/LessonSQLJOINs';
import { LessonSQLAdvanced } from './pages/LessonSQLAdvanced';
import { LessonSQLCrearBD } from './pages/LessonSQLCrearBD';
import { LessonSQLUsuariosPermisos } from './pages/LessonSQLUsuariosPermisos';
import { LessonSQLBackupRecuperacion } from './pages/LessonSQLBackupRecuperacion';
import { LessonSQLVsNoSQL } from './pages/LessonSQLVsNoSQL';
import { LessonSQLMySQL } from './pages/LessonSQLMySQL';
import { LessonSQLPostgreSQL } from './pages/LessonSQLPostgreSQL';
import { LessonSQLMongoDB } from './pages/LessonSQLMongoDB';
import { LessonSpringBootIntroduccion } from './pages/LessonSpringBootIntroduccion';
import { LessonSpringBootSetup } from './pages/LessonSpringBootSetup';
import { LessonSpringBootControllers } from './pages/LessonSpringBootControllers';
import { LessonSpringBootServices } from './pages/LessonSpringBootServices';
import { LessonSpringBootJPA } from './pages/LessonSpringBootJPA';
import { LessonSpringBootValidation } from './pages/LessonSpringBootValidation';
import { LessonSpringBootTesting } from './pages/LessonSpringBootTesting';
import { LessonSpringBootSecurity } from './pages/LessonSpringBootSecurity';
import { LessonJavaOperators } from './pages/LessonJavaOperators';
import { LessonGitWorkflow } from './pages/LessonGitWorkflow';
import { LessonOAuth2JWT } from './pages/LessonOAuth2JWT';
import { LessonBashShell } from './pages/LessonBashShell';
import { LessonGitHub } from './pages/LessonGitHub';
import { LessonGitLab } from './pages/LessonGitLab';
import { LessonBitbucket } from './pages/LessonBitbucket';
import { LessonEclipse } from './pages/LessonEclipse';
import { LessonIntelliJ } from './pages/LessonIntelliJ';
import { LessonVSCode } from './pages/LessonVSCode';
import { LessonVSCodeExtensions } from './pages/LessonVSCodeExtensions';
import { LessonConceptoEntornoDesarrollo } from './pages/LessonConceptoEntornoDesarrollo';
import { LessonMaven } from './pages/LessonMaven';
import { LessonGradle } from './pages/LessonGradle';
import { LessonDependencias } from './pages/LessonDependencias';
import { LessonDocker } from './pages/LessonDocker';
import { LessonDockerConceptos } from './pages/LessonDockerConceptos';
import { LessonDockerfile } from './pages/LessonDockerfile';
import { LessonDockerComandos } from './pages/LessonDockerComandos';
import { LessonDockerComposeNew } from './pages/LessonDockerComposeNew';
import { LessonDockerNetworking } from './pages/LessonDockerNetworking';
import { LessonDockerVolumenes } from './pages/LessonDockerVolumenes';
import { LessonDockerMultistage } from './pages/LessonDockerMultistage';
import { LessonDockerOptimizacion } from './pages/LessonDockerOptimizacion';
import { LessonDockerDebugging } from './pages/LessonDockerDebugging';
import { LessonDockerPracticas } from './pages/LessonDockerPracticas';
import { LessonDockerPython } from './pages/LessonDockerPython';
import { LessonDockerJava } from './pages/LessonDockerJava';
import { LessonDockerFrontend } from './pages/LessonDockerFrontend';
import { LessonDockerNodejs } from './pages/LessonDockerNodejs';
import { LessonDockerCompose } from './pages/LessonDockerCompose';
import { ComparisonS3VsDocker } from './pages/ComparisonS3VsDocker';
import { LessonCICD } from './pages/LessonCICD';
import { LessonGitHubActions } from './pages/LessonGitHubActions';
import { LessonCloudDeployment } from './pages/LessonCloudDeployment';
import { LessonAWSIntro } from './pages/LessonAWSIntro';
import { LessonAWSConceptos } from './pages/LessonAWSConceptos';
import { LessonAWSIAM } from './pages/LessonAWSIAM';
import { LessonAWSPricing } from './pages/LessonAWSPricing';
import { LessonAWSS3 } from './pages/LessonAWSS3';
import { LessonAWSEC2 } from './pages/LessonAWSEC2';
import { LessonAWSRDS } from './pages/LessonAWSRDS';
import { LessonAWSLambda } from './pages/LessonAWSLambda';
import { LessonAWSVPC } from './pages/LessonAWSVPC';
import { LessonAWSCloudWatch } from './pages/LessonAWSCloudWatch';
import { LessonAWSDynamoDB } from './pages/LessonAWSDynamoDB';
import { LessonAWSDeployment } from './pages/LessonAWSDeployment';
import { LessonAWSArquitectura } from './pages/LessonAWSArquitectura';
import { LessonAWSAlmacenamiento } from './pages/LessonAWSAlmacenamiento';
import { LessonAWSJava } from './pages/LessonAWSJava';
import { LessonAWSProyecto } from './pages/LessonAWSProyecto';
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
import { LexicoAWS } from './pages/LexicoAWS';
import { LexicoGeneral } from './pages/LexicoGeneral';
import { EvaluacionAWS } from './pages/EvaluacionAWS';
import { EvaluacionGeneral } from './pages/EvaluacionGeneral';
import { LessonDefinicionProyecto } from './pages/LessonDefinicionProyecto';
import { LessonProyectoRequisitos } from './pages/LessonProyectoRequisitos';
import { LessonProyectoArquitectura } from './pages/LessonProyectoArquitectura';
import { LessonProyectoSetup } from './pages/LessonProyectoSetup';
import { LessonProyectoBackend } from './pages/LessonProyectoBackend';
import { LessonProyectoDatabase } from './pages/LessonProyectoDatabase';
import { LessonProyectoReto1 } from './pages/LessonProyectoReto1';
import { LessonProyectoReto2 } from './pages/LessonProyectoReto2';
import { LessonProyectoReto3 } from './pages/LessonProyectoReto3';
import { LessonProyectoReto4 } from './pages/LessonProyectoReto4';
import { LessonProyectoReto5 } from './pages/LessonProyectoReto5';
import { LessonProyectoReto6 } from './pages/LessonProyectoReto6';
import { LessonProyectoReto7 } from './pages/LessonProyectoReto7';
import { LessonProyectoReto8 } from './pages/LessonProyectoReto8';
import { LessonProyectoAPIs } from './pages/LessonProyectoAPIs';
import { LessonProyectoAgile } from './pages/LessonProyectoAgile';
import { LessonProyectoSprint1 } from './pages/LessonProyectoSprint1';
import { LessonProyectoSprint2 } from './pages/LessonProyectoSprint2';
import { LessonProyectoEjemplos } from './pages/LessonProyectoEjemplos';
import { LessonProyectoTesting, LessonProyectoIntegracion, LessonProyectoValidacion } from './pages/LessonProyectoTesting';
import { LessonProyectoBuild, LessonProyectoDocumentacion, LessonProyectoCloud } from './pages/LessonProyectoDespliegue';
import { LessonProyectoRetos } from './pages/LessonProyectoRetos';
import { LessonEjemplosTFC } from './pages/LessonEjemplosTFC';
import { LessonAgileIntroduccion } from './pages/LessonAgileIntroduccion';
import { LessonSOLID } from './pages/LessonSOLID';
import { LessonPatronesDiseno, LessonAntipatrones } from './pages/LessonPatronesDiseno';
import { LessonPlaceholder } from './pages/LessonPlaceholder';
import { TestLesson } from './pages/TestLesson';
import { TestLessonTemplate } from './pages/TestLessonTemplate';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <AutoScrollToTop />
      <Navbar currentPage={isHome ? 'home' : 'module'} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestLesson />} />
          <Route path="/test-template" element={<TestLessonTemplate />} />
          {/* Rutas específicas de lecciones ANTES de comodines */}

          {/* Lecciones - Git Básicos */}
          <Route path="/git/basicos/configuracion-inicial" element={<LessonGitConfiguracionInicial />} />
          <Route path="/git/basicos/crear-clonar-repos" element={<LessonGitCrearClonarRepos />} />
          <Route path="/git/basicos/commits" element={<LessonGitCommits />} />
          <Route path="/git/basicos/branches" element={<LessonGitBranches />} />
          <Route path="/git/basicos/merge" element={<LessonGitMerge />} />
          <Route path="/git/basicos/alias" element={<LessonGitAlias />} />
          <Route path="/git/basicos/errores-comunes" element={<LessonGitErroresComunes />} />

          {/* Prácticas - Git */}
          <Route path="/git/practicas/configura-tu-git" element={<LessonGitPracticaConfigura />} />
          <Route path="/git/practicas/crea-tu-primer-repositorio" element={<LessonGitPracticaRepositorio />} />
          <Route path="/git/practicas/haz-tus-primeros-commits" element={<LessonGitPracticaCommits />} />
          <Route path="/git/practicas/trabaja-con-ramas" element={<LessonGitPracticaRamas />} />
          <Route path="/git/practicas/resuelve-conflictos-de-merge" element={<LessonGitPracticaMerge />} />

          {/* Lecciones - Git Avanzado */}
          <Route path="/git/avanzado/push-pull-fetch" element={<LessonGitPushPullFetch />} />
          <Route path="/git/avanzado/pull-requests" element={<LessonGitPullRequests />} />
          <Route path="/git/avanzado/plataformas-remotas" element={<LessonGitPlataformasRemotas />} />
          <Route path="/git/avanzado/workflow" element={<LessonGitWorkflow />} />
          <Route path="/git/avanzado/github" element={<LessonGitHub />} />
          <Route path="/git/avanzado/gitlab" element={<LessonGitLab />} />
          <Route path="/git/avanzado/bitbucket" element={<LessonBitbucket />} />

          {/* Lecciones - Java Básico */}
          <Route path="/java/basico/funcionamiento" element={<LessonJavaInternals />} />
          <Route path="/java/basico/tipos-datos" element={<LessonDataTypes />} />
          <Route path="/java/basico/control-flujo" element={<LessonControlFlow />} />
          <Route path="/java/basico/strings" element={<LessonStrings />} />
          <Route path="/java/basico/arrays" element={<LessonArrays />} />
          <Route path="/java/basico/scanner" element={<LessonScanner />} />
          <Route path="/java/basico/excepciones" element={<LessonExceptions />} />
          <Route path="/java/basico/operadores" element={<LessonJavaOperators />} />

          {/* Lecciones - Java POO */}
          <Route path="/java/poo/clases-objetos" element={<LessonClasses />} />
          <Route path="/java/poo/clases-abstractas" element={<LessonAbstractClasses />} />
          <Route path="/java/poo/herencia" element={<LessonInheritance />} />
          <Route path="/java/poo/polimorfismo" element={<LessonPolymorphism />} />
          <Route path="/java/poo/interfaces-abstractas" element={<LessonInterfacesAbstract />} />

          {/* Lecciones - Java Avanzado */}
          <Route path="/java/avanzado/jvm" element={<LessonJavaVM />} />
          <Route path="/java/avanzado/colecciones" element={<LessonCollections />} />
          <Route path="/java/avanzado/lambdas" element={<LessonLambdas />} />
          <Route path="/java/avanzado/streams" element={<LessonStreams />} />
          <Route path="/java/avanzado/genericos" element={<LessonGenerics />} />

          {/* Lecciones - Conexión a BD */}
          <Route path="/java/bd/jdbc" element={<LessonJDBC />} />
          <Route path="/java/bd/crud" element={<LessonCRUD />} />

          {/* Lecciones - Entornos de Desarrollo */}
          <Route path="/entornos/herramientas/concepto" element={<LessonConceptoEntornoDesarrollo />} />
          <Route path="/entornos/herramientas/ides" element={<LessonIDEs />} />
          <Route path="/entornos/herramientas/ides/eclipse" element={<LessonEclipse />} />
          <Route path="/entornos/herramientas/ides/intellij" element={<LessonIntelliJ />} />
          <Route path="/entornos/herramientas/ides/vscode" element={<LessonVSCode />} />
          <Route path="/entornos/herramientas/ides/vscode-extensions" element={<LessonVSCodeExtensions />} />
          <Route path="/entornos/herramientas/codeium" element={<LessonCodeiumAI />} />
          <Route path="/entornos/arquitectura/uml" element={<LessonUML />} />
          <Route path="/entornos/arquitectura/patrones" element={<LessonPatronesDiseno />} />
          <Route path="/entornos/arquitectura/conceptos" element={<LessonDevelopmentConcepts />} />
          <Route path="/entornos/arquitectura/testing" element={<LessonSoftwareTesting />} />
          <Route path="/entornos/arquitectura/refactoring" element={<LessonRefactoring />} />

          {/* Lecciones - Build & Herramientas */}
          <Route path="/entornos/build/bash" element={<LessonBashShell />} />
          <Route path="/entornos/build/maven" element={<LessonMaven />} />
          <Route path="/entornos/build/gradle" element={<LessonGradle />} />
          <Route path="/entornos/build/dependencias" element={<LessonDependencias />} />

          {/* Lecciones - Docker (nuevo módulo principal) */}
          <Route path="/docker/fundamentales/intro" element={<LessonDocker />} />
          <Route path="/docker/fundamentales/conceptos" element={<LessonDockerConceptos />} />
          <Route path="/docker/fundamentales/dockerfile" element={<LessonDockerfile />} />
          <Route path="/docker/fundamentales/comandos" element={<LessonDockerComandos />} />
          <Route path="/docker/composicion/compose" element={<LessonDockerComposeNew />} />
          <Route path="/docker/composicion/networking" element={<LessonDockerNetworking />} />
          <Route path="/docker/composicion/volumenes" element={<LessonDockerVolumenes />} />
          <Route path="/docker/avanzado/multistage" element={<LessonDockerMultistage />} />
          <Route path="/docker/avanzado/optimizacion" element={<LessonDockerOptimizacion />} />
          <Route path="/docker/avanzado/debugging" element={<LessonDockerDebugging />} />
          <Route path="/docker/avanzado/practicas" element={<LessonDockerPracticas />} />
          <Route path="/docker/frameworks/python" element={<LessonDockerPython />} />
          <Route path="/docker/frameworks/java" element={<LessonDockerJava />} />
          <Route path="/docker/frameworks/frontend" element={<LessonDockerFrontend />} />
          <Route path="/docker/frameworks/nodejs" element={<LessonDockerNodejs />} />
          <Route path="/docker/comparacion-s3-vs-docker" element={<ComparisonS3VsDocker />} />

          {/* Lecciones - AWS (nuevo módulo principal) */}
          <Route path="/aws/fundamentales/intro" element={<LessonAWSIntro />} />
          <Route path="/aws/fundamentales/arquitectura" element={<LessonAWSArquitectura />} />
          <Route path="/aws/fundamentales/conceptos" element={<LessonAWSConceptos />} />
          <Route path="/aws/fundamentales/iam" element={<LessonAWSIAM />} />
          <Route path="/aws/fundamentales/pricing" element={<LessonAWSPricing />} />
          <Route path="/aws/servicios/ec2" element={<LessonAWSEC2 />} />
          <Route path="/aws/servicios/rds" element={<LessonAWSRDS />} />
          <Route path="/aws/servicios/s3" element={<LessonAWSS3 />} />
          <Route path="/aws/servicios/lambda" element={<LessonAWSLambda />} />
          <Route path="/aws/servicios/dynamodb" element={<LessonAWSDynamoDB />} />
          <Route path="/aws/servicios/almacenamiento" element={<LessonAWSAlmacenamiento />} />
          <Route path="/aws/redes/vpc" element={<LessonAWSVPC />} />
          <Route path="/aws/deployment/cicd" element={<LessonAWSDeployment />} />
          <Route path="/aws/deployment/beanstalk" element={<LessonPlaceholder />} />
          <Route path="/aws/deployment/ecs" element={<LessonPlaceholder />} />
          <Route path="/aws/deployment/cloudfront" element={<LessonPlaceholder />} />
          <Route path="/aws/operaciones/cloudwatch" element={<LessonAWSCloudWatch />} />
          <Route path="/aws/operaciones/seguridad" element={<LessonPlaceholder />} />
          <Route path="/aws/operaciones/backup" element={<LessonPlaceholder />} />
          <Route path="/aws/operaciones/practicas" element={<LessonPlaceholder />} />
          <Route path="/aws/integracion/java" element={<LessonAWSJava />} />
          <Route path="/aws/proyecto/final" element={<LessonAWSProyecto />} />

          {/* Casos Reales - Profundidad en servicios */}
          <Route path="/aws/casos-reales/ec2" element={<CasoRealEC2 />} />
          <Route path="/aws/casos-reales/rds" element={<CasoRealRDS />} />
          <Route path="/aws/casos-reales/lambda" element={<CasoRealLambda />} />
          <Route path="/aws/casos-reales/s3" element={<CasoRealS3 />} />
          <Route path="/aws/casos-reales/dynamodb" element={<CasoRealDynamoDB />} />

          {/* Léxico y Evaluaciones */}
          <Route path="/lexico" element={<LexicoGeneral />} />
          <Route path="/aws/lexico" element={<LexicoAWS />} />
          <Route path="/evaluacion" element={<EvaluacionGeneral />} />
          <Route path="/aws/evaluacion" element={<EvaluacionAWS />} />

          {/* Lecciones - DevOps & Deployment (referencias de Entornos) */}
          <Route path="/entornos/devops" element={<LandingDevOps />} />
          <Route path="/entornos/devops/docker" element={<LessonDocker />} />
          <Route path="/entornos/devops/docker-compose" element={<LessonDockerCompose />} />
          <Route path="/entornos/devops/cicd" element={<LessonCICD />} />
          <Route path="/entornos/devops/github-actions" element={<LessonGitHubActions />} />
          <Route path="/entornos/devops/cloud-deployment" element={<LessonCloudDeployment />} />

          {/* Landing Pages - Categorías Principales */}
          <Route path="/aws/landing" element={<LandingAWS />} />
          <Route path="/docker/landing" element={<LandingDocker />} />
          <Route path="/java/landing" element={<LandingJava />} />
          <Route path="/spring-boot/landing" element={<LandingSpringBoot />} />
          <Route path="/git/landing" element={<LandingGit />} />

          {/* Landing Pages - Subsecciones Entornos */}
          <Route path="/entornos/herramientas" element={<LandingHerramientas />} />
          <Route path="/entornos/arquitectura" element={<LandingArquitectura />} />
          <Route path="/entornos/build" element={<LandingBuildTools />} />

          {/* Lecciones - SQL Básico */}
          <Route path="/sql/basicos/introduccion" element={<LessonSQLIntroduccion />} />
          <Route path="/sql/basicos/ddl" element={<LessonSQLDDL />} />
          <Route path="/sql/basicos/dml" element={<LessonSQLDML />} />

          {/* Lecciones - SQL Avanzado */}
          <Route path="/sql/avanzado/joins" element={<LessonSQLJOINs />} />
          <Route path="/sql/avanzado/consultas-avanzadas" element={<LessonSQLAdvanced />} />
          <Route path="/sql/gestion/crear-bases-datos" element={<LessonSQLCrearBD />} />
          <Route path="/sql/gestion/usuarios-permisos" element={<LessonSQLUsuariosPermisos />} />
          <Route path="/sql/gestion/backup-recuperacion" element={<LessonSQLBackupRecuperacion />} />
          <Route path="/sql/lenguajes/sql-nosql" element={<LessonSQLVsNoSQL />} />
          <Route path="/sql/lenguajes/mysql" element={<LessonSQLMySQL />} />
          <Route path="/sql/lenguajes/postgresql" element={<LessonSQLPostgreSQL />} />
          <Route path="/sql/lenguajes/mongodb" element={<LessonSQLMongoDB />} />

          {/* Lecciones - Spring Boot Fundamentos */}
          <Route path="/spring-boot/fundamentos/introduccion" element={<LessonSpringBootIntroduccion />} />
          <Route path="/spring-boot/fundamentos/configuracion" element={<LessonSpringBootSetup />} />
          <Route path="/spring-boot/fundamentos/controladores" element={<LessonSpringBootControllers />} />

          {/* Lecciones - Spring Boot Avanzado */}
          <Route path="/spring-boot/avanzado/servicios" element={<LessonSpringBootServices />} />
          <Route path="/spring-boot/avanzado/jpa-hibernate" element={<LessonSpringBootJPA />} />
          <Route path="/spring-boot/avanzado/validacion" element={<LessonSpringBootValidation />} />
          <Route path="/spring-boot/avanzado/testing" element={<LessonSpringBootTesting />} />
          <Route path="/spring-boot/avanzado/spring-security" element={<LessonSpringBootSecurity />} />
          <Route path="/spring-boot/avanzado/oauth2-jwt" element={<LessonOAuth2JWT />} />

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
          <Route path="/proyecto/testing/integracion" element={<LessonProyectoIntegracion />} />
          <Route path="/proyecto/testing/validacion" element={<LessonProyectoValidacion />} />

          {/* Lecciones - Proyecto Despliegue */}
          <Route path="/proyecto/despliegue/build" element={<LessonProyectoBuild />} />
          <Route path="/proyecto/despliegue/documentacion" element={<LessonProyectoDocumentacion />} />
          <Route path="/proyecto/despliegue/cloud" element={<LessonProyectoCloud />} />

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
          <Route path="/metodologias/agile-scrum/introduccion" element={<LessonAgileIntroduccion />} />
          <Route path="/metodologias/agile-scrum/scrum" element={<LessonPlaceholder />} />
          <Route path="/metodologias/agile-scrum/sprints" element={<LessonPlaceholder />} />

          {/* Lecciones - Clean Code */}
          <Route path="/metodologias/clean-code/nombres" element={<LessonPlaceholder />} />
          <Route path="/metodologias/clean-code/funciones" element={<LessonPlaceholder />} />
          <Route path="/metodologias/clean-code/estructura" element={<LessonPlaceholder />} />
          <Route path="/metodologias/clean-code/solid" element={<LessonSOLID />} />
          <Route path="/metodologias/clean-code/patrones" element={<LessonPatronesDiseno />} />
          <Route path="/metodologias/clean-code/antipatrones" element={<LessonAntipatrones />} />

          {/* Lecciones - Testing */}
          <Route path="/metodologias/testing/unitario" element={<LessonPlaceholder />} />
          <Route path="/metodologias/testing/integracion" element={<LessonPlaceholder />} />
          <Route path="/metodologias/testing/aceptacion" element={<LessonPlaceholder />} />

          {/* Lecciones - DevOps */}
          <Route path="/metodologias/devops/introduccion" element={<LessonPlaceholder />} />
          <Route path="/metodologias/devops/cicd" element={<LessonPlaceholder />} />
          <Route path="/metodologias/devops/monitoreo" element={<LessonPlaceholder />} />

          {/* Lecciones - Contacto */}
          <Route path="/contacto/general/email" element={<LessonPlaceholder />} />
          <Route path="/contacto/general/formulario" element={<LessonPlaceholder />} />
          <Route path="/contacto/general/faq" element={<LessonPlaceholder />} />

          {/* Rutas comodín para módulos (van al final) */}
          <Route path="/git" element={<ModulePage moduleId="git" />} />
          <Route path="/git/:sectionId" element={<RedirectToSection />} />
          <Route path="/java" element={<ModulePage moduleId="java" />} />
          <Route path="/java/:sectionId" element={<RedirectToSection />} />
          <Route path="/docker" element={<ModulePage moduleId="docker" />} />
          <Route path="/docker/:sectionId" element={<RedirectToSection />} />
          <Route path="/entornos" element={<ModulePage moduleId="entornos" />} />
          <Route path="/entornos/:sectionId" element={<RedirectToSection />} />
          <Route path="/sql" element={<ModulePage moduleId="sql" />} />
          <Route path="/sql/:sectionId" element={<RedirectToSection />} />
          <Route path="/spring-boot" element={<ModulePage moduleId="spring-boot" />} />
          <Route path="/spring-boot/:sectionId" element={<RedirectToSection />} />
          <Route path="/metodologias" element={<ModulePage moduleId="metodologias" />} />
          <Route path="/metodologias/:sectionId" element={<RedirectToSection />} />
          <Route path="/contacto" element={<ModulePage moduleId="contacto" />} />
          <Route path="/contacto/:sectionId" element={<RedirectToSection />} />
          <Route path="/proyecto" element={<ModulePage moduleId="proyecto" />} />
          <Route path="/proyecto/:sectionId" element={<RedirectToSection />} />
          <Route path="/aws" element={<ModulePage moduleId="aws" />} />
          <Route path="/aws/:sectionId" element={<RedirectToSection />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
