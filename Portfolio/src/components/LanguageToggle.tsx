import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-purple-400" />
    </motion.button>
  );
};