// src/App.jsx

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import CursorBlob from './CursorBlob';

// --- Image Imports ---
import profilePicture from './assets/images/IMG_4873.jpg';
import profilePicture2 from './assets/images/sAp.png';
import projectAlgoViz from './assets/images/algoviz.png';
import projectCampusNav from './assets/images/campus-navigator.png';
import projectCleanSheet from './assets/images/cleansheet.png';


// --- SVG Icons ---
const GitHubIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.5a13.93 13.93 0 0 0-6 0c-2.73-1.85-3.91-.5-3.91-.5A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedInIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path strokeWidth="2" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></svg>
);
const FacebookIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"></path></svg>
);
const MailIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path strokeWidth="2" d="m22 7-8.97-5.73a1.91 1.91 0 0 0-2.06 0L2 7"></path></svg>
);
const SunIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>
);
const MoonIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);
const ExternalLinkIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const UserIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const PhoneIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);
const MessageIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
);


// --- Data ---
// --- MODIFICATION: The PROJECTS array has been replaced with your new projects ---
const PROJECTS = [
    {
        title: "EduSys Pro — School Management System",
        impact: "A comprehensive system for educational institutions, featuring portals for students, teachers, accountants, and staff to streamline school operations.",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://edusyspro.netlify.app/", // Using demo link as no repo was provided
        demo: "https://edusyspro.netlify.app/",
        image: projectAlgoViz // ACTION REQUIRED: Replace with 'projectEduSys' after importing your image
    },
    {
        title: "AIC Inventory — Management System",
        impact: "A robust inventory system to track stock levels, customer orders, profitability, and delivery logistics, ensuring efficient business operations.",
        stack: ["React", "Tailwind CSS", "CSS", "JavaScript"],
        github: "https://github.com/SamiSahil/aicinventory",
        demo: "https://samisahil.github.io/aicinventory/",
        image: projectCampusNav // ACTION REQUIRED: Replace with 'projectInventory' after importing your image
    },
    {
        title: "Student Attendance System",
        impact: "A streamlined attendance tool to monitor student presence, absences, and leave records, providing detailed monthly reports for easy tracking.",
        stack: ["React", "CSS", "JavaScript", "Vite"],
        github: "https://github.com/SamiSahil/attendance",
        demo: "https://samisahil.github.io/attendance/",
        image: projectCleanSheet // ACTION REQUIRED: Replace with 'projectAttendance' after importing your image
    },
];
const SKILLS = {
    Languages: ["TypeScript", "JavaScript", "Python", "C++", "HTML", "CSS"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
    Backend: ["Node.js", "Express", "Prisma", "Python Flask"],
    Databases: ["PostgreSQL", "MongoDB", "Firebase Firestore"],
    "Cloud/DevOps": ["Git", "Vercel", "Docker"],
    Tools: ["VS Code", "ESLint", "Prettier", "Postman"],
};
const EXPERIENCE = [
    { title: "Third-year B.Sc. in Computer Science & Engineering", org: "Uttara University", dates: "2022 - Present", impact: ["Engaged in core computer science topics including data structures, algorithms, and software engineering principles.", "Participated in multiple university-level programming contests."] },
];

// --- Reusable Components ---
const AnimatedSection = ({ children, id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);
    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };
    return (
        <motion.section id={id} ref={ref} initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.section>
    );
};

const Button = ({ children, primary, href, newTab, className = '', ...rest }) => {
    const base = "px-6 py-3 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
    const primaryStyle = "bg-primary text-white hover:bg-indigo-600 focus:ring-primary";
    const secondaryStyle = "bg-surfaceLight text-textLight border border-gray-200 hover:bg-gray-100 focus:ring-primary/50 dark:bg-surface dark:text-textDark dark:border-[#1C2026] dark:hover:bg-white/10 dark:focus:ring-white/50";
    const style = primary ? primaryStyle : secondaryStyle;

    if (href) {
        return <a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} className={`${base} ${style} ${className}`} {...rest}>{children}</a>;
    }
    return <button className={`${base} ${style} ${className}`} {...rest}>{children}</button>;
};

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const ScrollTopBtn = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return show ? (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed z-50 p-3 text-white transition rounded-full shadow-lg bottom-8 right-8 bg-primary hover:bg-indigo-600" aria-label="Scroll to top">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
        </button>
    ) : null;
};

const FormInput = ({ icon, type = 'text', name, placeholder, ...rest }) => {
    const InputComponent = type === 'textarea' ? 'textarea' : 'input';
    return (
        <div className="relative flex items-center">
            <div className="absolute left-4">{icon}</div>
            <InputComponent
                type={type}
                name={name}
                placeholder={placeholder}
                rows={type === 'textarea' ? 4 : undefined}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surfaceLight dark:bg-surface border border-gray-200 dark:border-[#1C2026] text-textLight dark:text-textDark placeholder-mutedLight dark:placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                {...rest}
            />
        </div>
    );
};


const StatItem = ({ value, label }) => (
    <div>
        <h3 className="text-4xl font-bold text-primary">{value}</h3>
        <p className="mt-1 text-mutedLight dark:text-muted">{label}</p>
    </div>
);

// --- Main Components ---
const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  const handleNavClick = (e, item) => {
    e.preventDefault();
    scrollToSection(item.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-bgLight/80 dark:bg-bgDark/80 backdrop-blur-lg dark:border-white/5">
      <div className="relative flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <span 
          className="text-3xl font-bold cursor-pointer font-lugrasimo animated-text-gradient" 
          onClick={() => scrollToSection('home')}
        >
          Samiuzzaman Sahil
        </span>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 transition-colors duration-200 rounded-full text-mutedLight dark:text-muted hover:bg-gray-200/50 dark:hover:bg-white/10" aria-label="Toggle theme">
            {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <button className="p-2 text-mutedLight dark:text-muted" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-56 bg-surfaceLight dark:bg-surface rounded-xl shadow-lg p-4 flex flex-col gap-4 border border-gray-200 dark:border-[#1C2026]">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item)} className="text-base font-medium transition-all duration-150 cursor-pointer text-mutedLight dark:text-muted hover:text-primary">
                {item}
              </a>
            ))}
            <Button href="/samiprofile/resume.pdf" primary newTab className="w-full text-center">Resume</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col-reverse items-center gap-12 mx-auto max-w-7xl md:flex-row">
      <div className="w-full text-center md:w-1/2 md:text-left">  
 
        <h1 
          className="mb-4 text-3xl font-extrabold leading-tight sm:text-3xl lg:text-4xl font-federo text-textLight dark:text-textDark"
        >
          Hi, I'm <br />
          <span className="font-semibold text-blue-500">Sami</span>
          <br />
          <span className="text-2xl lg:text-3xl">I design & build digital experiences.</span>
        </h1>     
        <motion.p 
          className="mb-8 text-lg font-medium text-mutedLight dark:text-muted"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
         • Computer Science Student 
          <br />• Aspiring Software Engineer 
          <br/>• Problem-solver
        </motion.p>
                <motion.div 
          className="flex justify-center mb-8 md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-6">
            <a href="https://github.com/SamiSahil" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-mutedLight dark:text-muted hover:text-primary hover:scale-125">
              <GitHubIcon className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/samiuzzamansahil" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-mutedLight dark:text-muted hover:text-primary hover:scale-125">
              <LinkedInIcon className="w-8 h-8" />
            </a>
           
            <a href="https://www.facebook.com/share/19kpWKsBPL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-mutedLight dark:text-muted hover:text-primary hover:scale-125">
              <FacebookIcon className="w-8 h-8" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row md:justify-start" 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            primary 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects');}} 
            className="text-white border-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            See work
          </Button>
          <Button href="mailto:samiujjaman643@gmail.com">
            Hire me
          </Button>
         
          <a 
            href="https://samisahil.github.io/resume/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-white transition-all duration-200 border-0 rounded-xl hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-sky-500 hover:bg-sky-600 focus:ring-sky-400"
          >
            See My Resume
          </a>
            <Button href="https://onexero.netlify.app/" target="_blank">
           Our Company
          </Button>
        </motion.div>
      </div>
     
      <motion.div className="flex justify-center w-full md:w-1/2 md:justify-end" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}>
        <div className="relative w-full max-w-sm">
          <img src={profilePicture} alt="Samiuzzaman Sahil" className="object-cover w-full h-auto shadow-2xl rounded-3xl shadow-primary/20" loading="lazy" />
        </div>
      </motion.div>
    </div>
  </section>
);


const About = () => (
  <AnimatedSection id="about">
    <div className="px-2 py-10 sm:py-16 sm:px-4">
      <div className="max-w-4xl mx-auto mb-12 text-left">
        <h2 className="mb-2 text-3xl font-extrabold sm:text-4xl font-jakarta text-textLight dark:text-textDark">
          About Me
        </h2>
        <p className="text-lg text-mutedLight dark:text-muted">
          Crafting delightful, performant interfaces.
        </p>
      </div>
      <div className="grid items-start max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
        <motion.div className="flex justify-center" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <img src={profilePicture2} alt="Samiuzzaman Sahil" className="object-cover rounded-full shadow-xl w-80 h-80" loading="lazy"/>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
          <p className="mb-6 text-base sm:text-lg text-mutedLight dark:text-muted">
            I’m a third‑year Computer Science student and multidisciplinary developer with a passion for clean interfaces, smooth interactions, and accessible experiences. My current focus is on building scalable full-stack applications and delving into the world of artificial intelligence.
            I am interested in working with databases. I have worked with MongoDB and PostgreSQL databases in some of my projects and have been able to successfully run them.
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);




const ProjectCard = ({ project }) => (
    <div className="bg-surfaceLight dark:bg-surface rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-[#1C2026] flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto">
        <div className="w-full mb-3 overflow-hidden rounded-lg h-36 sm:h-44 sm:mb-4">
            <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-lg" loading="lazy" />
        </div>
        <h3 className="mb-1 text-lg font-bold sm:text-xl sm:mb-2 font-jakarta text-textLight dark:text-textDark">{project.title}</h3>
        <p className="mb-2 text-sm text-mutedLight dark:text-muted sm:mb-4">{project.impact}</p>
        <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
            {project.stack.map(tech => (
                <span key={tech} className="px-2 py-1 text-xs font-semibold rounded-full sm:px-3 bg-gray-200/50 dark:bg-white/10 text-textLight dark:text-textDark">{tech}</span>
            ))}
        </div>
        <div className="flex items-center gap-3 pt-2 mt-auto sm:gap-4 sm:pt-4">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium sm:gap-2 text-primary hover:underline">
                <ExternalLinkIcon className="w-4 h-4" /> Demo
            </a>          
        </div>
    </div>
);

const Projects = () => (
    <AnimatedSection id="projects">
        <div className="px-2 py-10 sm:py-16 sm:px-4">
            <h2 className="mb-8 text-2xl font-extrabold text-center sm:text-4xl font-jakarta sm:mb-12 text-textLight dark:text-textDark">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                {PROJECTS.map((project, i) => <ProjectCard key={i} project={project} />)}
            </div>
        </div>
    </AnimatedSection>
);

const SkillBar = ({ skill, percent }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="font-medium text-textLight dark:text-textDark">{skill}</span>
            <span className="text-mutedLight dark:text-muted">{percent}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-white/10">
            <motion.div className="h-3 rounded-full bg-primary" initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }}></motion.div>
        </div>
    </div>
);

const SKILL_BARS = [
    { skill: "JavaScript", percent: 80 }, { skill: "React", percent: 85 }, { skill: "Next.js", percent: 80 }, { skill: "Express", percent: 60 },
    { skill: "Python", percent: 75 }, { skill: "Tailwind CSS", percent: 80 }, { skill: "Node.js", percent: 70 },
];

const Skills = () => (
    <AnimatedSection id="skills">
        <div className="px-2 py-10 sm:py-16 sm:px-4">
            <h2 className="mb-8 text-2xl font-extrabold text-center sm:text-4xl font-jakarta sm:mb-12 text-textLight dark:text-textDark">Skills & Technologies</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1 p-6 sm:p-8 rounded-2xl shadow-lg bg-surfaceLight dark:bg-surface border border-gray-200 dark:border-[#1C2026]">
                    <h3 className="mb-4 text-lg font-bold sm:text-xl font-jakarta text-textLight dark:text-textDark">Skill Proficiency</h3>
                    {SKILL_BARS.map(({ skill, percent }) => (<SkillBar key={skill} skill={skill} percent={percent} />))}
                </div>
                <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2">
                    {Object.entries(SKILLS).map(([group, skills]) => (
                        <div key={group} className="p-6 rounded-2xl shadow-lg bg-surfaceLight dark:bg-surface border border-gray-200 dark:border-[#1C2026]">
                            <h3 className="mb-4 text-lg font-bold sm:text-xl font-jakarta text-textLight dark:text-textDark">{group}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (<span key={skill} className="px-3 py-1 text-xs border border-gray-300 rounded-full sm:px-4 sm:py-2 sm:text-sm bg-gray-200/50 dark:bg-white/10 dark:border-white/20 text-textLight dark:text-textDark">{skill}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const TimelineCard = ({ item }) => (
    <div className="relative pl-8 sm:pl-16 pb-8 last:pb-0 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-200 before:dark:bg-[#1C2026] before:rounded-full">
        <div className="absolute left-[-6px] top-[14px] w-3 h-3 rounded-full bg-primary z-10"></div>
        <div className="p-6 rounded-2xl shadow-lg bg-surfaceLight dark:bg-surface border border-gray-200 dark:border-[#1C2026]">
            <h3 className="mb-1 text-xl font-bold font-jakarta text-textLight dark:text-textDark">{item.title}</h3>
            <p className="mb-2 text-sm text-mutedLight dark:text-muted">{item.org} | {item.dates}</p>
            <ul className="pl-5 space-y-1 list-disc text-mutedLight dark:text-muted">
                {item.impact.map((bullet, i) => <li key={i}>{bullet}</li>)}
            </ul>
        </div>
    </div>
);

const Experience = () => (
    <AnimatedSection id="experience">
        <div className="py-16">
            <h2 className="mb-12 text-4xl font-extrabold text-center font-jakarta text-textLight dark:text-textDark">Experience & Education</h2>
            <div className="max-w-3xl mx-auto">
                {EXPERIENCE.map((item, i) => <TimelineCard key={i} item={item} />)}
            </div>
        </div>
    </AnimatedSection>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        const dataToSend = {
            ...formData,
            access_key: '922ebe51-1b88-4f9f-93b7-dacfddb2c86b'
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();
            if (result.success) {
                setResponseMessage("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setResponseMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setResponseMessage("An error occurred while sending the message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatedSection id="contact">
            <div className="px-2 py-10 sm:py-16 sm:px-4">
                <h2 className="mb-12 text-3xl font-extrabold text-center sm:text-4xl font-jakarta text-textLight dark:text-textDark">
                    Contact
                </h2>
                <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
                    <div className="flex flex-col">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <FormInput icon={<UserIcon className="w-5 h-5 text-primary" />} name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                            <FormInput icon={<MailIcon className="w-5 h-5 text-primary" />} type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                            <FormInput icon={<PhoneIcon className="w-5 h-5 text-primary" />} name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
                            <FormInput icon={<MessageIcon className="self-start w-5 h-5 mt-3 text-primary" />} type="textarea" name="message" placeholder="How can I help?" value={formData.message} onChange={handleChange} />
                            <div className="text-left">
                                <Button primary type="submit" className="w-full text-white border-0 sm:w-auto bg-gradient-to-r from-orange-500 to-purple-600" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                </Button>
                            </div>
                        </form>
                        {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
                    </div>
                    <div className="flex flex-col justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977783933!2d90.34928578492211!3d23.78077774443901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1672828014521!5m2!1sen!2sbd"
                            width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="shadow-xl rounded-2xl">
                        </iframe>
                        <p className="mt-4 text-center text-mutedLight dark:text-muted">
                            Based in Dhaka — working worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

const Footer = () => (
    <footer className="py-8 text-center border-t border-gray-200 dark:border-[#1C2026] text-mutedLight dark:text-muted">
        <p className="text-sm">&copy; {new Date().getFullYear()} Samiuzzaman Sahil. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/SamiSahil" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><GitHubIcon className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/samiuzzamansahil" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><LinkedInIcon className="w-5 h-5" /></a>
            <a href="mailto:samiujjaman643@gmail.com" className="hover:text-primary"><MailIcon className="w-5 h-5" /></a>
        </div>
    </footer>
);

// --- App Root Component ---
export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const body = document.body;
        body.classList.add('transition-bg');
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            body.classList.add('animated-gradient');
        } else {
            document.documentElement.classList.remove('dark');
            body.classList.remove('animated-gradient');
        }
        return () => {
            body.classList.remove('transition-bg', 'animated-gradient');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

    return (
        <div className={"font-inter bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark"}>
            <CursorBlob />
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main className="px-2 mx-auto max-w-7xl sm:px-4">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollTopBtn />
        </div>
    );
}