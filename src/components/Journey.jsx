import React from 'react';

export const Journey = () => {
  const experiences = [
    {
      title: 'Vice Head of Data Science Department',
      organization: 'Basic Computing Community (BCC)',
      duration: 'Dec 2024 - Present',
      description: 'Assist the department head in managing the data science team, delegating tasks, and guiding members to develop technical and non-technical skills.',
    },
    {
      title: 'AI Researcher',
      organization: 'Intelligent Systems Lab, FILKOM',
      duration: 'Sep 2024 - Present',
      description: 'Conducted research on synthetic medical data generation using generative AI techniques to improve data quality and availability in the medical field.',
    },
    {
      title: 'Vice Project Officer',
      organization: 'Data Science Mini Bootcamp 2024, BCC',
      duration: 'Jul 2024 - Present',
      description: 'Managed and coordinated divisional teams to ensure smooth event execution and mentored participants in hands-on data science activities.',
    },
    {
      title: 'Creative Media Division',
      organization: 'Basic Computing Community (BCC)',
      duration: 'May 2024 - Present',
      description: 'Designed promotional content and strategies for branding and marketing campaigns on social media, enhancing visibility and engagement.',
    },
    {
      title: 'Data Science Member',
      organization: 'Basic Computing Community (BCC)',
      duration: 'Mar 2024 - Present',
      description: 'Collaborated on data science projects, focusing on machine learning skills, and contributed to solving real-world problems with innovative solutions.',
    },
    {
      title: 'Keynote Speaker',
      organization: 'ApaKataMereka 2024, Faculty of Engineering',
      duration: 'Jan 2024',
      description: 'Engaged as a keynote speaker for campus orientation, highlighting engineering and technology programs to prospective students.',
    },
    {
      title: 'Logistic Division and Speaker',
      organization: 'FORMADIMA',
      duration: 'Dec 2023 - Jan 2024',
      description: 'Spearheaded logistics coordination and served as a keynote speaker for campus orientation events, engaging with senior high school students.',
    },
    {
      title: 'Chief Organizer',
      organization: 'Photobooth Event, PCC',
      duration: 'May 2022 - Jun 2022',
      description: 'Planned and executed a photobooth event during report card distribution, ensuring a memorable experience for all participants.',
    },
    {
      title: 'Photography Division Leader',
      organization: 'Personal Computer and Cinematography (PCC)',
      duration: 'Dec 2021 - Dec 2022',
      description: 'Directed photography projects, mentored team members, and collaborated on school event documentation.',
    },
  ];

  return (
    <section id="journey" className="py-16 bg-gray-900">
      <h2 className="text-4xl text-center font-bold text-pink-500 mb-8">Journey</h2>
      <div className="max-w-4xl mx-auto">
        <div className="border-l-2 border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              <div className="absolute -left-9 w-6 h-6 bg-pink-500 rounded-full"></div>
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
