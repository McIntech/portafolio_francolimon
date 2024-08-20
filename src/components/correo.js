import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#001F33]" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-[#00E5BC] mb-6">Get in Touch</h1>
        <p className="text-lg text-[#AFB3B7] mb-8">
          Whether you want to collaborate on a project, need help with your development work, or just want to say hello,
          feel free to drop me a message. I am well-versed in integrating with external applications like Gmail, GitHub,
          Facebook, and more. This section is fully functional, so don't hesitate to reach out!
        </p>
        
        {/* Formulario */}
        <form 
          action="/messages" 
          method="post" 
          className="mx-auto max-w-2xl bg-[#00284C] p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#00E5BC] font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="message[email]" 
              className="w-full px-4 py-2 bg-[#012039] text-[#AFB3B7] rounded focus:outline-none focus:ring-2 focus:ring-[#00E5BC]" 
              placeholder="Your email address" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-[#00E5BC] font-bold mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="message[subject]" 
              className="w-full px-4 py-2 bg-[#012039] text-[#AFB3B7] rounded focus:outline-none focus:ring-2 focus:ring-[#00E5BC]" 
              placeholder="Subject" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#00E5BC] font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message[message]" 
              className="w-full h-32 px-4 py-2 bg-[#012039] text-[#AFB3B7] rounded focus:outline-none focus:ring-2 focus:ring-[#00E5BC]" 
              placeholder="Your message" 
              required 
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="w-full bg-[#00E5BC] text-[#001F33] font-semibold py-3 rounded-lg hover:bg-[#01989F] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;