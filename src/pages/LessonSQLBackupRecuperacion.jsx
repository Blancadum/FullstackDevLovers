import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLBackupRecuperacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '💾',
      title: 'BACKUP',
      definition: 'Copia de seguridad de datos y estructura de base de datos',
      example: 'mysqldump -u usuario -p base_datos > backup.sql'
    },
    {
      icon: '♻️',
      title: 'RESTORE',
      definition: 'Recuperación de base de datos desde una copia de seguridad',
      example: 'mysql -u usuario -p base_datos < backup.sql'
    },
    {
      icon: '📦',
      title: 'mysqldump',
      definition: 'Herramienta para crear backups en MySQL/MariaDB',
      example: 'mysqldump --all-databases > full_backup.sql'
    },
    {
      icon: '🔄',
      title: 'pg_dump',
      definition: 'Herramienta para crear backups en PostgreSQL',
      example: 'pg_dump base_datos > backup.sql'
    },
    {
      icon: '📋',
      title: 'Estrategia de Backup',
      definition: 'Plan de respaldo regular y rotación de copias',
      example: 'Backup diario, semanal y mensual con recuperación probada'
    },
    {
      icon: '⚠️',
      title: 'Recuperación de Desastres',
      definition: 'Procedimiento para restaurar datos después de fallos',
      example: 'RTO, RPO, planes de contingencia documentados'
    }
  ];

  const exercises = [
    {
      title: 'Crear backup completo de base de datos MySQL',
      description: 'Realiza una copia de seguridad completa de una base de datos incluyendo datos y estructura',
      solution: `-- Backup simple de una base de datos
mysqldump -u root -p tienda > tienda_backup.sql

-- Backup sin solicitar contraseña (archivos de configuración)
mysqldump -u root tienda > tienda_backup.sql

-- Backup con timestamp para versioning
mysqldump -u root -p tienda > tienda_backup_$(date +%Y%m%d_%H%M%S).sql

-- Backup comprimido (ahorra espacio)
mysqldump -u root -p tienda | gzip > tienda_backup.sql.gz

-- Backup de múltiples bases de datos
mysqldump -u root -p base1 base2 base3 > multiples_backup.sql

-- Backup completo de todas las bases de datos
mysqldump -u root -p --all-databases > full_backup.sql

-- Backup con opciones adicionales
mysqldump -u root -p --complete-insert --extended-insert tienda > backup.sql`
    },
    {
      title: 'Restaurar base de datos desde backup',
      description: 'Recupera una base de datos completa desde un archivo de backup',
      solution: `-- Restaurar base de datos existente
mysql -u root -p tienda < tienda_backup.sql

-- Restaurar base de datos que no existe (créala primero)
CREATE DATABASE tienda_restaurada;
mysql -u root -p tienda_restaurada < tienda_backup.sql

-- Restaurar desde backup comprimido
gunzip < tienda_backup.sql.gz | mysql -u root -p tienda

-- Restaurar múltiples bases
mysql -u root -p < multiples_backup.sql

-- Restaurar con información adicional
mysql -u root -p tienda < tienda_backup.sql 2> restore_errors.log

-- Ver información del backup antes de restaurar
head -20 tienda_backup.sql`
    },
    {
      title: 'Backup y restauración en PostgreSQL',
      description: 'Realizar backup y restauración en PostgreSQL usando pg_dump',
      solution: `-- Backup SQL plain text
pg_dump -U postgres tienda > tienda_backup.sql

-- Backup en formato personalizado (más flexible)
pg_dump -U postgres -F c tienda > tienda_backup.dump

-- Backup comprimido
pg_dump -U postgres tienda | gzip > tienda_backup.sql.gz

-- Backup de todas las bases de datos
pg_dumpall -U postgres > todas_bases.sql

-- Restaurar desde backup plain text
psql -U postgres -d tienda < tienda_backup.sql

-- Restaurar desde formato personalizado
pg_restore -U postgres -d tienda tienda_backup.dump

-- Restaurar todas las bases de datos
psql -U postgres < todas_bases.sql

-- Mostrar tamaño del backup
ls -lh tienda_backup.sql`
    },
    {
      title: 'Implementar estrategia de backup incremental y rotación',
      description: 'Crear un plan de backups diarios, semanales y mensuales con rotación automática',
      solution: `-- Script Bash para backups automáticos con rotación
#!/bin/bash

DB_USER="root"
DB_PASS="password"
BACKUP_DIR="/var/backups/mysql"
DATE=$(date +%Y%m%d)
WEEK=$(date +%w)  # 0=domingo, 1=lunes, etc

# Crear directorio si no existe
mkdir -p $BACKUP_DIR

# Backup diario
mysqldump -u $DB_USER -p$DB_PASS tienda > $BACKUP_DIR/tienda_diario_$DATE.sql

# Backup semanal (cada domingo)
if [ $WEEK -eq 0 ]; then
    mysqldump -u $DB_USER -p$DB_PASS tienda > $BACKUP_DIR/tienda_semanal_$(date +%Y%V).sql
fi

# Backup mensual (primer día del mes)
if [ $(date +%d) -eq 01 ]; then
    mysqldump -u $DB_USER -p$DB_PASS tienda > $BACKUP_DIR/tienda_mensual_$(date +%Y%m).sql
fi

# Comprimir backups diarios más antiguos de 7 días
find $BACKUP_DIR -name "tienda_diario_*.sql" -mtime +7 -exec gzip {} \\;

# Eliminar backups diarios más antiguos de 30 días
find $BACKUP_DIR -name "tienda_diario_*.sql.gz" -mtime +30 -delete

echo "Backup completado: $DATE" >> $BACKUP_DIR/backup.log`
    }
  ];

  const keyPoints = [
    'mysqldump exporta base de datos MySQL a archivo SQL text o binario',
    'pg_dump hace lo mismo para PostgreSQL con mayor flexibilidad',
    'Siempre comprimir backups para ahorrar espacio de almacenamiento',
    'Usar timestamps en nombres para identificar versiones y fecha',
    'Mantener múltiples copias en ubicaciones diferentes (on-site y cloud)',
    'Documentar y probar regularmente la restauración de backups',
    'RTO (Recovery Time Objective) es el tiempo máximo permitido sin datos',
    'RPO (Recovery Point Objective) es la cantidad de datos que se puede perder',
    'Automatizar backups con scripts cron en sistemas Linux',
    'Mantener estrategia de rotación: diarios, semanales, mensuales'
  ];

  const sections = [
    {
      title: 'Crear Backups con mysqldump',
      content: (
        <>
          <p>
            mysqldump es la herramienta estándar para crear backups en MySQL y MariaDB. Genera un archivo SQL
            que puede ser restaurado en cualquier momento.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Backup simple
mysqldump -u root -p tienda > tienda_backup.sql

-- Backup con opciones
mysqldump -u root -p --complete-insert --lock-tables tienda > backup.sql

-- Opciones útiles:
-- --complete-insert: INSERT con nombres de columnas
-- --lock-tables: Bloquea tablas durante backup
-- --single-transaction: Mejor para InnoDB
-- --flush-privileges: Incluye permisos de usuario

-- Backup de todos los datos
mysqldump -u root -p --all-databases > full_system.sql

-- Backup comprimido (mejor para transferencias)
mysqldump -u root -p tienda | gzip > tienda_backup.sql.gz

-- Crear backup con timestamp
mysqldump -u root -p tienda > tienda_$(date +%Y%m%d_%H%M%S).sql`}
          />
          <InfoBox type="info">
            <strong>Recomendación:</strong> Usa --single-transaction para bases de datos InnoDB sin bloquear escrituras.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Restaurar Backups en MySQL',
      content: (
        <>
          <p>
            Recuperar datos desde un backup es el complemento esencial. Siempre prueba backups regularmente.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Restaurar a base de datos existente
mysql -u root -p tienda < tienda_backup.sql

-- Restaurar desde comprimido
gunzip < tienda_backup.sql.gz | mysql -u root -p tienda

-- Restaurar todo el sistema (múltiples bases)
mysql -u root -p < full_system.sql

-- Restaurar con salida de errores
mysql -u root -p tienda < tienda_backup.sql 2> errores.log

-- Ver progreso (con pv)
pv tienda_backup.sql | mysql -u root -p tienda

-- Verificar contenido del backup antes de restaurar
head -50 tienda_backup.sql  # Ver primeras líneas
grep "CREATE TABLE" tienda_backup.sql  # Ver tablas incluidas`}
          />
        </>
      )
    },
    {
      title: 'Backups en PostgreSQL',
      content: (
        <>
          <p>
            PostgreSQL ofrece herramientas de backup más flexibles con múltiples formatos de salida.
          </p>
          <Table
            headers={['Herramienta', 'Formato', 'Uso']}
            rows={[
              ['pg_dump', 'SQL plain text o custom', 'Backup de una BD'],
              ['pg_dumpall', 'SQL plain text', 'Backup de todas las BDs'],
              ['pg_basebackup', 'Binary backup', 'Backups físicos continuos'],
              ['COPY', 'SQL INSERT statements', 'Backup de tablas específicas']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Backup formato SQL
pg_dump -U postgres tienda > tienda_backup.sql

-- Backup formato custom (comprimido, más rápido)
pg_dump -U postgres -F c tienda > tienda_backup.dump

-- Backup de todas las BDs incluyendo usuarios
pg_dumpall -U postgres > completo.sql

-- Restaurar desde SQL
psql -U postgres -d tienda < tienda_backup.sql

-- Restaurar desde custom format
pg_restore -U postgres -d tienda tienda_backup.dump

-- Ver tamaño del backup
du -h tienda_backup.*`}
          />
        </>
      )
    },
    {
      title: 'Estrategia de Backup Efectiva',
      content: (
        <>
          <p>
            Una estrategia de backup efectiva incluye múltiples niveles de respaldo, rotación y pruebas regulares.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Script de estrategia de backup en 3 niveles
-- 1. BACKUP DIARIO (retención 7 días)
mysqldump -u root tienda | gzip > /backup/diario/tienda_$(date +%Y%m%d).sql.gz

-- 2. BACKUP SEMANAL (retención 12 semanas)
if [ $(date +%w) -eq 0 ]; then  # Domingo
  mysqldump -u root tienda | gzip > /backup/semanal/tienda_sem$(date +%Y%V).sql.gz
fi

-- 3. BACKUP MENSUAL (retención 12 meses)
if [ $(date +%d) -eq 01 ]; then  # Primer día
  mysqldump -u root tienda | gzip > /backup/mensual/tienda_$(date +%Y%m).sql.gz
fi

-- Verificación automática
mysqlcheck -u root -p --all-databases

-- Prueba de restauración (base de datos de prueba)
mysql -u root -p tienda_test < /backup/diario/tienda_20240101.sql.gz`}
          />
          <InfoBox type="success">
            <strong>Checklist de backup:</strong>
            1. Programar backups automáticos
            2. Usar múltiples ubicaciones (local + cloud)
            3. Comprimir para ahorrar espacio
            4. Probar restauración mensualmente
            5. Documentar RPO y RTO
            6. Cifrar backups sensibles
            7. Monitorear exitosamente backups
          </InfoBox>
        </>
      )
    },
    {
      title: 'Recuperación de Desastres',
      content: (
        <>
          <p>
            RTO (Recovery Time Objective) y RPO (Recovery Point Objective) son métricas críticas para
            recuperación de desastres.
          </p>
          <Table
            headers={['Métrica', 'Definición', 'Ejemplo']}
            rows={[
              ['RTO', 'Tiempo máximo permitido para restaurar', '4 horas máximo'],
              ['RPO', 'Datos que se pueden perder', 'Últimos 5 minutos'],
              ['Backup', 'Copia de seguridad completa', 'Cada 24 horas'],
              ['Incrementos', 'Cambios desde último backup', 'Cada hora']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Plan de recuperación de desastres
-- 1. Backup automático cada 4 horas
# Cron: 0 */4 * * * /usr/local/bin/backup.sh

-- 2. Verificación semanal de integridad
# Cron: 0 2 * * 0 /usr/local/bin/verify_backup.sh

-- 3. Prueba de restauración mensual
-- mysqldump -u root tienda > /tmp/test.sql
-- mysql -u root tienda_test < /tmp/test.sql
-- VERIFY: SELECT COUNT(*) FROM tienda_test.usuarios;

-- 4. Documentación de proceso
-- Mantener manual de recuperación actualizado
-- Incluir pasos exactos y contactos de emergencia

-- 5. Almacenamiento redundante
-- Local: /backup/diario/
-- Cloud: AWS S3, Google Drive, Azure
-- Offsite: Servidor de otra ubicación`}
          />
        </>
      )
    },
    {
      title: 'Automatización de Backups',
      content: (
        <>
          <p>Los backups deben ser automáticos y verificables. Aquí se muestra cómo automatizar en Linux:</p>
          <CodeBlock
            language="sql"
            code={`-- Script cron automático para backups diarios
#!/bin/bash
# archivo: /usr/local/bin/backup_mysql.sh

BACKUP_DIR="/var/backups/mysql"
DB_USER="backup_user"
DB_PASS="secure_password"
DATE=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$BACKUP_DIR/backup.log"

# Crear directorio
mkdir -p $BACKUP_DIR

# Realizar backup
echo "Iniciando backup: $DATE" >> $LOG_FILE
mysqldump -u $DB_USER -p$DB_PASS --all-databases | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

if [ $? -eq 0 ]; then
    echo "Backup exitoso" >> $LOG_FILE
    # Subir a S3 (opcional)
    # aws s3 cp $BACKUP_DIR/backup_$DATE.sql.gz s3://mi-bucket/backups/
else
    echo "ERROR en backup" >> $LOG_FILE
fi

# Eliminar backups más antiguos de 30 días
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

-- Agregar a crontab
# Ejecutar diariamente a las 3:00 AM
# 0 3 * * * /usr/local/bin/backup_mysql.sh

-- Ver logs
# tail -f /var/backups/mysql/backup.log`}
          />
        </>
      )
    }
  ];

  const summary = `Backup y recuperación son elementos críticos para proteger datos:

• mysqldump crea backups de MySQL/MariaDB en formato SQL
• pg_dump y pg_dumpall hacen lo mismo para PostgreSQL
• Comprimir backups reduce espacio y facilita transferencias
• Usar timestamps para identificar versiones de backups
• Implementar estrategia 3-niveles: diario, semanal, mensual
• Probar restauración regularmente para verificar integridad
• RTO = tiempo máximo para recuperar, RPO = datos que se pueden perder
• Automatizar con scripts cron en sistemas Linux/Unix
• Almacenar backups en múltiples ubicaciones (local + cloud)
• Documentar y practicar planes de recuperación de desastres`;

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