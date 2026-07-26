import React from 'react';
import { CategoryLandingOptimized } from '../components/CategoryLandingOptimized';
import { categoryLandingContent } from '../config/categoryLandingContent';
import { getTheme } from '../config/themeColors';

export const LandingFrontend = () => {
  const theme = getTheme('frontend');
  const content = categoryLandingContent.frontend;

  return (
    <CategoryLandingOptimized
      content={content}
      theme={theme}
    />
  );
};
