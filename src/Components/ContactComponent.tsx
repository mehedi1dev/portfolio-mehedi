import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactComponent: React.FC = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-gray-600" />
                  <span>s.mehedi2022@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-gray-600" />
                  <span>+880-1303-695605</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-gray-600" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 bg-gray-100">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus: focus:ring-2 focus:ring-gray-500"
                ></textarea>
                <button className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
