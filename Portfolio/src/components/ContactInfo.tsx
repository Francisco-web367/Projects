import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactInfo = () => (
  <div className="space-y-3 text-gray-600 dark:text-gray-300">
    <div className="flex items-center gap-2">
      <Mail className="text-purple-600 dark:text-purple-400" size={18} />
      <a href="mailto:leofranciscoborbabiehl@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
        leofranciscoborbabiehl@gmail.com
      </a>
    </div>
    
    <div className="flex items-center gap-2">
      <Phone className="text-purple-600 dark:text-purple-400" size={18} />
      <a href="tel:+5551992983364" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
        +55 51 992983364
      </a>
    </div>
    
    <div className="flex items-center gap-2">
      <MapPin className="text-purple-600 dark:text-purple-400" size={18} />
      <span>Pelotas, Rio Grande do Sul, Brazil</span>
    </div>
  </div>
);