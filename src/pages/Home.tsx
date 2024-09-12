import Hero from "../components/Hero";
import Features from "../components/Features";
import ProjectCard from "../components/ProjectCard"; // Rename CourseCard to ProjectCard
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import msSloharLogo from "../assets/images/ms-slohar.png"; // Replace with actual company logo

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-center items-center mt-10">
        <img src={msSloharLogo} alt="MS-Slohar" className="max-w-xs" />
      </div>

      <Hero />

      <Features />

      {/* Projects */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project Alpha"
              description="Description of Project Alpha."
              duration="6 months"
              location="Location A"
              contractValue="$500,000"
              detailsLink="/running-contracts"
            />
            <ProjectCard
              title="Project Beta"
              description="Description of Project Beta."
              duration="1 year"
              location="Location B"
              contractValue="$750,000"
              detailsLink="/running-contracts"
            />
            <ProjectCard
              title="Project Gamma"
              description="Description of Project Gamma."
              duration="9 months"
              location="Location C"
              contractValue="$300,000"
              detailsLink="/running-contracts"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <BlogPreview />
    </div>
  );
};

export default Home;
