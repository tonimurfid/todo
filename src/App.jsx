import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Education } from './components/Education';
import { MyBlog } from './components/MyBlog';

const App = () => {
  return (
    <div className="bg-black text-gray-300 font-mono">
      <Navbar />
      <Hero />
      <Projects />
      <Journey />
      <Education />
      <MyBlog />
      <footer className="text-center py-4 bg-gray-800 text-gray-400">
        © 2024 Fatoni Murfid Syaafii. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
