import React from "react";

const experience = [
  {
    title: "Full-Stack Developer",
    company: "WebSolutions Co.",
    location: "San Francisco, CA",
    period: "May 2023 - Present",
    responsibilities: [
      "Developed and maintained 'ClientConnect', a suite of over 10 client websites using React, Node.js, and MongoDB, ensuring 99.9% uptime and optimal performance.",
      "Implemented 'ResponsivePro', our responsive design framework, and 'ProgressivePWA', our progressive web app feature set, improving mobile user experience and increasing mobile traffic by 35%.",
      "Integrated 'PayEase', our custom payment gateway, streamlining business processes for clients and reducing manual data entry by 70%.",
      "Collaborated with UX designers to implement 'IntuitiveUI', our intuitive user interface framework, resulting in a 20% increase in user satisfaction scores.",
    ],
  },
];

const ExperienceComponent: React.FC = () => {
  return (
    <>
      <section id="experience" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>{job.company}</strong> | {job.location} | {job.period}
                </p>
                <p className="text-gray-600 mb-4">{job.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceComponent;
