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
    <section id="education" className="py-16 bg-dracula-background">
      <h2 className="text-4xl text-center font-bold text-dracula-function mb-8">Education</h2>
      <div className="max-w-4xl mx-auto">
        <div className="border-l-2 border-dracula-highlight relative">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 pl-10 relative">
              {/* Bulatan Pink */}
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-dracula-text">{edu.degree}</h3>
              <p className="text-dracula-comment">{edu.institution}</p>
              <p className="text-sm text-dracula-number">{edu.duration}</p>
              <p className="text-dracula-string">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
