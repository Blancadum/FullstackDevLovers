import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealRDS = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>🛒 Caso Real: EcommercePro - Plataforma E-Commerce</h1>
        <p className="lesson-intro">
          Cómo una tienda online escaló de 1M a 100M transacciones/mes migrando a RDS Multi-AZ
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>EcommercePro</strong> era una startup de e-commerce que vendía electrónica.
            Tenían una base de datos MySQL autoinstalada en un servidor EC2 t2.micro.
          </p>
        </div>

        <h3>Crisis de Crecimiento</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Mes 1-6:</strong> 10K órdenes/mes → BD funcionaba bien</li>
          <li><strong>Mes 7:</strong> Viral en redes sociales → 100K órdenes/mes</li>
          <li><strong>Mes 8:</strong> MySQL al 95% CPU, queries tardaban 30+ segundos</li>
          <li><strong>Mes 9:</strong> Clientes abandonan checkout (timeout después de 10s)</li>
          <li><strong>Mes 10:</strong> 3 crashes de BD en una semana</li>
          <li><strong>Decisión:</strong> Migrar urgentemente a RDS</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Cuello de Botella</h4>
          <p><strong>La base de datos era el problema, no la aplicación:</strong></p>
          <ul>
            <li>❌ Backup manual cada noche (30 minutos de bloqueo)</li>
            <li>❌ Sin replicación → si BD caía, todos pierden acceso</li>
            <li>❌ Sin índices optimizados → queries de 5+ segundos</li>
            <li>❌ Sin caché → misma query repetida 1M veces/día</li>
            <li>❌ Sin monitoreo → no sabían cuándo se acercaba el límite</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: RDS PostgreSQL Multi-AZ</h2>

        <h3>Por Qué RDS y No Auto-instalado</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold', width: '30%' }}>Backup automático</td>
              <td style={{ padding: '1rem' }}>❌ Manual cada noche (riesgo de pérdida)</td>
              <td style={{ padding: '1rem' }}>✅ Cada 5 minutos, no pierde nada</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>Multi-AZ failover</td>
              <td style={{ padding: '1rem' }}>❌ Manual (30+ minutos de downtime)</td>
              <td style={{ padding: '1rem' }}>✅ Automático en 1-2 minutos</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>Read Replicas</td>
              <td style={{ padding: '1rem' }}>❌ Difícil de mantener</td>
              <td style={{ padding: '1rem' }}>✅ 1 click, replicación automática</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>Upgrades de versión</td>
              <td style={{ padding: '1rem' }}>❌ Downtime de horas</td>
              <td style={{ padding: '1rem' }}>✅ Blue/Green con 0 downtime</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>Equipo DevOps</td>
              <td style={{ padding: '1rem' }}>❌ Necesita 2-3 ingenieros 24/7</td>
              <td style={{ padding: '1rem' }}>✅ AWS se encarga, startup enfocada en producto</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura Implementada</h3>
        <CodeBlock language="yaml" title="RDS Multi-AZ Setup" code={`RDS PostgreSQL 15:
  Instance Class: db.r6i.2xlarge (8 vCPU, 64GB RAM)
  Storage: 500GB gp3 (5000 IOPS, 250 MB/s)
  Multi-AZ: Enabled
    Primary: us-east-1a (Escritura)
    Standby: us-east-1b (Replica sincrónica)
    Failover time: 1-2 minutos automático

  Read Replicas:
    1. us-east-1c (para reportes)
    2. eu-west-1a (para clientes EU - RGPD)

  Backup:
    Retention: 35 días
    Backup window: 03:00-04:00 UTC
    Encryption: KMS

  Performance Insights:
    Enabled (detectar queries lentas automáticamente)

  Enhanced Monitoring:
    CloudWatch interval: 5 segundos

  Database Parameters:
    max_connections: 500
    shared_buffers: 16GB
    effective_cache_size: 48GB
    maintenance_work_mem: 2GB
    random_page_cost: 1.1 (SSD optimizado)`} />

        <h3>Migración de Datos (Zero Downtime)</h3>
        <CodeBlock language="bash" title="DMS (Database Migration Service)" code={`# 1. Crear RDS target
aws rds create-db-instance \\
  --db-instance-identifier ecommercepro-rds \\
  --db-instance-class db.r6i.2xlarge \\
  --engine postgres \\
  --allocated-storage 500

# 2. Crear replication instance
aws dms create-replication-instance \\
  --replication-instance-identifier ecommercepro-dms \\
  --replication-instance-class dms.c5.2xlarge \\
  --allocated-storage 100

# 3. Full load + CDC (Change Data Capture)
# DMS copia todos los datos + continúa replicando cambios
# Cero downtime - la aplicación sigue funcionando con MySQL original

# 4. Validación de datos
aws dms describe-table-statistics \\
  --replication-task-arn arn:aws:dms:...

# 5. Cutover (cambiar aplicación a RDS)
# Toma 2 segundos - durante los cuales no hay cambios gracias a CDC`} />
      </section>

      <section className="lesson-section">
        <h2>🔧 Optimizaciones de Queries</h2>

        <h3>Antes: Query Lenta (5 segundos)</h3>
        <CodeBlock language="sql" title="Sin índices" code={`-- Obtener todas las órdenes de un usuario con productos
SELECT
  o.id, o.created_at, o.total,
  p.id, p.name, p.price
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.user_id = 12345
ORDER BY o.created_at DESC;

-- Ejecución: 5.234 segundos (5M órdenes en tabla)
-- Causa: Full table scan en orders table`} />

        <h3>Después: Query Optimizada (50ms)</h3>
        <CodeBlock language="sql" title="Con índices + estadísticas" code={`-- Mismo query, pero con índices
CREATE INDEX idx_orders_user_id ON orders(user_id, created_at DESC);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Ejecutar ANALYZE para actualizar estadísticas
ANALYZE orders;
ANALYZE order_items;

-- Resultado: 0.052 segundos (100x más rápido!)
-- Porque PostgreSQL usa índice para encontrar las 100 órdenes del usuario`} />

        <h3>Caché en Redis (ElastiCache)</h3>
        <CodeBlock language="java" title="Spring + Redis para carrito" code={`@Service
public class CartService {

  @Autowired
  private RedisTemplate<String, CartDTO> redisTemplate;

  @Autowired
  private CartRepository cartRepository;

  public CartDTO getCart(Long userId) {
    String cacheKey = "cart:" + userId;

    // Intentar obtener del caché
    CartDTO cached = redisTemplate.opsForValue().get(cacheKey);
    if (cached != null) {
      return cached; // Instantáneo (1ms)
    }

    // Si no está en caché, obtener de BD
    CartDTO cart = cartRepository.findByUserId(userId);

    // Guardar en caché por 1 hora
    redisTemplate.opsForValue().set(
      cacheKey, cart, Duration.ofHours(1)
    );

    return cart;
  }

  public void updateCart(CartDTO cart) {
    cartRepository.save(cart);

    // Invalidar caché
    redisTemplate.delete("cart:" + cart.getUserId());
  }
`} />
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (MySQL on EC2)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⏱️ <strong>Latencia checkout:</strong> 8-12 segundos</li>
              <li>😠 <strong>Abandono carrito:</strong> 45%</li>
              <li>❌ <strong>Disponibilidad:</strong> 99.2%</li>
              <li>🔧 <strong>Mantenimiento:</strong> 2 DevOps full-time</li>
              <li>📉 <strong>Conversión:</strong> $50K/mes</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (RDS Multi-AZ)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⚡ <strong>Latencia checkout:</strong> 300-400ms</li>
              <li>😊 <strong>Abandono carrito:</strong> 12%</li>
              <li>✅ <strong>Disponibilidad:</strong> 99.99%</li>
              <li>😎 <strong>Mantenimiento:</strong> AWS se encarga</li>
              <li>📈 <strong>Conversión:</strong> $380K/mes</li>
            </ul>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>KPI</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ingresos mensuales</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>+$330K (7.6x)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Uptime</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>+0.79% (43 horas/año menos downtime)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo operacional</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>-$30K/mes (no pagar DevOps)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>ROI migración</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>$360K en el primer mes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Lecciones Clave</h2>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ <strong>Índices bien diseñados</strong> son más importantes que hardware</li>
          <li>✅ <strong>Read Replicas + caché</strong> = 100x mejor rendimiento</li>
          <li>✅ <strong>Multi-AZ failover</strong> previene pérdida de dinero</li>
          <li>✅ <strong>RDS cuesta más/hora pero menos total</strong> (no pagar equipo DevOps)</li>
          <li>✅ <strong>Performance Insights</strong> detecta problemas antes de crash</li>
        </ul>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/servicios/rds" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#333',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #ddd'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}>
            ← Volver a RDS
          </a>
          <a href="/aws/casos-reales/lambda" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0066cc',
            color: '#ffffff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#0052a3'} onMouseOut={(e) => e.target.style.backgroundColor = '#0066cc'}>
            Siguiente: Lambda →
          </a>
        </div>
      </section>
    </div>
  );
};
