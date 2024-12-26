import React from 'react';

const projects = [
  {
    title: 'E-Commerce Website',
    role: 'Frontend Developer',
    description: 'A fully responsive e-commerce website with modern UI/UX.',
    month: 'July 2024',
    link: 'https://github.com',
  },
  {
    title: 'AI Research Project',
    role: 'AI Researcher',
    description: 'Exploring synthetic data generation using generative models.',
    month: 'September 2024',
    link: 'https://github.com',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl text-center font-bold text-dracula-function mb-8">Projects</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="border-l-2 border-dracula-highlight">
          {projects.map((project, index) => (
            <div key={index} className="mb-8 ml-10 relative">
              <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-dracula-function rounded-full border-2 border-dracula-background"></div>
              <h3 className="text-xl font-bold text-dracula-text">{project.title}</h3>
              <p className="text-dracula-comment">{project.role}</p>
              <p className="text-dracula-string">{project.description}</p>
              <p className="text-sm text-dracula-number">{project.month}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-dracula-keyword hover:underline mt-2 block"
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
