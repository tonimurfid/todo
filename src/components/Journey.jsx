import React from 'react';

export const Journey = () => {
  const experiences = [
    {
      title: 'Vice Head of Data Science Department',
      organization: 'Basic Computing Community',
      duration: 'Dec 2024 - Present',
      description: 'Managed data science projects and mentored team members.',
    },
    {
      title: 'AI Researcher',
      organization: 'Intelligent Systems Lab',
      duration: 'Sep 2024 - Present',
      description: 'Conducted research on synthetic medical data generation.',
    },
  ];

  return (
    <section id="journey" className="py-16 bg-gray-900">
      <h2 className="text-4xl text-center font-bold text-pink-500 mb-8">Journey</h2>
      <div className="max-w-4xl mx-auto">
        <div className="border-l-2 border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-gray-400">{exp.organization}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
