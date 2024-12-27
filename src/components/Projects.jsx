import React from 'react';

const projects = [
  {
    title: 'Google Stock Prediction',
    role: 'Data Scientist',
    description: 'Developed a Recurrent Neural Network to predict Google stock prices.',
    month: 'August 2024',
    link: 'https://github.com/tonimurfid/Google_Stock_Prediction',
  },
  {
    title: 'ASR_Arten',
    role: 'Machine Learning Engineer',
    description: 'Worked on Automatic Speech Recognition using deep learning techniques.',
    month: 'June 2024',
    link: 'https://github.com/tonimurfid/ASR_Arten',
  },
  {
    title: 'CNN_RockPaperScissor',
    role: 'AI Developer',
    description: 'Implemented a Convolutional Neural Network to play Rock-Paper-Scissors.',
    month: 'May 2024',
    link: 'https://github.com/tonimurfid/CNN_RockPaperScissor',
  },
  {
    title: 'DungeonMon',
    role: 'Game Developer',
    description: 'Created a Java-based dungeon game with monster battles.',
    month: 'April 2024',
    link: 'https://github.com/tonimurfid/DungeonMon',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-8 sm:py-16">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-dracula-function mb-4 sm:mb-8">Projects</h2>
      <div className="relative max-w-screen-sm sm:max-w-4xl mx-auto">
        <div className="border-l-2 border-dracula-highlight relative">
          {projects.map((project, index) => (
            <div key={index} className="mb-6 sm:mb-8 pl-6 sm:pl-10 relative">
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-dracula-text">{project.title}</h3>
              <p className="text-sm sm:text-base text-dracula-comment">{project.role}</p>
              <p className="text-sm sm:text-base text-dracula-string">{project.description}</p>
              <p className="text-xs sm:text-sm text-dracula-number">{project.month}</p>
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
