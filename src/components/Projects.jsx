import React from 'react';
import { FaPython, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiPytorch, SiFastapi, SiHuggingface, SiSelenium, SiScikitlearn, SiMongodb, SiOpenai, SiPython, SiReact, SiNgrok, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    title: 'Krowten AI',
    role: 'Machine Learning Engineer and Web Developer',
    description: 'Worked on a project to develop a chatbot that can answer questions related to the network and security field, especially in the context of educational materials and concepts covered in networking and security courses at Faculty of Computer Science (Brawijaya University).',
    month: 'January 2025',
    link: 'https://krowten.xyz',
    techStack: ['python', 'fastapi', 'ngrok', 'openai', 'react', 'tailwindcss'],
  },
  {
    title: 'ASR_Arten',
    role: 'Machine Learning Engineer',
    description: 'Worked on Automatic Speech Recognition using pre-trained models whisper-ai and used the transcribed text to be translated into Indonesia using DeepL.',
    month: 'June 2024',
    link: 'https://github.com/tonimurfid/ASR_Arten',
    techStack: ['python', 'pytorch', 'fastapi', 'openai'],
  },
  {
    title: 'Career Path AI',
    role: 'Machine Learning Engineer',
    description: 'Developed an AI system to suggest a job and could give score based on the resume.',
    month: 'October 2024',
    link: 'https://github.com/tonimurfid/Laplace_CareerPath',
    techStack: ['python', 'fastapi', 'huggingface', 'selenium', 'mongo', 'sklearn'],
  },
  {
    title: 'Sentiment Analysis Tweet Election 2024',
    role: 'Data Scientist',
    description: 'Developed a machine learning model that can predict the sentiment of tweets (positive or negative) regarding the 2024 General Election in Indonesia.',
    month: 'February 2024',
    link: 'https://github.com/ghazafm/twitter-sentiment-analysis',
    techStack: ['python', 'sklearn'],
  },
  {
    title: 'DungeonMon',
    role: 'Game Developer',
    description: 'Created a Java-based dungeon game with monster battles.',
    month: 'April 2024',
    link: 'https://github.com/tonimurfid/DungeonMon',
    techStack: ['javaswing'],
  },
];


export const Projects = () => {
  const iconMap = {
    pytorch: <SiPytorch />,
    fastapi: <SiFastapi />,
    openai: <SiOpenai />,
    huggingface: <SiHuggingface />,
    selenium: <SiSelenium />,
    mongo: <SiMongodb />,
    sklearn: <SiScikitlearn />,
    javaswing: <FaJava />,
    python: <SiPython />,
    react: <SiReact />,
    ngrok: <SiNgrok />,
    tailwindcss: <SiTailwindcss />,
  };

  return (
    <section id="projects" className="min-h-screen py-24 bg-dracula-background">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-dracula-function mb-4 sm:mb-8">
        Projects
      </h2>
      <div className="relative max-w-screen-sm sm:max-w-4xl mx-auto">
        <div className="border-l-2 border-dracula-highlight relative">
          {projects.map((project, index) => (
            <div key={index} className="mb-6 sm:mb-8 pl-6 sm:pl-10 relative">
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-dracula-text">{project.title}</h3>
              <p className="text-sm sm:text-base text-dracula-comment">{project.role}</p>
              <p className="text-sm sm:text-base text-dracula-string">{project.description}</p>
              <p className="text-xs sm:text-sm text-dracula-number">{project.month}</p>
              
              {/* Tech Stack */}
              <div className="flex gap-2 mt-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-dracula-function text-dracula-text"
                    title={tech}
                  >
                    {iconMap[tech] || <span>{tech}</span>} {/* Render ikon */}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-dracula-keyword hover:underline mt-1 sm:mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
