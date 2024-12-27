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
      title: 'GEMASTIK XVII Data Mining Finals',
      date: 'September 30, 2024',
      description: 'As a freshman diving into data science, I competed in GEMASTIK XVII 2024, one of Indonesia\'s largest ICT competitions. I worked as an ML engineer in my team, learning valuable lessons and gaining experience in model experimentation and presentation. Though we didn’t win, the journey fueled my passion for ML/AI engineering, and I\'m excited to continue growing in this field. Stay tuned for upcoming projects!',
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
      description: 'Sharing my experiences contributing to open source projects.',
      link: '',
    },
  ]);

  // Fungsi untuk menambahkan cerita baru
  const addStory = () => {
    const newStory = {
      id: stories.length + 1,
      images: [
        `https://loremflickr.com/200/200?random=${stories.length * 3 + 1}`,
        `https://loremflickr.com/200/200?random=${stories.length * 3 + 2}`,
        `https://loremflickr.com/200/200?random=${stories.length * 3 + 3}`,
      ],
      title: 'New Story',
      date: new Date().toLocaleDateString(),
      description: 'This is a newly added story. You can edit this later.',
      link: '',
    };
    setStories([...stories, newStory]);
  };

  return (
    <section id="myblog" className="py-8 sm:py-16 bg-dracula-background">
      <h2 className="text-2xl sm:text-4xl text-center font-bold text-dracula-function mb-4 sm:mb-8">My Story</h2>
      <div className="max-w-screen-sm sm:max-w-4xl mx-auto">
        <div
          className="overflow-y-scroll bg-dracula-highlight p-4 sm:p-6 rounded-lg shadow-lg"
          style={{ maxHeight: '30rem' }}
        >
          {stories.map((story) => (
            <div key={story.id} className="mb-4 sm:mb-6 border-b border-dracula-background pb-2 sm:pb-4 last:border-b-0">
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
              <h3 className="text-lg sm:text-2xl font-bold text-dracula-text">{story.title}</h3>
              <p className="text-xs sm:text-sm text-dracula-number mb-1 sm:mb-2">{story.date}</p>
              <p className="text-sm sm:text-base text-dracula-string mb-1 sm:mb-2">{story.description}</p>
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
