import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";


const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/reg/" },
    { icon: FaTwitter, url: "https://x.com/?lang=en" },
    { icon: FaInstagram, url: "https://www.instagram.com/alhamd_art/" },
    { icon: FaGithub, url: "https://github.com/Bismah-1" },
    { icon: FaPinterestP, url: "https://www.pinterest.com/" },
  ];

  return (
    <footer className="footer">
      <div className="footer-social">
        {socialLinks.map(({ icon: Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label={`Link to social media`}
          >
            <Icon />
          </a>
        ))}
      </div>

      <nav className="footer-nav">
        {["Home", "About", "Menu", "Products", "Review", "Contact", "Blogs"].map((item, idx) => (
          <a key={idx} href={`#${item.toLowerCase()}`} className="footer-link">
            {item}
          </a>
        ))}
      </nav>

    
      <p className="footer-copy">Created by Bismah & Zartash | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
