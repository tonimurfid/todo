import React from 'react';
import CV from '../assets/FatoniMurfidSyaafii_CV.pdf';


import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-pink-500">Fatoni Murfid Syaafii</h1>
      <p className="mt-4 text-lg">
        "Debugging is like being the detective in a crime movie where you are also the murderer."
      </p>
      <p className="mt-4 text-gray-400 max-w">
      I am a computer science student with a strong interest in Artificial Intelligence especially in Computer Vision, NLP and their applications. 
      </p>
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/tonimurfid" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-pink-400" />
        </a>
        <a href="https://linkedin.com/in/fatoni-murfid-syaafii" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-pink-400" />
        </a>
        <a href="https://www.instagram.com/tonimurf_/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>
        <a href="mailto:fatonimurfids@gmail.com">
          <FaEnvelope className="text-2xl hover:text-pink-400" />
        </a>
      </div>
      <a
        href={CV}
        download="Fatoni_Murfi_Syaafii_CV.pdf"
        className="mt-8 px-6 py-3 bg-pink-500 text-white font-bold rounded shadow-lg hover:bg-pink-400 transition"
      >
        Download CV
      </a>
    </section>
  );
};
