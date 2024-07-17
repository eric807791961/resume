import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, FlagIcon} from '@heroicons/react/24/outline';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/maze.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: '',
  description: (
    <>
      <div className="container">
        <div className="donut-container">
          {/* The <pre> tag is now directly in the JSX, no need for getElementById */}
          <pre className="center" id="d"></pre>
        </div>
        <div className="hero-content mt-8">
          {' '}
          {/* Added margin-top class */}
          <p className="text-4xl font-bold text-stone-100 sm:text-5xl lg:text-6xl">
            Hi! I'm <strong className="text-stone-100">Eric Huang</strong>
          </p>
          <a className="btn-primary" href="/assets/Eric_Huang_Resume.pdf">
            Resume
          </a>
          <a className="btn-secondary" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </>
  ),
  actions: [
    {
      href: "./assets/Eric_Huang_Resume.pdf",
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a dedicated Software Developer with a master's degree in Information Management. 
  I specialize in data analysis and machine learning, with experience in various projects, including multimedia machine learning applications and real-time gesture detection. 
  I'm eager to leverage my skills in software development to solve complex problems for businesses.`,
  aboutItems: [
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwanese', Icon: FlagIcon},
    {label: 'Master Degree', text: 'National Yang Ming Chiao Tung University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Front / Backend development',
    skills: [
      {
        name: 'Golang',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'React',
        level: 6,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Taipei Housing Price Prediction',
    description: `Developed a two-layer Ensemble Learning model using CatBoost, XGBoost, KNN Regressor, Linear Regression, and Random Forest. The first layer consists of individual models, and their predictions feed into a second layer Linear Regression for the final prediction. Data cleaning, feature engineering, and model evaluations were conducted using data from the Ministry of the Interior's real estate transaction database for Taipei from Q2 2015 to Q2 2020.`,
    url: 'https://github.com/eric807791961/Ensemble_Learning-Taipei_Housing_Price_Prediction',
    image: porfolioImage1, // Ensure this image path is correct
  },
  {
    title: 'Traversal Visualization',
    description: 'A webpage that visualize Depth First Search , Breadth First Search, and Shortest Path traversal through a Maze',
    url: 'https://eric807791961.github.io/maze-traversal/',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'National Yang Ming Chiao Tung University',
    title: 'Master of Science',
    content: (
      <p>
        During my master's degree, I have honed my expertise in Cloud Computing, Cybersecurity, and Programming and
        Software Development. My coursework has earned me my first badge for AWS Foundations, further solidifying my
        knowledge in cloud technologies. Additionally, I have built a strong foundation in programming and software
        development through advanced courses in data structures, object-oriented programming, and high-level algorithms.
      </p>
    ),
  },
  {
    date: 'June 2021',
    location: 'San Jose State University',
    title: 'Bachelor of Business Administration – Business Analytics',
    content: (
      <p>
        Graduated with a GPA of 3.8, recognized as an honor's graduate. Focused on statistical and data analysis, 
        developing strong analytical skills. Proficient in tools such as SPSS, Tableau, R, and Python. Participated 
        in the Google San Jose Downtown West Gateway Project and the European Innovation Academy (EIA), applying 
        data analysis and project management skills to real-world challenges.
      </p>
    ),
  }
  
  

];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - August 2023',
    location: 'Taiwan Semiconductor Manufacturing Company Limited, Taiwan',
    title: 'Summer Intern',
    content: (
      <p>
        Integrated cloud-native and serverless technologies, including NATS and CloudEvents, into Java architectures to
        enhance system interoperability and support DevOps objectives. Deployed open-source API management tools such as
        Events Catalog and Apicurio within Kubernetes CI/CD pipelines, thereby improving API versioning and fostering
        enhanced cross-team collaboration.
      </p>
    ),
  },
  {
    date: 'January 2023 - June 2023',
    location: 'Industrial Technology Research Institute, Taiwan',
    title: 'Intern',
    content: (
      <p>
        Conducted research on super-resolution imaging and 3D imaging using deep learning techniques. Integrated
        advanced imaging technologies into products and regularly presented model architectures and findings to team
        members.
      </p>
    ),
  },
  {
    date: 'January 2021 - June 2021',
    location: 'Google San Jose Downtown West Gateway Project, San Jose, USA',
    title: 'Project Intern',
    content: (
      <p>
        Led a team of 5 to design business activities for Google’s San Jose downtown redevelopment project. Conducted
        surveys and data analysis on 200 respondents to understand urban innovation needs. Implemented web scraping
        tools to gather data on local businesses and events, and used VBA in Google Sheets to convert addresses to
        geocoordinates for visualization in Tableau, identifying gaps between current activities and community
        expectations. Proposed alternative solutions to Google, which were adopted.
      </p>
    ),
  },
  {
    date: 'July 2018 - August 2018',
    location: 'European Innovation Academy, Turin, Italy',
    title: 'Team Lead',
    content: (
      <p>
        Led a 6-member team to develop an app providing real-time feedback on user gestures, representing the university
        at an innovation competition in Italy, advancing to the final stage. Responsible for business model development
        and market analysis, designed surveys and conducted in-depth interviews with target audiences. Analyzed
        collected data using SPSS and Tableau to optimize decision-making.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// 
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'erichuang8077@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'Eric Huang',
      href: 'https://github.com/eric807791961',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/eric807791961'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/huang-eric-6297842b6/'},
];
