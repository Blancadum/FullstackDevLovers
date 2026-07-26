import React from 'react';
import { CategoryLandingOptimized } from '../components/CategoryLandingOptimized';
import { categoryLandingContent } from '../config/categoryLandingContent';
import { getTheme } from '../config/themeColors';

export const LandingDatos = () => {
  const theme = getTheme('datos');
  const content = categoryLandingContent.datos;

  return (
    <CategoryLandingOptimized
      content={content}
      theme={theme}
    />
  );
};
