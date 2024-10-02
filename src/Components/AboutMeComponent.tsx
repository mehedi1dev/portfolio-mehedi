import React from "react";

const AboutMeComponent: React.FC = () => {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="https://via.placeholder.com/300"
                  alt="S M MEHEDI"
                  className="rounded-full mx-auto w-48 h-48 object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">
                  Hello, I'm S M MEHEDI
                </h3>
                <p className="mb-4">
                  I'm a passionate full-stack developer with 5+ years of
                  experience in building scalable web applications. My expertise
                  lies in JavaScript, TypeScript, React, and Node.js.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">My Approach:</h4>
                  <ul className="list-disc list-inside">
                    <li>User-Centric Design</li>
                    <li>Clean and Efficient Code</li>
                    <li>Continuous Learning</li>
                    <li>Collaborative Development</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                    Download Resume
                  </button>
                  <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors">
                    View Projects
                  </button>
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
