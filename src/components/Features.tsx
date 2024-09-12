import { FaChalkboardTeacher, FaClock, FaBook, FaUsers } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="mt-10 py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose TRADX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<FaChalkboardTeacher />} title="Expert Instructors" description="Learn from industry experts." />
          <FeatureCard icon={<FaClock />} title="Flexible Learning" description="Access courses anytime, anywhere." />
          <FeatureCard icon={<FaBook />} title="Comprehensive Curriculum" description="Everything from basics to advanced strategies." />
          <FeatureCard icon={<FaUsers />} title="Community Support" description="Join our active community of traders." />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
    <div className="text-primary text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;
