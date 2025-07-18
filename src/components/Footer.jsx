import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

// ---CONFIGURATION---
// Replace these with your actual URLs
const GITHUB_URL = 'https://github.com/shvbhii';
const LINKEDIN_URL = 'https://linkedin.com/in/shvbhi';
const CREATOR_NAME = 'Shubhi Sharma';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>View Source on GitHub</span>
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>Connect via LinkedIn</span>
        </a>
      </div>
      <div className="footer-credit">
        <p>Made by {CREATOR_NAME}</p>
      </div>
    </footer>
  );
}

export default Footer;