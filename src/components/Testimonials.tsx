import { useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { name: "Alice Johnson", text: "TRADX has transformed my trading career!" },
    { name: "Bob Williams", text: "The courses are comprehensive and easy to follow." },
    { name: "Catherine Lee", text: "The community support is amazing!" },
  ]);

  const [form, setForm] = useState({ name: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials((prevTestimonials) => [...prevTestimonials, form]);
    setForm({ name: "", text: "" });
  };

  return (
    <section className="mt-6 py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} text={testimonial.text} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-200"></div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Add Your Testimonial</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="text"
              value={form.text}
              onChange={handleInputChange}
              placeholder="Your Testimonial"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              // rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:from-blue-500 hover:to-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, text }) => (
  <div className="relative bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer">
    <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 rounded-full -mt-6 -ml-6 flex items-center justify-center shadow-md">
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8l-.1.2a7.93 7.93 0 01-2.2 2.2 8.38 8.38 0 01-3.8.9H7v-2h6a6.38 6.38 0 002.8-.7 5.78 5.78 0 001.7-1.7A6.38 6.38 0 0018 12V8.5h2zM9 13a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3H9v2h4v-2a5 5 0 00-5-5 5 5 0 00-5 5 5 5 0 005 5z" />
      </svg>
    </div>
    <p className="text-gray-700 mb-4 italic leading-relaxed">"{text}"</p>
    <p className="text-blue-500 font-bold text-lg">{name}</p>
  </div>
);

export default Testimonials;
