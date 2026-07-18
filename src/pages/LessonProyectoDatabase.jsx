import { LessonTemplate, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoDatabase() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [{ icon: '🗄️', title: 'Base de Datos', definition: 'Diseño e implementación de schema relacional', example: 'Tablas, relaciones, índices, migraciones' }];
  const sections = [
    {
      title: 'Diseño e Implementación de Base de Datos',
      content: (
        <>
          <p>
            La <strong>base de datos</strong> es el corazón de cualquier aplicación. Almacena toda la información crucial.
            Un buen diseño de BD facilita búsquedas rápidas, previene duplicados, y permite escalabilidad. Un mal diseño
            hace que todo sea lento e inmantenible.
          </p>

          <h3>Creación de Tablas</h3>
          <p>
            Basándote en tu Modelo Entidad-Relación, creas tablas SQL. Cada entidad se convierte en tabla. Sus atributos se
            convierten en columnas. Defines tipos de datos correctamente: INT para números enteros, VARCHAR(255) para texto,
            DECIMAL(10,2) para dinero (nunca FLOAT para dinero; FLOAT tiene problemas de precisión). DATETIME para fechas.
            BOOLEAN para sí/no.
          </p>

          <p>
            Defines <strong>restricciones</strong>: PRIMARY KEY (identifica único), FOREIGN KEY (relaciona tablas), UNIQUE
            (no duplicados), NOT NULL (obligatorio). Por ejemplo, email en usuarios debe ser UNIQUE (no dos usuarios con
            mismo email). Contraseña debe NOT NULL.
          </p>

          <h3>Relaciones entre Tablas</h3>
          <p>
            Las <strong>relaciones</strong> conectan tablas. Una relación 1:N (uno a muchos) se implementa con FOREIGN KEY.
            Usuarios → Órdenes: cada Orden tiene usuario_id que referencia Usuarios.id. Una relación N:N (muchos a muchos)
            requiere tabla intermedia. Órdenes ↔ Productos: PedidoDetalle conecta ambas. Las relationships mantienen
            integridad referencial: no puedes crear Orden sin usuario válido, no puedes borrar Usuario si tiene Órdenes.
          </p>

          <h3>Migraciones de Base de Datos</h3>
          <p>
            La <strong>migración</strong> es el cambio de schema BD de una versión a otra. En desarrollo, cambias mucho: agregar
            columna, renombrar tabla, etc. Herramientas como Flyway o Liquibase administran esto. Cada migración es un archivo
            SQL numerado: V1__initial.sql, V2__add_user_email.sql. Permiten que todo el equipo mantenga BD en sincronía y
            facilitan deployment en producción.
          </p>

          <InfoBox type="info">
            <strong>Consejo:</strong> Crea un script de BD "limpio" que nuevos desarrolladores puedan ejecutar para empezar.
            Incluye todas las tablas, índices, y datos de prueba. Esto ahorra horas de configuración frustrada.
          </InfoBox>
        </>
      )
    }
  ];

      return (
    <>
      <LessonTemplate
        title="Base de Datos"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
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