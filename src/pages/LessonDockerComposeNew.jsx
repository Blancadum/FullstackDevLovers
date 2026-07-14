import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerComposeNew() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔗',
      title: 'Docker Compose',
      definition: 'Herramienta para definir y ejecutar múltiples contenedores',
      example: 'Un archivo YAML define web + db + cache, se levanta con un comando'
    },
    {
      icon: '📄',
      title: 'docker-compose.yml',
      definition: 'Archivo YAML que describe todos los servicios',
      example: 'Define contenedores, redes, volúmenes, variables de entorno'
    },
    {
      icon: '🌐',
      title: 'Servicio',
      definition: 'Contenedor definido en el compose file',
      example: 'web, db, redis son servicios en el mismo proyecto'
    },
    {
      icon: '📡',
      title: 'depends_on',
      definition: 'Define orden de inicio entre servicios',
      example: 'web depende de db, así que db se levanta primero'
    },
    {
      icon: '🔀',
      title: 'Network',
      definition: 'Red donde se comunican todos los servicios',
      example: 'web puede conectar a db usando nombre "db"'
    },
    {
      icon: '💾',
      title: 'Volumes',
      definition: 'Persistencia de datos compartida entre servicios',
      example: 'db guarda datos en volumen permanente'
    }
  ];

  const exercises = [
    {
      title: 'Compose file básico: Web + BD',
      description: 'Aplicación Node con PostgreSQL',
      solution: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/mydb

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:`
    },
    {
      title: 'Comandos más comunes',
      description: 'Flujo de trabajo con Docker Compose',
      solution: `# Levantar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f web

# Ejecutar comando en servicio
docker-compose exec web npm test

# Parar servicios
docker-compose stop

# Eliminar contenedores (mantiene volúmenes)
docker-compose down

# Eliminar todo incluyendo volúmenes
docker-compose down -v

# Rebuild images
docker-compose up -d --build`
    }
  ];

  const sections = [
    {
      title: 'Introducción a Docker Compose',
      content: (
        <>
          <p className="mb-4">
            <strong>Docker Compose</strong> resuelve el problema de levantar múltiples contenedores manualmente.
            Sin Compose, necesitarías:
          </p>

          <CodeBlock
            language="bash"
            code={`# Sin Compose (tedioso y propenso a errores)
docker network create mi-red
docker run -d --name db --network mi-red -e POSTGRES_PASSWORD=secret postgres:15
docker run -d --name web --network mi-red -p 3000:3000 mi-app:1.0
docker run -d --name redis --network mi-red redis:7

# Con Compose (un comando)
docker-compose up -d`}
          />

          <InfoBox type="success">
            <strong>Ventajas de Compose:</strong> Un archivo YAML describe todo, reproducible, fácil de versionar, perfect para desarrollo y testing.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Estructura de docker-compose.yml',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'  # Versión del formato

services:      # Contenedores a levantar
  web:
    build: .   # Construir desde Dockerfile local
    ports:
      - "3000:3000"  # Mapear puerto
    depends_on:
      - db     # Esperar a que db esté listo
    environment:
      NODE_ENV: production
      DB_HOST: db
    volumes:
      - ./src:/app/src  # Bind mount (desarrollo)

  db:
    image: postgres:15  # Usar imagen existente
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - db_data:/var/lib/postgresql/data  # Volumen nombrado
    ports:
      - "5432:5432"

volumes:  # Definir volúmenes nombrados
  db_data:

networks:  # Redes personalizadas (opcional)
  backend:`}
          />
        </>
      )
    },

    {
      title: 'Comandos principales',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# LEVANTAR SERVICIOS
docker-compose up                  # Levanta en foreground
docker-compose up -d               # Levanta en background
docker-compose up --build          # Reconstruye imágenes antes
docker-compose up -d service1      # Levanta solo service1

# VER ESTADO
docker-compose ps                  # Lista servicios
docker-compose logs                # Ver logs todos
docker-compose logs -f web         # Logs del servicio web en tiempo real
docker-compose logs --tail 100 db  # Últimas 100 líneas de db

# EJECUTAR COMANDOS
docker-compose exec web bash       # Entra a shell en web
docker-compose exec web npm test   # Ejecuta tests en web
docker-compose exec db psql -U user  # Entra a PostgreSQL

# PARAR Y REINICIAR
docker-compose stop                # Parar todos
docker-compose stop web            # Parar solo web
docker-compose start               # Reiniciar todos
docker-compose restart             # Parar + arrancar

# ELIMINAR
docker-compose down                # Parar y eliminar contenedores
docker-compose down -v             # También elimina volúmenes
docker-compose rm                  # Elimina solo contenedores parados`}
          />
        </>
      )
    },

    {
      title: 'Casos de uso comunes',
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4">
              <h5 className="font-bold text-blue-900 mb-2">Full Stack: Frontend + Backend + BD</h5>
              <CodeBlock
                language="yaml"
                code={`version: '3.8'
services:
  frontend:
    build: ./frontend
    ports: ["80:3000"]
    depends_on: [backend]

  backend:
    build: ./backend
    ports: ["3001:3000"]
    depends_on: [db]
    environment:
      DATABASE_URL: postgresql://user:pass@db/mydb

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: pass
    volumes: [db_data:/var/lib/postgresql/data]

volumes:
  db_data:`}
              />
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 pl-4">
              <h5 className="font-bold text-green-900 mb-2">Desarrollo Local con Live-Reload</h5>
              <CodeBlock
                language="yaml"
                code={`version: '3.8'
services:
  web:
    build: .
    ports: ["3000:3000"]
    volumes:
      - ./src:/app/src      # Hot reload
      - ./public:/app/public
    environment:
      NODE_ENV: development

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: dev
    ports: ["5432:5432"]  # Acceder desde host para debugging`}
              />
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 pl-4">
              <h5 className="font-bold text-purple-900 mb-2">CI/CD: Testing de Integración</h5>
              <CodeBlock
                language="yaml"
                code={`version: '3.8'
services:
  app:
    build: .
    command: npm test  # Ejecutar tests
    depends_on: [db]
    environment:
      DB_HOST: db
      DB_PASS: test

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: test
    tmpfs: [/var/lib/postgresql/data]  # RAM (rápido)`}
              />
            </div>
          </div>
        </>
      )
    }
  ];

  const keyPoints = [
    'Docker Compose levanta múltiples contenedores con un comando',
    'docker-compose.yml es un archivo YAML que define servicios',
    'services define cada contenedor (build o image)',
    'depends_on controla orden de inicio (no espera listos)',
    'environment para variables (heredadas del host o definidas)',
    'volumes para persistencia (named o bind mount)',
    'ports mapea puertos entre host y contenedor',
    'Red automática conecta servicios por nombre',
    'docker-compose up levanta, down para y elimina',
    'depends_on no espera que servicio esté listo, solo inicia primero'
  ];

  const summary = `Docker Compose simplifican proyectos multi-contenedor:

• Un archivo YAML define toda la infraestructura
• services: qué contenedores levantar
• depends_on: orden de inicio
• environment: configuración
• volumes: persistencia de datos
• ports: exponer al host
• networks: comunicación entre servicios
• docker-compose up: levanta todo
• docker-compose down: para y elimina
• Perfect para desarrollo, testing y documentación`;

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
