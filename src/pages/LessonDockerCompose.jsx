import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerCompose() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Docker Compose',
      definition: 'Herramienta para definir y ejecutar múltiples contenedores Docker',
      example: 'Un archivo YAML describe app + base de datos + cache en una sola definición'
    },
    {
      icon: '🗄️',
      title: 'docker-compose.yml',
      definition: 'Archivo YAML que define servicios, redes y volúmenes',
      example: 'Especifica versión, servicios, variables de ambiente, puertos'
    },
    {
      icon: '🔗',
      title: 'Networking en Compose',
      definition: 'Red interna que permite comunicación entre contenedores',
      example: 'Contenedores se descubren por nombre de servicio automáticamente'
    },
    {
      icon: '💾',
      title: 'Volúmenes Persistentes',
      definition: 'Almacenamiento que persiste entre reinicios',
      example: 'Base de datos, archivos de configuración, uploads'
    },
    {
      icon: '⚙️',
      title: 'Variables de Entorno',
      definition: 'Configuración dinámica en contenedores',
      example: 'DATABASE_URL, API_KEY, LOG_LEVEL desde .env'
    },
    {
      icon: '🔀',
      title: 'Dependencias Entre Servicios',
      definition: 'Control de orden de inicio entre contenedores',
      example: 'App espera a que BD esté lista antes de iniciar'
    }
  ];

  const exercises = [
    {
      title: 'Crear docker-compose.yml para app Java + MySQL',
      description: 'Define una aplicación Spring Boot con base de datos MySQL',
      solution: `version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      DATABASE_URL: jdbc:mysql://db:3306/miapp
      DATABASE_USER: root
      DATABASE_PASSWORD: password
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: miapp
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:`
    },
    {
      title: 'Ejecutar y administrar servicios',
      description: 'Comandos para gestionar aplicación con Docker Compose',
      solution: `# Iniciar todos los servicios
docker-compose up -d

# Ver estado de servicios
docker-compose ps

# Ver logs
docker-compose logs -f app

# Detener servicios
docker-compose down

# Recrear volúmenes
docker-compose down -v`
    }
  ];

  const sections = [
    {
      title: 'Introducción a Docker Compose',
      content: (
        <>
          <p>Docker Compose simplifica definir y ejecutar aplicaciones multi-contenedor con un único archivo YAML.</p>
          <CodeBlock
            language="bash"
            code={`# Instalar Docker Compose (viene con Docker Desktop)
docker-compose --version

# Proyecto con Docker Compose
my-app/
  ├── src/
  ├── Dockerfile
  ├── docker-compose.yml
  └── .env

# Conceptos clave
servicios: Contenedores que corren juntos
networks: Comunicación entre servicios
volumes: Almacenamiento persistente
variables: Configuración dinámica`}
          />
        </>
      )
    },
    {
      title: 'Archivo docker-compose.yml',
      content: (
        <>
          <p>El archivo YAML define toda la estructura multi-contenedor.</p>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'  # Compatible versión

services:
  # Servicio 1: Aplicación Java
  app:
    build: .                    # Construir desde Dockerfile
    container_name: mi-app      # Nombre del contenedor
    ports:
      - "8080:8080"             # Port mapping
    environment:
      DATABASE_URL: jdbc:mysql://db:3306/app
      LOG_LEVEL: INFO
    volumes:
      - ./logs:/app/logs        # Volumen host
    depends_on:
      - db                      # Esperar a que db esté lista
    networks:
      - app-network             # Red compartida

  # Servicio 2: Base de datos MySQL
  db:
    image: mysql:8.0            # Descargar imagen
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: app
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql  # Volumen nombrado
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network

  # Servicio 3: Redis Cache
  cache:
    image: redis:7-alpine
    container_name: cache
    ports:
      - "6379:6379"
    networks:
      - app-network

# Volúmenes nombrados
volumes:
  db_data:                      # Persiste datos de BD

# Redes personalizadas
networks:
  app-network:
    driver: bridge`}
          />
        </>
      )
    },
    {
      title: 'Comandos Esenciales',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# GESTIÓN BÁSICA
docker-compose up                    # Iniciar servicios
docker-compose up -d                 # En background
docker-compose down                  # Detener y eliminar
docker-compose down -v               # Incluyendo volúmenes
docker-compose restart               # Reiniciar servicios

# CONSTRUCCIÓN
docker-compose build                 # Construir imágenes
docker-compose build --no-cache      # Sin caché
docker-compose up --build            # Construir y ejecutar

# INFORMACIÓN
docker-compose ps                    # Estado de servicios
docker-compose logs                  # Ver logs
docker-compose logs -f app           # Logs en vivo
docker-compose logs app db           # Logs de servicios específicos

# EJECUCIÓN
docker-compose exec app bash         # Ejecutar comando en contenedor
docker-compose exec db mysql -u root -p

# ESCALADO
docker-compose up --scale app=3      # 3 instancias de app`}
          />
        </>
      )
    },
    {
      title: 'Networking: Comunicación Entre Servicios',
      content: (
        <>
          <p>Docker Compose crea una red que permite que los servicios se comuniquen por nombre.</p>
          <CodeBlock
            language="yaml"
            code={`services:
  app:
    # Dentro del contenedor 'app':
    # - Acceder a BD por hostname 'db'
    # - Connection String: jdbc:mysql://db:3306/app
    environment:
      DATABASE_URL: jdbc:mysql://db:3306/app
      REDIS_URL: redis://cache:6379
    networks:
      - app-network

  db:
    # Escucha en hostname 'db' en la red app-network
    networks:
      - app-network

  cache:
    # Escucha en hostname 'cache' en la red app-network
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
    # DNS interno permite:
    # app → se resuelve a IP de contenedor 'app'
    # db → se resuelve a IP de contenedor 'db'
    # cache → se resuelve a IP de contenedor 'cache'`}
          />
          <InfoBox type="info">
            Los servicios se descubren automáticamente por nombre sin necesidad de IPs hardcodeadas.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Volúmenes y Datos Persistentes',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`services:
  app:
    volumes:
      # Volumen host: path local → path contenedor
      - ./logs:/app/logs         # directorio local → contenedor
      - ./config:/app/config     # configuración
      - ./uploads:/app/uploads   # archivos subidos

  db:
    volumes:
      # Volumen nombrado: persistencia entre reinicios
      - db_data:/var/lib/mysql

  cache:
    volumes:
      - cache_data:/data

volumes:
  db_data:                       # Definir volúmenes nombrados
  cache_data:

# DATOS PERSISTENTES
# Sin volúmenes: docker-compose down → datos perdidos
# Con volúmenes: docker-compose down → datos se mantienen
# docker-compose down -v → eliminar volúmenes

# Backup de datos
docker-compose exec db mysqldump -u root -p app > backup.sql

# Restaurar
docker-compose exec -T db mysql -u root -p app < backup.sql`}
          />
        </>
      )
    },
    {
      title: 'Variables de Entorno y .env',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`# docker-compose.yml
version: '3.8'

services:
  app:
    environment:
      DATABASE_USER: \${DB_USER}
      DATABASE_PASSWORD: \${DB_PASSWORD}
      LOG_LEVEL: \${LOG_LEVEL:-INFO}  # default: INFO

  db:
    environment:
      MYSQL_ROOT_PASSWORD: \${DB_ROOT_PASSWORD}
      MYSQL_DATABASE: \${DB_NAME}`}
          />
          <CodeBlock
            language="bash"
            code={`# .env file (en raíz del proyecto)
DB_USER=admin
DB_PASSWORD=secreto123
DB_ROOT_PASSWORD=rootpass
DB_NAME=miapp
LOG_LEVEL=DEBUG

# Uso
docker-compose up  # Carga automáticamente .env
export ENV=production
docker-compose up  # Usa variables de .env`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Docker Compose define aplicaciones multi-contenedor en YAML',
    'Un archivo docker-compose.yml para toda la infraestructura',
    'Servicios se comunican internamente por nombre automáticamente',
    'Volúmenes persistentes mantienen datos entre reinicios',
    'depends_on controla orden de inicio entre servicios',
    'Networks aíslan comunicación entre contenedores',
    'Variables de entorno desde .env para configuración dinámica',
    'docker-compose up inicia toda la aplicación',
    'docker-compose down detiene y limpia',
    'Perfecto para desarrollo, testing y demostración'
  ];

  const summary = `Docker Compose simplifica infraestructura multi-contenedor:

• Un archivo YAML define aplicación completa
• Servicios se comunican automáticamente por nombre
• Volúmenes persistentes para datos importantes
• Variables de entorno para configuración
• depends_on asegura orden correcto de inicio
• docker-compose up crea toda la infraestructura
• Ideal para desarrollo local reproducible
• Base para orquestación en Kubernetes
• git-friendly: solo código + docker-compose.yml`;

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