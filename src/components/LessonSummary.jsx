/**
 * Componente reutilizable para mostrar resumen de lesson pages
 */
export const LessonSummary = ({ summary, title = 'Resumen' }) => {
  if (!summary) return null;

  return (
    <div className="lesson-summary">
      <h3>{title}</h3>
      {typeof summary === 'string' ? <p>{summary}</p> : summary}
    </div>
  );
};
