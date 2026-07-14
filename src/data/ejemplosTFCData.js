/**
 * Datos de Ejemplos de Proyectos TFC
 * Proyectos viables para Trabajo de Fin de Curso
 */

export const ejemplosTFCData = [
  {
    id: 1,
    title: 'LibroHub',
    subtitle: 'Plataforma de Venta de Libros Usados',
    category: 'E-Commerce',
    description: 'Marketplace para compra/venta de libros usados entre usuarios con integración de APIs externas.',
    complexity: 'Media-Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Marketplace para compra/venta de libros usados entre usuarios.

USUARIOS:
- Compradores: buscar, comprar libros
- Vendedores: subir libros, gestionar ventas
- Admin: moderar, cobrar comisión

FUNCIONALIDADES CORE:
✓ Catálogo de libros con ISBN search
✓ Búsqueda por autor, género, precio
✓ Reviews y valoraciones
✓ Carrito y checkout
✓ Mensajes privados entre usuarios
✓ Sistema de reputación (5 estrellas)
✓ Reportes de ventas por usuario

DIFERENCIADORES:
• Integración Google Books API (info de libros)
• Recomendaciones basadas en género preferido
• Sistema de intercambio (sin dinero)
• Notificaciones cuando se agrega libro deseado
• Mapa interactivo de vendedores cercanos

TECNOLOGÍAS:
Backend: Java Spring Boot, JPA/Hibernate
Frontend: React, Google Maps API
BD: MySQL con normalización libros/autores/géneros
Servidor: AWS EC2 + S3 (imágenes de libros)

COMPLEJIDAD: Media-Alta
TIEMPO ESTIMADO: 5-6 meses
EQUIPO: 3 personas (1 frontend + 2 backend)`
  },

  {
    id: 2,
    title: 'SportGear',
    subtitle: 'E-commerce de Equipamiento Deportivo',
    category: 'E-Commerce',
    description: 'Tienda online de equipamiento deportivo con recomendaciones personalizadas por clima y preferencias.',
    complexity: 'Media',
    duration: '4-5 meses',
    teamSize: '2-3 personas',
    content: `DESCRIPCIÓN:
Tienda online de equipamiento deportivo con recomendaciones personalizadas.

FUNCIONALIDADES:
✓ Catálogo de 500+ productos
✓ Filtros avanzados (deporte, marca, precio, talla)
✓ Carrito y checkout
✓ Sistema de tallas (S/M/L/XL)
✓ Reseñas de usuarios verificados
✓ Cupones y promociones
✓ Admin: gestión de inventario

DIFERENCIADORES:
• Integración OpenWeather API (recomendaciones por clima)
• "Outfit builder": combina prendas sugeridas
• Gamificación: logros por deportes practicados
• Programa de referidos (gana descuentos)
• Wishlist compartible

TECNOLOGÍAS:
Backend: Java Spring Boot, JPA, OpenWeather API
Frontend: React, Material UI
BD: MySQL
Servidor: AWS o DigitalOcean

COMPLEJIDAD: Media
TIEMPO: 4-5 meses
EQUIPO: 2-3 personas`
  },

  {
    id: 3,
    title: 'ClinicaPro',
    subtitle: 'Gestión de Clínica Médica',
    category: 'Sistemas de Gestión',
    description: 'Sistema ERP para clínica: citas, historiales médicos, facturación con cumplimiento GDPR.',
    complexity: 'Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Sistema ERP para clínica pequeña: citas, historial médico, facturación.

USUARIOS:
- Pacientes: agendar citas, ver historial
- Médicos: ver citas, agregar diagnósticos
- Recepcionista: confirmar citas, cobrar
- Admin: reportes, configuración

FUNCIONALIDADES:
✓ Calendario de citas (doctors)
✓ Historial médico del paciente
✓ Diagnósticos y tratamientos
✓ Facturación automática
✓ SMS/Email recordatorio 24h antes
✓ Reportes: pacientes activos, ingresos, doctores
✓ Backup automático (datos sensibles)

DIFERENCIADORES:
• Integración Twilio API (SMS automáticos)
• Gráficas de ocupación por doctor
• Sistema de valores (precios configurables)
• Control de acceso por rol
• Auditoría de cambios (compliance)

TECNOLOGÍAS:
Backend: Java Spring Boot, Spring Security, Twilio API
Frontend: React, Charts.js
BD: MySQL con encriptación datos sensibles
Servidor: AWS con RDS

COMPLEJIDAD: Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas (enfoque en seguridad/datos sensibles)`
  },

  {
    id: 4,
    title: 'PropertyHub',
    subtitle: 'Plataforma de Alquiler de Viviendas',
    category: 'Sistemas de Gestión',
    description: 'Airbnb simplificado con gestión de propiedades, reservas y pagos integrados.',
    complexity: 'Media-Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Airbnb simplificado: listar pisos, reservar, gestionar.

FUNCIONALIDADES:
✓ Listar propiedades (dueño)
✓ Galería de fotos + Google Maps
✓ Reservas con calendario
✓ Chat entre huésped y anfitrión
✓ Pagos (simulados o Stripe)
✓ Reseñas y ratings
✓ Admin: validar propiedades, cobrar comisión

DIFERENCIADORES:
• Google Maps: ubicación, distancia a POIs
• Disponibilidad en calendario interactivo
• Políticas de cancelación por propiedad
• Filtros: precio, tipo, capacidad, amenidades
• Notificaciones en tiempo real

TECNOLOGÍAS:
Backend: Java Spring Boot, Google Maps API
Frontend: React, Leaflet Maps
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Media-Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 5,
    title: 'GamerHub',
    subtitle: 'Red Social para Gamers',
    category: 'Redes Sociales',
    description: 'Red social especializada en gaming con torneos, clips compartidos y rankings.',
    complexity: 'Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Red social para jugadores: compartir clips, torneos, comentar.

FUNCIONALIDADES:
✓ Perfil de usuario con stats de juegos
✓ Feed: posts, clips de juegos, comentarios
✓ Seguir/Unfollows
✓ Notificaciones (nuevo seguidor, comentario)
✓ Torneos: crear, participar, rankings
✓ Chat grupal por equipo
✓ Integración Twitch/YouTube (embeds)

DIFERENCIADORES:
• Sincronización Twitch API (estadísticas)
• Torneos con matchmaking automático
• Sistema de logros y badges
• Clips compartibles con timestamps
• Streaming directo integrado

TECNOLOGÍAS:
Backend: Java Spring Boot, WebSockets, Twitch API
Frontend: React, Socket.io
BD: MySQL + Redis (cache)
Servidor: AWS

COMPLEJIDAD: Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 6,
    title: 'TravelDiaries',
    subtitle: 'Red Social de Viajeros',
    category: 'Redes Sociales',
    description: 'Plataforma para compartir experiencias de viaje con rutas, recomendaciones y colaboración.',
    complexity: 'Media-Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Red social para viajeros: compartir experiencias, rutas, recomendaciones.

FUNCIONALIDADES:
✓ Perfiles de viajeros
✓ Timeline de viajes (mapa + fotos)
✓ Crear rutas compartidas
✓ Recomendaciones de lugares
✓ Chat entre viajeros
✓ Historial de destinos

DIFERENCIADORES:
• Google Maps: rutas interactivas
• Recomendaciones locales (crowd-sourced)
• Timeline visual por país/ciudad
• Búsqueda de compañeros de viaje
• Integración con eventos locales

TECNOLOGÍAS:
Backend: Java Spring Boot, Google Maps API
Frontend: React, Mapbox
BD: MongoDB
Servidor: AWS

COMPLEJIDAD: Media-Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 7,
    title: 'CodeLearning',
    subtitle: 'Plataforma de Cursos de Programación',
    category: 'Educación',
    description: 'Plataforma de aprendizaje online con cursos, ejercicios y evaluaciones de programación.',
    complexity: 'Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Plataforma de cursos online: lecciones, ejercicios, quizzes.

FUNCIONALIDADES:
✓ Crear/editar cursos (instructores)
✓ Lecciones con videos embebidos
✓ Ejercicios de código (sandbox)
✓ Quizzes automáticos
✓ Progreso del estudiante
✓ Certificados al completar

DIFERENCIADORES:
• IDE online para ejercicios (Runner remoto)
• Corrección automática de code challenges
• Badges y logros
• Comunidad: foros por curso
• Integración GitHub (submit proyectos)

TECNOLOGÍAS:
Backend: Java Spring Boot, Docker
Frontend: React, Monaco Editor
BD: MySQL
Servidor: AWS ECS

COMPLEJIDAD: Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 8,
    title: 'JobMatch',
    subtitle: 'Portal de Empleo Inteligente',
    category: 'Educación',
    description: 'Portal de empleo con matching automático entre candidatos y empresas basado en skills.',
    complexity: 'Media-Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Portal de empleo con matching inteligente de candidatos.

FUNCIONALIDADES:
✓ Perfiles de candidatos (skills, experiencia)
✓ Ofertas de trabajo por empresa
✓ Matching automático
✓ Candidatura y seguimiento
✓ Chat empresa-candidato
✓ Reportes (para recruiter)

DIFERENCIADORES:
• Algoritmo de matching (skills + experiencia)
• Pruebas técnicas integradas
• Reportes avanzados de contratación
• Integración LinkedIn (import perfil)
• Recomendaciones personalizadas

TECNOLOGÍAS:
Backend: Java Spring Boot, ML algorithms
Frontend: React
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Media-Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 9,
    title: 'ExpenseSplitter',
    subtitle: 'Gestor de Gastos Compartidos',
    category: 'Fintech',
    description: 'Aplicación para gestionar gastos compartidos entre amigos/compañeros con liquidación automática.',
    complexity: 'Media',
    duration: '4-5 meses',
    teamSize: '2 personas',
    content: `DESCRIPCIÓN:
App para gestionar gastos compartidos: quién pagó, quién debe qué.

FUNCIONALIDADES:
✓ Crear grupos de gastos
✓ Registrar gastos (quién pagó, cuánto, quiénes participan)
✓ Cálculo automático de deudas
✓ Liquidación (quién paga a quién)
✓ Histórico de gastos
✓ Notificaciones

DIFERENCIADORES:
• Algoritmo de liquidación óptima
• Conversión de monedas automática
• QR para compartir grupo
• Exportar a PDF
• Integración Stripe (para pagos)

TECNOLOGÍAS:
Backend: Java Spring Boot
Frontend: React/React Native
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Media
TIEMPO: 4-5 meses
EQUIPO: 2 personas`
  },

  {
    id: 10,
    title: 'TaskFlow',
    subtitle: 'Gestor de Proyectos y Tareas',
    category: 'Sistemas de Gestión',
    description: 'Herramienta de gestión de proyectos tipo Jira con boards, sprints y reportes.',
    complexity: 'Alta',
    duration: '5-6 meses',
    teamSize: '3 personas',
    content: `DESCRIPCIÓN:
Jira simplificado: tableros Kanban, sprints, reportes.

FUNCIONALIDADES:
✓ Crear proyectos
✓ Tableros Kanban (To Do, In Progress, Done)
✓ Sprints (duración configurable)
✓ Tareas con prioridad y asignación
✓ Comentarios en tareas
✓ Reportes (burndown, velocity)

DIFERENCIADORES:
• Drag-drop Kanban intuitivo
• Gráficos de burndown automáticos
• Notificaciones en tiempo real
• Integración GitHub (sync commits)
• Exportar reportes a PDF

TECNOLOGÍAS:
Backend: Java Spring Boot
Frontend: React, React DnD
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Alta
TIEMPO: 5-6 meses
EQUIPO: 3 personas`
  },

  {
    id: 11,
    title: 'RecipeShare',
    subtitle: 'Red Social de Recetas y Cocina',
    category: 'Redes Sociales',
    description: 'Plataforma para compartir recetas con valoraciones, listas de compra y comunidad.',
    complexity: 'Media',
    duration: '4-5 meses',
    teamSize: '2-3 personas',
    content: `DESCRIPCIÓN:
Red social de recetas: compartir, comentar, guardar favoritas.

FUNCIONALIDADES:
✓ Publicar recetas (ingredientes, pasos, fotos)
✓ Búsqueda (ingrediente, tipo de comida)
✓ Guardar favoritas
✓ Valoraciones y comentarios
✓ Listas de compra automáticas
✓ Perfil de cocineros

DIFERENCIADORES:
• Cálculo automático de calorías
• Sugerencias por ingredientes disponibles
• Listas de compra compartibles
• Integración recetas populares (scraping)
• Videos embebidos de YouTube

TECNOLOGÍAS:
Backend: Java Spring Boot
Frontend: React
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Media
TIEMPO: 4-5 meses
EQUIPO: 2-3 personas`
  },

  {
    id: 12,
    title: 'PetCare',
    subtitle: 'Red Social para Mascotistas',
    category: 'Redes Sociales',
    description: 'Red social para amantes de mascotas con veterinarios, tiendas y comunidad.',
    complexity: 'Media',
    duration: '4-5 meses',
    teamSize: '2-3 personas',
    content: `DESCRIPCIÓN:
Red social para dueños de mascotas y veterinarios.

FUNCIONALIDADES:
✓ Perfil de mascota (foto, datos, historial vet)
✓ Feed de mascotas (fotos, aventuras)
✓ Directorio de veterinarios/peluquerías
✓ Agendar citas (integración calendarios)
✓ Chat comunidad por raza/tipo
✓ Marketplace (comida, accesorios)

DIFERENCIADORES:
• Geolocalización de veterinarios cercanos
• Recordatorios de vacunación
• Fotos de mascotas en mapa
• Marketplace de servicios
• Grupos por raza/tipo

TECNOLOGÍAS:
Backend: Java Spring Boot, Google Maps API
Frontend: React, Geolocation API
BD: MySQL
Servidor: AWS

COMPLEJIDAD: Media
TIEMPO: 4-5 meses
EQUIPO: 2-3 personas`
  }
];
