import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsTransacciones() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Gestión de transacciones"
        description="Cómo garantizar la consistencia de los datos usando transacciones en Node.js."
        breadcrumbs={breadcrumbs}
        seoTitle="Gestión de Transacciones en Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a gestionar transacciones en Node.js para garantizar la consistencia de los datos frente a errores concurrentes."
        seoKeywords="node.js, transacciones, base de datos, consistencia, atomicidad"
        url="https://fullstackdevlovers.com/backend/nodejs/transacciones"
      >
        <p>
          En el CRUD de la lección anterior, cada operación de Sequelize afectaba a una
          única fila de una única tabla. Pero hay operaciones que necesitan tocar{' '}
          <strong>varias tablas a la vez</strong>, y si una parte falla a mitad de camino,
          los datos quedan inconsistentes. Para eso existen las{' '}
          <strong>transacciones</strong>: hoy vas a aprender qué son y cómo usarlas con
          Sequelize.
        </p>

        <LessonSection title="El problema: una operación, varios pasos" level={1}>
          <p>
            Imagina una transferencia entre dos cuentas bancarias: hay que restar dinero de
            una cuenta y sumarlo a otra. Son dos operaciones de escritura distintas, pero
            desde el punto de vista del negocio son <strong>una sola operación</strong>. Si
            el servidor falla justo después de restar el dinero de la primera cuenta pero
            antes de sumarlo a la segunda, el dinero desaparece.
          </p>
          <CodeBlock
            language="javascript"
            title="Sin transacción (peligroso)"
            code={`router.post('/transferencias', async (req, res) => {
  const { cuentaOrigenId, cuentaDestinoId, cantidad } = req.body;

  const origen = await Cuenta.findByPk(cuentaOrigenId);
  origen.saldo -= cantidad;
  await origen.save(); // se guarda esto...

  // ...si el servidor se cae aquí, el dinero desaparece

  const destino = await Cuenta.findByPk(cuentaDestinoId);
  destino.saldo += cantidad;
  await destino.save();

  res.json({ mensaje: 'Transferencia completada' });
});`}
          />
        </LessonSection>

        <LessonSection title="¿Qué es una transacción?" level={1}>
          <p>
            Una <strong>transacción</strong> agrupa varias operaciones sobre la base de
            datos para que se comporten como una sola unidad: o se ejecutan{' '}
            <strong>todas</strong>, o no se ejecuta <strong>ninguna</strong>. Esta propiedad
            se conoce como <strong>atomicidad</strong> y es una de las cuatro propiedades
            ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) que garantizan las
            bases de datos relacionales.
          </p>
          <ul>
            <li>Si todas las operaciones terminan bien, se hace <strong>commit</strong>: los cambios se guardan de forma permanente.</li>
            <li>Si alguna operación falla, se hace <strong>rollback</strong>: se deshacen todos los cambios de la transacción, como si nunca hubiera pasado nada.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Transacciones con Sequelize" level={1}>
          <p>
            Sequelize ofrece <code>sequelize.transaction()</code>, que acepta una función
            async. Si la función termina sin errores, Sequelize hace commit automáticamente;
            si lanza una excepción, hace rollback automáticamente.
          </p>
          <CodeBlock
            language="javascript"
            title="Con transacción"
            code={`const sequelize = require('../db');
const Cuenta = require('../models/Cuenta');

router.post('/transferencias', async (req, res) => {
  const { cuentaOrigenId, cuentaDestinoId, cantidad } = req.body;

  try {
    const resultado = await sequelize.transaction(async (t) => {
      const origen = await Cuenta.findByPk(cuentaOrigenId, { transaction: t });
      const destino = await Cuenta.findByPk(cuentaDestinoId, { transaction: t });

      if (origen.saldo < cantidad) {
        throw new Error('Saldo insuficiente');
      }

      origen.saldo -= cantidad;
      destino.saldo += cantidad;

      await origen.save({ transaction: t });
      await destino.save({ transaction: t });

      return { origen, destino };
    });

    res.json({ mensaje: 'Transferencia completada', resultado });
  } catch (error) {
    // Si algo falla dentro del callback, Sequelize ya hizo rollback
    res.status(400).json({ error: error.message });
  }
});`}
          />
          <InfoBox type="warning" title="Pasa siempre la transacción a cada operación">
            El detalle más importante —y el error más habitual— es olvidar pasar{' '}
            <code>{'{ transaction: t }'}</code> a <strong>cada</strong> llamada dentro del
            callback. Si una operación no recibe la transacción, se ejecuta fuera de ella y
            no se deshace en caso de rollback.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Commit y rollback explícitos" level={1}>
          <p>
            El estilo anterior, llamado <strong>transacción gestionada</strong>, es el
            recomendado porque Sequelize hace commit o rollback automáticamente según si la
            función lanza error o no. También existe un estilo{' '}
            <strong>no gestionado</strong>, donde tú controlas el commit y el rollback a
            mano:
          </p>
          <CodeBlock
            language="javascript"
            code={`const t = await sequelize.transaction();

try {
  await origen.save({ transaction: t });
  await destino.save({ transaction: t });
  await t.commit();
} catch (error) {
  await t.rollback();
  throw error;
}`}
          />
          <InfoBox type="tip">
            Salvo que necesites un control muy fino sobre cuándo hacer commit, prefiere
            siempre el estilo gestionado (<code>sequelize.transaction(async (t) =&gt; ...)</code>):
            es más difícil olvidarse del rollback en algún camino de error.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Una transacción agrupa varias operaciones para que se ejecuten todas o ninguna (atomicidad).</li>
            <li>Commit guarda los cambios de forma permanente; rollback los deshace por completo.</li>
            <li><code>sequelize.transaction(async (t) =&gt; ...)</code> hace commit o rollback automáticamente según el resultado del callback.</li>
            <li>Hay que pasar <code>{'{ transaction: t }'}</code> a cada operación de Sequelize dentro del callback, o quedará fuera de la transacción.</li>
            <li>Las transacciones son imprescindibles siempre que una operación de negocio implique escribir en más de una tabla.</li>
          </ul>
        </LessonSection>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
