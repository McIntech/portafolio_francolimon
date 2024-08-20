import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const skillsData = [
  {
    title: 'Ruby on Rails',
    percentage: 80,
    description:
      'Experience with MVC architecture, implementing RESTful APIs, and integrating third-party services using gems like Devise and Pundit. Proficient in managing databases using Active Record.',
  },
  {
    title: 'JavaScript & React.js',
    percentage: 88,
    description:
      'Expertise in modern JavaScript frameworks like React.js for building dynamic, single-page applications with state management using Redux.',
  },
  {
    title: 'SASS & CSS',
    percentage: 80,
    description:
      'Skilled in creating responsive and visually appealing designs using CSS preprocessors like SASS, along with frameworks like Bootstrap and Tailwind CSS.',
  },
  {
    title: 'HTML & Web Accessibility',
    percentage: 85,
    description:
      'Proficient in HTML5, ensuring web accessibility standards (WCAG) are met, and implementing semantic markup for better SEO and user experience.',
  },
  {
    title: 'Git & GitHub',
    percentage: 80,
    description:
      'Experience in version control using Git, collaborating on large codebases with multiple contributors using GitHub and GitLab.',
  },
  {
    title: 'MySQL & PostgreSQL',
    percentage: 80,
    description:
      'Proficient in relational database management systems, with experience in writing complex SQL queries, stored procedures, and database design.',
  },
  {
    title: 'Oracle',
    percentage: 75,
    description:
      'Experience with Oracle databases, including the use of SQL Developer, stored procedures, and complex data management tasks.',
  },
  {
    title: 'C# & Unity',
    percentage: 75,
    description:
      'Experience in game development using C# and Unity, creating interactive 2D/3D environments and gameplay mechanics.',
  },
  {
    title: 'Heroku & AWS',
    percentage: 70,
    description:
      'Experience deploying and managing applications on Heroku and AWS, ensuring scalability and performance in cloud environments.',
  },
];

const SkillsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
          }
        });
      },
      { threshold: 0.5 }
    );

    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => {
      observer.observe(bar);
    });
  }, []);

  return (
    <section className="py-16 bg-[#000d1a]" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#00E5BC] mb-8 text-center">
          Skills
        </h2>
        <p className="text-lg text-[#AFB3B7] mb-12 text-center">
          I have a strong foundation in web programming, with expertise in both
          frontend and backend development. Additionally, I have experience
          working in other sectors such as game development, and I constantly
          strive to stay updated with the latest technologies.
        </p>

        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <h3 className="text-2xl text-[#00E5BC] mb-2">{skill.title}</h3>
              <div className="w-full bg-[#1A2C3B] rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: 0,
                    background: 'linear-gradient(90deg, #00E5BC, #2A356D)',
                  }}
                  data-width={`${skill.percentage}%`}
                ></div>
              </div>
              <p className="text-lg text-[#AFB3B7]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;