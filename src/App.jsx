import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h1 className='text-center mt-5'>Hello, World! anjay</h1>
    </>
  );
};

// Default export
export default App;
