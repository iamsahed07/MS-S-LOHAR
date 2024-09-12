import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mt-10 py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-700 mb-4">Address: Farakka - West Bengal</p>
            <p className="text-gray-700 mb-4">Email: royalsahed03@gmail.com</p>
            <p className="text-gray-700 mb-4">Phone: +91 8967270067</p>
            {/* Map */}
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57957.984210589!2d87.8589627406362!3d24.78264339084282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa5e8c968a94d5%3A0xd4e83092fa7f69a1!2sFarakka%2C West Bengal!5e0!3m2!1sen!2sin!4v1718416560153!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:border-primary placeholder-gray-500"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:border-primary placeholder-gray-500"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:border-primary placeholder-gray-500"
                placeholder="Message"
                // rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition duration-300 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
