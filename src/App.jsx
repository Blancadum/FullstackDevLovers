import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { Header, Footer, ScrollToTop, PageTransition, AutoScrollToTop } from './components';
import { useBreadcrumb } from './hooks/useBreadcrumb';
import { useHeroVisible } from './hooks/useHeroVisible';
import { Home, ModulePage, SectionPage } from './pages';
import './App.css';

const SectionPageWrapper = lazy(() => import('./pages/SectionPageWrapper').then(m => ({ default: m.SectionPageWrapper })));
const LessonGitConfiguracionInicial = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitConfiguracionInicial })));
const LessonGitCrearClonarRepos = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitCrearClonarRepos })));
const LessonGitCommits = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitCommits })));
const LessonGitBranches = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitBranches })));
const LessonGitMerge = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitMerge })));
const LessonGitAlias = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitAlias })));
const LessonGitErroresComunes = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitErroresComunes })));
const LessonGitPracticaConfigura = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPracticaConfigura })));
const LessonGitPracticaRepositorio = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPracticaRepositorio })));
const LessonGitPracticaCommits = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPracticaCommits })));
const LessonGitPracticaRamas = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPracticaRamas })));
const LessonGitPracticaMerge = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPracticaMerge })));
const LessonGitPushPullFetch = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPushPullFetch })));
const LessonGitPullRequests = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPullRequests })));
const LessonGitPlataformasRemotas = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitPlataformasRemotas })));
const LessonGitWorkflow = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitWorkflow })));
const LessonGitGitHub = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitGitHub })));
const LessonGitGitLab = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitGitLab })));
const LessonGitBitbucket = lazy(() => import('./pages/lessons/git').then(m => ({ default: m.LessonGitBitbucket })));
const LessonGitHubIntro = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubIntro })));
const LessonGitHubCrearCuenta = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubCrearCuenta })));
const LessonGitHubCrearClonarRepos = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubCrearClonarRepos })));
const LessonGitHubPushPull = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubPushPull })));
const LessonGitHubPullRequests = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubPullRequests })));
const LessonGitHubForks = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubForks })));
const LessonGitHubIssues = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubIssues })));
const LessonGitHubFlow = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubFlow })));
const LessonGitHubCiCdActions = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubCiCdActions })));
const LessonGitHubBranchProtection = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubBranchProtection })));
const LessonGitHubSeguridad = lazy(() => import('./pages/lessons/github').then(m => ({ default: m.LessonGitHubSeguridad })));
const LessonAbstractClasses = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonAbstractClasses })));
const LessonArrays = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonArrays })));
const LessonClasses = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonClasses })));
const LessonCollections = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonCollections })));
const LessonControlFlow = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonControlFlow })));
const LessonCRUD = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonCRUD })));
const LessonDataTypes = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonDataTypes })));
const LessonExceptions = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonExceptions })));
const LessonGenerics = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonGenerics })));
const LessonInheritance = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonInheritance })));
const LessonInterfacesAbstract = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonInterfacesAbstract })));
const LessonJavaInternals = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonJavaInternals })));
const LessonJavaOperators = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonJavaOperators })));
const LessonJavaVM = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonJavaVM })));
const LessonJDBC = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonJDBC })));
const LessonLambdas = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonLambdas })));
const LessonPolymorphism = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonPolymorphism })));
const LessonRefactoring = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonRefactoring })));
const LessonScanner = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonScanner })));
const LessonStreams = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonStreams })));
const LessonStrings = lazy(() => import('./pages/lessons/java').then(m => ({ default: m.LessonStrings })));
const LessonOAuth2JWT = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonOAuth2JWT })));
const LessonSpringBatch = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBatch })));
const LessonSpringBootControllers = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootControllers })));
const LessonSpringBootIntroduccion = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootIntroduccion })));
const LessonSpringBootJPA = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootJPA })));
const LessonSpringBootSecurity = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootSecurity })));
const LessonSpringBootServices = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootServices })));
const LessonSpringBootSetup = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootSetup })));
const LessonSpringBootTesting = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootTesting })));
const LessonSpringBootValidation = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringBootValidation })));
const LessonSpringSecurityAdvanced = lazy(() => import('./pages/lessons/spring-boot').then(m => ({ default: m.LessonSpringSecurityAdvanced })));
const LessonSQLAdvanced = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLAdvanced })));
const LessonSQLBackupRecuperacion = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLBackupRecuperacion })));
const LessonSQLCrearBD = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLCrearBD })));
const LessonSQLDDL = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLDDL })));
const LessonSQLDML = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLDML })));
const LessonSQLIntroduccion = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLIntroduccion })));
const LessonSQLJOINs = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLJOINs })));
const LessonSQLMongoDB = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLMongoDB })));
const LessonSQLMySQL = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLMySQL })));
const LessonSQLPostgreSQL = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLPostgreSQL })));
const LessonSQLUsuariosPermisos = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLUsuariosPermisos })));
const LessonSQLVsNoSQL = lazy(() => import('./pages/lessons/sql').then(m => ({ default: m.LessonSQLVsNoSQL })));
const LessonMongoDBIntroduccion = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBIntroduccion })));
const LessonMongoDBComparativa = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBComparativa })));
const LessonMongoDBDocumentos = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBDocumentos })));
const LessonMongoDBCreate = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBCreate })));
const LessonMongoDBRead = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBRead })));
const LessonMongoDBUpdate = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBUpdate })));
const LessonMongoDBDelete = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBDelete })));
const LessonMongoDBFiltros = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBFiltros })));
const LessonMongoDBAgregacion = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBAgregacion })));
const LessonMongoDBIndexacion = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBIndexacion })));
const LessonMongoDBEsquemas = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBEsquemas })));
const LessonMongoDBRelaciones = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBRelaciones })));
const LessonMongoDBValidacion = lazy(() => import('./pages/lessons/mongodb').then(m => ({ default: m.LessonMongoDBValidacion })));
const LessonBashShell = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonBashShell })));
const LessonBitbucket = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonBitbucket })));
const LessonCICD = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonCICD })));
const LessonCloudDeployment = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonCloudDeployment })));
const LessonCodeiumAI = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonCodeiumAI })));
const LessonConceptoEntornoDesarrollo = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonConceptoEntornoDesarrollo })));
const LessonDependencias = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonDependencias })));
const LessonEclipse = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonEclipse })));
const LessonGradle = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonGradle })));
const LessonIDEs = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonIDEs })));
const LessonIntelliJ = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonIntelliJ })));
const LessonMaven = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonMaven })));
const LessonVSCode = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonVSCode })));
const LessonVSCodeExtensions = lazy(() => import('./pages/lessons/herramientas').then(m => ({ default: m.LessonVSCodeExtensions })));
const LessonGitHubActions = lazy(() => import('./pages/LessonGitHubActions').then(m => ({ default: m.LessonGitHubActions })));
const LessonAgileIntroduccion = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonAgileIntroduccion })));
const LessonDevelopmentConcepts = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonDevelopmentConcepts })));
const LessonPatronesDiseno = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonPatronesDiseno })));
const LessonSOLID = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonSOLID })));
const LessonSoftwareTesting = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonSoftwareTesting })));
const LessonUML = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonUML })));
const LessonScrumFramework = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonScrumFramework })));
const LessonSprintsPlanning = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonSprintsPlanning })));
const LessonNombresSignificativos = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonNombresSignificativos })));
const LessonFuncionesLimpias = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonFuncionesLimpias })));
const LessonEstructuraFormato = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonEstructuraFormato })));
const LessonAntipatrones = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonAntipatrones })));
const LessonTestingUnitario = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonTestingUnitario })));
const LessonTestingIntegracion = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonTestingIntegracion })));
const LessonTestingAceptacion = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonTestingAceptacion })));
const LessonDevOpsIntroduccion = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonDevOpsIntroduccion })));
const LessonDevOpsCICD = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonDevOpsCICD })));
const LessonDevOpsMonitoreo = lazy(() => import('./pages/lessons/metodologias').then(m => ({ default: m.LessonDevOpsMonitoreo })));
const LessonKubernetesDeployments = lazy(() => import('./pages/lessons/kubernetes').then(m => ({ default: m.LessonKubernetesDeployments })));
const LessonKubernetesIntro = lazy(() => import('./pages/lessons/kubernetes').then(m => ({ default: m.LessonKubernetesIntro })));
const LessonKubernetesPods = lazy(() => import('./pages/lessons/kubernetes').then(m => ({ default: m.LessonKubernetesPods })));
const LessonKotlinIntroduccion = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinIntroduccion })));
const LessonKotlinVsJava = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinVsJava })));
const LessonKotlinSintaxis = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinSintaxis })));
const LessonKotlinNullSafety = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinNullSafety })));
const LessonKotlinExtensionFunctions = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinExtensionFunctions })));
const LessonKotlinLambdas = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinLambdas })));
const LessonKotlinCorrutinas = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinCorrutinas })));
const LessonKotlinClasesObjetos = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinClasesObjetos })));
const LessonKotlinScopeFunctions = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinScopeFunctions })));
const LessonKotlinDsls = lazy(() => import('./pages/lessons/kotlin').then(m => ({ default: m.LessonKotlinDsls })));
const LessonAWSBeanstalk = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSBeanstalk })));
const LessonAWSECS = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSECS })));
const LessonAWSCloudFront = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSCloudFront })));
const LessonAWSSeguridad = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSSeguridad })));
const LessonAWSBackup = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSBackup })));
const LessonAWSPracticas = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSPracticas })));
const LessonContactoEmail = lazy(() => import('./pages/LessonContactoEmail').then(m => ({ default: m.LessonContactoEmail })));
const LessonContactoFormulario = lazy(() => import('./pages/LessonContactoFormulario').then(m => ({ default: m.LessonContactoFormulario })));
const LessonContactoFAQ = lazy(() => import('./pages/LessonContactoFAQ').then(m => ({ default: m.LessonContactoFAQ })));
const LessonDefinicionProyecto = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonDefinicionProyecto })));
const LessonProyectoAPIs = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoAPIs })));
const LessonProyectoAgile = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoAgile })));
const LessonProyectoArquitectura = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoArquitectura })));
const LessonProyectoBackend = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoBackend })));
const LessonProyectoDatabase = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoDatabase })));
const LessonProyectoEjemplos = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoEjemplos })));
const LessonProyectoRequisitos = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoRequisitos })));
const LessonProyectoRetos = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoRetos })));
const LessonProyectoSetup = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoSetup })));
const LessonProyectoSprint1 = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoSprint1 })));
const LessonProyectoSprint2 = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoSprint2 })));
const LessonProyectoTesting = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoTesting })));
const LessonProyectoTestingIntegracion = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoTestingIntegracion })));
const LessonProyectoValidacionFinal = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoValidacionFinal })));
const LessonProyectoBuild = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoBuild })));
const LessonProyectoDocumentacionFinal = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoDocumentacionFinal })));
const LessonProyectoDespliegueCloud = lazy(() => import('./pages/lessons/proyecto').then(m => ({ default: m.LessonProyectoDespliegueCloud })));
const LessonDocker = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDocker })));
const LessonDockerConceptos = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerConceptos })));
const LessonDockerfile = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerfile })));
const LessonDockerComandos = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerComandos })));
const LessonDockerComposeNew = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerComposeNew })));
const LessonDockerNetworking = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerNetworking })));
const LessonDockerVolumenes = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerVolumenes })));
const LessonDockerMultistage = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerMultistage })));
const LessonDockerOptimizacion = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerOptimizacion })));
const LessonDockerDebugging = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerDebugging })));
const LessonDockerPracticas = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerPracticas })));
const LessonDockerPython = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerPython })));
const LessonDockerJava = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerJava })));
const LessonDockerFrontend = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerFrontend })));
const LessonDockerNodejs = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerNodejs })));
const LessonDockerCompose = lazy(() => import('./pages/lessons/docker').then(m => ({ default: m.LessonDockerCompose })));
const LessonAWSAlmacenamiento = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSAlmacenamiento })));
const LessonAWSArquitectura = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSArquitectura })));
const LessonAWSCloudWatch = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSCloudWatch })));
const LessonAWSConceptos = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSConceptos })));
const LessonAWSDeployment = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSDeployment })));
const LessonAWSDynamoDB = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSDynamoDB })));
const LessonAWSEC2 = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSEC2 })));
const LessonAWSIAM = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSIAM })));
const LessonAWSIntro = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSIntro })));
const LessonAWSJava = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSJava })));
const LessonAWSLambda = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSLambda })));
const LessonAWSPricing = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSPricing })));
const LessonAWSProyecto = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSProyecto })));
const LessonAWSRDS = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSRDS })));
const LessonAWSS3 = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSS3 })));
const LessonAWSVPC = lazy(() => import('./pages/lessons/aws').then(m => ({ default: m.LessonAWSVPC })));
const ComparisonS3VsDocker = lazy(() => import('./pages/ComparisonS3VsDocker').then(m => ({ default: m.ComparisonS3VsDocker })));
const ComparisonEC2VsLambda = lazy(() => import('./pages/ComparisonEC2VsLambda').then(m => ({ default: m.ComparisonEC2VsLambda })));
const ComparisonRDSVsDynamoDB = lazy(() => import('./pages/ComparisonRDSVsDynamoDB').then(m => ({ default: m.ComparisonRDSVsDynamoDB })));
const ComparisonDockerVsKubernetes = lazy(() => import('./pages/ComparisonDockerVsKubernetes').then(m => ({ default: m.ComparisonDockerVsKubernetes })));
const LandingKubernetes = lazy(() => import('./pages/LandingKubernetes').then(m => ({ default: m.LandingKubernetes })));
const CasoRealEC2 = lazy(() => import('./pages/CasoRealEC2').then(m => ({ default: m.CasoRealEC2 })));
const CasoRealRDS = lazy(() => import('./pages/CasoRealRDS').then(m => ({ default: m.CasoRealRDS })));
const CasoRealLambda = lazy(() => import('./pages/CasoRealLambda').then(m => ({ default: m.CasoRealLambda })));
const CasoRealS3 = lazy(() => import('./pages/CasoRealS3').then(m => ({ default: m.CasoRealS3 })));
const CasoRealDynamoDB = lazy(() => import('./pages/CasoRealDynamoDB').then(m => ({ default: m.CasoRealDynamoDB })));
const LandingDevOps = lazy(() => import('./pages/LandingDevOps').then(m => ({ default: m.LandingDevOps })));
const LandingAWS = lazy(() => import('./pages/LandingAWS').then(m => ({ default: m.LandingAWS })));
const LandingDocker = lazy(() => import('./pages/LandingDocker').then(m => ({ default: m.LandingDocker })));
const LandingJava = lazy(() => import('./pages/LandingJava').then(m => ({ default: m.LandingJava })));
const LandingSpringBoot = lazy(() => import('./pages/LandingSpringBoot').then(m => ({ default: m.LandingSpringBoot })));
const LandingGit = lazy(() => import('./pages/LandingGit').then(m => ({ default: m.LandingGit })));
const LandingGitHub = lazy(() => import('./pages/LandingGitHub').then(m => ({ default: m.LandingGitHub })));
const LandingHerramientas = lazy(() => import('./pages/LandingHerramientas').then(m => ({ default: m.LandingHerramientas })));
const LandingArquitectura = lazy(() => import('./pages/LandingArquitectura').then(m => ({ default: m.LandingArquitectura })));
const LandingBuildTools = lazy(() => import('./pages/LandingBuildTools').then(m => ({ default: m.LandingBuildTools })));
const LandingSQLBasico = lazy(() => import('./pages/LandingSQLBasico').then(m => ({ default: m.LandingSQLBasico })));
const LandingMetodologias = lazy(() => import('./pages/LandingMetodologias').then(m => ({ default: m.LandingMetodologias })));
const MethodologyWrapper = lazy(() => import('./pages/MethodologyWrapper').then(m => ({ default: m.MethodologyWrapper })));
const LandingProyecto = lazy(() => import('./pages/LandingProyecto').then(m => ({ default: m.LandingProyecto })));
const LandingReact = lazy(() => import('./pages/LandingReact').then(m => ({ default: m.LandingReact })));
const LessonReactIntroduccion = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactIntroduccion })));
const LessonReactJSXComponentes = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactJSXComponentes })));
const LessonReactPropsEstado = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactPropsEstado })));
const LessonReactUseState = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactUseState })));
const LessonReactUseEffect = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactUseEffect })));
const LessonReactHooksPersonalizados = lazy(() => import('./pages/lessons/react').then(m => ({ default: m.LessonReactHooksPersonalizados })));
const LandingAngular = lazy(() => import('./pages/LandingAngular').then(m => ({ default: m.LandingAngular })));
const LessonAngularIntroduccion = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularIntroduccion })));
const LessonAngularComponentes = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularComponentes })));
const LessonAngularDataBinding = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularDataBinding })));
const LessonAngularServicios = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularServicios })));
const LessonAngularDependencyInjection = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularDependencyInjection })));
const LessonAngularHttpclient = lazy(() => import('./pages/lessons/angular').then(m => ({ default: m.LessonAngularHttpclient })));
const LessonHTMLIntroduccion = lazy(() => import('./pages/lessons/html').then(m => ({ default: m.LessonHTMLIntroduccion })));
const LessonHTMLEstructura = lazy(() => import('./pages/lessons/html').then(m => ({ default: m.LessonHTMLEstructura })));
const LessonHTMLEtiquetas = lazy(() => import('./pages/lessons/html').then(m => ({ default: m.LessonHTMLEtiquetas })));
const LessonHTMLFormularios = lazy(() => import('./pages/lessons/html').then(m => ({ default: m.LessonHTMLFormularios })));
const LessonHTMLValidacion = lazy(() => import('./pages/lessons/html').then(m => ({ default: m.LessonHTMLValidacion })));
const LessonCSSIntroduccion = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSIntroduccion })));
const LessonCSSSelectores = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSSelectores })));
const LessonCSSBoxModel = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSBoxModel })));
const LessonCSSFlexbox = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSFlexbox })));
const LessonCSSGrid = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSGrid })));
const LessonCSSResponsive = lazy(() => import('./pages/lessons/css').then(m => ({ default: m.LessonCSSResponsive })));
const LandingHTML = lazy(() => import('./pages/LandingHTML').then(m => ({ default: m.LandingHTML })));
const LandingCSS = lazy(() => import('./pages/LandingCSS').then(m => ({ default: m.LandingCSS })));
const LandingBootstrap = lazy(() => import('./pages/LandingBootstrap').then(m => ({ default: m.LandingBootstrap })));
const LessonBootstrapIntroduccion = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapIntroduccion })));
const LessonBootstrapGrid = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapGrid })));
const LessonBootstrapComponentes = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapComponentes })));
const LessonBootstrapBotonesFormularios = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapBotonesFormularios })));
const LessonBootstrapNavbars = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapNavbars })));
const LessonBootstrapCards = lazy(() => import('./pages/lessons/bootstrap').then(m => ({ default: m.LessonBootstrapCards })));
const LandingTailwindCSS = lazy(() => import('./pages/LandingTailwindCSS').then(m => ({ default: m.LandingTailwindCSS })));
const LessonTailwindIntroduccion = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindIntroduccion })));
const LessonTailwindUtilities = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindUtilities })));
const LessonTailwindResponsive = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindResponsive })));
const LessonTailwindComponentes = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindComponentes })));
const LessonTailwindCustomizacion = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindCustomizacion })));
const LessonTailwindTemas = lazy(() => import('./pages/lessons/tailwindcss').then(m => ({ default: m.LessonTailwindTemas })));
const LandingMongoDB = lazy(() => import('./pages/LandingMongoDB').then(m => ({ default: m.LandingMongoDB })));
const LandingKotlin = lazy(() => import('./pages/LandingKotlin').then(m => ({ default: m.LandingKotlin })));
const LandingNodejs = lazy(() => import('./pages/LandingNodejs').then(m => ({ default: m.LandingNodejs })));
const LandingNodejsIntroduccion = lazy(() => import('./pages/LandingNodejsIntroduccion').then(m => ({ default: m.LandingNodejsIntroduccion })));
const LandingNodejsNPM = lazy(() => import('./pages/LandingNodejsNPM').then(m => ({ default: m.LandingNodejsNPM })));
const LandingNodejsModulos = lazy(() => import('./pages/LandingNodejsModulos').then(m => ({ default: m.LandingNodejsModulos })));
const LandingNodejsEventLoop = lazy(() => import('./pages/LandingNodejsEventLoop').then(m => ({ default: m.LandingNodejsEventLoop })));
const LessonNodejsHttp = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsHttp })));
const LessonNodejsExpress = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsExpress })));
const LessonNodejsRouting = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsRouting })));
const LessonNodejsRestApis = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsRestApis })));
const LessonNodejsBasesDatos = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsBasesDatos })));
const LessonNodejsSequelize = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsSequelize })));
const LessonNodejsTransacciones = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsTransacciones })));
const LessonNodejsJwt = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsJwt })));
const LessonNodejsTesting = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsTesting })));
const LessonNodejsDespliegue = lazy(() => import('./pages/lessons/nodejs').then(m => ({ default: m.LessonNodejsDespliegue })));
const LandingBackend = lazy(() => import('./pages/LandingBackend').then(m => ({ default: m.LandingBackend })));
const LandingFrontend = lazy(() => import('./pages/LandingFrontend').then(m => ({ default: m.LandingFrontend })));
const LandingDatos = lazy(() => import('./pages/LandingDatos').then(m => ({ default: m.LandingDatos })));
const LandingCloud = lazy(() => import('./pages/LandingCloud').then(m => ({ default: m.LandingCloud })));
const LandingVersionamiento = lazy(() => import('./pages/LandingVersionamiento').then(m => ({ default: m.LandingVersionamiento })));
const LandingEditores = lazy(() => import('./pages/LandingEditores').then(m => ({ default: m.LandingEditores })));
const LandingHosting = lazy(() => import('./pages/LandingHosting').then(m => ({ default: m.LandingHosting })));
const LandingIA = lazy(() => import('./pages/LandingIA').then(m => ({ default: m.LandingIA })));
const LandingContenidos = lazy(() => import('./pages/LandingContenidos').then(m => ({ default: m.LandingContenidos })));
const LandingSEO = lazy(() => import('./pages/LandingSEO').then(m => ({ default: m.LandingSEO })));
const LandingHerramientasMetodologias = lazy(() => import('./pages/LandingHerramientasMetodologias').then(m => ({ default: m.LandingHerramientasMetodologias })));
const LexicoAWS = lazy(() => import('./pages/LexicoAWS').then(m => ({ default: m.LexicoAWS })));
const LexicoGeneral = lazy(() => import('./pages/LexicoGeneral').then(m => ({ default: m.LexicoGeneral })));
const EvaluacionAWS = lazy(() => import('./pages/EvaluacionAWS').then(m => ({ default: m.EvaluacionAWS })));
const EvaluacionGeneral = lazy(() => import('./pages/EvaluacionGeneral').then(m => ({ default: m.EvaluacionGeneral })));
const LessonProyectoReto1 = lazy(() => import('./pages/LessonProyectoReto1').then(m => ({ default: m.LessonProyectoReto1 })));
const LessonProyectoReto2 = lazy(() => import('./pages/LessonProyectoReto2').then(m => ({ default: m.LessonProyectoReto2 })));
const LessonProyectoReto3 = lazy(() => import('./pages/LessonProyectoReto3').then(m => ({ default: m.LessonProyectoReto3 })));
const LessonProyectoReto4 = lazy(() => import('./pages/LessonProyectoReto4').then(m => ({ default: m.LessonProyectoReto4 })));
const LessonProyectoReto5 = lazy(() => import('./pages/LessonProyectoReto5').then(m => ({ default: m.LessonProyectoReto5 })));
const LessonProyectoReto6 = lazy(() => import('./pages/LessonProyectoReto6').then(m => ({ default: m.LessonProyectoReto6 })));
const LessonProyectoReto7 = lazy(() => import('./pages/LessonProyectoReto7').then(m => ({ default: m.LessonProyectoReto7 })));
const LessonProyectoReto8 = lazy(() => import('./pages/LessonProyectoReto8').then(m => ({ default: m.LessonProyectoReto8 })));
const LessonEjemplosTFC = lazy(() => import('./pages/LessonEjemplosTFC').then(m => ({ default: m.LessonEjemplosTFC })));
const TestLesson = lazy(() => import('./pages/TestLesson').then(m => ({ default: m.TestLesson })));
const TestLessonTemplate = lazy(() => import('./pages/TestLessonTemplate').then(m => ({ default: m.TestLessonTemplate })));

// Componente de redirección para secciones (/categoria/modulo/section → /categoria/modulo?section=section)
function RedirectToSection() {
  const { sectionId } = useParams();
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  // Toma los dos primeros segmentos (categoria/modulo)
  const basePath = `/${pathParts[0]}/${pathParts[1]}`;
  return <Navigate to={`${basePath}?section=${sectionId}`} replace />;
}

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
        <Suspense fallback={<div className="route-loading" />}>
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

          {/* Lecciones - GitHub Básicos */}
          <Route path="/control-versiones/github/basicos/intro" element={<LessonGitHubIntro />} />
          <Route path="/control-versiones/github/basicos/crear-cuenta" element={<LessonGitHubCrearCuenta />} />
          <Route path="/control-versiones/github/basicos/crear-clonar-repos" element={<LessonGitHubCrearClonarRepos />} />
          <Route path="/control-versiones/github/basicos/push-pull" element={<LessonGitHubPushPull />} />

          {/* Lecciones - GitHub Colaboración */}
          <Route path="/control-versiones/github/colaboracion/pull-requests" element={<LessonGitHubPullRequests />} />
          <Route path="/control-versiones/github/colaboracion/forks" element={<LessonGitHubForks />} />
          <Route path="/control-versiones/github/colaboracion/issues" element={<LessonGitHubIssues />} />
          <Route path="/control-versiones/github/colaboracion/github-flow" element={<LessonGitHubFlow />} />

          {/* Lecciones - GitHub Avanzado */}
          <Route path="/control-versiones/github/avanzado/actions" element={<LessonGitHubCiCdActions />} />
          <Route path="/control-versiones/github/avanzado/branch-protection" element={<LessonGitHubBranchProtection />} />
          <Route path="/control-versiones/github/avanzado/seguridad" element={<LessonGitHubSeguridad />} />

          {/* Lecciones - Java Básico */}
          <Route path="/backend/java/introduccion/funcionamiento" element={<LessonJavaInternals />} />
          <Route path="/backend/java/introduccion/tipos-datos" element={<LessonDataTypes />} />
          <Route path="/backend/java/introduccion/control-flujo" element={<LessonControlFlow />} />
          <Route path="/backend/java/introduccion/strings" element={<LessonStrings />} />
          <Route path="/backend/java/introduccion/arrays" element={<LessonArrays />} />
          <Route path="/backend/java/introduccion/scanner" element={<LessonScanner />} />
          <Route path="/backend/java/introduccion/excepciones" element={<LessonExceptions />} />
          <Route path="/backend/java/introduccion/operadores" element={<LessonJavaOperators />} />

          {/* Lecciones - Java POO */}
          <Route path="/backend/java/oop/clases-objetos" element={<LessonClasses />} />
          <Route path="/backend/java/oop/clases-abstractas" element={<LessonAbstractClasses />} />
          <Route path="/backend/java/oop/herencia" element={<LessonInheritance />} />
          <Route path="/backend/java/oop/polimorfismo" element={<LessonPolymorphism />} />
          <Route path="/backend/java/oop/interfaces-abstractas" element={<LessonInterfacesAbstract />} />

          {/* Lecciones - Java Avanzado */}
          <Route path="/backend/java/avanzado/jvm" element={<LessonJavaVM />} />
          <Route path="/backend/java/avanzado/colecciones" element={<LessonCollections />} />
          <Route path="/backend/java/avanzado/lambdas" element={<LessonLambdas />} />
          <Route path="/backend/java/avanzado/streams" element={<LessonStreams />} />
          <Route path="/backend/java/avanzado/genericos" element={<LessonGenerics />} />

          {/* Lecciones - Conexión a BD */}
          <Route path="/backend/java/persistencia/jdbc" element={<LessonJDBC />} />
          <Route path="/backend/java/persistencia/crud" element={<LessonCRUD />} />

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
          <Route path="/cloud/aws/deployment/beanstalk" element={<LessonAWSBeanstalk />} />
          <Route path="/cloud/aws/deployment/ecs" element={<LessonAWSECS />} />
          <Route path="/cloud/aws/deployment/cloudfront" element={<LessonAWSCloudFront />} />
          <Route path="/cloud/aws/operaciones/cloudwatch" element={<LessonAWSCloudWatch />} />
          <Route path="/cloud/aws/operaciones/seguridad" element={<LessonAWSSeguridad />} />
          <Route path="/cloud/aws/operaciones/backup" element={<LessonAWSBackup />} />
          <Route path="/cloud/aws/operaciones/practicas" element={<LessonAWSPracticas />} />
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
          <Route path="/control-versiones/github" element={<LandingGitHub />} />
          <Route path="/datos/sql" element={<LandingSQLBasico />} />
          <Route path="/metodologias" element={<LandingMetodologias />} />
          <Route path="/editores" element={<LandingEditores />} />
          <Route path="/hosting" element={<LandingHosting />} />
          <Route path="/ia" element={<LandingIA />} />
          <Route path="/contenidos" element={<LandingContenidos />} />
          <Route path="/seo" element={<LandingSEO />} />
          <Route path="/proyecto" element={<LandingProyecto />} />
          <Route path="/frontend/react" element={<LandingReact />} />
          <Route path="/frontend/react/fundamentos/introduccion" element={<LessonReactIntroduccion />} />
          <Route path="/frontend/react/fundamentos/jsx-componentes" element={<LessonReactJSXComponentes />} />
          <Route path="/frontend/react/fundamentos/props-estado" element={<LessonReactPropsEstado />} />
          <Route path="/frontend/react/hooks/usestate" element={<LessonReactUseState />} />
          <Route path="/frontend/react/hooks/useeffect" element={<LessonReactUseEffect />} />
          <Route path="/frontend/react/hooks/custom" element={<LessonReactHooksPersonalizados />} />
          <Route path="/frontend/angular" element={<LandingAngular />} />
          <Route path="/frontend/angular/introduccion" element={<LessonAngularIntroduccion />} />
          <Route path="/frontend/angular/componentes" element={<LessonAngularComponentes />} />
          <Route path="/frontend/angular/data-binding" element={<LessonAngularDataBinding />} />
          <Route path="/frontend/angular/servicios" element={<LessonAngularServicios />} />
          <Route path="/frontend/angular/dependency-injection" element={<LessonAngularDependencyInjection />} />
          <Route path="/frontend/angular/httpclient" element={<LessonAngularHttpclient />} />
          <Route path="/frontend/html" element={<LandingHTML />} />
          <Route path="/frontend/html/introduccion" element={<LessonHTMLIntroduccion />} />
          <Route path="/frontend/html/estructura" element={<LessonHTMLEstructura />} />
          <Route path="/frontend/html/etiquetas" element={<LessonHTMLEtiquetas />} />
          <Route path="/frontend/html/formularios" element={<LessonHTMLFormularios />} />
          <Route path="/frontend/html/validacion" element={<LessonHTMLValidacion />} />
          <Route path="/frontend/css" element={<LandingCSS />} />
          <Route path="/frontend/css/introduccion" element={<LessonCSSIntroduccion />} />
          <Route path="/frontend/css/selectores" element={<LessonCSSSelectores />} />
          <Route path="/frontend/css/box-model" element={<LessonCSSBoxModel />} />
          <Route path="/frontend/css/flexbox" element={<LessonCSSFlexbox />} />
          <Route path="/frontend/css/grid" element={<LessonCSSGrid />} />
          <Route path="/frontend/css/responsive" element={<LessonCSSResponsive />} />
          <Route path="/frontend/bootstrap" element={<LandingBootstrap />} />
          <Route path="/frontend/bootstrap/introduccion" element={<LessonBootstrapIntroduccion />} />
          <Route path="/frontend/bootstrap/grid" element={<LessonBootstrapGrid />} />
          <Route path="/frontend/bootstrap/componentes" element={<LessonBootstrapComponentes />} />
          <Route path="/frontend/bootstrap/botones-formularios" element={<LessonBootstrapBotonesFormularios />} />
          <Route path="/frontend/bootstrap/navbars" element={<LessonBootstrapNavbars />} />
          <Route path="/frontend/bootstrap/cards" element={<LessonBootstrapCards />} />
          <Route path="/frontend/tailwindcss" element={<LandingTailwindCSS />} />
          <Route path="/frontend/tailwindcss/introduccion" element={<LessonTailwindIntroduccion />} />
          <Route path="/frontend/tailwindcss/utilities" element={<LessonTailwindUtilities />} />
          <Route path="/frontend/tailwindcss/responsive" element={<LessonTailwindResponsive />} />
          <Route path="/frontend/tailwindcss/componentes" element={<LessonTailwindComponentes />} />
          <Route path="/frontend/tailwindcss/customizacion" element={<LessonTailwindCustomizacion />} />
          <Route path="/frontend/tailwindcss/temas" element={<LessonTailwindTemas />} />
          <Route path="/datos/mongodb" element={<LandingMongoDB />} />
          <Route path="/backend/kotlin" element={<LandingKotlin />} />
          <Route path="/backend/kotlin/introduccion" element={<LessonKotlinIntroduccion />} />
          <Route path="/backend/kotlin/kotlin-vs-java" element={<LessonKotlinVsJava />} />
          <Route path="/backend/kotlin/sintaxis" element={<LessonKotlinSintaxis />} />
          <Route path="/backend/kotlin/null-safety" element={<LessonKotlinNullSafety />} />
          <Route path="/backend/kotlin/extension-functions" element={<LessonKotlinExtensionFunctions />} />
          <Route path="/backend/kotlin/lambdas" element={<LessonKotlinLambdas />} />
          <Route path="/backend/kotlin/corrutinas" element={<LessonKotlinCorrutinas />} />
          <Route path="/backend/kotlin/clases-objetos" element={<LessonKotlinClasesObjetos />} />
          <Route path="/backend/kotlin/scope-functions" element={<LessonKotlinScopeFunctions />} />
          <Route path="/backend/kotlin/dsls" element={<LessonKotlinDsls />} />
          <Route path="/backend/nodejs" element={<LandingNodejs />} />
          <Route path="/backend/nodejs/introduccion" element={<LandingNodejsIntroduccion />} />
          <Route path="/backend/nodejs/npm" element={<LandingNodejsNPM />} />
          <Route path="/backend/nodejs/modulos" element={<LandingNodejsModulos />} />
          <Route path="/backend/nodejs/event-loop" element={<LandingNodejsEventLoop />} />
          <Route path="/backend/nodejs/http" element={<LessonNodejsHttp />} />
          <Route path="/backend/nodejs/express" element={<LessonNodejsExpress />} />
          <Route path="/backend/nodejs/routing" element={<LessonNodejsRouting />} />
          <Route path="/backend/nodejs/rest-apis" element={<LessonNodejsRestApis />} />
          <Route path="/backend/nodejs/bases-datos" element={<LessonNodejsBasesDatos />} />
          <Route path="/backend/nodejs/sequelize" element={<LessonNodejsSequelize />} />
          <Route path="/backend/nodejs/transacciones" element={<LessonNodejsTransacciones />} />
          <Route path="/backend/nodejs/jwt" element={<LessonNodejsJwt />} />
          <Route path="/backend/nodejs/testing" element={<LessonNodejsTesting />} />
          <Route path="/backend/nodejs/despliegue" element={<LessonNodejsDespliegue />} />

          {/* Landing Pages - Categorías Superiores */}
          <Route path="/backend" element={<LandingBackend />} />
          <Route path="/frontend" element={<LandingFrontend />} />
          <Route path="/datos" element={<LandingDatos />} />
          <Route path="/cloud" element={<LandingCloud />} />
          <Route path="/control-versiones" element={<LandingVersionamiento />} />

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

          {/* Lecciones - MongoDB */}
          <Route path="/datos/mongodb/introduccion" element={<LessonMongoDBIntroduccion />} />
          <Route path="/datos/mongodb/comparativa" element={<LessonMongoDBComparativa />} />
          <Route path="/datos/mongodb/documentos" element={<LessonMongoDBDocumentos />} />
          <Route path="/datos/mongodb/operaciones/create" element={<LessonMongoDBCreate />} />
          <Route path="/datos/mongodb/operaciones/read" element={<LessonMongoDBRead />} />
          <Route path="/datos/mongodb/operaciones/update" element={<LessonMongoDBUpdate />} />
          <Route path="/datos/mongodb/operaciones/delete" element={<LessonMongoDBDelete />} />
          <Route path="/datos/mongodb/consultas/filtros" element={<LessonMongoDBFiltros />} />
          <Route path="/datos/mongodb/consultas/agregacion" element={<LessonMongoDBAgregacion />} />
          <Route path="/datos/mongodb/consultas/indexacion" element={<LessonMongoDBIndexacion />} />
          <Route path="/datos/mongodb/modelado/esquemas" element={<LessonMongoDBEsquemas />} />
          <Route path="/datos/mongodb/modelado/relaciones" element={<LessonMongoDBRelaciones />} />
          <Route path="/datos/mongodb/modelado/validacion" element={<LessonMongoDBValidacion />} />

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
          <Route path="/proyecto/testing/integracion" element={<LessonProyectoTestingIntegracion />} />
          <Route path="/proyecto/testing/validacion" element={<LessonProyectoValidacionFinal />} />

          {/* Lecciones - Proyecto Despliegue */}
          <Route path="/proyecto/despliegue/build" element={<LessonProyectoBuild />} />
          <Route path="/proyecto/despliegue/documentacion" element={<LessonProyectoDocumentacionFinal />} />
          <Route path="/proyecto/despliegue/cloud" element={<LessonProyectoDespliegueCloud />} />

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
          <Route path="/metodologias/agile-scrum/scrum" element={<LessonScrumFramework />} />
          <Route path="/metodologias/agile-scrum/sprints" element={<LessonSprintsPlanning />} />

          {/* Lecciones - Clean Code */}
          <Route path="/metodologias/clean-code/nombres" element={<LessonNombresSignificativos />} />
          <Route path="/metodologias/clean-code/funciones" element={<LessonFuncionesLimpias />} />
          <Route path="/metodologias/clean-code/estructura" element={<LessonEstructuraFormato />} />
          <Route path="/metodologias/clean-code/solid" element={<LessonSOLID />} />
          <Route path="/metodologias/clean-code/patrones" element={<LessonPatronesDiseno />} />
          <Route path="/metodologias/clean-code/antipatrones" element={<LessonAntipatrones />} />

          {/* Lecciones - Testing */}
          <Route path="/metodologias/testing/unitario" element={<LessonTestingUnitario />} />
          <Route path="/metodologias/testing/integracion" element={<LessonTestingIntegracion />} />
          <Route path="/metodologias/testing/aceptacion" element={<LessonTestingAceptacion />} />

          {/* Lecciones - DevOps */}
          <Route path="/metodologias/devops/introduccion" element={<LessonDevOpsIntroduccion />} />
          <Route path="/metodologias/devops/cicd" element={<LessonDevOpsCICD />} />
          <Route path="/metodologias/devops/monitoreo" element={<LessonDevOpsMonitoreo />} />

          {/* Lecciones - Contacto */}
          <Route path="/contacto/general/email" element={<LessonContactoEmail />} />
          <Route path="/contacto/general/formulario" element={<LessonContactoFormulario />} />
          <Route path="/contacto/general/faq" element={<LessonContactoFAQ />} />

          {/* Rutas comodín para módulos (van al final) */}
          <Route path="/control-versiones/git/:sectionId" element={<ModulePage moduleId="git" />} />
          <Route path="/control-versiones/github/:sectionId" element={<ModulePage moduleId="github" />} />
          <Route path="/backend/java/:sectionId" element={<ModulePage moduleId="java" />} />
          <Route path="/cloud/docker/:sectionId" element={<ModulePage moduleId="docker" />} />
          <Route path="/herramientas/entornos" element={<ModulePage moduleId="entornos" />} />
          <Route path="/herramientas/entornos/:sectionId" element={<ModulePage moduleId="entornos" />} />
          <Route path="/datos/sql/:sectionId" element={<ModulePage moduleId="sql" />} />
          <Route path="/datos/mongodb/:sectionId" element={<ModulePage moduleId="mongodb" />} />
          <Route path="/backend/spring-boot/:sectionId" element={<ModulePage moduleId="spring-boot" />} />
          <Route path="/metodologias/:sectionId" element={<RedirectToSection />} />
          <Route path="/contacto" element={<ModulePage moduleId="contacto" />} />
          <Route path="/contacto/:sectionId" element={<RedirectToSection />} />
          <Route path="/proyecto/:sectionId" element={<RedirectToSection />} />
          <Route path="/cloud/aws/:sectionId" element={<RedirectToSection />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
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
