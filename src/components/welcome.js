import React from 'react';

const CVSection = () => {
  return (
    <section className="relative py-20 bg-[#00284C] overflow-hidden" id="cv">
      {/* Fondos creativos con triángulo girado y líneas estilo espagueti */}
      <div className="absolute inset-0 opacity-30">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0"
        >
          <g fill="none" strokeWidth="3">
            <circle cx="200" cy="100" r="150" fill="#00E5BC" />
            <circle cx="700" cy="500" r="200" fill="#01989F" />
            {/* Triángulo grande girado */}
            <polygon points="1100,700 1400,300 1600,700" fill="#2A356D" transform="rotate(45 1350 500)" />
            {/* Líneas estilo espagueti */}
            <path d="M50 800 Q300 600 600 800 T900 600 T1200 800" stroke="#00E5BC" strokeWidth="4" fill="none"/>
            <path d="M100 900 Q350 700 650 900 T950 700 T1250 900" stroke="#2A356D" strokeWidth="4" fill="none"/>
            <path d="M200 700 Q400 500 800 700 T1100 500 T1500 700" stroke="#AFB3B7" strokeWidth="3" fill="none"/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00E5BC] mb-6">
          Designer & Back-end Developer
        </h1>
        <p className="text-lg md:text-xl text-[#AFB3B7] mb-8">
          Hi, welcome to my web portfolio, I’m excited to bring my skills to your team!
        </p>
        <div className="flex justify-center mb-8">
          {/* Imagen cuadrada y responsiva */}
          <img 
            src={require('../assets/images/francophoto.jpeg')} // Ajusta la ruta de acuerdo a la estructura de tu proyecto
            alt="Your Image" 
            className="w-64 h-64 object-cover rounded-xl shadow-2xl md:w-80 md:h-80 border-4 border-[#2A356D]" 
          />
        </div>
        <div>
          <a 
            href="/resume_franco.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="resume"
            className="inline-block bg-[#01989F] text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-[#01679C] transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;