import React from 'react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Brawijaya University',
    duration: 'Aug 2023 - Present',
    description: 'Currently pursuing a degree in Computer Science with a focus on AI and Data Science.',
  },
  {
    degree: 'Science High School',
    institution: 'SMA Negeri 2 Kota Madiun',
    duration: 'Aug 2021 - May 2023',
    description: 'Finalist in Cyber Security and IoT Olympiad, and 3rd place in Photography competition.',
  },
];

export const Education = () => {
  return (
    <section id="education" className="min-h-screen py-24 bg-dracula-background">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-dracula-function mb-4 sm:mb-8">
        Education
      </h2>
      <div className="relative max-w-screen-sm sm:max-w-4xl mx-auto">
        <div className="border-l-2 border-dracula-highlight relative">
          {education.map((edu, index) => (
            <div key={index} className="mb-6 sm:mb-8 pl-6 sm:pl-10 relative">
              {/* Bulatan Pink */}
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-dracula-text">{edu.degree}</h3>
              <p className="text-sm sm:text-base text-dracula-comment">{edu.institution}</p>
              <p className="text-xs sm:text-sm text-dracula-number">{edu.duration}</p>
              <p className="text-sm sm:text-base text-dracula-string">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
