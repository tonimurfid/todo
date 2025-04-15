import CV from "/assets/CV_Fatoni Murfid Syaafii_AIMLE.pdf"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Photo Section */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-32 h-32 sm:w-52 sm:h-52 md:w-full md:h-full rounded-xl overflow-hidden border-4 border-pink-500/30">
              <div className="absolute inset-0 border-2 border-pink-500"></div>
              <img
                src="/assets/toni3.jpeg"
                alt="Fatoni Murfid Syaafii"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* Content Section */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-500 font-mono">
              Fatoni Murfid Syaafii
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl italic text-gray-300">
              "The code is always right, until it's wrong. Debugging is the moment you prove it"
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl">
              I am a computer science student with a strong interest in Artificial Intelligence, especially in Computer
              Vision, NLP, and their applications.
            </p>
            <div className="flex space-x-8 mt-6 justify-center md:justify-start">
              <a href="https://github.com/tonimurfid" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub className="text-2xl sm:text-3xl text-white hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/fatoni-murfid-syaafii"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl sm:text-3xl text-white hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/tonimurf_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram className="text-2xl sm:text-3xl text-white hover:text-pink-400 transition-colors" />
              </a>
              <a href="mailto:fatonimurfids@gmail.com" aria-label="Email">
                <FaEnvelope className="text-2xl sm:text-3xl text-white hover:text-pink-400 transition-colors" />
              </a>
            </div>
            <div className="mt-8">
              <a
                href={CV}
                download="CV_Fatoni Murfid Syaafii.pdf"
                className="px-8 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-400 transition text-sm sm:text-base inline-block"
              >
                See My Resume :D
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
