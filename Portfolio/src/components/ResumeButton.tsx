import React from 'react';
import { FileDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ResumeButton = () => {
  const { t } = useLanguage();
  
  return (
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 shadow-lg shadow-purple-500/20"
    >
      <FileDown size={20} />
      <span>{t('downloadResume')}</span>
    </a>
  );
};