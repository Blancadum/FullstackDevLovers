import React from 'react';
import { MethodologyPage } from '../components/MethodologyPage';
import { getMethodologyById } from '../config/moduleCategories';
import { getTheme } from '../config/themeColors';

/**
 * Generic wrapper component for all methodology pages.
 * Replaces 4 identical files (MethodologyAgileScrum, MethodologyCleanCode, etc.)
 */
export const MethodologyWrapper = ({ methodologyId }) => {
  const theme = getTheme('metodologias');
  const methodology = getMethodologyById(methodologyId);

  if (!methodology) {
    return <div>Metodología no encontrada</div>;
  }

  return (
    <MethodologyPage
      methodology={methodology}
      concepts={[]}
      navigationButtons={theme.navButtons}
      themeColor={theme.primary}
      themeColorLight={theme.light}
    />
  );
};
