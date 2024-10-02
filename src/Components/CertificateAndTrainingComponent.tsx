import { Award } from "lucide-react";
import React from "react";

const certificates = [
  {
    name: "Advanced React and Redux",
    platform: "Udemy",
    date: "2023",
    description:
      "Mastered advanced React concepts, Redux state management, and modern application architecture.",
  },
  {
    name: "Full Stack Web Development",
    platform: "Udemy",
    date: "2022",
    description:
      "Comprehensive course covering both frontend and backend technologies, including Node.js, Express, and MongoDB.",
  },
  {
    name: "AWS Certified Solutions Architect",
    platform: "Amazon Web Services",
    date: "2021",
    description:
      "Demonstrated proficiency in designing distributed systems on AWS.",
  },
];

const CertificateAndTrainingComponent: React.FC = () => {
  return (
    <>
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Certificates & Training
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start"
              >
                <Award className="w-8 h-8 text-gray-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">
                    {cert.platform} | {cert.date}
                  </p>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificateAndTrainingComponent;
