import { Breadcrumb, SEO, TableOfContents } from './index';
import './LessonLayout.css';

export function LessonLayout({
  title,
  description,
  breadcrumbs,
  children,
  seoTitle,
  seoDescription,
  seoKeywords,
  url
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
        <Breadcrumb items={breadcrumbs} />

        <article className="lesson-article">
          <header className="lesson-header">
            <h1>{title}</h1>
            {description && <p className="lesson-subtitle">{description}</p>}
          </header>

          <div className="lesson-main">
            <TableOfContents contentId="lesson-content" />
            <div className="lesson-body" id="lesson-content">
              {children}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
