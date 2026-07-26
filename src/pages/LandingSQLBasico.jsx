import React, { useState } from 'react';
import { LessonLayout } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { modulesWithLessons, getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useNavigate } from 'react-router-dom';

export const LandingSQLBasico = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();
  const theme = getTheme('sql');
  const [expandedLesson, setExpandedLesson] = useState(null);
  const sqlModule = modulesWithLessons?.find(m => m.id === 'sql');
  const basicosSection = sqlModule?.sections?.find(s => s.id === 'introduccion');

  if (!sqlModule || !basicosSection) {
    return <div>Error: SQL Básico configuration not found</div>;
  }

  const toggleLesson = (idx) => {
    setExpandedLesson(expandedLesson === idx ? null : idx);
  }

  // Mapeo de secciones por lección
  const lessonSections = {
    '/sql/introduccion': [
      'Qué es una Base de Datos',
      'Conceptos Fundamentales',
      'Estructura de una Tabla',
      'Relaciones entre Tablas',
    ],
    '/sql/ddl': [
      'Sentencias DDL',
      'CREATE TABLE',
      'ALTER TABLE',
      'DROP y TRUNCATE',
    ],
    '/sql/dml': [
      'Sentencias DML',
      'INSERT - Insertar datos',
      'UPDATE - Actualizar datos',
      'DELETE - Eliminar datos',
    ],
    '/sql/joins': [
      'Tipos de JOINs',
      'INNER JOIN',
      'LEFT y RIGHT JOIN',
      'FULL JOIN y CROSS JOIN',
    ],
    '/sql/consultas-avanzadas': [
      'Subconsultas',
      'GROUP BY y Agregaciones',
      'Funciones de Ventana',
      'Optimización de Consultas',
    ]};

  return (
    <LessonLayout title="SQL: Fundamentos de Bases de Datos" showTableOfContents={false} showHeader={false}>
      <h1 style={{ fontSize: '1.4rem', color: '#2c3e50', margin: '0 0 0.6rem 0', lineHeight: '1.2' }}>SQL: Fundamentos de Bases de Datos</h1>
      <p style={{
        margin: '0 0 1.5rem 0',
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.5'
      }}>
        Domina SQL desde cero. Aprende conceptos fundamentales, cómo crear tablas, manipular datos, combinar información con JOINs y escribir consultas avanzadas.
      </p>

      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        {basicosSection.lessons.map((lesson, lessonIdx) => (
          <div key={lessonIdx} style={{ borderBottom: lessonIdx < basicosSection.lessons.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
            <div
              onClick={() => toggleLesson(lessonIdx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <span style={{
                color: '#17a2b8',
                fontSize: '0.8rem',
                transform: expandedLesson === lessonIdx ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}>
                ▶
              </span>
              <span style={{ fontSize: '1.2rem' }}>{lesson.icon}</span>
              <span style={{ fontSize: '0.95rem', color: '#2c3e50' }}>{lesson.title}</span>
            </div>

            {expandedLesson === lessonIdx && (
              <div style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#f9f9f9',
                borderTop: '1px solid #e0e0e0',
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.6'
              }}>
                <p style={{ margin: '0 0 0.8rem 0', fontWeight: '600', color: '#2c3e50' }}>
                  Temas cubiertos:
                </p>
                <ul style={{ margin: '0 0 1rem 1.5rem', padding: 0 }}>
                  {(lessonSections[lesson.link] || ['Contenido disponible']).map((section, idx) => (
                    <li key={idx} style={{ margin: '0.4rem 0', color: '#555' }}>
                      {section}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(lesson.link)}
                  style={{
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}
                >
                  Ver lección →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#999', marginTop: '1rem' }}>
        {basicosSection.lessons.length} lecciones
      </p>
    </LessonLayout>
  );
};
