import profile from "./assets/profile.PNG";
import bgimage from "./assets/heroBackground.png";
import spellingBee from "./assets/spelling-bee.png";
import educationImage from "./assets/education.jpg";
import projectsImages from "./assets/projects.avif";
import experienceImage from "./assets/experience.png";
import skillsImage from "./assets/skills.jpg";
import stockprediction from "./assets/stockprediction.webp";
import resumeAnalyser from "./assets/resume-analyser.png";
import CardExpand from "./cardExpand";
import "./index.css";
import {
  FaReact,
  FaAws,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { SiJavascript, SiPython, SiMongodb, SiMysql } from "react-icons/si";
import { useState } from "react";

/*card settings*/

export default function App() {
  const [expand, setExpanded] = useState({});
  const [openCard, setOpen] = useState("");

  const sectionMap = {
    "CORE COMPETENCIES": "skills",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    EDUCATION: "education",
  };

  const handleOpenSection = (sectionName) => {
    setOpen(sectionName);

    setTimeout(() => {
      const sectionId = sectionMap[sectionName];
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const skills = [
    {
      name: "React",
      icon: <FaReact className="justify-center" color="#61DBFB" />,
    },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34C26" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "SQL", icon: <SiMysql color="#00758F" /> },
    { name: "NoSQL", icon: <SiMongodb color="#47A248" /> },
    { name: "GitHub", icon: <FaGithub color="#24292E" /> },
  ];

  const education = [
    {
      universityName: "Mahathma Gandhi University Kerala",
      branch: "Master of Computer Science and System Engineering",
      Year: "2013-2015",
    },
    {
      universityName: "Anna Universit Chennai",
      branch: "Bachelor of  Computer Science and Enginerring",
      Year: "2008-2012",
    },
  ];
  const projects = [
    {
      title: "Resume Analyser",
      description:
        "A resume analyser is a software application that uses natural language processing (NLP) and machine learning algorithms to analyze and evaluate resumes. It can extract relevant information from resumes, such as skills, experience, education, and achievements, and provide insights to help employers make informed hiring decisions.",
      link: "https://nplappresumeanalyzer-my45ybgnvxxqeqx9kgtdck.streamlit.app/",
      image: resumeAnalyser,
    },
    {
      title: "Stock Price Prediction",
      description:
        "Stock price prediction is the process of using historical data and machine learning algorithms to forecast future stock prices. It involves analyzing various factors such as market trends, company performance, and economic indicators to make informed predictions about the future value of a stock.",
      link: "https://github.com/RAJREETHI/stock-price-prediction",
      image: stockprediction,
    },
    {
      title: "Spelling Bee Practice App",
      description:
        "A spelling bee practice app is a software application designed to help users improve their spelling skills. It typically includes features such as word lists, quizzes, and interactive exercises to make learning fun and engaging. Users can practice spelling words of varying difficulty levels and track their progress over time.",
      link: "https://github.com/RAJREETHI/spell-practice",
      image: spellingBee,
    },
  ];

  const experience = [
    {
      company: "Media News Group",
      role: "Senior Software Engineer",
      duration: "June 2022 - January 2025",
      short:
        "Led the development of a scalable content management system using React and Node.js, improving content delivery speed by 30%. Implemented AWS cloud solutions to enhance application performance and reliability, resulting in a 25% reduction in downtime. Collaborated with cross-functional teams to design and deploy new features, increasing user engagement by 15%.",
      full: "Led the development of a scalable content management system using React and Node.js, improving content delivery speed by 30%. Implemented AWS cloud solutions to enhance application performance and reliability, resulting in a 25% reduction in downtime. Collaborated with cross-functional teams to design and deploy new features, increasing user engagement by 15%. Architected and deployed cloud-native serverless applications on AWS (Lambda, API Gateway, DynamoDB, EC2,S3,CloudFormation), improving system scalability and reducing operational overhead. Designed and built RESTful APIs with automated infrastructure provisioning via CloudFormation, accelerating release cycles. Developed high-performance React.js front-ends with optimized state management, measurably improving UI responsiveness. Monitored, profiled, and tuned application performance using CloudWatch and OpenSearch, proactively resolving production bottlenecks. Built custom WordPress plugins and integrated third-party APIs, extending platform capabilities for editorial and advertising teams.",
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      duration: "September 2021 - Januvary 2022",
      short:
        "Delivered an interactive, gamified airport-infrastructure simulation using Phaser.js, praised by the client for engagement and fidelity. Developed a React-based dashboard for real-time monitoring of airport operations, improving situational awareness for stakeholders. ",
      full: " Delivered an interactive, gamified airport-infrastructure simulation using Phaser.js, praised by the client for engagement and fidelity. Built React applications for uploading and managing structured data within SharePoint lists, streamlining data workflows. Performed rigorous debugging and iterative improvement across multiple development phases to ensure production-ready quality.",
    },
    {
      company: "Ford Motor Company",
      role: "System Analyst/Engineering Practiciner ",
      duration: "June 2019 - August 2020",
      short:
        "Created a React application by consuming the SBA API to monitor and summarize the internal learning activities for internal system analysis and reporting. Engineered micro-applications using JavaScript (ES6), HTML5, CSS3, and RESTful APIs that consumed JSON/XML data feeds. Improved page-load performance and resolved cross-browser compatibility issues across enterprise applications.",
      full: "created an react-application by consuming the SBA api to monitor and summarize the internal learning activities for internal system analysis and reporting. Engineered micro-applications using JavaScript (ES6), HTML5, CSS3, and RESTful APIs that consumed JSON/XML data feeds. Improved page-load performance and resolved cross-browser compatibility issues across enterprise applications.Integrated training tools with the SABA LMS platform, including automated course-feed scheduling via Autosys. Supported SharePoint to O365 migration and performed SQL-based data extracts and analysis for business reporting. Monitored application health and performance using Dynatrace.",
    },
    {
      company: "Reliable Software Soulutions",
      role: "Web Developer",
      duration: "June 2018 - May 2019",
      short:
        "Built multi-view React applications supporting employee, trainer, and admin roles with role-based access control.",
      full: "Built multi-view React applications supporting employee, trainer, and admin roles with role-based access control. Developed full-stack features using React, Node.js, and MongoDB; integrated Open Weather and Flickr APIs for dynamic content. Partnered directly with business stakeholders to refine requirements and translate them into robust technical solutions.",
    },
    {
      company: "Detailz Technologies",
      role: "Web Developer ",
      duration: "January 2016 - February 2017",
      short:
        "Developed and maintained Drupal-based websites with reusable components and custom modules.",
      full: "Developed and maintained Drupal-based websites with reusable components and custom modules. Built dynamic, responsive UIs using Bootstrap, SASS, and JavaScript; converted static pages to data-driven PHP applications.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth">
      {/*Navbar*/}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <nav className="max-h-6xl m-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-xl font-bold tracking-wide "
            style={{ fontFamily: "'Quantico', sans-serif" }}
          >
            REETHI RAJ KARIPPALLY
          </h1>

          <div className="hidden md:flex gap-12 text-sm">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a
              onClick={() => {
                handleOpenSection("CORE COMPETENCIES");
              }}
              href="#skills"
              className="hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              onClick={() => {
                handleOpenSection("PROJECTS");
              }}
              href="#projects"
              className="hover:text-cyan-400 "
            >
              Projects
            </a>
            <a
              onClick={() => {
                handleOpenSection("EXPERIENCE");
              }}
              href="#experience"
              className="hover:text-cyan-400"
            >
              Experience
            </a>
          </div>
        </nav>
      </header>

      {/*Hero Section*/}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgimage})`,
            filter: "brightness(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          {/* Profile */}
          <img
            src={profile}
            alt="profile"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
          />

          {/* Name */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Quantico', sans-serif" }}
          >
            REETHI RAJ KARIPPALLY
          </h2>

          {/* Role */}
          <h3
            className="text-lg sm:text-2xl md:text-3xl text-slate-300"
            style={{ fontFamily: "'Quantico', sans-serif" }}
          >
            FULL STACK DEVELOPER
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl">
            Building modern web applications using React, Python, AWS, Node.js,
            and exploring AI technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              onClick={() => handleOpenSection("PROJECTS")}
              href="#projects"
              className="relative px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 
      shadow-lg shadow-cyan-500/30 
      transition duration-300 
      hover:scale-105 hover:shadow-cyan-400/50 
      active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="relative px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 
      shadow-lg shadow-cyan-500/30 
      transition duration-300 
      hover:scale-105 hover:shadow-cyan-400/50 
      active:scale-95"
            >
              Contact
            </a>
            <a
              href="./assets/Reethi_Raj_Karippally_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 
      shadow-lg shadow-cyan-500/30 
      transition duration-300 
      hover:scale-105 hover:shadow-cyan-400/50 
      active:scale-95"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-xl sm:text-2xl text-slate-400">
            <a href="https://www.linkedin.com/in/reethi-raj-karippally/">
              <button className="social-btn">
                <FaLinkedin color="0A66C2" />
              </button>
            </a>

            <a href="https://github.com/reethirajkarippally">
              <button className="social-btn">
                <FaGithub color="#6E40C9" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/*About Section*/}
      <section id="about" className="max-w-10xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10">About Me</h2>
        <p className="text-slate-400 leading-7">
          I'm a passionate full stack developer with experience in building
          modern web applications using React, Python, AWS, Node.js, and
          exploring AI technologies. I enjoy creating efficient and scalable
          solutions that provide great user experiences. I'm always eager to
          learn new technologies and take on challenging projects that allow me
          to grow as a developer.Deep expertise in AWS Serverless (Lambda, API
          Gateway, DynamoDB, S3, CloudFormation), React.js, and Node.js. Proven
          track record of architecting high-performance REST APIs, optimizing
          cloud infrastructure, and integrating enterprise systems across media,
          automotive, and consulting domains. Collaborative team player who
          thrives in fast-paced agile environments and consistently delivers
          quality at scale.
        </p>
      </section>
      {/* card section */}
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6">
          <CardExpand
            title="CORE COMPETENCIES"
            image={skillsImage}
            setOpen={setOpen}
          />
          <CardExpand
            title="EXPERIENCE"
            image={experienceImage}
            setOpen={setOpen}
          />
          <CardExpand
            title="PROJECTS"
            image={projectsImages}
            setOpen={setOpen}
          />
          <CardExpand
            title="EDUCATION"
            image={educationImage}
            setOpen={setOpen}
          />
        </div>

        {openCard && (
          <div
            className={`w-full bg-black text-white px-6 py-20 transform transition-all duration-700 ease-in-out
      opacity-100 translate-y-0
      animate-in  ${openCard ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            {/* CORE COMPETENCIES*/}
            {openCard === "CORE COMPETENCIES" && (
              <section
                id="skills"
                className="max-w-7xl mx-auto sm:px-6 py-16 sm:py-20"
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {openCard}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-900  border-white-800 px-4 py-2 rounded-full text-center text-slate-400 shadow-xl duration-300"
                    >
                      <div className="text-3xl mb-2 flex justify-center gap-3">
                        <span className="text-xl">{skill.name}</span>
                        {skill.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/*Experience Section*/}
            {openCard === "EXPERIENCE" && (
              <section
                id="experience"
                className="max-w-7xl mx-auto sm:px-6 py-16 sm:py-20"
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  EXPERIENCE
                </h2>
                <div className="border-1 border-slate-700 pl-8 space-y-10">
                  {experience.map((exp) => (
                    <div key={exp.role}>
                      <p className="text-cyan-400 text-sm">{exp.duration}</p>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-slate-400">{exp.company}</p>
                      <p className="text-slate-400 mb-4 leading-7">
                        {expand[exp.role] ? exp.full : exp.short}
                      </p>
                      <button
                        onClick={() => toggleReadMore(exp.role)}
                        className="text-green-200 hover:text-green-300"
                      >
                        {expand[exp.role] ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/*Projects Section*/}
            {openCard === "PROJECTS" && (
              <section
                id="projects"
                className="max-w-7xl mx-auto sm:px-6 py-16 sm:py-20"
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  PROJECTS
                </h2>

                <div className="space-y-8">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 items-center hover:border-cyan-400 transition"
                    >
                      {/* Left Column - Image */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 sm:h-64  object-cover rounded-xl hover:scale-105 transition duration-500"
                        />
                      </a>

                      {/* Right Column - Description */}
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>

                        <p className="text-slate-400 leading-7 mb-6">
                          {project.description}
                        </p>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl inline-block"
                        >
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/* EDUCATION */}
            {openCard === "EDUCATION" && (
              <section
                id="education"
                className="max-w-7xl mx-auto sm:px-6 py-16 sm:py-20"
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  EDUCATION
                </h2>
                <div className="border-1 border-slate-700 pl-8 space-y-10">
                  {education.map((edu) => (
                    <div key={edu.universityName}>
                      <p className="text-cyan-400 text-sm">
                        {edu.universityName}
                      </p>
                      <h3 className="text-xl font-semibold">{edu.branch}</h3>
                      <p className="text-slate-400">{edu.Year}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setOpen("")}
                className=" bg-cyan-500 px-4 py-2 sm:px-6 sm:py-4 rounded-full text-2xl
      hover:scale-110 hover:bg-cyan-400
      transition duration-300
      animate-bounce
      shadow-xl"
              >
                ↑
              </button>
            </div>
          </div>
        )}
      </>

      {/*contact*/}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 classNam="text-5xl font-bold mb-8">Contact Me</h2>
        <p className="text-slate-400 mb-8 mt-4">
          I'm open to new opportunities and collaborations. Feel free to reach
          out to me via email at
        </p>
        <a
          href="mailto:rajreethi123@gmail.com"
          className="px-6 py-3 rounded-xl font-medium text-white
  bg-gradient-to-r from-cyan-500 to-blue-500
  shadow-lg shadow-cyan-500/30
  transition duration-300
  hover:scale-105 hover:shadow-cyan-400/50
  active:scale-95 inline-block"
        >
          Email Me
        </a>
        <div className="flex justify-center items-center mt-8 gap-6 text-2xl text-slate-400">
          <a href="tel:+17347883517">
            <button className="social-btn">
              <FaPhone color="#3bc20a" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/reethi-raj-karippally/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-btn">
              <FaLinkedin color="#0A66C2" />
            </button>
          </a>

          <a
            href="https://github.com/reethirajkarippally"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-btn">
              <FaGithub color="#6E40C9" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
