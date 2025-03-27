import React, { useState } from 'react';

export const MyBlog = () => {
  // State untuk cerita
  const [stories, setStories] = useState([
    {
      id: 1,
      images: [
        '/assets/malay1.png',
        '/assets/malay2.png',
      ],
      title: '🌏 International Collaboration: FILKOM UB in Cyber Threat Detection System Development',
      date: 'January 21, 2025',
      description: [
        "I had the incredible opportunity to represent Brawijaya University in an international collaboration with Universiti Sains Malaysia (USM), Penang, Malaysia to develop a cyber threat detection system. This experience was part of FILKOM UB's initiative to strengthen international research partnerships in cybersecurity.",
        "During this collaboration, our team worked on developing advanced machine learning models for network intrusion detection. We focused on creating solutions that can identify and mitigate various types of cyber threats in real-time. The knowledge exchange with UTM researchers provided valuable insights into different approaches to cybersecurity challenges.",
        "One of the highlights was presenting our research progress to faculty members from both universities. The feedback we received helped refine our models and implementation strategies. This experience not only enhanced my technical skills in cybersecurity but also improved my ability to collaborate in an international, multicultural team setting.",
        "This collaboration has opened doors for future joint research projects between FILKOM UB and UTM. I'm grateful for this opportunity to contribute to meaningful cybersecurity research while building international academic connections.",
      ],
      link: 'https://filkom.ub.ac.id/2025/01/21/kolaborasi-internasional-filkom-ub-pada-pengembangan-sistem-deteksi-ancaman-siber/'
    },
    {
      id: 2,
      images: [
        '/assets/gemastik1.jpeg',
        '/assets/gemastik2.jpeg',
        '/assets/gemastik3.jpeg',
        '/assets/gemastik4.jpeg',
        '/assets/gemastik5.jpeg',
      ],
      title: '🌟 GEMASTIK XVII 2024 Data Mining Finals 🌟',
      date: 'September 30, 2024',
      description: [
        "As a freshman from the class of '23 who only started diving into data science last February, I'm incredibly grateful for the opportunity to compete in GEMASTIK XVII 2024, one of the biggest ICT competitions in Indonesia. This was only my second competition in college, and it felt amazing to learn and compete alongside the best talents from across the country! 🔥",
        "In our team, I served as the ML engineer, handling the experimentation and technical aspects of the machine learning models. The biggest challenge was likely the preparation, especially for the presentation. However, diving deep into the experiments and model development on-site during the case study was incredibly motivating. Being surrounded by experienced individuals from various campuses made it an even more valuable learning experience.",
        "Even though we didn't bring the trophy home, I gained many valuable lessons from this competition. One of the most important is realizing that my true passion lies in ML/AI engineering. I'm eager to keep improving and competing in the future. On top of that, I'm currently working on several projects that will hopefully launch soon, so stay tuned for updates! 😉",
        "Huge thanks to my teammates, Ahmad Nafi Mubarok and M. Raka Fadillah, as well as our amazing supervisor Rizal Setya Perdana, and mentor Erland Hilman, who dedicated their time and energy to guide us in preparing for the GEMASTIK data mining finals. See you in the next competition! 💪",
      ],
      link: 'https://www.linkedin.com/posts/fatoni-murfid-syaafii_gemastikxvii-datamining-machinelearning-activity-7247554929253367808-eyb9?utm_source=combined_share_message&utm_medium=member_desktop_web'
    },
  ]);

  return (
    <section id="myblog" className="min-h-screen py-24 bg-gray-900">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-dracula-function mb-4 sm:mb-8">
        My Story
      </h2>
      <div className="max-w-screen-sm sm:max-w-4xl mx-auto">
        <div
          className="overflow-y-scroll bg-dracula-highlight p-4 sm:p-6 rounded-lg shadow-lg"
          style={{ maxHeight: '30rem' }}
        >
          {stories.map((story) => (
            <div key={story.id} className="mb-4 sm:mb-6 border-b border-dracula-background pb-2 sm:pb-4 last:border-b-0">
              {/* Render gambar */}
              <div className="flex gap-2 sm:gap-4 mb-2 sm:mb-3 overflow-x-auto">
                {story.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${story.title} - ${index + 1}`}
                    className="w-1/3 max-h-24 sm:max-h-40 object-contain rounded-lg"
                  />
                ))}
              </div>

              {/* Render judul */}
              <h3 className="text-lg sm:text-2xl font-bold text-dracula-text">{story.title}</h3>

              {/* Render tanggal */}
              <p className="text-xs sm:text-sm text-dracula-number mb-1 sm:mb-2">{story.date}</p>

              {/* Render paragraf */}
              <div className="text-sm sm:text-base text-dracula-string mb-1 sm:mb-2">
                {story.description.map((paragraph, idx) => (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Render link jika ada */}
              {story.link && (
                <a
                  href={story.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-dracula-keyword hover:underline"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};