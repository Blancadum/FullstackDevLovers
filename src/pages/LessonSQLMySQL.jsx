import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLMySQL() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🐬',
      title: 'MySQL',
      definition: 'Sistema de gestión de bases de datos relacional open source más popular',
      example: 'Parte del stack LAMP/LEMP, usado por WordPress, Laravel'
    },
    {
      icon: '📋',
      title: 'Tipos de Datos',
      definition: 'Clasificación de valores que puede almacenar: numéricos, texto, fecha',
      example: 'INT, VARCHAR, DECIMAL, DATE, BOOLEAN, JSON'
    },
    {
      icon: '⚙️',
      title: 'Engines (Motores)',
      definition: 'Componente que maneja almacenamiento y recuperación de datos',
      example: 'InnoDB (defecto, ACID), MyISAM (velocidad), Memory, Archive'
    },
    {
      icon: '🔍',
      title: 'Índices',
      definition: 'Estructura de búsqueda rápida para columnas',
      example: 'PRIMARY, UNIQUE, FULLTEXT, índices simples y compuestos'
    },
    {
      icon: '⚡',
      title: 'Características',
      definition: 'Capacidades especiales de MySQL',
      example: 'ACID (InnoDB), Replicación, Particionamiento'
    },
    {
      icon: '🛠️',
      title: 'Configuración',
      definition: 'Ajustes de rendimiento y comportamiento del servidor',
      example: 'max_connections, innodb_buffer_pool_size, log_bin'
    }
  ];

  const exercises = [
    {
      title: 'Crear tabla completa con tipos de datos MySQL',
      description: 'Diseña una tabla usuarios con todos los tipos de datos comunes de MySQL',
      solution: `CREATE TABLE usuarios (
  -- Identificador único
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Texto de longitud variable
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,

  -- Números enteros
  edad INT CHECK (edad >= 18),

  -- Número decimal para dinero
  saldo DECIMAL(10, 2) DEFAULT 0.00,

  -- Booleano (0=false, 1=true)
  activo BOOLEAN DEFAULT TRUE,

  -- Texto largo
  biografia TEXT,

  -- Fecha y hora
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- JSON para datos semiestructurados
  configuracion JSON DEFAULT '{}',

  -- Enum para opciones predefinidas
  rol ENUM('usuario', 'moderador', 'admin') DEFAULT 'usuario',

  -- Timestamps Unix
  ultimo_login TIMESTAMP NULL,

  -- Índices para búsqueda rápida
  INDEX idx_email (email),
  INDEX idx_activo (activo)
);`
    },
    {
      title: 'Usar diferentes motores: InnoDB vs MyISAM',
      description: 'Crea tablas con diferentes engines y entiende sus características',
      solution: `-- Tabla con InnoDB (predeterminado, recomendado)
CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  total DECIMAL(10, 2),
  estado VARCHAR(50),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  INDEX idx_usuario (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla con MyISAM (búsqueda más rápida, sin ACID)
CREATE TABLE articulos_blog (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(200),
  contenido LONGTEXT,
  FULLTEXT INDEX ft_contenido (contenido)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- Tabla en memoria (muy rápida, datos temporales)
CREATE TABLE sesiones_cache (
  id VARCHAR(40) PRIMARY KEY,
  datos TEXT,
  fecha_expiracion DATETIME
) ENGINE=Memory;

-- Ver engine de una tabla
SHOW CREATE TABLE pedidos;
SELECT TABLE_NAME, ENGINE FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'tienda';

-- Cambiar engine de tabla existente
ALTER TABLE articulos_blog ENGINE=InnoDB;`
    },
    {
      title: 'Crear índices para optimizar búsquedas',
      description: 'Implementa índices simples, compuestos y FULLTEXT',
      solution: `-- Índice simple (búsqueda rápida por columna)
CREATE INDEX idx_email ON usuarios(email);

-- Índice único (además busca rápido, asegura unicidad)
CREATE UNIQUE INDEX idx_username ON usuarios(username);

-- Índice compuesto (para queries con múltiples columnas)
CREATE INDEX idx_pais_ciudad ON usuarios(pais, ciudad);

-- Índice FULLTEXT (búsqueda de texto completo)
CREATE FULLTEXT INDEX ft_contenido ON articulos(titulo, contenido);

-- Ver índices de una tabla
SHOW INDEX FROM usuarios;

-- Usar índice en query
EXPLAIN SELECT * FROM usuarios WHERE email = 'juan@example.com';

-- Búsqueda con FULLTEXT
SELECT * FROM articulos
WHERE MATCH(titulo, contenido) AGAINST('mysql' IN BOOLEAN MODE);

-- Eliminar índice
DROP INDEX idx_email ON usuarios;

-- Desactivar/activar índices para cargas masivas
ALTER TABLE usuarios DISABLE KEYS;
-- Insertar muchos datos
ALTER TABLE usuarios ENABLE KEYS;`
    },
    {
      title: 'Trabajar con datos JSON en MySQL',
      description: 'Almacenar y consultar datos JSON nativamente',
      solution: `-- Crear tabla con columna JSON
CREATE TABLE usuarios_json (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  datos JSON
);

-- Insertar datos JSON
INSERT INTO usuarios_json (nombre, datos) VALUES
(
  'Juan',
  JSON_OBJECT(
    'email', 'juan@example.com',
    'telefono', '123456789',
    'direcciones', JSON_ARRAY(
      JSON_OBJECT('tipo', 'casa', 'ciudad', 'Madrid'),
      JSON_OBJECT('tipo', 'trabajo', 'ciudad', 'Barcelona')
    ),
    'preferencias', JSON_OBJECT(
      'newsletter', true,
      'notificaciones', false
    )
  )
);

-- Extraer campos JSON
SELECT
  nombre,
  JSON_EXTRACT(datos, '$.email') as email,
  JSON_EXTRACT(datos, '$.telefono') as telefono
FROM usuarios_json;

-- Búsqueda en JSON
SELECT * FROM usuarios_json
WHERE JSON_EXTRACT(datos, '$.preferencias.newsletter') = true;

-- Modificar JSON
UPDATE usuarios_json
SET datos = JSON_SET(datos, '$.email', 'nuevo@example.com')
WHERE id = 1;

-- Agregar elemento a array JSON
UPDATE usuarios_json
SET datos = JSON_ARRAY_APPEND(datos, '$.direcciones',
  JSON_OBJECT('tipo', 'otro', 'ciudad', 'Valencia')
)
WHERE id = 1;`
    }
  ];

  const keyPoints = [
    'MySQL es el SGBDR open source más popular, parte de LAMP/LEMP',
    'InnoDB es el motor recomendado: soporta ACID, FK, transacciones',
    'MyISAM es más rápido pero sin ACID ni transacciones',
    'VARCHAR es mejor que CHAR para texto variable',
    'DECIMAL es mejor que FLOAT para dinero (evita errores de redondeo)',
    'JSON permite almacenar datos semiestructurados nativamente',
    'ENUM es eficiente para listas pequeñas y fijas de opciones',
    'AUTO_INCREMENT genera IDs secuenciales automáticamente',
    'Índices aceleran búsquedas pero ralentizan inserciones',
    'FULLTEXT permite búsqueda de texto completo en MySQL'
  ];

  const sections = [
    {
      title: 'Introduccion a MySQL',
      content: (
        <>
          <p>
            MySQL es el sistema de gestión de bases de datos relacional más utilizado en el mundo.
            Es open source, confiable, y el corazón de muchas aplicaciones web populares.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Conectar a MySQL
mysql -u root -p

-- Crear base de datos
CREATE DATABASE tienda CHARACTER SET utf8mb4;

-- Usar base de datos
USE tienda;

-- Ver versión de MySQL
SELECT VERSION();

-- Ver variables importantes
SHOW VARIABLES LIKE 'max_connections';`}
          />
          <InfoBox type="info">
            <strong>Instalación:</strong> Descarga desde mysql.com o usa package managers
            (apt, brew, yum, etc.)
          </InfoBox>
        </>
      )
    },
    {
      title: 'Tipos de Datos en MySQL',
      content: (
        <>
          <p>MySQL ofrece una variedad de tipos de datos para diferentes necesidades:</p>
          <Table
            headers={['Categoría', 'Tipo', 'Descripción', 'Ejemplo']}
            rows={[
              ['Numéricos', 'INT', 'Número entero (4 bytes)', 'INT PRIMARY KEY AUTO_INCREMENT'],
              ['Numéricos', 'BIGINT', 'Número entero grande (8 bytes)', 'BIGINT (hasta 2^63-1)'],
              ['Numéricos', 'DECIMAL(10,2)', 'Número decimal exacto', 'DECIMAL(10,2) para dinero'],
              ['Numéricos', 'FLOAT/DOUBLE', 'Número decimal aproximado', 'FLOAT (menos espacio, impreciso)'],
              ['Texto', 'VARCHAR(n)', 'Texto variable hasta n caracteres', 'VARCHAR(100) NOT NULL'],
              ['Texto', 'CHAR(n)', 'Texto fijo de n caracteres', 'CHAR(2) para códigos ISO'],
              ['Texto', 'TEXT/LONGTEXT', 'Texto largo (hasta 65KB o 4GB)', 'TEXT para biografías'],
              ['Fecha', 'DATE', 'Solo fecha', 'DATE DEFAULT CURRENT_DATE'],
              ['Fecha', 'DATETIME', 'Fecha y hora', 'DATETIME DEFAULT CURRENT_TIMESTAMP'],
              ['Fecha', 'TIMESTAMP', 'Timestamp Unix, auto-actualiza', 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'],
              ['Booleano', 'BOOLEAN', 'Verdadero/Falso (INT 0 o 1)', 'BOOLEAN DEFAULT TRUE'],
              ['Especial', 'JSON', 'Datos JSON nativos', 'JSON DEFAULT \'{}\' '],
              ['Especial', 'ENUM', 'Valores predefinidos', 'ENUM(\'si\', \'no\') DEFAULT \'si\''],
              ['Especial', 'SET', 'Múltiples valores predefinidos', 'SET(\'rojo\', \'verde\', \'azul\')']
            ]}
          />
        </>
      )
    },
    {
      title: 'Engines de MySQL: InnoDB vs MyISAM',
      content: (
        <>
          <Table
            headers={['Característica', 'InnoDB', 'MyISAM', 'Recomendación']}
            rows={[
              ['ACID', 'Si', 'No', 'InnoDB siempre'],
              ['Transacciones', 'Si', 'No', 'InnoDB siempre'],
              ['FOREIGN KEY', 'Si', 'No', 'InnoDB'],
              ['Velocidad lectura', 'Buena', 'Muy rápida', 'MyISAM si puro lectura'],
              ['Velocidad escritura', 'Buena', 'Rápida', 'MyISAM'],
              ['Bloqueo', 'A nivel fila', 'A nivel tabla', 'InnoDB mejor concurrencia'],
              ['Crash recovery', 'Automático', 'Manual', 'InnoDB'],
              ['Full-text search', 'MySQL 5.6+', 'Nativo', 'MyISAM si necesitas'],
              ['Uso recomendado', 'General purpose', 'Analytics, logs', 'InnoDB predeterminado']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Ver motor actual de tabla
SHOW CREATE TABLE usuarios;

-- Cambiar motor de tabla
ALTER TABLE usuarios ENGINE=InnoDB;

-- Ver todos los motores soportados
SHOW ENGINES;

-- Crear tabla especificando motor
CREATE TABLE transacciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  monto DECIMAL(10,2),
  estado VARCHAR(50)
) ENGINE=InnoDB;`}
          />
        </>
      )
    },
    {
      title: 'Índices para Optimización',
      content: (
        <>
          <p>
            Los índices son estructuras de búsqueda que aceleran significativamente las consultas.
            Pero tienen costo en inserciones y almacenamiento.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Crear índices
CREATE INDEX idx_email ON usuarios(email);
CREATE UNIQUE INDEX idx_username ON usuarios(username);

-- Índice compuesto (para WHERE con múltiples columnas)
CREATE INDEX idx_pais_ciudad ON usuarios(pais, ciudad);

-- Índice FULLTEXT (búsqueda de texto)
CREATE FULLTEXT INDEX ft_titulo ON articulos(titulo);

-- Ver índices de una tabla
SHOW INDEX FROM usuarios;

-- Análisis de query (ver si usa índices)
EXPLAIN SELECT * FROM usuarios WHERE email = 'juan@example.com';

-- Buscar sin índices (lento)
SELECT * FROM usuarios WHERE apellido = 'García';

-- Buscar con índices (rápido)
SELECT * FROM usuarios WHERE email = 'juan@example.com';

-- Eliminar índice innecesario
DROP INDEX idx_email ON usuarios;

-- Para carga masiva, desactivar índices
ALTER TABLE usuarios DISABLE KEYS;
LOAD DATA INFILE 'datos.txt' INTO TABLE usuarios;
ALTER TABLE usuarios ENABLE KEYS;`}
          />
        </>
      )
    },
    {
      title: 'Características Especiales de MySQL',
      content: (
        <>
          <p>MySQL tiene características únicas que la hacen versátil:</p>
          <CodeBlock
            language="sql"
            code={`-- AUTO_INCREMENT: Generar IDs automáticamente
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100)
);

INSERT INTO usuarios(nombre) VALUES('Juan');  -- id se genera automático
SELECT LAST_INSERT_ID();  -- Ver último ID generado

-- DEFAULT: Valores por defecto
CREATE TABLE articulos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  precio DECIMAL(10,2) DEFAULT 0.00,
  activo BOOLEAN DEFAULT TRUE,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Replicación: Copiar cambios a otro servidor
-- Master-Slave setup (configuración en my.cnf)

-- Particionamiento: Dividir tabla grande
CREATE TABLE historico (
  id INT,
  fecha DATE,
  datos TEXT
) PARTITION BY RANGE(YEAR(fecha)) (
  PARTITION p2020 VALUES LESS THAN (2021),
  PARTITION p2021 VALUES LESS THAN (2022),
  PARTITION p2022 VALUES LESS THAN (2023),
  PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- Vistas: Consultas guardadas
CREATE VIEW usuarios_activos AS
SELECT id, nombre, email FROM usuarios WHERE activo = TRUE;

SELECT * FROM usuarios_activos;`}
          />
        </>
      )
    },
    {
      title: 'Configuracion y Mantenimiento',
      content: (
        <>
          <p>
            La configuración correcta es clave para rendimiento. Archivo my.cnf o my.ini:
          </p>
          <CodeBlock
            language="sql"
            code={`[mysqld]
-- Conexiones
max_connections = 1000
max_allowed_packet = 16M

-- Performance
innodb_buffer_pool_size = 4G  -- 50-75% de RAM disponible
innodb_flush_method = O_DIRECT

-- Logging
log_error = /var/log/mysql/error.log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

-- Caché
query_cache_size = 0  -- Desactivado en MySQL 8.0
query_cache_type = 0

-- Variables dinámicas (sin reiniciar)
SET GLOBAL max_connections = 2000;
SET SESSION sql_mode = 'STRICT_TRANS_TABLES';

-- Ver configuración actual
SHOW VARIABLES LIKE 'max_connections';
SHOW VARIABLES WHERE Variable_name LIKE 'innodb%';

-- Mantenimiento regular
OPTIMIZE TABLE usuarios;  -- Reorganiza tabla
CHECK TABLE usuarios;      -- Verifica integridad
REPAIR TABLE usuarios;     -- Repara tabla dañada`}
          />
        </>
      )
    }
  ];

  const summary = `MySQL es la base de datos relacional más popular del mundo:

• Open source, gratuito y ampliamente soportado en hosting web
• InnoDB es el motor recomendado: soporta ACID y transacciones
• Tipos de datos: INT, VARCHAR, DECIMAL, DATE, JSON, ENUM
• Índices aceleran búsquedas pero cuestan en inserciones
• AUTO_INCREMENT genera IDs automáticamente
• FULLTEXT permite búsqueda de texto completo
• Soporta replicación para alta disponibilidad
• Particionamiento divide tablas grandes en bloques
• Configuración clave en max_connections e innodb_buffer_pool_size
• Herramientas como mysqldump para backup y myisamchk para validación`;

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