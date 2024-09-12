import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';

const EBooksCard = ({ title, author, rating, pages, imageUrl, downloadLink }) => {
  // Function to render stars based on the rating value
  const renderStars = () => {
    const filledStars = Math.floor(rating); // Get the number of filled stars
    const hasHalfStar = rating - filledStars >= 0.5; // Check if there's a half-filled star
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Calculate the number of empty stars

    // Create an array of filled star icons
    const filledStarIcons = [...Array(filledStars)].map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
    ));

    // Create an array of half-filled star icon
    const halfStarIcon = hasHalfStar ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : null;

    // Create an array of empty star icons
    const emptyStarIcons = [...Array(emptyStars)].map((_, index) => (
      <FontAwesomeIcon key={filledStars + index} icon={faStar} className="text-gray-300" />
    ));

    // Concatenate filled, half-filled, and empty star arrays
    return [...filledStarIcons, halfStarIcon, ...emptyStarIcons];
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
      {/* Cover Image */}
      <img src={imageUrl} alt={title} className="h-full w-full object-cover object-center" />

      {/* Details Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-start space-y-2 bg-black bg-opacity-40 rounded-lg p-3 md:p-4">
          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2">{title}</h3>
          
          {/* Author */}
          <p className="text-sm text-gray-200">By {author}</p>
          
          {/* Rating and Pages */}
          <div className="flex items-center text-sm text-gray-200">
            <div className="flex items-center mr-1 md:mr-2">
              {renderStars()} {/* Render stars dynamically */}
              <span className="ml-1">{rating}</span> {/* Display numeric rating value */}
            </div>
            <span>{pages} pages</span>
          </div>
        </div>

        {/* Download Button */}
        <a 
          href={downloadLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300 text-center text-xs md:text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default EBooksCard;
