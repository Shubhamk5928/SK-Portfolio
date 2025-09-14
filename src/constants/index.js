import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  gearXpert,
  project2,
  project3,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  SaveFlex,
  invisibleBrowser,
  gfgcontri,
} from '../assets';

// Import all tech skills from tech folder
import aws from '../assets/tech/aws.png';
import css from '../assets/tech/css.png';
import docker from '../assets/tech/docker.png';
import express from '../assets/tech/express.png';
import figma from '../assets/tech/figma.png';
import framer from '../assets/tech/framer.png';
import git from '../assets/tech/git.png';
import gsap from '../assets/tech/gsap.png';
import html from '../assets/tech/html.png';
import javascript from '../assets/tech/javascript.png';
import mongodb from '../assets/tech/mongodb.png';
import mui from '../assets/tech/mui.png';
import mysql from '../assets/tech/mysql.png';
import nodejs from '../assets/tech/nodejs.png';
import postgresql from '../assets/tech/postgresql.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import tailwind from '../assets/tech/tailwind.png';
import threejs from '../assets/tech/threejs.svg';
import typescript from '../assets/tech/typescript.png';
import Redis from '../assets/tech/redisLogo.png';
import Firebase from '../assets/tech/firebase.png';

// Import Tekisky separately
import GeeksforGeeks from "../assets/company/geeksforgeeksLogo.png";
import Younity from "../assets/company/younity.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Project Manager",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  // Backend Development
  { name: 'Node.js', icon: nodejs },
  { name: 'Express.js', icon: express },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySQL', icon: mysql },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'TypeScript', icon: typescript },
  { name: 'JavaScript', icon: javascript },
  { name: 'Redis', icon: Redis },
  { name: 'FireBase', icon: Firebase },

  // Deployment & Collaboration
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker },
  { name: 'Git', icon: git },
  { name: 'Figma', icon: figma },

  // Frontend Development
  { name: 'React.js', icon: reactjs },
  { name: 'Redux', icon: redux },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Material UI', icon: mui },
  { name: 'Framer Motion', icon: framer },
  { name: 'GSAP', icon: gsap },
  { name: 'Three.js', icon: threejs },
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
];

const experiences = [
  {
    title: "Member of Technical Staff",
    company_name: "GeeksforGeeks",
    icon: GeeksforGeeks, // Update with GeeksforGeeks logo if available
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed a responsive and interactive frontend for the GFG Courses platform with over 2000+ daily transactions using React.js.",
      "Implemented product pages, search filters, shopping cart functionality, and user authentication for a seamless experience.",
      "Enhanced UI/UX performance, resulting in 30% improved page load times and better interactivity.",
      "Integrated RESTful APIs for course listings, mentor management, and payment systems in collaboration with backend developers.",
      "Optimized Redux state management, achieving 25% faster checkout speed.",
      "Built a remuneration portal backend with Node.js and MongoDB, automating freelancer payments and reducing processing time by 30%.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Younity.in",
    icon: Younity, // Update with Younity logo if available
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "Developed a record management system for Younity.in, an Ed-Tech platform with 200,000+ learners, enabling users to input and store data.",
      "Created backend functionality for record management, allowing users to add and manage their records efficiently.",
      "Collaborated with the team to ensure seamless integration of frontend and backend components.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shubham's work on our GFG Courses platform significantly improved user experience and performance.",
    name: "Uday Mittal",
    designation: "Software Development",
    company: "GeeksforGeeks",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Shubham's dedication to optimizing our platform's checkout process was remarkable.",
    name: "Rahul Kushwaha",
    designation: "Chief Technical Officer",
    company: "Doj Pvt Limited",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Thanks to Shubham's sir efforts, our platform's traffic and efficiency increased significantly.",
    name: "Sourav Kumar",
    designation: "Intern",
    company: "invisble Browser",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Invisible Browser",
    description:
      "The future of productive video calls. Browse invisibly, work efficiently, stay engaged.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailWind",
        color: "white-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MonggoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "RazorPay",
        color: "white-text-gradient",
      },
      {
        name: "ElectronJS",
        color: "green-text-gradient",
      },
      {
        name: "40+ more techs",
        color: "blue-text-gradient",
      },
    ],
    image: invisibleBrowser,
    source_code_link: "https://invisiblebrowser.in/",
  },
  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and achievements, built with modern web technologies for a responsive and interactive experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "FireBase",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert, // Update with relevant image
    source_code_link: "https://shubhamk5928.github.io/shub_Fission/",
  },
   {
    name: "541+ Articles on GeeksforGeeks",
    description:
      "Authored 541+ articles on GeeksforGeeks, covering diverse programming topics, contributing to the learning community with well-researched and clear content.",
    tags: [
      {
        name: "Technical Writing",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "white-text-gradient",
      },
    ],
    image: gfgcontri, // Update with relevant image
    source_code_link: "https://www.geeksforgeeks.org/user/shubhamkquv4/",
  },
  {
    name: "SaveFlex",
    description:
      "A note-taking application similar to Google Notes, built with React for the frontend and Firebase for backend CRUD operations, offering a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: SaveFlex, // Update with relevant image
    source_code_link: "https://shubhamk5928.github.io/SaveFlex2/",
  },
  
  {
    name: "Raktjeevan: e-Blood Bank",
    description:
      "A centralized system for managing blood bank and donor databases, facilitating blood donation and retrieval with features like appointment booking and blood donation camp organization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2, // Update with relevant image
    source_code_link: "https://github.com/shubhamk5928/raktjeevan",
  },
  {
    name: "NIRF Ranking Analysis",
    description:
      "A data analysis project analyzing NIRF rankings (2016-2021) of institutes across India, using Python’s Pandas and NumPy, presented in a Jupyter Notebook.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "white-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
    ],
    image: project3, // Update with relevant image
    source_code_link: "https://github.com/shubhamk5928/nirf-analysis",
  },
 
];

export { services, technologies, experiences, testimonials, projects };