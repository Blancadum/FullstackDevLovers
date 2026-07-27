import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Fullstack Dev Lovers';
const SITE_URL = 'https://fullstackdevlovers.com';

export function SEO({
  title = SITE_NAME,
  description = 'Plataforma educativa completa para desarrolladores: Backend, Frontend, Datos, Cloud y DevOps. Ruta profesional desde cero hasta experto.',
  keywords = 'Backend, Frontend, Cloud, DevOps, Programación, Tutorial, Aprendizaje',
  url,
  image = `${SITE_URL}/og-image.png`,
  type = 'website'
}) {
  const location = useLocation();
  const resolvedUrl = url || `${SITE_URL}${location.pathname}`;
  const fullTitle = title === SITE_NAME
    ? title
    : `${title} | ${SITE_NAME}`;

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
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={resolvedUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="es" href={resolvedUrl} />
    </Helmet>
  );
}
