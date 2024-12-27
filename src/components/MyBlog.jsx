import React, { useState } from 'react';

export const MyBlog = () => {
  // State untuk cerita
  const [stories, setStories] = useState([
    {
      id: 1,
      image: '../src/assets/tes.png', // Gambar random
      title: 'My First AI Project',
      date: 'December 15, 2024',
      description: 'This is my journey building my first AI model to classify images.',
      link: 'https://github.com/example',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/400x200?coding',
      title: 'My Thoughts on Open Source',
      date: 'November 20, 2024',
      description: 'Sharing my experiences contributing to open source projects.',
      link: '',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/400x200?coding',
      title: 'My Thoughts on Open Source',
      date: 'November 20, 2024',
      description: 'Sharing my experiences contributing to open source projects.',
      link: '',
    },
    {
      id: 4,
      image: 'https://source.unsplash.com/random/400x200?coding',
      title: 'My Thoughts on Open Source',
      date: 'November 20, 2024',
      description: 'Sharing my experiences contributing to open source projects.',
      link: '',
    },
  ]);

  // Fungsi untuk menambahkan cerita baru
  const addStory = () => {
    const newStory = {
      id: stories.length + 1,
      image: 'https://source.unsplash.com/random/400x200?blog', // Placeholder image
      title: 'New Story',
      date: new Date().toLocaleDateString(),
      description: 'This is a newly added story. You can edit this later.',
      link: '',
    };
    setStories([...stories, newStory]);
  };

  return (
    <section id="myblog" className="py-16 bg-dracula-background">
      <h2 className="text-4xl text-center font-bold text-dracula-function mb-8">My Story</h2>
      <div className="max-w-4xl mx-auto">
        {/* Scrollable container */}
        <div
        className="overflow-y-scroll bg-dracula-highlight p-4 rounded-lg shadow-lg"
        style={{ maxHeight: '50rem' }}
        >

          {stories.map((story) => (
            <div
              key={story.id}
              className="mb-6 border-b border-dracula-background pb-4 last:border-b-0"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-3/4 max-h-40 object-contain rounded-lg mb-3 mx-auto"
              />
              <h3 className="text-2xl font-bold text-dracula-text">{story.title}</h3>
              <p className="text-sm text-dracula-number mb-2">{story.date}</p>
              <p className="text-dracula-string mb-2">{story.description}</p>
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
