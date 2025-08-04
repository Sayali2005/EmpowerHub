import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 EmpowerHub. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
