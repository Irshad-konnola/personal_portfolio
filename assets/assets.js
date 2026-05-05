import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import postman from './postman.png';
import right_arrow_white from './right-arrow-white.png';
import logo_light from './logo_light.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  Gauge 
} from 'lucide-react';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    postman,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_light,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = {
  enterprise: [
    {
      title: 'Multi-tenant ERP SaaS',
      description: 'Architected a comprehensive ERP system with POS, Accounts, and Sales modules for diverse clients with custom workflows',
      bgImage: '/erp-saas.png', // Replace with actual image
      confidential: true,
      technologies: ['React', 'Vite' , 'Python', 'Multi-tenant'],
      role: 'Frontend Developer'
    },
    {
      title: 'Restaurant POS System',
      description: 'Engineered desktop POS application with React Native mobile companion and Python backend for seamless data sync',
      bgImage: '/pos-system.png', 
      confidential: true,
      technologies: ['Electron.js', 'React Native', 'Python', 'Real-time Sync'],
      role: 'Full-Stack Developer'
    },
    {
      title: 'Tourism Ecosystem Suite',
      description: 'Built complete tourism platform with admin dashboard and three mobile apps for users, drivers, and supervisors',
      bgImage: '/tourism-suite.png', 
      confidential: true,
      technologies: ['React', 'React Native', 'Payment Integration', 'Dashboard'],
      role: 'Full-Stack Developer'
    },
    {
      title: 'Car Detailing CRM',
      description: 'Developed CRM system for car detailing businesses with automated job cards and cost estimation',
      bgImage: '/car-crm.png', // Replace with actual image
      screenshots: 2,
      confidential: true,
      technologies: [ 'React', 'Automation', 'CRM'],
      role: 'Frontend Developer'
    },
    {
      title: 'Zearch Booking Platform',
      description: 'Led frontend development for customizable auditorium/parking booking engine with real-time management',
      bgImage: '/zearch-booking.png', // Replace with actual image
      confidential: false,
      technologies: ['Next.js', 'Real-time', 'Booking System', 'Python APIs'],
      role: 'Frontend Lead',
      url: 'https://zearch.live/'
    }
  ],
  mobile: [
    {
      title: 'Tourism User App',
      description: 'React Native mobile app for tourists with booking, payment, and itinerary management',
      bgImage: '/mobile-tourism-user.png', // Replace with actual image
      technologies: ['React Native', 'Expo', 'iOS', 'Android'],
      url: '#'
    },
    {
      title: 'Driver Management App',
      description: 'Mobile application for tourism drivers with route optimization and trip management',
      bgImage: '/mobile-driver-app.png', // Replace with actual image
      technologies: ['React Native', 'Maps', 'Navigation', 'Real-time'],
      url: '#'
    },
    {
      title: 'Supervisor Dashboard App',
      description: 'Management application for supervisors to monitor operations and manage resources',
      bgImage: '/mobile-supervisor-app.png', // Replace with actual image
      technologies: ['React Native', 'Dashboard', 'Analytics', 'Management'],
      url: '#'
    }
  ],
  personal: [
    {
      title: 'Blood Donor Management System',
      description: 'Full-stack platform connecting donors with patients featuring real-time availability and secure authentication',
      bgImage: '/blood-donor.png', // Replace with actual image
      technologies: ['React', 'Node.js', 'PlSql', 'Real-time'],
      url: 'https://blood-donor-system-nu.vercel.app/',
      github: true
    },
    {
      title: 'Work Permit System',
      description: 'Digital permit processing application streamlining document verification and replacing manual workflows',
      bgImage: '/work-permit.png', // Replace with actual image
      technologies: ['React', 'Digital Workflow'],
      url: 'https://wps-theta.vercel.app/',
      github: true
    }
  ]
};

export const serviceData = [
  { 
    icon: Globe, 
    title: 'Full-Stack Web Development', 
    description: 'Building responsive and scalable web applications using React, Next.js, Node.js, and modern web technologies. From frontend interfaces to backend APIs and database design.', 
    link: '#contact' 
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    description: 'Developing cross-platform mobile applications for iOS and Android using React Native and Expo. Creating native-like experiences with optimized performance.', 
    link: '#contact' 
  },
  { 
    icon: Monitor, 
    title: 'Desktop Applications', 
    description: 'Building cross-platform desktop applications using Electron.js with React. Creating powerful desktop solutions with native capabilities.', 
    link: '#contact' 
  },
  { 
    icon: Database, 
    title: 'CMS & API Development', 
    description: 'Developing custom CMS solutions with Strapi, RESTful APIs with Express.js, and integrating third-party services for seamless data flow.', 
    link: '#contact' 
  },
  { 
    icon: Cloud, 
    title: 'SaaS & ERP Solutions', 
    description: 'Architecting multi-tenant SaaS platforms and ERP systems with custom workflows, automated processes, and scalable infrastructure.', 
    link: '#contact' 
  },
  { 
    icon: Gauge, 
    title: 'Performance Optimization', 
    description: 'Optimizing application performance through code splitting, state management, caching strategies, and SEO enhancements for better user experience.', 
    link: '#contact' 
  },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bsc Computer science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' }
];

export const toolsData = [
    assets.vscode,  assets.mongodb,  assets.git,assets.postman,

    // assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];