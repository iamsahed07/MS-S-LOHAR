import heroImage from '../assets/images/hero2.png';

const Hero = () => {
  return (
    <section
      className="mx-10 bg-cover bg-center flex items-center justify-center text-center h-96 relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 p-10 rounded-xl shadow-2xl w-full max-w-3xl mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black border border-gray-700">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md animate-fadeInUp text-border border-black">
          WORK CONTRACTS
        </h1>
        <p className="text-white text-xl md:text-2xl mb-6 drop-shadow-md animate-fadeInUp delay-200 text-border border-black">
          MECHANICAL | CIVIL | ELECTRICAL
        </p>
        <a href="https://the-tradx-inc-7daysfree.youcanbook.me" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full hover:from-blue-500 hover:to-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
            Get in touch.
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
