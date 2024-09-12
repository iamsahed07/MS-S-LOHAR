import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-xl mb-4">Quick Links</h4>
          <ul>
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-secondary">Courses</Link></li>
            <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">Contact Info</h4>
          <p>Address: Farakka - West Bengal</p>
          <p>Email: royalsahed03@gmail.com</p>
          <p>Phone: +91 8967270067</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-secondary"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-secondary"><FaTwitter size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-secondary"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">Subscribe to our Newsletter</h4>
          <form>
            <input type="email" className="w-full p-2 rounded mb-4" placeholder="Enter your email" />
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300 w-full md:w-auto">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
