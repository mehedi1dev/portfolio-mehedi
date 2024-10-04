import React from "react";

const experience = [
  {
    title: "Full-Stack Web Developer",
    company: "Asiatic Mindshare Ltd",
    location: "Banani, Dhaka, Bangladesh",
    period: "May 2023 - Present",
    responsibilities: [
      {
        title: "Task Management Software",
        description:
          "Developed front-end with React, TypeScript, React Query,  Axios, Ant Design (AntD), and Tailwind CSS, ensuring smooth task management.",
      },
      {
        title: "Media Management Software",
        description:
          "Contributed to front-end using React, React Query,  Axios, Ant Design (AntD), and Tailwind CSS, streamlining media workflows.",
      },
      {
        title: "Requisition & Expense Management (Back-end)",
        description:
          "Built backend with Node.js, Express.js, Mongoose, and MongoDB for efficient requisition and expense handling.",
      },
      {
        title: "Requisition & Expense Management (Front-end)",
        description:
          "Developed front-end with React, Material UI, Axios, and Tailwind CSS, enhancing user interface for requisition & expense management.",
      },
      {
        title: "IT Service Management Application",
        description:
          "Created front-end components using React, Redux, and Ant Design (AntD), optimizing IT service automation.",
      },
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
                <h3 className="text-xl font-bold mb-2 uppercase">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>{job.company}</strong> | {job.location} | {job.period}
                </p>
                <p className="text-gray-600 mb-4">{job.period}</p>

                {job.responsibilities.map((resp, idx) => (
                  <div className="flex gap-x-2 mt-2">
                    <p className="font-bold">#</p>
                    <p key={idx}>
                      <span className="font-bold">{resp.title}</span> :{" "}
                      <span className="">{resp.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceComponent;
