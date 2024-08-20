import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto p-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img
            src={require('../assets/images/franco_logo.png')} // Ajusta la ruta de acuerdo a la estructura de tu proyecto
            alt="my_logo"
            className="h-16 w-16"
          />
        </div>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id="navbarSupportedContent">
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#cv">Download CV</a>
            </li>
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#journey">My journey</a>
            </li>
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#works">Recent Works</a>
            </li>
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#testimonies">Testimonies</a>
            </li>
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#skills">Skills</a>
            </li>
            <li>
              <a className="hover:text-teal-400 transition-colors duration-300" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;