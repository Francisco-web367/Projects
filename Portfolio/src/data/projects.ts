import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    company: 'ShopFlow',
    description: 'Built a full-featured e-commerce platform with product management, cart functionality, and secure payment processing using Stripe.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    link: '/project/shopflow',
    favicon: '/favicons/shopflow.ico',
    duration: '2024-Present',
    githubUrl: 'https://github.com/leofrancisco/shopflow'
  },
  {
    id: '2',
    title: 'Real Estate Management',
    company: 'PropertyHub',
    description: 'Developed a real estate management system with property listings, search functionality, and appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'AWS S3'],
    link: '/project/propertyhub',
    favicon: '/favicons/propertyhub.ico',
    duration: '2023-2024',
    githubUrl: 'https://github.com/leofrancisco/propertyhub'
  },
  {
    id: '3',
    title: 'Project Management Tool',
    company: 'TaskMaster',
    description: 'Created a project management tool with task tracking, team collaboration, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
    link: '/project/taskmaster',
    favicon: '/favicons/taskmaster.ico',
    duration: '2023',
    githubUrl: 'https://github.com/leofrancisco/taskmaster'
  },
  {
    id: '4',
    title: 'Inventory Management',
    company: 'StockFlow',
    description: 'Built an inventory management system with barcode scanning, stock tracking, and automated reordering.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'Docker', 'REST API'],
    link: '/project/stockflow',
    favicon: '/favicons/stockflow.ico',
    duration: '2023',
    githubUrl: 'https://github.com/leofrancisco/stockflow'
  },
  {
    id: '5',
    title: 'CRM System',
    company: 'ClientHub',
    description: 'Developed a customer relationship management system with contact management, deal tracking, and analytics.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
    technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'TypeScript'],
    link: '/project/clienthub',
    favicon: '/favicons/clienthub.ico',
    duration: '2023',
    githubUrl: 'https://github.com/leofrancisco/clienthub'
  },
  {
    id: '6',
    title: 'HR Management Portal',
    company: 'StaffCore',
    description: 'Created an HR management portal with employee records, leave management, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'TailwindCSS'],
    link: '/project/staffcore',
    favicon: '/favicons/staffcore.ico',
    duration: '2022-2023',
    githubUrl: 'https://github.com/leofrancisco/staffcore'
  },
  {
    id: '7',
    title: 'Learning Management System',
    company: 'EduFlow',
    description: 'Built an educational platform with course management, student progress tracking, and interactive assessments.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
    link: '/project/eduflow',
    favicon: '/favicons/eduflow.ico',
    duration: '2022',
    githubUrl: 'https://github.com/leofrancisco/eduflow'
  }
];