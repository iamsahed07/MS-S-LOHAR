import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-gray-900 font-bold text-lg sm:text-2xl">
          <Link to="/" className="transition duration-300 transform hover:scale-105" onClick={closeMenu}>M/S. S. LOHAR</Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <MenuItem to="/" label="Home" closeMenu={closeMenu} location={location} />
              <MenuItem to="/about" label="About Us" closeMenu={closeMenu} location={location} />
              <MenuItem to="/courses" label="Courses" closeMenu={closeMenu} location={location} />
              <MenuItem to="/blog" label="Blog" closeMenu={closeMenu} location={location} />
              <MenuItem to="/ebooks" label="E-books" closeMenu={closeMenu} location={location} /> {/* Moved E-books option */}
              <MenuItem to="/testimonials" label="Testimonials" closeMenu={closeMenu} location={location} />
              <MenuItem to="/contact" label="Contact Us" closeMenu={closeMenu} location={location} />
              <li>
                <Link to="/login" className="text-gray-700 hover:bg-gray-900 hover:text-white px-4 py-2 rounded transition duration-300 shadow-md bg-white border border-gray-300" onClick={closeMenu}>Login/Enroll</Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white md:hidden">
          <nav>
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <MenuItem to="/" label="Home" closeMenu={closeMenu} location={location} />
              <MenuItem to="/about" label="About Us" closeMenu={closeMenu} location={location} />
              <MenuItem to="/courses" label="Courses" closeMenu={closeMenu} location={location} />
              <MenuItem to="/blog" label="Blog" closeMenu={closeMenu} location={location} />
              <MenuItem to="/ebooks" label="E-books" closeMenu={closeMenu} location={location} /> {/* Moved E-books option */}
              <MenuItem to="/testimonials" label="Testimonials" closeMenu={closeMenu} location={location} />
              <MenuItem to="/contact" label="Contact Us" closeMenu={closeMenu} location={location} />
              <li>
                <Link to="/login" className="text-gray-700 hover:bg-gray-900 hover:text-white px-4 py-2 rounded transition duration-300 shadow-md bg-white border border-gray-300" onClick={closeMenu}>Login/Enroll</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

const MenuItem = ({ to, label, closeMenu, location }) => {
  const isActive = location.pathname === to;

  return (
    <li>
      <Link to={to} className={`text-gray-700 transition duration-300 hover:text-gray-900 hover:underline transform hover:scale-105 ${isActive ? 'font-bold text-gray-900' : ''}`} onClick={closeMenu}>
        {label}
      </Link>
    </li>
  );
};

export default Header;
