import { Helmet } from 'react-helmet-async';

export function SEO({
  title = 'Java Backend Learning',
  description = 'Ruta completa de aprendizaje en Java Backend: desde fundamentos hasta Spring Boot',
  keywords = 'Java, Backend, Programación, Tutorial, Aprendizaje',
  url = 'https://javabackendlearning.com',
  image = 'https://javabackendlearning.com/og-image.png',
  type = 'website'
}) {
  const fullTitle = title === 'Java Backend Learning'
    ? title
    : `${title} | Java Backend Learning`;

  return (
    <Helmet>
      {/* Meta básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="language" content="es" />

      {/* Open Graph para redes sociales */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Java Backend Learning" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="es" href={url} />
    </Helmet>
  );
}
