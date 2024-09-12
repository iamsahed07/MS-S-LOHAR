import { useState } from "react";

const Blog = () => {
  const [] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Investopedia",
      excerpt: "Visit Investopedia for educational articles and tutorials on trading.",
      link: "https://www.investopedia.com/",
    },
    {
      id: 2,
      title: "Benzinga",
      excerpt: "Stay updated with daily news and analysis on Benzinga.",
      link: "https://www.benzinga.com/",
    },
    {
      id: 3,
      title: "The Motley Fool",
      excerpt: "Access investment recommendations and articles on The Motley Fool.",
      link: "https://www.fool.com/",
    },
    {
      id: 4,
      title: "TradingView Blog",
      excerpt: "Read market insights and trading strategies on TradingView's blog.",
      link: "https://www.tradingview.com/blog/",
    },
    {
      id: 5,
      title: "Bloomberg Markets",
      excerpt: "Explore global financial news and analysis on Bloomberg Markets.",
      link: "https://www.bloomberg.com/markets",
    },
    {
      id: 6,
      title: "StockCharts.com Blog",
      excerpt: "Learn technical analysis and trading strategies on StockCharts.com.",
      link: "https://stockcharts.com/publications/",
    },
  ];

  const blogCategories = [
    { title: "Trading News", link: "https://www.tradingview.com/news/", color: "bg-gradient-to-r from-pink-400 to-red-500" },
    { title: "Live Chart", link: "https://www.tradingview.com/chart/", color: "bg-gradient-to-r from-green-400 to-blue-500" },
    { title: "Economic Calendar", link: "https://www.tradingview.com/economic-calendar/", color: "bg-gradient-to-r from-purple-400 to-indigo-500" },
    { title: "Award Winning Brokers", link: "https://www.tradingview.com/broker-awards/", color: "bg-gradient-to-r from-yellow-400 to-orange-500" }
  ];

  const handleBlogClick = (blog) => {
    window.open(blog.link, "_blank");
  };

  return (
    <section className="mt-10 py-12 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {blogCategories.map((category, index) => (
            <BlogCategory key={index} {...category} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-200"></div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Recommended Trading Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              {...blog}
              onClick={() => handleBlogClick(blog)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-200"></div>

      {/* Additional Features */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Feature 1"
            description="Description of feature 1."
          />
          <FeatureCard
            title="Feature 2"
            description="Description of feature 2."
          />
          <FeatureCard
            title="Feature 3"
            description="Description of feature 3."
          />
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ title, excerpt, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
    <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700 mb-4">{excerpt}</p>
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      Visit Website
    </button>
  </div>
);

const BlogCategory = ({ title, link, color }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer ${color}`}>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <a href={link} className="text-white hover:underline">Explore</a>
    </div>
  </a>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <a href="#" className="text-blue-500 hover:underline">Explore</a>
  </div>
);

export default Blog;
