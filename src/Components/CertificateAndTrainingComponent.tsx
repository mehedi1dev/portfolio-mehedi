import { Award } from "lucide-react";
import React from "react";

const certificates = [
  {
    name: "Next.js 14 & React - The Complete Guide",
    platform: "Udemy",
    date: "2024",
    courseLink: "https://www.udemy.com/course/nextjs-react-the-complete-guide",
    description:
      "Currently undertaking this course to deepen my understanding of Next.js and its powerful features. Focusing on server-side rendering, static site generation, and building performant React applications with the latest Next.js enhancements.",
  },
  {
    name: "The Complete Python Developer",
    platform: "Udemy",
    courseLink:
      "https://www.udemy.com/course/complete-python-developer-zero-to-mastery/",
    date: "2024",
    description:
      "Gained comprehensive knowledge in Python programming, covering advanced features, libraries, and best practices for developing robust applications. Enhanced skills in data structures, algorithms, and web development.",
    certificateLink:
      "https://www.udemy.com/certificate/UC-d282177c-6038-41c4-a034-98f439c3a88d/",
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
                  <div className="flex gap-4 mt-4">
                    {cert.certificateLink && (
                      <a
                        className=" text-gray-700 font-bold transition-colors"
                        href={cert.certificateLink}
                        target="_blank"
                      >
                        View Certificate
                      </a>
                    )}
                    <a
                      className=" text-gray-700 font-bold transition-colors"
                      href={cert.courseLink}
                      target="_blank"
                    >
                      View Course
                    </a>
                  </div>
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
