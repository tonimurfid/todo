import React, { useState } from 'react';

export const MyBlog = () => {
  // State untuk cerita
  const [stories, setStories] = useState([
    {
      id: 1,
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
        "As a freshman from the class of '23 who only started diving into data science last February, I’m incredibly grateful for the opportunity to compete in GEMASTIK XVII 2024, one of the biggest ICT competitions in Indonesia. This was only my second competition in college, and it felt amazing to learn and compete alongside the best talents from across the country! 🔥",
        "In our team, I served as the ML engineer, handling the experimentation and technical aspects of the machine learning models. The biggest challenge was likely the preparation, especially for the presentation. However, diving deep into the experiments and model development on-site during the case study was incredibly motivating. Being surrounded by experienced individuals from various campuses made it an even more valuable learning experience.",
        "Even though we didn’t bring the trophy home, I gained many valuable lessons from this competition. One of the most important is realizing that my true passion lies in ML/AI engineering. I’m eager to keep improving and competing in the future. On top of that, I’m currently working on several projects that will hopefully launch soon, so stay tuned for updates! 😉",
        "Huge thanks to my teammates, Ahmad Nafi Mubarok and M. Raka Fadillah, as well as our amazing supervisor Rizal Setya Perdana, and mentor Erland Hilman, who dedicated their time and energy to guide us in preparing for the GEMASTIK data mining finals. See you in the next competition! 💪",
      ],
      link: 'https://www.linkedin.com/posts/fatoni-murfid-syaafii_gemastikxvii-datamining-machinelearning-activity-7247554929253367808-eyb9?utm_source=combined_share_message&utm_medium=member_desktop_web'
    },
    {
      id: 2,
      images: [
        'https://loremflickr.com/200/200?random=4',
        'https://loremflickr.com/200/200?random=5',
      ],
      title: 'Dummy',
      date: 'November 20, 2024',
      description: [
        "Sharing my experiences contributing to open source projects.",
        "Stay tuned for more updates and stories about my journey in tech.",
      ],
      link: '',
    },
  ]);

  return (
    <section id="myblog" className="min-h-screen py-16 bg-gray-900">
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
