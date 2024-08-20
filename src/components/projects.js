import React from 'react';

const WorksSection = () => {
  return (
    <section className="relative py-16 bg-[#001f3f] overflow-hidden" id="works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#00E5BC] text-center mb-8">
          Recent Works
        </h2>
        <p className="text-lg text-[#AFB3B7] text-center mb-12">
          I am passionate about developing innovative products. Throughout the years, I've explored various creative
          avenues, bringing ideas to life through the development of websites, video games, and JavaScript libraries.
          My work reflects a commitment to turning concepts into reality, regardless of the medium.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Zampli Library */}
          <div className="relative group">
            <div className="bg-[#0D1A35] rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#00E5BC] mb-4 text-center">Zampli Library</h3>
                <div className="relative h-64 bg-[#2A356D] rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={require('../assets/images/projects_develop.jpg')} 
                    alt="Zampli Library" 
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#01989F] opacity-0 transition-opacity duration-300 group-hover:opacity-75 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Develop</span>
              </div>
            </div>
          </div>

          {/* Frontend Store */}
          <div className="relative group">
            <div className="bg-[#0D1A35] rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#00E5BC] mb-4 text-center">Frontend Store</h3>
                <div className="relative h-64 bg-[#2A356D] rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={require('../assets/images/projects_develop.jpg')} 
                    alt="Frontend Store" 
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#01989F] opacity-0 transition-opacity duration-300 group-hover:opacity-75 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Develop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Circle */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#01679C] rounded-full opacity-25"></div>
          {/* Bottom Right Circle */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#00284C] rounded-full opacity-25"></div>
          {/* Top Right Line */}
          <div className="absolute top-0 right-0 w-64 h-1 bg-[#00E5BC] opacity-50 transform rotate-45"></div>
          {/* Bottom Left Line */}
          <div className="absolute bottom-0 left-0 w-64 h-1 bg-[#AFB3B7] opacity-50 transform -rotate-45"></div>
          {/* Center Square */}
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#01989F] opacity-10 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;