import React from 'react';

const TestimoniesSection = () => {
  return (
    <section className="py-16 bg-[#001f3f]" id="testimonies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#00E5BC] text-center mb-8">
          Testimonies
        </h2>
        <p className="text-lg text-[#AFB3B7] text-center mb-12">
          I am passionate about sharing my knowledge and believe that having someone skilled in teaching is a valuable asset to any team. I offer programming classes through my <a href="https://www.superprof.mx/orientacion-asesoramiento-para-estudiantes-informatica-aprende-crear-aplicaciones-con-ruby-rails-javascript-css-html.html" className="underline hover:text-[#00E5BC]">Superproof</a> account, where you can see testimonials from my students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonio AI */}
          <div className="bg-[#132E35] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="relative h-64 bg-[#2A356D] flex items-center justify-center overflow-hidden">
              <img 
                src={require('../assets/images/chinesegirl.jpg')} // Ajusta la ruta de acuerdo a la estructura de tu proyecto
                alt="AI" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#00E5BC] mb-2">AI</h3>
              <p className="text-[#AFB3B7] mb-4">Student</p>
              <p className="text-[#AFB3B7] italic">"He is very knowledgeable and I am looking forward to taking next sessions with him."</p>
            </div>
          </div>

          {/* Testimonio Michael */}
          <div className="bg-[#132E35] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="relative h-64 bg-[#2A356D] flex items-center justify-center overflow-hidden">
              <img 
                src={require('../assets/images/australianboy.jpg')} // Ajusta la ruta de acuerdo a la estructura de tu proyecto
                alt="Michael" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#00E5BC] mb-2">Michael</h3>
              <p className="text-[#AFB3B7] mb-4">Student</p>
              <p className="text-[#AFB3B7] italic">"Franco is a very good teacher. He explains the concepts very well and is patient. I would highly recommend Franco."</p>
            </div>
          </div>

          {/* Testimonio Areli */}
          <div className="bg-[#132E35] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="relative h-64 bg-[#2A356D] flex items-center justify-center overflow-hidden">
              <img 
                src={require('../assets/images/superproof_girl_profile.jpg')} // Ajusta la ruta de acuerdo a la estructura de tu proyecto
                alt="Areli" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#00E5BC] mb-2">Areli</h3>
              <p className="text-[#AFB3B7] mb-4">Student</p>
              <p className="text-[#AFB3B7] italic">"I liked the first class a lot, with good preparation, excellent and simple explanations, with a lot of patience."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;