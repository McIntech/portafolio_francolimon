import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00284C] text-center text-lg-start py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-[#AFB3B7]">
          <p className="mb-2 text-sm md:text-base">
            &copy; 2020-2024 Copyright: <span className="text-[#00E5BC] font-semibold">Franco Limón</span>. All Rights Reserved.
          </p>
          <p className="mb-4 text-xs md:text-sm">
            Last updated on August 19, 2024.
          </p>
          <p className="text-xs md:text-sm">
            This website and its contents are licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-[#00E5BC] underline hover:text-[#01989F] transition-colors duration-300">MIT License</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;