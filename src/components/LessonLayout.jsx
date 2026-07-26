import { SEO, TableOfContents } from './index';
import './LessonLayout.css';

export function LessonLayout({
  title,
  description,
  children,
  seoTitle,
  seoDescription,
  seoKeywords,
  url,
  showTableOfContents = true,
  showHeader = true
}) {
  return (
    <>
      <SEO
        title={seoTitle || title}
        description={seoDescription || description}
        keywords={seoKeywords}
        url={url}
      />
      <div className="lesson-layout">
        <article className="lesson-article">
          {showHeader && (
            <header className="lesson-header">
              <h1>{title}</h1>
              {description && <p className="lesson-subtitle">{description}</p>}
            </header>
          )}

          <div className="lesson-main">
            {showTableOfContents && <TableOfContents contentId="lesson-content" />}
            <div className="lesson-body" id="lesson-content">
              {children}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
