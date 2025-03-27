import React from 'react';

export const Journey = () => {
  const experiences = [
    {
      title: 'Computer Vision Engineer',
      organization: 'Vehicle Detection System',
      duration: 'Feb 2025 - Present',
      description: 'Designing and implementing an automated license plate detection system to enhance campus security and traffic management. Fine-tuning a deep learning model for Optical Character Recognition (OCR) to accurately extract and process license plate information.',
    },
    {
      title: 'Vice Head of Data Science Department',
      organization: 'Basic Computing Community (BCC)',
      duration: 'Dec 2024 - Present',
      description: 'Assist the department head in managing the data science team, including delegating tasks to team members based on their expertise. Guide team members in developing technical and non-technical skills to support the department\'s objectives.',
    },
    {
      title: 'AI Researcher',
      organization: 'Intelligent System Laboratory, FILKOM',
      duration: 'Sep 2024 - Present',
      description: 'Conduct research focused on synthetic medical data generation using generative AI techniques. Explore innovative solutions to improve data quality and availability in medical fields through advanced AI models.',
    },
    {
      title: 'Data Scientist',
      organization: 'Basic Computing Community (BCC)',
      duration: 'Mar 2024 - Present',
      description: 'Collaborated in the Data Science Division, working closely with team members to improve our collective skills and share knowledge with the broader community. Focused on developing machine learning skills through active participation in competitions and hands-on projects.',
    },
    {
      title: 'Machine Learning Researcher - CBR 2',
      organization: 'SOI Asia',
      duration: 'Sep 2024 - Feb 2025',
      description: 'Developed machine learning models for a Network Intrusion Detection System to enhance cybersecurity measures. Conducted experiments to explore the application of machine learning techniques and optimization in cybersecurity.',
    },
    {
      title: 'Vice Project Officer of Data Science Mini Bootcamp 2024',
      organization: 'Basic Computing Community (BCC)',
      duration: 'Jul 2024 - Oct 2024',
      description: 'Assist the project leader in managing and coordinating divisional teams to ensure the smooth execution of the event. Act as a mentor, guiding participants through hands-on activities and providing insights into data science practices.',
    },
    {
      title: 'Creative Media Division',
      organization: 'Basic Computing Community (BCC)',
      duration: 'May 2024 - Dec 2024',
      description: 'Managed and developed promotional and branding content for BCC to enhance visibility and engagement. Collaborated with the team to produce content consistent with BCC\'s identity and objectives.',
    },
    {
      title: 'Photography Division Leader',
      organization: 'Personal Computer and Cinematography (PCC)',
      duration: 'Dec 2021 - Dec 2022',
      description: 'Spearheaded the Photography Division at PCC, SMA Negeri 2 Madiun, managing visual documentation for key school events.',
    },
  ];

  return (
    <section id="journey" className="min-h-screen py-24 bg-gray-900">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-pink-500 mb-4 sm:mb-8">Journey</h2>
      <div className="max-w-screen-sm sm:max-w-4xl mx-auto">
        <div className="border-l-2 border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6 sm:mb-8 pl-6 sm:pl-10 relative">
              <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-dracula-text">{exp.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{exp.organization}</p>
              <p className="text-xs sm:text-sm text-dracula-number">{exp.duration}</p>
              <p className="text-xs sm:text-sm text-dracula-string">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};