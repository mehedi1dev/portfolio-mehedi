import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>
            &copy; {new Date().getFullYear()} S M MEHEDI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
