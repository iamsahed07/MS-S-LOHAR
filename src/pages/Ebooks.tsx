import { useState } from 'react';
import EBooksCard from '../components/EbooksCard';

const EBooks = () => {
  const [ebooks] = useState([
    {
      id: 1,
      title: 'Trading in the Zone - Master the Market',
      author: 'Mark Douglas',
      rating: 5,
      pages: 186,
      imageUrl: 'https://m.media-amazon.com/images/I/81ipRF8YLkL._AC_UF1000,1000_QL80_.jpg',
      downloadLink: 'https://mega.nz/file/CZ81FBDb#Cu-AGwse1HZ4hhbgKZ7wd6ocD34hr7Z5zFlew5rpSPg',
    },
    {
      id: 2,
      title: 'Getting Started in Chart Patterns',
      author: 'Thomas Bulkowski',
      rating: 4.5,
      pages: 363,
      imageUrl: 'https://m.media-amazon.com/images/I/81f5I-WZhXL._AC_UF1000,1000_QL80_.jpg',
      downloadLink: 'https://mega.nz/file/Wd0CzIhI#1SCcr9Oqp849Btnz0pI4-tKspz0otY8rJcFrj1DhRSM',
    },
    {
      id: 3,
      title: 'Atomic Habits',
      author: 'James Clear',
      rating: 4.4,
      pages: 256,
      imageUrl: 'https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_.jpg',
      downloadLink: 'https://mega.nz/file/fQdkFIiT#obaViFz3NlWfll15erId2Jg0S4S_aVMxBZ6fsbMcOHg',
    },
    // Add more eBooks here
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Filter eBooks based on search term
  const filteredEBooks = ebooks.filter(ebook =>
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ebook.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort eBooks based on rating
  const sortedEBooks = filteredEBooks.sort((a, b) => {
    if (sortBy === 'asc') {
      return a.rating - b.rating;
    } else if (sortBy === 'desc') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="mt-10 container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">E-books Library</h1>
      {/* Search Bar and Sort By Rating */}
      <div className="flex flex-wrap justify-center mb-6">
        {/* Search Bar */}
        <div className="mr-4 mb-4">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Sort By Rating */}
        <div>
          <label htmlFor="sort-by" className="mr-2">Sort By Rating:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      <div className="border-t border-gray-300 mb-6"></div>


      {/* Display eBooks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedEBooks.map(ebook => (
          <EBooksCard
            key={ebook.id}
            title={ebook.title}
            author={ebook.author}
            rating={ebook.rating}
            pages={ebook.pages}
            imageUrl={ebook.imageUrl}
            downloadLink={ebook.downloadLink}
          />
        ))}
      </div>
    </div>
  );
};

export default EBooks;
