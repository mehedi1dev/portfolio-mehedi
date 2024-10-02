import { Book, Globe, GraduationCap } from "lucide-react";
import React from "react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2018 - 2020",
    location: "Stanford, CA",
    major: "Artificial Intelligence and Machine Learning",
    description:
      "Thesis on 'Deep Learning Approaches for Natural Language Processing'.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Massachusetts Institute of Technology",
    year: "2014 - 2018",
    location: "Cambridge, MA",
    major: "Software Engineering",
    description:
      "Graduated with honors. Participated in multiple hackathons and led the university's coding club.",
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
                    <p className="text-gray-600 mb-2">Major in {edu.major}</p>
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
