import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLCrearBD() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🗄️',
      title: 'CREATE DATABASE',
      definition: 'Comando que crea una nueva base de datos',
      example: 'CREATE DATABASE tienda_online;'
    },
    {
      icon: '✏️',
      title: 'ALTER DATABASE',
      definition: 'Modifica propiedades de una base de datos existente',
      example: 'ALTER DATABASE tienda_online CHARACTER SET utf8mb4;'
    },
    {
      icon: '🗑️',
      title: 'DROP DATABASE',
      definition: 'Elimina una base de datos y todos sus contenidos',
      example: 'DROP DATABASE IF EXISTS tienda_online;'
    },
    {
      icon: '📝',
      title: 'Charset',
      definition: 'Conjunto de caracteres para codificar datos de texto',
      example: 'CHARACTER SET utf8mb4 soporta emojis y caracteres especiales'
    },
    {
      icon: '🔤',
      title: 'Collation',
      definition: 'Reglas de comparación y ordenamiento de caracteres',
      example: 'COLLATE utf8mb4_unicode_ci ordena sin distinguir mayúsculas'
    },
    {
      icon: '⚙️',
      title: 'Propiedades',
      definition: 'Configuraciones específicas de la base de datos',
      example: 'Charset, collation, compatibilidad de versión'
    }
  ];

  const exercises = [
    {
      title: 'Crear base de datos de tienda online',
      description: 'Crea una base de datos con charset UTF8MB4 y collation apropiada para soporte internacional',
      solution: `CREATE DATABASE tienda_online
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Verificar creación
SHOW DATABASES;
SHOW CREATE DATABASE tienda_online;`
    },
    {
      title: 'Modificar propiedades de base de datos',
      description: 'Cambia el charset y collation de una base de datos existente',
      solution: `ALTER DATABASE tienda_online
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- O si solo necesitas cambiar collation
ALTER DATABASE tienda_online COLLATE utf8mb4_general_ci;`
    },
    {
      title: 'Crear y eliminar base de datos de pruebas',
      description: 'Crea una base de datos temporal y luego la elimina de forma segura',
      solution: `-- Crear base de datos temporal
CREATE DATABASE IF NOT EXISTS bd_pruebas
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE bd_pruebas;

-- Cuando termines, eliminar de forma segura
DROP DATABASE IF EXISTS bd_pruebas;`
    },
    {
      title: 'Crear base de datos para aplicación con usuarios internacionales',
      description: 'Diseña una base de datos que maneje múltiples idiomas y caracteres especiales',
      solution: `CREATE DATABASE app_internacional
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE app_internacional;

-- Crear tabla de usuarios con soporte internacional
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  pais VARCHAR(50) COLLATE utf8mb4_unicode_ci,
  idioma ENUM('es', 'en', 'fr', 'de', 'ja', 'zh') DEFAULT 'es'
);`
    }
  ];

  const keyPoints = [
    'CREATE DATABASE crea una nueva base de datos desde cero',
    'CHARACTER SET define la codificación de caracteres (utf8mb4 recomendado)',
    'COLLATE establece reglas de comparación y orden de caracteres',
    'utf8mb4 es compatible con emojis, caracteres asiáticos y especiales',
    'ALTER DATABASE cambia propiedades sin eliminar datos',
    'DROP DATABASE elimina completamente la base de datos (irreversible)',
    'IF NOT EXISTS/IF EXISTS previene errores si la BD existe o no',
    'Siempre especifica charset y collation al crear',
    'SHOW DATABASES lista todas las bases de datos',
    'USE selecciona la base de datos activa para operaciones'
  ];

  const sections = [
    {
      title: 'Crear una Base de Datos',
      content: (
        <>
          <p>
            CREATE DATABASE es el comando fundamental para crear una nueva base de datos. Es el primer paso
            antes de crear tablas y almacenar datos.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Forma básica
CREATE DATABASE mi_tienda;

-- Con charset y collation especificado
CREATE DATABASE mi_tienda
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Seguro (no da error si existe)
CREATE DATABASE IF NOT EXISTS mi_tienda
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;`}
          />
          <InfoBox type="info">
            <strong>Recomendación:</strong> Siempre especifica CHARACTER SET utf8mb4 y una collation apropriada.
            utf8mb4 es la codificación estándar moderna que soporta todos los caracteres Unicode.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Propiedades: Charset y Collation',
      content: (
        <>
          <p>
            Charset y Collation son propiedades críticas que afectan cómo se almacenan y comparan datos.
          </p>
          <Table
            headers={['Propiedad', 'Descripción', 'Opciones']}
            rows={[
              ['utf8', 'Codificación estándar (limitada a 3 bytes)', 'utf8_general_ci, utf8_unicode_ci'],
              ['utf8mb4', 'UTF-8 completo (4 bytes, incluye emojis)', 'utf8mb4_general_ci, utf8mb4_unicode_ci'],
              ['latin1', 'Para idiomas occidentales solamente', 'latin1_swedish_ci'],
              ['binary', 'Sin conversión, comparación binaria', 'Solo binary'],
              ['_general_ci', 'Comparación rápida pero menos precisa', 'Insensible a mayúsculas/acentos'],
              ['_unicode_ci', 'Comparación unicode completa y precisa', 'Cumple estándares internacionales']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Comparación de collations
CREATE DATABASE tienda_utf8 CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE DATABASE tienda_utf8mb4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Ver charset y collation de una BD
SHOW CREATE DATABASE tienda_utf8mb4;`}
          />
        </>
      )
    },
    {
      title: 'Modificar una Base de Datos (ALTER)',
      content: (
        <>
          <p>
            ALTER DATABASE permite cambiar propiedades de una base de datos existente sin perder datos.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Cambiar charset y collation
ALTER DATABASE tienda_online
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Solo cambiar collation
ALTER DATABASE tienda_online COLLATE utf8mb4_general_ci;

-- Ver la configuración actual
SHOW CREATE DATABASE tienda_online;

-- Listar todas las bases de datos
SHOW DATABASES;`}
          />
          <InfoBox type="warning" title="Importante">
            Cambiar charset/collation a nivel de BD afecta nuevas tablas. Tablas existentes pueden requerir
            ALTER TABLE para aplicar los cambios.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Eliminar una Base de Datos (DROP)',
      content: (
        <>
          <p>
            DROP DATABASE elimina completamente una base de datos incluyendo todas sus tablas y datos.
            Esta operación es irreversible.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Eliminar base de datos
DROP DATABASE tienda_online;

-- Forma segura (no da error si no existe)
DROP DATABASE IF EXISTS tienda_online;

-- Verificar eliminación
SHOW DATABASES;`}
          />
          <InfoBox type="warning" title="Cuidado">
            DROP DATABASE elimina TODOS los datos permanentemente. Siempre haz backup antes de ejecutar este comando.
            Usa IF EXISTS para evitar errores si la base de datos no existe.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Selectores de Bases de Datos',
      content: (
        <>
          <p>Comandos para ver información sobre bases de datos y seleccionar la activa:</p>
          <CodeBlock
            language="sql"
            code={`-- Listar todas las bases de datos
SHOW DATABASES;

-- Ver información de una base de datos específica
SHOW CREATE DATABASE mi_tienda;

-- Usar/seleccionar una base de datos
USE mi_tienda;

-- Ver la base de datos actual
SELECT DATABASE();

-- Ver tablas de la base de datos actual
SHOW TABLES;

-- Ver características completas
SHOW CREATE DATABASE mi_tienda\\G`}
          />
        </>
      )
    },
    {
      title: 'Buenas Prácticas en Gestión de BDs',
      content: (
        <>
          <CodeBlock
            language="sql"
            code={`-- ✓ BUENA PRÁCTICA: Especificar propiedades explícitamente
CREATE DATABASE IF NOT EXISTS ecommerce
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- ✓ Usar IF NOT EXISTS/IF EXISTS para seguridad
CREATE DATABASE IF NOT EXISTS tienda_dev;
DROP DATABASE IF EXISTS tienda_vieja;

-- ✓ Hacer backup antes de eliminar
-- mysqldump -u usuario -p base_datos > backup.sql
-- pg_dump base_datos > backup.sql

-- ✓ Documentar propiedades de cada BD
-- En archivo de configuración o wiki del proyecto

-- ✗ EVITAR: No especificar charset
-- CREATE DATABASE tienda;  -- Usa charset del servidor

-- ✗ EVITAR: Usar utf8 en lugar de utf8mb4
-- CREATE DATABASE tienda CHARACTER SET utf8;  -- No soporta emojis

-- ✗ EVITAR: Eliminar sin backup
-- DROP DATABASE produccion;  -- ¡NUNCA SIN BACKUP!`}
          />
          <InfoBox type="success">
            <strong>Recomendaciones:</strong> Especifica siempre charset utf8mb4 y collation unicode_ci, usa IF EXISTS/IF NOT EXISTS,
            y mantén backups regulares de todas tus bases de datos.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `Crear y administrar bases de datos es la base de cualquier aplicación que use SQL:

• CREATE DATABASE crea nuevas bases de datos con propiedades específicas
• CHARACTER SET define codificación (utf8mb4 para soporte internacional)
• COLLATE establece reglas de comparación y orden de datos
• ALTER DATABASE modifica propiedades sin perder datos
• DROP DATABASE elimina completamente (irreversible)
• USE selecciona la base de datos activa
• IF NOT EXISTS/IF EXISTS previenen errores
• Siempre especifica charset y collation al crear
• utf8mb4 es la mejor opción para aplicaciones modernas
• Haz backup antes de modificar o eliminar bases de datos`;

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