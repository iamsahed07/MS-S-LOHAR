import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/images/about-tradx.svg'; // Import the image
import { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mt-10 py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">About TRADX</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center mb-6 md:mb-0">
            <img
              src={aboutImage}
              alt="About TRADX"
              className={`rounded-lg w-full md:w-4/5 lg:w-3/5 ${isHovered ? 'scale-105 transition-transform duration-500' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="md:max-w-lg text-center md:text-left">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
              TRADX is dedicated to transforming aspiring traders into professionals. We offer comprehensive forex trading courses designed and taught by industry experts, ensuring you gain the skills and knowledge needed to thrive in the financial markets.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
              Our mission is to empower traders of all levels through quality education and practical insights. Join our community to embark on your journey to financial independence and trading success.
            </p>
            <Link to="/courses" className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Explore Courses
            </Link>
          </div>
        </div>
        <div className="text-center mt-16 mb-12">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeamMember name="John Doe" position="Founder" bio="John is a seasoned trader with over 20 years of experience." linkedin="https://www.linkedin.com/in/johndoe" />
            <TeamMember name="Jane Smith" position="Instructor" bio="Jane specializes in advanced trading strategies and risk management." linkedin="https://www.linkedin.com/in/janesmith" />
            <TeamMember name="Michael Brown" position="Instructor" bio="Michael has a passion for teaching and helping others succeed in forex trading." linkedin="https://www.linkedin.com/in/michaelbrown" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 bg-white p-8 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faUsers} className="text-6xl text-primary mb-4" />
          <p className="text-gray-700 text-xl text-center max-w-2xl leading-relaxed">
            Join our community of traders today and start your journey towards financial freedom.
          </p>
          <Link to="https://www.whatsapp.com/channel/0029VaS9dNP8KMqkk6FgiP2E" className="mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Join The-Tradx WhatsApp Channel
          </Link>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, position, bio, linkedin }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500 relative">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
      </a>
    </div>
    <p className="text-primary font-semibold mb-1">{position}</p>
    <p className="text-gray-700">{bio}</p>
  </div>
);

export default About;
