import React from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from '../components/ContactInfo';
import { SocialLinks } from '../components/SocialLinks';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { ResumeButton } from '../components/ResumeButton';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Léo Francisco
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 mb-6">
                {t('title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                {t('about')}
              </p>
              <div className="mb-8">
                <ResumeButton />
              </div>
              <ContactInfo />
              <SocialLinks />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <img
                src="https://i.imgur.com/Grent3C.png"
                alt="Léo Francisco"
                className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/20"
              />
            </motion.div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t('featuredProjects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};