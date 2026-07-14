import { createElement } from 'react';
import './LessonSection.css';

export function LessonSection({ title, children, level = 2, id }) {
  return (
    <section className="lesson-section" id={id}>
      {createElement(`h${level}`, {}, title)}
      {children}
    </section>
  );
}
