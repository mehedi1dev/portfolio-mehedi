import React from "react";
import profilePicture from "../../public/propic.png";

const AboutMeComponent: React.FC = () => {
  const startYear = 2023;
  const startMonth = 4; // May is the 5th month, zero-indexed to 4

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // Zero-indexed

  // Calculate total months difference
  const totalMonths =
    (currentYear - startYear) * 12 + (currentMonth - startMonth);

  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={profilePicture}
                  alt="S M MEHEDI"
                  className="rounded-full mx-auto w-56 h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">
                  Hello, I'm S M MEHEDI
                </h3>
                <p className="mb-4">
                  I'm a passionate full-stack developer with {totalMonths}+
                  months of experience in building scalable web applications. My
                  expertise lies in JavaScript, TypeScript, React, NodeJS,
                  ExpressJS, MongoDB, Python and many more.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">My Approach:</h4>
                  <ul className="list-disc list-inside">
                    {/* <li>User-Centric Design</li> */}
                    <li>Clean and Efficient Code</li>
                    <li>Continuous Learning</li>
                    <li>Collaborative Development</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                    href="https://drive.google.com/drive/folders/19OA_n8pdoxrL2zEbO2ZfNeRfz3S6o4C4?usp=sharing"
                    target="_black"
                  >
                    View Resume
                  </a>
                  <a
                    className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                    href="#projects"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeComponent;
