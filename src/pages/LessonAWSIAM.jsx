import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSIAM() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Introducción a IAM',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Identity and Access Management (IAM)</strong> es el servicio de AWS que te permite administrar el acceso a los recursos de tu cuenta de AWS de forma segura. Mediante IAM, puedes crear y gestionar usuarios, grupos y roles de AWS, y definir los permisos que determinan qué recursos pueden acceder.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            IAM es un servicio <strong>fundamental para la seguridad</strong> en AWS. Sigue el principio de <strong>menor privilegio</strong>: cada usuario solo tiene los permisos exactamente necesarios para realizar su trabajo. No debes usar la cuenta raíz (root) para tareas diarias; en su lugar, creas usuarios IAM con permisos específicos.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            IAM es un servicio <strong>global</strong> que funciona en todas las regiones de AWS, y es <strong>completamente gratuito</strong>. Todos los servicios de AWS se integran con IAM para controlar el acceso.
          </p>
        </>
      )
    },

    {
      title: 'Componentes Principales de IAM',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            {[
              {
                title: 'Usuarios (Users)',
                icon: '👤',
                color: '#3498db',
                description: 'Representan a personas o aplicaciones. Cada usuario tiene credenciales de acceso único (nombre de usuario y contraseña, o claves de acceso).',
                examples: ['Usuario administrativo', 'Usuario desarrollador', 'Usuario aplicación']
              },
              {
                title: 'Grupos (Groups)',
                icon: '👥',
                color: '#9b59b6',
                description: 'Colecciones de usuarios con permisos similares. Simplifican la gestión de permisos: asignas permisos al grupo, y todos los usuarios heredan esos permisos.',
                examples: ['Desarrolladores', 'Administradores', 'Auditores']
              },
              {
                title: 'Roles (Roles)',
                icon: '🔐',
                color: '#2ecc71',
                description: 'Conjunto de permisos sin credenciales permanentes. Se asumen temporalmente y se usan para conceder acceso a servicios o entidades externas.',
                examples: ['Rol para EC2', 'Rol para Lambda', 'Rol para usuarios externos']
              }
            ].map((component, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${component.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${component.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{component.icon}</span>
                  <h3 style={{ margin: 0, color: component.color, fontSize: '1.2rem' }}>{component.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {component.description}
                </p>
                <div style={{ borderTop: `1px solid ${component.color}20`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: component.color, marginBottom: '0.5rem' }}>Ejemplos:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555' }}>
                    {component.examples.map((example, i) => (
                      <li key={i} style={{ marginBottom: '0.3rem' }}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Políticas de Permisos (Policies)',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Las <strong>políticas de permisos</strong> son documentos en formato JSON que definen exactamente qué acciones puede realizar un usuario, grupo o rol en qué recursos de AWS. Las políticas determinan si una acción está permitida o denegada.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                name: 'Políticas Administradas',
                icon: '📋',
                description: 'Políticas independientes con su propio ARN. Creadas por AWS o por ti. Se pueden reutilizar y versionar.'
              },
              {
                name: 'Políticas Insertas',
                icon: '🔗',
                description: 'Políticas directamente asociadas a un usuario, grupo o rol. Tienen relación de uno-a-uno. Más restrictivas.'
              },
              {
                name: 'Políticas de Confianza',
                icon: '🤝',
                description: 'Definen quién puede asumir un rol. Especifican qué entidades (usuarios, servicios, cuentas externas) tienen permiso.'
              }
            ].map((policy, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f0f4ff',
                border: '1px solid #2196F3',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem', minWidth: '50px' }}>{policy.icon}</span>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#2196F3' }}>{policy.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{policy.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Principio de Menor Privilegio:</strong> Los usuarios deben tener solo los permisos mínimos necesarios para realizar sus tareas. Esto reduce el riesgo de acceso no autorizado o modificación accidental de recursos.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'ARNs (Amazon Resource Names)',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Un <strong>ARN (Amazon Resource Name)</strong> es un identificador único que especifica un recurso en AWS de forma global. Se usa en políticas para indicar exactamente a qué recursos se aplican los permisos.
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            lineHeight: '1.8'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Formato de un ARN:</p>
            <p style={{ margin: 0, color: '#666' }}>
              arn:partition:service:region:account-id:resource-id
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                component: 'arn',
                description: 'Siempre "arn" para Amazon Resource Name'
              },
              {
                component: 'partition',
                description: 'Normalmente "aws" (o "aws-cn" en China, "aws-us-gov" en GovCloud)'
              },
              {
                component: 'service',
                description: 'El servicio de AWS (s3, ec2, iam, rds, lambda, etc.)'
              },
              {
                component: 'region',
                description: 'La región (us-east-1, eu-west-1, etc.). Para servicios globales, puede estar vacío'
              },
              {
                component: 'account-id',
                description: 'Tu ID de cuenta de AWS (12 dígitos). Vacío para servicios globales como IAM'
              },
              {
                component: 'resource-id',
                description: 'Identificador del recurso específico (bucket name, instance id, user name, etc.)'
              }
            ].map((part, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '1rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', fontWeight: '700', color: '#2c3e50' }}>{part.component}</p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>{part.description}</p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#f0f8ff',
            border: '1px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', fontWeight: '700' }}>Ejemplos de ARNs:</p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>arn:aws:iam::123456789012:user/john</li>
              <li style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>arn:aws:s3:::my-bucket/*</li>
              <li style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0</li>
              <li style={{ fontFamily: 'monospace' }}>arn:aws:iam::123456789012:role/lambda-execution-role</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Mejores Prácticas de IAM',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Aplicar buenas prácticas de IAM es crucial para mantener tu cuenta de AWS segura y evitar accesos no autorizados.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                title: '🔑 Protege tu Cuenta Raíz',
                tips: [
                  'No uses credenciales raíz para tareas diarias',
                  'Activa autenticación multifactor (MFA) en root',
                  'Guarda las credenciales raíz en lugar seguro'
                ]
              },
              {
                title: '👤 Crea Usuarios IAM',
                tips: [
                  'Cada persona debe tener su propio usuario',
                  'Usa nombres descriptivos para usuarios',
                  'Deshabilita usuarios que no se usan'
                ]
              },
              {
                title: '🛡️ Aplica Menor Privilegio',
                tips: [
                  'Asigna solo permisos necesarios',
                  'Usa políticas administradas de AWS cuando sea posible',
                  'Revisa regularmente los permisos otorgados'
                ]
              },
              {
                title: '🔄 Rota Credenciales',
                tips: [
                  'Cambia contraseñas regularmente',
                  'Rota claves de acceso periódicamente',
                  'Elimina credenciales no utilizadas'
                ]
              },
              {
                title: '📋 Organiza con Grupos',
                tips: [
                  'Agrupa usuarios con permisos similares',
                  'Simplifica la gestión de permisos',
                  'Facilita auditoría de accesos'
                ]
              },
              {
                title: '🔍 Monitorea Accesos',
                tips: [
                  'Habilita CloudTrail para auditoría',
                  'Revisa reportes de IAM regularmente',
                  'Alertas sobre cambios en políticas'
                ]
              }
            ].map((best, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#2c3e50' }}>{best.title}</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                  {best.tips.map((tip, i) => (
                    <li key={i} style={{ marginBottom: '0.4rem', color: '#555' }}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Importante:</strong> IAM es el primer paso en la seguridad de AWS. Implementa estas prácticas desde el inicio para evitar problemas de seguridad en el futuro.
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
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
