import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLUsuariosPermisos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '👤',
      title: 'CREATE USER',
      definition: 'Comando para crear nuevos usuarios de base de datos',
      example: 'CREATE USER "juan"@"localhost" IDENTIFIED BY "password123";'
    },
    {
      icon: '✏️',
      title: 'ALTER USER',
      definition: 'Modifica propiedades de usuarios existentes',
      example: 'ALTER USER "juan"@"localhost" IDENTIFIED BY "nueva_contraseña";'
    },
    {
      icon: '✅',
      title: 'GRANT',
      definition: 'Otorga permisos específicos a usuarios',
      example: 'GRANT SELECT, INSERT ON base_datos.* TO "juan"@"localhost";'
    },
    {
      icon: '🚫',
      title: 'REVOKE',
      definition: 'Quita permisos previamente otorgados',
      example: 'REVOKE SELECT ON base_datos.* FROM "juan"@"localhost";'
    },
    {
      icon: '👥',
      title: 'Roles',
      definition: 'Conjunto de permisos que se asignan a múltiples usuarios',
      example: 'CREATE ROLE admin; GRANT ALL ON *.* TO admin;'
    },
    {
      icon: '🔐',
      title: 'Perfiles de Seguridad',
      definition: 'Configuración de límites y restricciones de usuarios',
      example: 'PASSWORD EXPIRE, REQUIRE SSL, MAX_QUERIES_PER_HOUR'
    }
  ];

  const exercises = [
    {
      title: 'Crear usuarios con diferentes permisos',
      description: 'Crea tres usuarios: administrador (todos los permisos), editor (SELECT, INSERT, UPDATE), visor (solo SELECT)',
      solution: `-- Crear usuario administrador
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin_secure_pass123';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;

-- Crear usuario editor
CREATE USER 'editor'@'localhost' IDENTIFIED BY 'editor_pass456';
GRANT SELECT, INSERT, UPDATE ON tienda.* TO 'editor'@'localhost';

-- Crear usuario visor
CREATE USER 'visor'@'localhost' IDENTIFIED BY 'visor_pass789';
GRANT SELECT ON tienda.* TO 'visor'@'localhost';

-- Aplicar cambios
FLUSH PRIVILEGES;

-- Verificar permisos
SHOW GRANTS FOR 'admin'@'localhost';
SHOW GRANTS FOR 'editor'@'localhost';
SHOW GRANTS FOR 'visor'@'localhost';`
    },
    {
      title: 'Gestionar permisos de usuario específico',
      description: 'Otorga permisos específicos a un usuario para tablas particulares',
      solution: `-- Crear usuario especializado
CREATE USER 'reportes'@'%' IDENTIFIED BY 'reportes_pass123';

-- Otorgar permisos específicos en tabla
GRANT SELECT ON tienda.usuarios TO 'reportes'@'%';
GRANT SELECT ON tienda.pedidos TO 'reportes'@'%';

-- No permite cambiar datos
-- No puede ver tabla productos

-- Verificar permisos
SHOW GRANTS FOR 'reportes'@'%';

-- Luego revocar un permiso
REVOKE SELECT ON tienda.usuarios FROM 'reportes'@'%';

-- Aplicar cambios
FLUSH PRIVILEGES;`
    },
    {
      title: 'Crear y usar roles (PostgreSQL)',
      description: 'Crea roles para gestionar permisos de múltiples usuarios',
      solution: `-- Crear rol de lectura
CREATE ROLE lectura;
GRANT USAGE ON SCHEMA public TO lectura;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO lectura;

-- Crear rol de escritura
CREATE ROLE escritura;
GRANT lectura TO escritura;  -- Hereda permisos
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO escritura;

-- Crear usuario con rol
CREATE USER 'reportero' WITH PASSWORD 'reportero_pass';
GRANT lectura TO 'reportero';

-- Crear usuario con múltiples roles
CREATE USER 'supervisor' WITH PASSWORD 'super_pass';
GRANT lectura, escritura TO 'supervisor';

-- Ver roles
SELECT * FROM pg_roles;`
    },
    {
      title: 'Cambiar contraseña y aplicar políticas de seguridad',
      description: 'Modifica contraseña de usuario y aplica políticas de expiración',
      solution: `-- Cambiar contraseña de usuario
ALTER USER 'juan'@'localhost' IDENTIFIED BY 'nueva_contraseña_segura';

-- Con política de expiración (MySQL 5.7.4+)
ALTER USER 'juan'@'localhost' IDENTIFIED BY 'nueva_pass' PASSWORD EXPIRE INTERVAL 90 DAY;

-- Exigir contraseña fuerte
ALTER USER 'juan'@'localhost' IDENTIFIED BY 'Passw0rd!Segura' REQUIRE SSL;

-- Limitar intentos de login y conexiones
ALTER USER 'juan'@'localhost' FAILED_LOGIN_ATTEMPTS 5 PASSWORD_LOCK_TIME 1 DAY;

-- Aplicar cambios
FLUSH PRIVILEGES;

-- Verificar usuario
SELECT USER, HOST FROM mysql.user WHERE USER='juan';`
    }
  ];

  const keyPoints = [
    'CREATE USER crea nuevos usuarios de base de datos con contraseña',
    'El formato es "usuario"@"host" donde host puede ser localhost, %, o IP específica',
    'GRANT otorga permisos: SELECT, INSERT, UPDATE, DELETE, etc.',
    'REVOKE quita permisos previamente asignados',
    'ALL PRIVILEGES otorga todos los permisos disponibles',
    'WITH GRANT OPTION permite al usuario otorgar permisos a otros',
    'FLUSH PRIVILEGES aplica cambios inmediatamente',
    'Los roles agrupan permisos para simplificar gestión',
    'Siempre usa contraseñas fuertes y cambios periódicos',
    'ALTER USER modifica propiedades de usuarios existentes'
  ];

  const sections = [
    {
      title: 'Crear Usuarios (CREATE USER)',
      content: (
        <>
          <p>
            CREATE USER es el comando para crear nuevos usuarios en la base de datos. Cada usuario debe tener
            una contraseña y puede estar restringido a un host específico.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Crear usuario local
CREATE USER 'carlos'@'localhost' IDENTIFIED BY 'password123';

-- Crear usuario remoto (cualquier host)
CREATE USER 'maria'@'%' IDENTIFIED BY 'password456';

-- Crear usuario con host específico
CREATE USER 'juan'@'192.168.1.100' IDENTIFIED BY 'password789';

-- Con seguridad adicional (MySQL 5.7+)
CREATE USER 'admin'@'localhost'
  IDENTIFIED BY 'SecurePass!2024'
  REQUIRE SSL
  PASSWORD EXPIRE INTERVAL 90 DAY;`}
          />
          <InfoBox type="info">
            <strong>Host patterns:</strong> 'localhost' = local, '%' = cualquier host, '192.168.1.%' = rango de IPs
          </InfoBox>
        </>
      )
    },
    {
      title: 'Asignar Permisos (GRANT)',
      content: (
        <>
          <p>
            GRANT otorga permisos específicos a usuarios. Puedes otorgar permisos a nivel global, de base de datos,
            tabla o columna.
          </p>
          <Table
            headers={['Nivel', 'Sintaxis', 'Descripción']}
            rows={[
              ['Global', 'GRANT ALL ON *.* TO usuario', 'Acceso a todas las bases y tablas'],
              ['Base de datos', 'GRANT SELECT ON tienda.* TO usuario', 'Acceso a base específica'],
              ['Tabla', 'GRANT INSERT ON tienda.usuarios TO usuario', 'Acceso a tabla específica'],
              ['Columna', 'GRANT UPDATE(nombre) ON tienda.usuarios TO usuario', 'Acceso a columnas específicas']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Permisos básicos
GRANT SELECT, INSERT ON tienda.* TO 'editor'@'localhost';

-- Permisos de administración
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;

-- Permisos específicos por tabla
GRANT SELECT ON tienda.productos TO 'vendedor'@'%';
GRANT INSERT, UPDATE ON tienda.pedidos TO 'vendedor'@'%';

-- Aplicar cambios inmediatamente
FLUSH PRIVILEGES;`}
          />
        </>
      )
    },
    {
      title: 'Tipos de Permisos en SQL',
      content: (
        <>
          <p>Permisos disponibles para GRANT y REVOKE:</p>
          <Table
            headers={['Permiso', 'Descripción', 'Nivel']}
            rows={[
              ['SELECT', 'Leer datos de tablas', 'Consulta'],
              ['INSERT', 'Agregar nuevos registros', 'Modificación'],
              ['UPDATE', 'Modificar registros existentes', 'Modificación'],
              ['DELETE', 'Eliminar registros', 'Modificación'],
              ['CREATE', 'Crear tablas y bases de datos', 'Estructura'],
              ['ALTER', 'Modificar estructura de tablas', 'Estructura'],
              ['DROP', 'Eliminar tablas y bases de datos', 'Estructura'],
              ['GRANT OPTION', 'Otorgar permisos a otros usuarios', 'Administración'],
              ['ALL PRIVILEGES', 'Todos los permisos anteriores', 'Todos']
            ]}
          />
        </>
      )
    },
    {
      title: 'Revocar Permisos (REVOKE)',
      content: (
        <>
          <p>REVOKE quita permisos previamente asignados a un usuario:</p>
          <CodeBlock
            language="sql"
            code={`-- Revocar permiso SELECT
REVOKE SELECT ON tienda.usuarios FROM 'editor'@'localhost';

-- Revocar múltiples permisos
REVOKE INSERT, UPDATE ON tienda.* FROM 'editor'@'localhost';

-- Revocar todos los permisos de una base
REVOKE ALL PRIVILEGES ON tienda.* FROM 'usuario'@'localhost';

-- Revocar permiso GRANT OPTION
REVOKE GRANT OPTION ON *.* FROM 'usuario'@'localhost';

-- Aplicar cambios
FLUSH PRIVILEGES;

-- Verificar permisos después
SHOW GRANTS FOR 'editor'@'localhost';`}
          />
        </>
      )
    },
    {
      title: 'Gestión de Roles',
      content: (
        <>
          <p>Los roles permiten agrupar permisos para simplificar la gestión de múltiples usuarios:</p>
          <CodeBlock
            language="sql"
            code={`-- MySQL 8.0+: Crear roles
CREATE ROLE 'contenido_read';
CREATE ROLE 'contenido_write';
CREATE ROLE 'admin_full';

-- Asignar permisos a roles
GRANT SELECT ON tienda.articulos TO 'contenido_read';
GRANT SELECT, INSERT, UPDATE ON tienda.articulos TO 'contenido_write';
GRANT ALL PRIVILEGES ON *.* TO 'admin_full';

-- Asignar roles a usuarios
GRANT 'contenido_read' TO 'carlos'@'localhost';
GRANT 'contenido_write' TO 'maria'@'localhost';
GRANT 'admin_full' TO 'admin'@'localhost';

-- Activar rol (en sesión de usuario)
SET ROLE 'contenido_read';

-- Ver roles del usuario actual
SELECT * FROM information_schema.enabled_roles;

-- Listar todos los roles
SELECT * FROM mysql.role_edges;`}
          />
        </>
      )
    },
    {
      title: 'Modificar Usuarios y Contraseñas',
      content: (
        <>
          <p>ALTER USER permite cambiar contraseñas, políticas de seguridad y otras propiedades:</p>
          <CodeBlock
            language="sql"
            code={`-- Cambiar contraseña
ALTER USER 'juan'@'localhost' IDENTIFIED BY 'nueva_contraseña_segura';

-- Exigir cambio de contraseña en primer login
ALTER USER 'nuevo_usuario'@'localhost' PASSWORD EXPIRE;

-- Expiración periódica (cada 90 días)
ALTER USER 'juan'@'localhost' PASSWORD EXPIRE INTERVAL 90 DAY;

-- Requerir SSL para conexión
ALTER USER 'juan'@'localhost' REQUIRE SSL;

-- Limitar recursos
ALTER USER 'maria'@'localhost'
  WITH MAX_QUERIES_PER_HOUR 1000
       MAX_CONNECTIONS_PER_HOUR 100
       MAX_UPDATES_PER_HOUR 500;

-- Ver usuarios actuales
SELECT USER, HOST FROM mysql.user;`}
          />
        </>
      )
    },
    {
      title: 'Verificar y Auditar Permisos',
      content: (
        <>
          <CodeBlock
            language="sql"
            code={`-- Ver permisos de un usuario
SHOW GRANTS FOR 'carlos'@'localhost';

-- Ver permisos con más detalle
SHOW GRANTS FOR 'admin'@'localhost'\\G

-- Ver todos los usuarios y hosts
SELECT USER, HOST FROM mysql.user;

-- Ver usuarios conectados actualmente
SHOW PROCESSLIST;

-- Información de tablas de permisos
SELECT * FROM mysql.user WHERE USER='carlos';
SELECT * FROM mysql.db WHERE USER='carlos';
SELECT * FROM mysql.tables_priv WHERE USER='carlos';

-- En PostgreSQL, ver roles y permisos
SELECT * FROM pg_user;
SELECT grantee, privilege_type FROM role_table_grants;`}
          />
        </>
      )
    }
  ];

  const summary = `La gestión de usuarios y permisos es fundamental para la seguridad de bases de datos:

• CREATE USER crea nuevos usuarios con contraseña y host específico
• GRANT asigna permisos a nivel global, base de datos, tabla o columna
• REVOKE quita permisos previamente otorgados
• Permisos principales: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP
• Roles agrupan permisos para simplificar gestión en MySQL 8.0+
• ALTER USER modifica contraseñas y políticas de seguridad
• FLUSH PRIVILEGES aplica cambios inmediatamente
• Siempre usa contraseñas fuertes y política de expiración
• WITH GRANT OPTION permite que usuarios otorguen permisos
• SHOW GRANTS verifica permisos de un usuario`;

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