import React from "react";

import FooterComponent from "./Components/FooterComponent";
import ContactComponent from "./Components/ContactComponent";
import CertificateAndTrainingComponent from "./Components/CertificateAndTrainingComponent";
import EducationComponent from "./Components/EducationComponent";
import BlogComponent from "./Components/BlogComponent";
import PersonalProjectComponent from "./Components/PersonalProjectComponent";
import SkillComponent from "./Components/SkillComponent";
import ExperienceComponent from "./Components/ExperienceComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import HeroComponent from "./Components/HeroComponent";
import NavbarComponent from "./Components/NavbarComponent";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <NavbarComponent />

      {/* Hero Section */}
      <HeroComponent />

      {/* About Me Section */}
      <AboutMeComponent />

      {/* Experience Section */}
      <ExperienceComponent />

      {/* Skills Section */}
      <SkillComponent />

      {/* Projects Section */}
      <PersonalProjectComponent />

      {/* Blog Section */}
      <BlogComponent />

      {/* Education Section */}
      <EducationComponent />

      {/* Professional Certificates & Training Section */}
      <CertificateAndTrainingComponent />

      {/* Contact Section */}
      <ContactComponent />

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default App;
