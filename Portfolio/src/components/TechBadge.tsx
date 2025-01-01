import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => (
  <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-500/20">
    {tech}
  </span>
);