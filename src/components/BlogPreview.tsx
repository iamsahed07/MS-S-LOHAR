import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
}

const BlogPreview: React.FC = () => {
  const blogPosts: BlogPost[] = [
    { title: "Investopedia", excerpt: "Your source for market education", link: "https://www.investopedia.com/" },
    { title: "Benzinga", excerpt: "News & analysis for investors", link: "https://www.benzinga.com/" },
    { title: "The Motley Fool", excerpt: "Stock market news & analysis", link: "https://www.fool.com/" },
    { title: "TradingView Blog", excerpt: "Insights & analysis from TradingView", link: "https://www.tradingview.com/blog/en/" },
    { title: "Bloomberg Markets", excerpt: "Global financial markets news", link: "https://www.bloomberg.com/markets" },
    { title: "StockCharts.com Blog", excerpt: "Technical analysis & trading strategies", link: "https://stockcharts.com/articles/" }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Recommended Trading Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} title={post.title} excerpt={post.excerpt} link={post.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  title: string;
  excerpt: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 inline-block">Visit Blog</a>
  </div>
);

export default BlogPreview;
