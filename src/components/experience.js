import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Global Hitss',
      date: '(2022 - Present)',
      description: `At Global Hitss, I worked as a Full Stack Engineer, where I was responsible for creating and developing documentation, including test matrices, unit tests, flow diagrams, technical analysis, and detailed designs. I resolved issues in applications, improving responsive design and fixing bugs. I also worked on user interfaces and style sheets with Kony Visualizer for mobile and web development. I developed solid knowledge in databases with Oracle and SQL Developer, including SP's, CRUD, and proper table creation. I used Git and Sourcetree for environment synchronization across Development, QA, and Production. Additionally, I utilized SOAP, React, and .NET with C# for service development at Banorte and created Windows services, demonstrating strong communication and autonomy when interacting with senior executives and Banorte directors, efficiently explaining and presenting requirements and user interfaces.`,
    },
    {
      company: 'Wingoo',
      date: '(2019 - 2020)',
      description: `At Wingoo, I worked as a UI & UX Developer using Ruby on Rails to develop web applications. I implemented various libraries and gems like Devise and BCrypt, focusing on user experience (UX) design with SASS, Bootstrap, Tailwind, and CSS to ensure responsive development. I designed different sections of web pages using Photoshop and Adobe XD. I managed development environments such as Linux, Ubuntu, and VMware for virtual machines and utilized package managers and version control systems like NVM, NPM, and Chocolately. I directly collaborated with clients in UX demonstrations and participated in deployments on Heroku and AWS. Additionally, I gained experience in languages like Ruby and JavaScript, PostgreSQL, cmd, and PowerShell, and used testing tools like RSpec. I also managed projects with GitLab, GitHub, and Trello.`,
    },
    {
      company: 'Conduent Payments',
      date: '(August 2020 - January 2021)',
      description: `Conduent delivers business process outsourcing (BPO) solutions that ignite efficiency, savings, and revenue growth across industries. I was involved in streamlining internal processes, managing client interactions, and contributing to projects aimed at improving operational efficiency. My role required close collaboration with various departments to implement BPO solutions that were both scalable and sustainable.`,
    },
    {
      company: 'Avant Sante',
      date: '(October 2019 - December 2019)',
      description: `Avant Sante is a pharmaceutical company where I worked as a blog administrator. My responsibilities included content management, SEO optimization, and ensuring that the blog's content met industry standards. I worked closely with the marketing team to create and publish content that resonated with our target audience.`,
    },
    {
      company: 'Teleperformance',
      date: '(November 2019 - January 2020)',
      description: `Teleperformance is a call center where I worked for Xfinity in the repair of network products. My role involved troubleshooting network issues, providing customer support, and ensuring that service interruptions were resolved quickly and efficiently. This experience honed my problem-solving skills and ability to work under pressure.`,
    },
    {
      company: 'Medical Group',
      date: '(January 2020 - May 2020)',
      description: `I worked for Medical Group in the administration of patients and clients. My duties included managing patient records, scheduling appointments, and ensuring that the office operations ran smoothly. This role required strong organizational skills and attention to detail.`,
    },
    {
      company: 'Centris Experience',
      date: '(August 2020 - Current job)',
      description: `Centris Information Services is a nearshore customer contact and call center focusing on bilingual call center and support services. In my current role, I am responsible for managing client accounts, overseeing service delivery, and ensuring that our team meets and exceeds customer expectations. This position requires excellent communication skills and the ability to manage multiple projects simultaneously.`,
    },
  ];

  return (
    <section className="relative py-20 bg-[#011627] text-white" id="work-experience">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-[#00E5BC] mb-12 text-center">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-[#00E5BC] mb-2">
              {exp.company} <span className="text-[#AFB3B7]">{exp.date}</span>
            </h3>
            <p className="text-lg text-[#AFB3B7]">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;