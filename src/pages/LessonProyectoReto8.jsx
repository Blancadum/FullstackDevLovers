import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Consolidación de Features (2 puntos)',
    content: (
      <>
        <p>
          Finaliza y pule todas las funcionalidades para producción.
        </p>

        <h4>Checklist de Consolidación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Features completadas (90%+ funcionalidad)</li>
          <li>Bugs críticos resueltos</li>
          <li>Code coverage: 75%+</li>
          <li>Performance baselines establecidas</li>
          <li>Documentación técnica completa</li>
        </ul>

        <h4>Final Polish:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Eliminar código muerto (dead code)</li>
          <li>Optimizar queries lentas</li>
          <li>Mejorar manejo de errores</li>
          <li>Validar edge cases</li>
          <li>Documentar workarounds si existen</li>
          <li>Remover console.log y debug code</li>
        </ul>

        <h4>Métricas finales esperadas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Features: 90-95% completadas</li>
          <li>Bugs: 5-10 conocidos/documentados</li>
          <li>Coverage: 75-85%</li>
        </ul>
      </>
    )
  },

  {
    title: '2. Testing de Aceptación (2 puntos)',
    content: (
      <>
        <p>
          Valida que el sistema cumple requisitos del cliente (UAT).
        </p>

        <h4>Aceptance Tests típicos:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Funcionalidades core funcionan correctamente</li>
          <li>Flujos principales sin errores (signup → purchase/reserva)</li>
          <li>Pagos procesan correctamente</li>
          <li>Búsqueda devuelve resultados esperados</li>
          <li>Performance aceptable</li>
        </ul>

        <h4>Fases de UAT (User Acceptance Testing):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>1. Preparación:</strong> Ambiente staging listo, datos de prueba, cliente capacitado</li>
          <li><strong>2. Ejecución:</strong> Cliente realiza tests, registra hallazgos, verifica criterios</li>
          <li><strong>3. Resolución:</strong> Equipo dev corrige issues, cliente re-valida</li>
          <li><strong>4. Sign-off:</strong> Cliente firma aceptación, decisión go/no-go</li>
        </ul>

        <h4>Duración típica: 1-2 semanas</h4>
      </>
    )
  },

  {
    title: '3. Documentación Final (2 puntos)',
    content: (
      <>
        <p>
          Documenta todo lo necesario para mantener y operar el sistema.
        </p>

        <h4>Documentación técnica requerida:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>README.md:</strong> Visión general, cómo ejecutar localmente</li>
          <li><strong>ARCHITECTURE.md:</strong> Diseño sistema, componentes, flujos</li>
          <li><strong>API_DOCUMENTATION.md:</strong> Endpoints, parámetros, ejemplos</li>
          <li><strong>DATABASE.md:</strong> Schema, migraciones, índices</li>
          <li><strong>DEPLOYMENT.md:</strong> Pasos deployment, infraestructura</li>
          <li><strong>RUNBOOKS.md:</strong> Operación, procedimientos comunes</li>
          <li><strong>TROUBLESHOOTING.md:</strong> Problemas comunes y soluciones</li>
          <li><strong>SECURITY.md:</strong> Políticas seguridad, secrets management</li>
          <li><strong>CHANGELOG.md:</strong> Cambios por versión</li>
        </ul>

        <h4>Documentación de usuario:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Manual de usuario (guía paso a paso)</li>
          <li>FAQs (preguntas frecuentes)</li>
          <li>Tutoriales en video (opcional)</li>
          <li>Ejemplos de uso</li>
        </ul>

        <h4>Todos en GitHub /docs para acceso público</h4>
      </>
    )
  },

  {
    title: '4. Preparación para Producción (2 puntos)',
    content: (
      <>
        <p>
          Asegura que el sistema está listo para recibir usuarios reales.
        </p>

        <h4>Checklist Pre-Producción:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Infraestructura: Servidores, BD, caché configurados</li>
          <li>Seguridad: SSL/TLS, firewalls, WAF activos</li>
          <li>Backups: Estrategia testada, restore procedure documentada</li>
          <li>Monitoring: Alertas configuradas y activas</li>
          <li>Logging: Logs centralizados y accesibles</li>
          <li>Disaster Recovery: Plan y validación completada</li>
          <li>Load Testing: Validado bajo carga esperada</li>
          <li>Security Testing: Vulnerabilidades conocidas documentadas</li>
        </ul>

        <h4>Infraestructura de producción:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Database:</strong> PostgreSQL con replicación (HA)</li>
          <li><strong>Cache:</strong> Redis cluster para performance</li>
          <li><strong>Load Balancing:</strong> Nginx/HAProxy o cloud LB</li>
          <li><strong>Monitoring:</strong> Prometheus + Grafana + ELK stack</li>
          <li><strong>Hosting:</strong> AWS/Azure/DigitalOcean con auto-scaling</li>
        </ul>
      </>
    )
  },

  {
    title: '5. Despliegue (2 puntos)',
    content: (
      <>
        <p>
          Realiza el despliegue a producción de manera segura y controlada.
        </p>

        <h4>Estrategia de Despliegue: Canary Release</h4>

        <h4>FASE 1: CANARY (10% usuarios - 2 horas)</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Desplegar a 10% del tráfico</li>
          <li>Validar logs y métricas</li>
          <li>Rollback rápido si hay problemas</li>
        </ul>

        <h4>FASE 2: RAMP UP (50% usuarios - 4 horas)</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Aumentar a 50% del tráfico</li>
          <li>Continuar monitoreando</li>
          <li>Preparar rollback si falla</li>
        </ul>

        <h4>FASE 3: FULL DEPLOYMENT (100% usuarios)</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Desplegar en resto de infraestructura</li>
          <li>Validar completamente</li>
          <li>Mantener rollback disponible 1 hora</li>
        </ul>

        <h4>FASE 4: ESTABILIZACIÓN (24-48 horas)</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Mantener monitores activos</li>
          <li>Responder a incidentes</li>
          <li>Validar métricas de negocio</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Nunca despliegues viernes al final del día sin equipo oncall disponible.
          Siempre ten plan de rollback listo.
        </p>
      </>
    )
  },

  {
    title: '6. Monitoreo Post-Despliegue (2 puntos)',
    content: (
      <>
        <p>
          Garantiza operación exitosa en producción.
        </p>

        <h4>Métricas a Monitorear:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Disponibilidad:</strong> Uptime 99.9%+, error rate menor a 0.1%</li>
          <li><strong>Performance:</strong> Latencia p99, CPU, memoria, disk</li>
          <li><strong>Negocio:</strong> Transacciones/seg, usuarios activos, conversiones</li>
          <li><strong>Seguridad:</strong> Intentos de acceso no autorizados, SSL validations</li>
        </ul>

        <h4>Setup de Alertas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Críticas (respuesta inmediata):</strong> Error rate mayor a 0.5%, latencia mayor a 2x baseline, CPU/Memory mayor a 85%</li>
          <li><strong>Warning (revisar en 15 min):</strong> Error rate mayor a 0.1%, CPU mayor a 70%, custom metrics degradadas</li>
          <li><strong>Escalamiento:</strong> Tier 1 Dev flecha Tier 2 Manager flecha Tier 3 CTO</li>
        </ul>

        <h4>Responsabilidades Oncall:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Revisar dashboards cada 15 minutos (primeras 2 horas)</li>
          <li>Responder alertas en menos de 5 minutos</li>
          <li>Executar runbooks para problemas conocidos</li>
          <li>Escalar si es necesario</li>
          <li>Documentar incidentes para post-mortem</li>
        </ul>

        <h4>Post-Mortem (después de 24h):</h4>
        <p>
          Documenta qué pasó, por qué pasó, qué haremos diferente. Focus: mejora continua, no culpa.
        </p>
      </>
    )
  }
];

export function LessonProyectoReto8() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={8}
      title="REPTE 8: Sprint Final & Deployment"
      sections={sections}
    />
  );
}
