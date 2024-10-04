import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React, { FormEvent } from "react";

const ContactComponent: React.FC = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "6117916a-f9b4-41b3-b553-4ee20ab1e893");

    console.log(formData);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(
        "Suucessfully notified to Mehedi. You will get in touch from Mehedi soon. Thank you."
      );
      event.currentTarget.reset();
    } else {
      alert(
        "Oops, Somthing went wrong. Try again or contect Mehedi by given information. Thank you."
      );
    }
  };
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
                    href="https://github.com/mehedi1dev"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mehedi1dev/"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/mehedi1dev/"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 bg-gray-100">
              <form className="space-y-4" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone No. (Optional)"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  name="Message"
                  className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus: focus:ring-2 focus:ring-gray-500"
                  required
                ></textarea>
                <button
                  className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  type="submit"
                >
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
