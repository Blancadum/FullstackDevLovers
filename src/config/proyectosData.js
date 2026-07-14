/**
 * Datos compartidos de 10 proyectos para todos los RETOS
 * Evita duplicación de 1,200+ líneas en LessonProyectoReto1-8.jsx
 */

export const PROYECTOS = {
  ecomarket: {
    nombre: 'EcoMarket',
    presupuesto: 4500,
    horas: 240,
    reto1: {
      presupuesto: 4500,
      duracionMeses: 3,
      equipoSize: 4,
      tecnologias: ['Spring Boot', 'PostgreSQL', 'React', 'Docker'],
      fases: ['Análisis', 'Diseño', 'Desarrollo', 'Testing', 'Deployment']
    },
    reto2: {
      frontend: 'React 18 + Redux + Material-UI',
      backend: 'Spring Boot 3 + Spring Data JPA',
      database: 'PostgreSQL 14 + Redis',
      devTools: ['IntelliJ IDEA', 'VSCode', 'DBeaver'],
      prodTools: ['Docker', 'Kubernetes', 'GitHub Actions']
    },
    reto3: {
      problema: 'Mercado de productos eco-friendly desorganizado',
      keyFeatures: ['Búsqueda por eco-rating', 'Recomendaciones personalizadas', 'Certificaciones verificadas'],
      innovation: 'Sistema de scoring ambiental automático',
      roi: 'Reducir tiempo búsqueda 80%, aumentar conversión 35%',
      pitch: 'EcoMarket: El marketplace que pone la sostenibilidad primero. Cada compra con impacto verificado.'
    },
    reto4: {
      teamComposition: '1 PM, 1 Arquitecto, 2 Backend, 1 Frontend, 1 QA',
      communicationMethod: 'Slack diario + Zoom 2x/semana',
      frequency: 'Daily standup 15min, Sprint planning 2h, Review 1.5h',
      incidentManagement: 'On-call rotation, SLA 1h',
      profiles: ['Líder técnico (Java/Spring)', 'Senior Frontend', 'QA especialista en e-commerce']
    },
    reto5: {
      epics: ['Autenticación y Seguridad', 'Catálogo de Productos', 'Sistema de Pagos', 'Analytics'],
      herramienta: 'Jira Cloud',
      razonHerramienta: 'Integración GitHub nativa, reportes avanzados',
      roles: ['Product Owner', 'Scrum Master', '4 Developers', '1 QA'],
      duracionSprint: 2,
      totalSprints: 6
    },
    reto6: {
      sprintDuration: 2,
      storiesCount: 8,
      storyPoints: 34,
      tasks: [
        'Autenticación y registro de usuarios',
        'Catálogo de productos eco-friendly',
        'Sistema de carrito de compras',
        'Pasarela de pago integrada',
        'Panel de administrador básico'
      ],
      dailyStandupAgenda: ['Progreso de features', 'Bloqueadores identificados', 'Plan para hoy'],
      ciTools: 'GitHub Actions + Docker'
    },
    reto7: {
      sprint2Duration: 2,
      newFeatures: ['Wishlist de productos', 'Descuentos y cupones', 'Email marketing automático'],
      refactoringTasks: ['Separar lógica de autenticación', 'Optimizar queries DB', 'Mejorar caché Redis'],
      testingMetrics: { unitCoverage: 75, integrationTests: 18, e2eTests: 12 },
      performanceTargets: ['Tiempo respuesta < 200ms', 'DB queries < 100ms', 'Tamaño bundle < 500KB'],
      retrospectiveItems: ['Estimación de puntos', 'Comunicación equipo', 'Herramientas usadas']
    },
    reto8: {
      finalSprintDuration: 2,
      completionMetrics: { features: 95, bugs: 5, coverage: 82 },
      acceptanceTests: ['Búsqueda de productos funciona', 'Checkout sin errores', 'Pagos procesados'],
      deploymentSteps: [
        'Backup BD producción',
        'Migración esquema DB',
        'Deploy aplicación',
        'Smoke tests',
        'Validar endpoints'
      ],
      monitoringMetrics: ['CPU < 70%', 'Memoria < 80%', 'Latencia < 200ms', 'Error rate < 0.1%'],
      productionReadiness: {
        database: 'PostgreSQL con replicación',
        cache: 'Redis cluster',
        loadBalancing: 'NGINX + Kubernetes',
        monitoring: 'Prometheus + Grafana + ELK'
      }
    }
  },
  techsalon: {
    nombre: 'TechSalon',
    presupuesto: 3800,
    horas: 200,
    reto1: { presupuesto: 3800, duracionMeses: 3, equipoSize: 3, tecnologias: ['Spring Boot', 'MySQL', 'Angular'], fases: ['Análisis', 'Diseño', 'Desarrollo', 'Testing', 'Deployment'] },
    reto2: { frontend: 'Angular 16 + Material Design', backend: 'Spring Boot 2.7', database: 'MySQL 8', devTools: ['VSCode', 'MySQL Workbench'], prodTools: ['Docker', 'AWS EC2'] },
    reto3: { problema: 'Salones de belleza sin sistema de reservas digital', keyFeatures: ['Calendarios por estilista', 'Notificaciones SMS', 'Galería de trabajos'], innovation: 'AR preview de estilos', roi: 'No-show reducido 50%', pitch: 'TechSalon: Transforma tu negocio de belleza con tecnología moderna.' },
    reto4: { teamComposition: '1 PM, 1 Backend Lead, 2 Fullstack, 1 QA', communicationMethod: 'Teams diario', frequency: 'Daily 10min, Weekly review', incidentManagement: 'On-call 24/7', profiles: ['Angular especialista', 'Spring Boot experto'] },
    reto5: { epics: ['Reservas', 'Pagos', 'Notificaciones', 'Reportes'], herramienta: 'Taiga', razonHerramienta: 'Gratuito, ágil, sin overhead', roles: ['PM', 'SM', '3 Devs', 'QA'], duracionSprint: 2, totalSprints: 5 },
    reto6: { sprintDuration: 2, storiesCount: 7, storyPoints: 30, tasks: ['Sistema de reservas', 'Perfiles estilistas', 'Galería trabajos', 'Notificaciones', 'Reseñas'], dailyStandupAgenda: ['Status tareas', 'Problemas técnicos', 'Coordinación QA'], ciTools: 'GitHub Actions + SonarQube' },
    reto7: { sprint2Duration: 2, newFeatures: ['Membresía', 'Push notifications', 'WhatsApp'], refactoringTasks: ['Refactor servicios', 'Mejorar excepciones', 'Consolidar DTOs'], testingMetrics: { unitCoverage: 72, integrationTests: 15, e2eTests: 10 }, performanceTargets: ['Latencia < 150ms', 'Carga < 2s', 'Error rate < 0.1%'], retrospectiveItems: ['Capacidad equipo', 'Tooling', 'Procesos'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 93, bugs: 7, coverage: 79 }, acceptanceTests: ['Reservas funcionan', 'Notificaciones enviadas', 'Perfiles visible'], deploymentSteps: ['Validar datos', 'Crear índices', 'Deploy v1.0', 'Smoke tests', 'Monitores'], monitoringMetrics: ['Uptime 99.9%', 'API < 150ms', 'Reservas/min', 'User sessions'], productionReadiness: { database: 'MySQL master-slave', cache: 'Redis', loadBalancing: 'HAProxy', monitoring: 'New Relic' } }
  },
  fooddeliverylocal: {
    nombre: 'FoodDeliveryLocal',
    presupuesto: 5200,
    horas: 280,
    reto1: { presupuesto: 5200, duracionMeses: 4, equipoSize: 5, tecnologias: ['Spring Boot', 'PostgreSQL', 'React Native'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React Native + Redux', backend: 'Spring Boot + Microservices', database: 'PostgreSQL + TimescaleDB', devTools: ['Android Studio', 'Xcode'], prodTools: ['Docker', 'Kubernetes', 'AWS'] },
    reto3: { problema: 'Restaurantes locales sin plataforma delivery integrada', keyFeatures: ['Geolocalización real-time', 'Seguimiento repartidor', 'Comisiones automáticas'], innovation: 'IA para optimizar rutas', roi: 'Ingresos +45%, comisiones -20%', pitch: 'FoodDeliveryLocal: Conecta restaurantes con clientes. Impulsa ventas, reduce costos.' },
    reto4: { teamComposition: '1 PM, 1 CTO, 2 Backend, 1 Frontend, 1 Mobile, 1 QA', communicationMethod: 'Slack + Zoom', frequency: 'Daily standup', incidentManagement: 'Critical SLA 30min', profiles: ['Geolocalización expert', 'Mobile dev'] },
    reto5: { epics: ['Restaurantes', 'Repartidores', 'Usuarios', 'Pagos', 'Analytics'], herramienta: 'Asana', razonHerramienta: 'Timeline view excelente', roles: ['PM', 'Tech lead', '5 devs', 'QA'], duracionSprint: 2, totalSprints: 8 },
    reto6: { sprintDuration: 2, storiesCount: 9, storyPoints: 38, tasks: ['Integración restaurantes', 'Geolocalización', 'Seguimiento real-time', 'Gestión repartidores', 'Pagos comisiones'], dailyStandupAgenda: ['APIs externas', 'Performance', 'Testing'], ciTools: 'GitLab CI + Docker Compose' },
    reto7: { sprint2Duration: 2, newFeatures: ['Favoritos', 'Promociones', 'Pagos múltiples'], refactoringTasks: ['Optimizar rutas', 'Cachear ubicaciones', 'Rate limiting'], testingMetrics: { unitCoverage: 78, integrationTests: 22, e2eTests: 14 }, performanceTargets: ['Geoloc < 500ms', 'Búsqueda < 300ms', 'Sync < 2s'], retrospectiveItems: ['APIs externas', 'Coverage', 'DevOps'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 97, bugs: 3, coverage: 85 }, acceptanceTests: ['Geolocalización funciona', 'Pedidos real-time', 'Pagos seguros'], deploymentSteps: ['Load testing 1000', 'Sync histórico', 'Canary deploy', 'Validar rutas', 'Alertas'], monitoringMetrics: ['Geoloc < 500ms', 'Pedidos/seg', 'Repartidores', 'Satisfacción 95%'], productionReadiness: { database: 'PostgreSQL + Timescale', cache: 'Redis cluster + Memcached', loadBalancing: 'AWS ALB + K8s', monitoring: 'Datadog' } }
  },
  fitnesspro: {
    nombre: 'FitnessPro',
    presupuesto: 4000,
    horas: 220,
    reto1: { presupuesto: 4000, duracionMeses: 3, equipoSize: 4, tecnologias: ['Spring Boot', 'MongoDB', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + Charts.js', backend: 'Spring Boot + Wearable APIs', database: 'MongoDB', devTools: ['Postman'], prodTools: ['Docker', 'AWS'] },
    reto3: { problema: 'Fitness apps desconectadas de dispositivos wearables', keyFeatures: ['Sync automático', 'Análisis IA', 'Retos sociales'], innovation: 'Gamificación integrada', roi: 'Retención +60%', pitch: 'FitnessPro: Tu coach personal, siempre contigo.' },
    reto4: { teamComposition: '1 PM, 1 Arquitecto, 2 Fullstack, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'SLA 1h', profiles: ['Wearable expert', 'Data analyst'] },
    reto5: { epics: ['Wearables', 'Analytics', 'Social', 'Planes'], herramienta: 'Jira', razonHerramienta: 'Integración CI/CD', roles: ['PM', 'Dev lead', '3 devs', 'QA'], duracionSprint: 2, totalSprints: 6 },
    reto6: { sprintDuration: 2, storiesCount: 8, storyPoints: 32, tasks: ['Planes personalizados', 'Seguimiento progreso', 'Wearables', 'Comunidad', 'Nutrición'], dailyStandupAgenda: ['APIs externas', 'Sync datos', 'UX testing'], ciTools: 'Jenkins + SonarQube' },
    reto7: { sprint2Duration: 2, newFeatures: ['Desafíos mensuales', 'Redes sociales', 'Análisis datos'], refactoringTasks: ['Parseo wearables', 'Sincronización', 'Reports'], testingMetrics: { unitCoverage: 74, integrationTests: 16, e2eTests: 11 }, performanceTargets: ['Sync < 1s', 'Cálculos < 500ms', 'Gráficos responsive'], retrospectiveItems: ['APIs', 'Estabilidad', 'Performance'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 91, bugs: 9, coverage: 80 }, acceptanceTests: ['Sync wearables', 'Métricas exactas', 'Gráficos ok'], deploymentSteps: ['Validar sync', 'Backup datos', 'Canary 10%', 'Validar', 'Alerts'], monitoringMetrics: ['Sync < 1s', 'Latencia < 200ms', 'Data points', 'Retention'], productionReadiness: { database: 'MongoDB sharding', cache: 'Redis + local', loadBalancing: 'AWS ELB', monitoring: 'CloudWatch' } }
  },
  eventhub: {
    nombre: 'EventHub',
    presupuesto: 4200,
    horas: 240,
    reto1: { presupuesto: 4200, duracionMeses: 3, equipoSize: 4, tecnologias: ['Spring Boot', 'PostgreSQL', 'Vue.js'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'Vue.js 3 + WebSocket', backend: 'Spring Boot + WebSocket', database: 'PostgreSQL', devTools: ['VSCode'], prodTools: ['Docker', 'Kubernetes', 'AWS'] },
    reto3: { problema: 'Eventos sin plataforma de gestión centralizada', keyFeatures: ['Entradas digitales', 'Mapas asientos', 'Chat live'], innovation: 'Streaming integrado', roi: 'Eficiencia +70%', pitch: 'EventHub: Gestiona eventos de cualquier tamaño, conecta audiencias.' },
    reto4: { teamComposition: '1 PM, 1 Tech Lead, 2 Backend, 1 Frontend, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'SLA 30min', profiles: ['WebSocket expert', 'Performance specialist'] },
    reto5: { epics: ['Eventos', 'Entradas', 'Streaming', 'Analytics'], herramienta: 'Jira', razonHerramienta: 'Workflow customizable', roles: ['PM', 'Tech lead', '3 devs', 'QA'], duracionSprint: 2, totalSprints: 6 },
    reto6: { sprintDuration: 2, storiesCount: 8, storyPoints: 34, tasks: ['Gestión eventos', 'Sistema entradas', 'Mapas asientos', 'Chat live', 'Analytics'], dailyStandupAgenda: ['WebSocket realtime', 'Escalabilidad', 'Seguridad pagos'], ciTools: 'GitHub Actions + Kubernetes' },
    reto7: { sprint2Duration: 2, newFeatures: ['Streaming live', 'Networking', 'Analytics avanzado'], refactoringTasks: ['WebSockets', 'Latencia', 'Caché'], testingMetrics: { unitCoverage: 76, integrationTests: 19, e2eTests: 13 }, performanceTargets: ['WebSocket < 100ms', 'Escalabilidad 10K', 'Chat realtime'], retrospectiveItems: ['Infraestructura', 'Testing', 'Escalabilidad'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 94, bugs: 6, coverage: 81 }, acceptanceTests: ['WebSocket estable', 'Chat sin lag', 'Video sin cortes'], deploymentSteps: ['Load testing 10K', 'CDN video', 'AWS + K8s', 'Test streaming', 'Monitoreo'], monitoringMetrics: ['WebSocket < 100ms', 'Usuarios concurrentes', 'Bitrate adaptativo', 'Messages/sec'], productionReadiness: { database: 'PostgreSQL + Redis', cache: 'Redis cluster', loadBalancing: 'AWS Route53 + ALB + K8s', monitoring: 'Prometheus + Grafana' } }
  },
  healthtrack: {
    nombre: 'HealthTrack',
    presupuesto: 4800,
    horas: 260,
    reto1: { presupuesto: 4800, duracionMeses: 4, equipoSize: 4, tecnologias: ['Spring Boot', 'PostgreSQL', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + HIPAA compliant', backend: 'Spring Boot + Encryption', database: 'PostgreSQL + Vault', devTools: ['Postman'], prodTools: ['Docker', 'AWS', 'VPN'] },
    reto3: { problema: 'Pacientes sin historial médico digital seguro', keyFeatures: ['Historial encriptado', 'Citas médico', 'Alertas medicinas'], innovation: 'Telemedicina básica', roi: 'Acceso 24/7', pitch: 'HealthTrack: Tu salud en tus manos, segura y privada.' },
    reto4: { teamComposition: '1 PM, 1 Security Lead, 2 Backend, 1 Frontend, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'Critical SLA 1h', profiles: ['Security expert', 'HIPAA specialist'] },
    reto5: { epics: ['Seguridad', 'Historial', 'Citas', 'Compliance'], herramienta: 'Jira', razonHerramienta: 'Tracking completo', roles: ['PM', 'Security lead', '2 devs', 'QA'], duracionSprint: 2, totalSprints: 7 },
    reto6: { sprintDuration: 2, storiesCount: 9, storyPoints: 36, tasks: ['Registro síntomas', 'Historial médico', 'Alertas medicinas', 'Citas médicos', 'Integración hospitales'], dailyStandupAgenda: ['HIPAA compliance', 'Encriptación', 'Integración'], ciTools: 'GitLab CI + Vault' },
    reto7: { sprint2Duration: 2, newFeatures: ['Recordatorios', 'Telemedicina', 'Reports médicos'], refactoringTasks: ['Encriptación', 'Permisos', 'Auditoría'], testingMetrics: { unitCoverage: 80, integrationTests: 20, e2eTests: 15 }, performanceTargets: ['HIPAA 100%', 'E2E encryption', 'Audit logs < 1s'], retrospectiveItems: ['Seguridad', 'Compliance', 'Confiabilidad'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 96, bugs: 4, coverage: 88 }, acceptanceTests: ['HIPAA verificado', 'Encriptación E2E', 'Auditoría registra'], deploymentSteps: ['Auditoría HIPAA', 'Penetration test', 'Secure VPC', 'Certificados SSL', 'Compliance'], monitoringMetrics: ['HIPAA 100%', 'Encryption status', 'Audit logs', 'Security incidents 0'], productionReadiness: { database: 'PostgreSQL encriptada + Vault', cache: 'Redis con TLS', loadBalancing: 'AWS ALB private subnet', monitoring: 'CloudTrail + SecurityHub' } }
  },
  propertyfinder: {
    nombre: 'PropertyFinder',
    presupuesto: 4300,
    horas: 240,
    reto1: { presupuesto: 4300, duracionMeses: 3, equipoSize: 4, tecnologias: ['Spring Boot', 'PostgreSQL PostGIS', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + Mapbox 3D', backend: 'Spring Boot + PostGIS', database: 'PostgreSQL PostGIS', devTools: ['DBeaver'], prodTools: ['Docker', 'Cloudflare'] },
    reto3: { problema: 'Búsqueda de propiedades ineficiente sin mapas', keyFeatures: ['Tours 3D', 'Mapas interactivos', 'Comparador'], innovation: 'IA recomendaciones', roi: 'Tiempo búsqueda -60%', pitch: 'PropertyFinder: Encuentra tu hogar con tecnología 3D.' },
    reto4: { teamComposition: '1 PM, 1 Geo specialist, 2 Fullstack, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'SLA 2h', profiles: ['GIS expert', 'Frontend 3D'] },
    reto5: { epics: ['Propiedades', 'Mapas', 'Búsqueda', 'Contacto'], herramienta: 'Asana', razonHerramienta: 'Timeline excelente', roles: ['PM', 'Geo lead', '3 devs', 'QA'], duracionSprint: 2, totalSprints: 6 },
    reto6: { sprintDuration: 2, storiesCount: 8, storyPoints: 33, tasks: ['Búsqueda avanzada', 'Filtros por ubicación', 'Galería 3D', 'Contacto agentes', 'Comparador'], dailyStandupAgenda: ['Mapas 3D', 'Performance búsqueda', 'Integración MLS'], ciTools: 'GitHub Actions + Mapbox' },
    reto7: { sprint2Duration: 2, newFeatures: ['Tours virtuales 3D', 'Mortgage calc', 'Investment analytics'], refactoringTasks: ['Optimizar búsqueda', 'Filtros', 'Cachear geo'], testingMetrics: { unitCoverage: 73, integrationTests: 17, e2eTests: 12 }, performanceTargets: ['Búsqueda < 500ms', 'Maps 3D < 2s', 'Filtros interactivos'], retrospectiveItems: ['APIs terceros', 'Performance', 'UX'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 92, bugs: 8, coverage: 78 }, acceptanceTests: ['Tours 3D rápidos', 'Búsqueda precisa', 'Mapas responden'], deploymentSteps: ['Optimizar imágenes', 'CDN Cloudflare', 'Vercel + API', 'Validar búsquedas', 'Performance'], monitoringMetrics: ['Tour load < 2s', 'Search < 500ms', 'Map interactions', 'Engagement'], productionReadiness: { database: 'PostgreSQL PostGIS', cache: 'Redis + Cloudflare', loadBalancing: 'Vercel + AWS', monitoring: 'Vercel Analytics + Datadog' } }
  },
  coursehub: {
    nombre: 'CourseHub',
    presupuesto: 4600,
    horas: 250,
    reto1: { presupuesto: 4600, duracionMeses: 3, equipoSize: 4, tecnologias: ['Spring Boot', 'PostgreSQL', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + Video player', backend: 'Spring Boot + Streaming', database: 'PostgreSQL', devTools: ['Wistia'], prodTools: ['Docker', 'AWS', 'CDN'] },
    reto3: { problema: 'Cursos online fragmentados sin plataforma unificada', keyFeatures: ['Videos streaming', 'Evaluaciones', 'Certificados'], innovation: 'Aprendizaje adaptativo', roi: 'Completación +45%', pitch: 'CourseHub: Aprende sin límites, en cualquier momento.' },
    reto4: { teamComposition: '1 PM, 1 Instructor, 2 Fullstack, 1 QA', communicationMethod: 'Zoom', frequency: 'Sync 3x/semana', incidentManagement: 'SLA 4h', profiles: ['Video expert', 'EdTech specialist'] },
    reto5: { epics: ['Cursos', 'Streaming', 'Evaluaciones', 'Certificados'], herramienta: 'Taiga', razonHerramienta: 'Ágil, gratuito', roles: ['PM', 'Instructor', '2 devs', 'QA'], duracionSprint: 2, totalSprints: 6 },
    reto6: { sprintDuration: 2, storiesCount: 8, storyPoints: 35, tasks: ['Plataforma cursos', 'Videos streaming', 'Evaluaciones', 'Certificados', 'Foro'], dailyStandupAgenda: ['Streaming video', 'Gestión contenido', 'Certificaciones'], ciTools: 'Jenkins + Wistia' },
    reto7: { sprint2Duration: 2, newFeatures: ['Live classes', 'Gamificación badges', 'Tutoría 1a1'], refactoringTasks: ['Streaming video', 'Transcoding', 'Latencia'], testingMetrics: { unitCoverage: 75, integrationTests: 18, e2eTests: 13 }, performanceTargets: ['Video < 2s', 'Calidad adaptativa', 'Live chat'], retrospectiveItems: ['Video hosting', 'Load testing', 'Live events'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 93, bugs: 7, coverage: 81 }, acceptanceTests: ['Videos sin buffering', 'Live classes', 'Certificados'], deploymentSteps: ['Configurar Wistia', 'CDN streaming', 'Deploy', 'Test live', 'Batch certs'], monitoringMetrics: ['Video bitrate', 'Live latency < 500ms', 'Estudiantes online', 'Completion rate'], productionReadiness: { database: 'PostgreSQL', cache: 'Redis', loadBalancing: 'AWS ALB + CloudFront', monitoring: 'CloudWatch + New Relic' } }
  },
  localservices: {
    nombre: 'LocalServices',
    presupuesto: 3900,
    horas: 210,
    reto1: { presupuesto: 3900, duracionMeses: 3, equipoSize: 3, tecnologias: ['Spring Boot', 'PostgreSQL', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + Maps', backend: 'Spring Boot + Fraud Detection', database: 'PostgreSQL', devTools: ['Postman'], prodTools: ['Docker', 'Stripe'] },
    reto3: { problema: 'Servicios locales desorganizados, sin verificación', keyFeatures: ['Verificación proveedores', 'Ratings', 'Garantía'], innovation: 'Seguro de servicios', roi: 'Confianza +80%', pitch: 'LocalServices: Conecta con profesionales verificados, sin riesgo.' },
    reto4: { teamComposition: '1 PM, 1 Arquitecto, 2 Fullstack, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'SLA 2h', profiles: ['Fraud expert', 'Payment specialist'] },
    reto5: { epics: ['Proveedores', 'Servicios', 'Pagos', 'Verificación'], herramienta: 'Asana', razonHerramienta: 'Simple pero poderoso', roles: ['PM', 'Dev lead', '3 devs', 'QA'], duracionSprint: 2, totalSprints: 5 },
    reto6: { sprintDuration: 2, storiesCount: 7, storyPoints: 31, tasks: ['Mercado servicios', 'Perfiles proveedores', 'Sistema ratings', 'Calendarios', 'Pagos seguros'], dailyStandupAgenda: ['Verificación', 'Fraude detection', 'Pagos'], ciTools: 'GitHub Actions + Stripe' },
    reto7: { sprint2Duration: 2, newFeatures: ['Verificación avanzada', 'Seguro', 'Garantía'], refactoringTasks: ['Fraude detection', 'Refactor pagos', 'Optimizar'], testingMetrics: { unitCoverage: 71, integrationTests: 14, e2eTests: 10 }, performanceTargets: ['Matching < 300ms', 'Fraude < 500ms', 'Pagos < 2s'], retrospectiveItems: ['Fraude', 'Variabilidad', 'Confianza'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 90, bugs: 10, coverage: 76 }, acceptanceTests: ['Matching preciso', 'Pagos seguros', 'Ratings ok'], deploymentSteps: ['Validar fraude', 'Setup pagos', 'Deploy + backup', 'Smoke tests', 'Alertas'], monitoringMetrics: ['Fraude accuracy 98%', 'Payment success 99%', 'Provider verification', 'User satisfaction'], productionReadiness: { database: 'PostgreSQL + replicas', cache: 'Redis', loadBalancing: 'NGINX + K8s', monitoring: 'Prometheus' } }
  },
  socialmentoring: {
    nombre: 'SocialMentoring',
    presupuesto: 4100,
    horas: 230,
    reto1: { presupuesto: 4100, duracionMeses: 3, equipoSize: 4, tecnologias: ['Spring Boot', 'PostgreSQL', 'React'], fases: ['Análisis', 'Diseño', 'Dev', 'Testing', 'Deployment'] },
    reto2: { frontend: 'React + Firebase', backend: 'Spring Boot + ML', database: 'PostgreSQL + Firebase', devTools: ['Postman'], prodTools: ['Docker', 'Firebase'] },
    reto3: { problema: 'Mentoring sin plataforma social estructurada', keyFeatures: ['Perfiles mentores', 'Mensajería', 'Sesiones'], innovation: 'Matching IA', roi: 'Conexiones +70%', pitch: 'SocialMentoring: Conecta con mentores que inspiran.' },
    reto4: { teamComposition: '1 PM, 1 Mentor Lead, 2 Fullstack, 1 QA', communicationMethod: 'Slack', frequency: 'Daily standup', incidentManagement: 'SLA 1h', profiles: ['ML engineer', 'Firebase expert'] },
    reto5: { epics: ['Red', 'Mensajería', 'Sesiones', 'Matching'], herramienta: 'Jira', razonHerramienta: 'Integración nativa', roles: ['PM', 'Dev lead', '3 devs', 'QA'], duracionSprint: 2, totalSprints: 6 },
    reto6: { sprintDuration: 2, storiesCount: 8, storyPoints: 32, tasks: ['Red mentores', 'Perfiles especialidades', 'Mensajería', 'Sesiones', 'Valoraciones'], dailyStandupAgenda: ['Messaging realtime', 'Notificaciones', 'Recomendaciones'], ciTools: 'GitHub Actions + Firebase' },
    reto7: { sprint2Duration: 2, newFeatures: ['Grupos estudio', 'Certificación', 'Marketplace'], refactoringTasks: ['Recomendaciones', 'Búsqueda', 'Ratings'], testingMetrics: { unitCoverage: 74, integrationTests: 16, e2eTests: 11 }, performanceTargets: ['Recomendaciones < 500ms', 'Chat < 100ms', 'Búsqueda < 300ms'], retrospectiveItems: ['Algoritmo', 'Escalabilidad', 'Engagement'] },
    reto8: { finalSprintDuration: 2, completionMetrics: { features: 91, bugs: 9, coverage: 79 }, acceptanceTests: ['Mensajería realtime', 'Matching preciso', 'Certificados válidos'], deploymentSteps: ['Firebase setup', 'Algoritmo deploy', 'Validar notifications', 'Test UX', 'Monitoring'], monitoringMetrics: ['Message < 100ms', 'Matching accuracy', 'Engagement rate', 'Retention'], productionReadiness: { database: 'PostgreSQL + Firebase', cache: 'Redis', loadBalancing: 'Firebase + API Gateway', monitoring: 'Firebase Analytics + Datadog' } }
  }
};

export const getProyecto = (proyectoId, retoNumber) => {
  const proyecto = PROYECTOS[proyectoId];
  if (!proyecto) return null;

  const retoKey = `reto${retoNumber}`;
  return {
    ...proyecto,
    retoData: proyecto[retoKey]
  };
};
