import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const SocialLinks = () => (
  <div className="flex gap-4 pt-4">
    <a 
      href="https://github.com/Francisco-web367" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300 transition"
    >
      <Github size={24} />
    </a>
    <a 
      href="https://linkedin.com/in/léo-francisco-de-borba-biehl-5a6a61266" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300 transition"
    >
      <Linkedin size={24} />
    </a>
  </div>
);