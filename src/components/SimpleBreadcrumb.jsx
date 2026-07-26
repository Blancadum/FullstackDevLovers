import { Link, useLocation } from 'react-router-dom';

export const SimpleBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = [{ label: 'Home', path: '/' }];

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: segment
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      path: currentPath,
    });
  });

  return (
    <nav className="breadcrumb-nav">
      {breadcrumbs.map((crumb, idx) => (
        <span key={idx}>
          {idx > 0 && <span className="separator">/</span>}
          {idx === breadcrumbs.length - 1 ? (
            <span className="breadcrumb-current">{crumb.label}</span>
          ) : (
            <Link to={crumb.path}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
};
