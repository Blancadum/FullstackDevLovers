import React from 'react';
import { CategoryLandingOptimized } from '../components/CategoryLandingOptimized';
import { categoryLandingContent } from '../config/categoryLandingContent';
import { getTheme } from '../config/themeColors';

export const LandingBackend = () => {
  const theme = getTheme('backend');
  const content = categoryLandingContent.backend;

  return (
    <CategoryLandingOptimized
      content={content}
      theme={theme}
    />
  );
};
