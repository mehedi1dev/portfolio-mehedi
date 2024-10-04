import { Book, Globe, GraduationCap } from "lucide-react";
import React from "react";

const education = [
  {
    degree: "Master of Science in Management Information System",
    institution: "Daffodil International University",
    year: "January, 2024 - Present",
    location: "Dhaka, Bangladesh",
    cgpa: "Running",
    description:
      "Currently pursuing a master's degree, focusing on data management and modern business solutions.",
  },
  {
    degree: "B.Sc. Engg. in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology",
    year: "2014 - 2018",
    location: "Dhaka, Bangladesh",
    cgpa: "3.95 out of 4.00",
    description:
      "Graduated with honors 🎓. Participated in various coding contests 🧑‍💻. Led multiple course-specific projects involving software architecture, algorithm design, application development and technical leadership skills.",
  },
];

const EducationComponent: React.FC = () => {
  return (
    <>
      <section id="education" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Educational Background
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <GraduationCap className="w-8 h-8 text-gray-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="font-bold mb-2">
                      CGPA: <span>{edu.cgpa}</span>
                    </p>
                    <div className="text-sm text-gray-600 mb-2 flex items-center">
                      <Book className="w-4 h-4 mr-2" />
                      <span>{edu.year}</span>
                      <Globe className="w-4 h-4 ml-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
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

export default EducationComponent;
