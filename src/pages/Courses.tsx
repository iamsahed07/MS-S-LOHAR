import CourseCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import Testimonials from '../components/Testimonials';

const Courses = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-10 py-12 bg-gray-100"
    >
      {/* Additional Features */}
      <div className="container mx-auto px-4">
        <h2 className="w-full text-3xl font-bold mb-8 text-center text-gray-900">
          ⭐️ Strategize, Execute, Conquer – Your Journey to Forex Greatness Starts Here.
        </h2>
        {/* Divider */}
        <div className="my-12 border-t border-gray-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Master Forex Trading: 7-Day Free Mentorship with Tradx
            </h3>
            <p className="text-gray-600 mb-4">
             📆 Dates: June 10, 2024 - June 16, 2024
            </p>
            <p className="text-gray-600 mb-4">
              Ready to elevate your Forex trading? Join our exclusive 7-Day Free Mentorship Program and master the secrets to success with Tradx!
            </p>
            <a
              href="https://the-tradx-inc.youcanbook.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition duration-300"
            >
              Register Now
            </a>
          </div>
          {/* Add more components here */}
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-200"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Forex Basics"
            description="Learn the fundamentals of forex trading."
            duration="4 weeks"
            instructor="John Doe"
            price="$99"
            enrollmentLink="https://the-tradx-inc.youcanbook.me"
          />
          <CourseCard
            title="Advanced Strategies"
            description="Master advanced trading strategies."
            duration="6 weeks"
            instructor="Jane Smith"
            price="$199"
            enrollmentLink="/https://the-tradx-inc.youcanbook.me"
          />
          <CourseCard
            title="Risk Management"
            description="Learn how to manage trading risks."
            duration="3 weeks"
            instructor="Michael Brown"
            price="$149"
            enrollmentLink="/https://the-tradx-inc.youcanbook.me"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-200"></div>
      <Testimonials />
    </motion.section>
  );
};

export default Courses;
