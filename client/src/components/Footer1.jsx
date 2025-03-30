import React from 'react';
import './Footer1.css';

const Footer = () => {
    return (
      <footer className="footer bg-black">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section animate__animated animate__fadeIn">
              <h3 className="footer-brand">AITools</h3>
              <p className="footer-description">
                Discover and integrate the latest AI tools automatically. Stay ahead with cutting-edge technology.
              </p>
              <div className="social-links">
                <SocialIcon href="#" iconPath="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                <SocialIcon href="#" iconPath="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                <SocialIcon href="#" iconPath="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.819-.26.819-.578 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
              </div>
            </div>
  
            <FooterSection 
              title="Quick Links"
              items={['Home', 'Categories', 'Tools', 'Submit', 'About']}
              animationDelay="animate__delay-1s"
            />
  
            <FooterSection 
              title="Resources"
              items={['Privacy Policy', 'Terms of Service', 'Contact', 'FAQ']}
              animationDelay="animate__delay-2s"
            />
  
            <div className="newsletter-section animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="section-title">Newsletter</h3>
              <p className="newsletter-description">
                Stay updated with the latest AI tools and features.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <div className="footer-bottom">
            <p className="copyright">© 2024 AITools. All rights reserved.</p>
            <div className="policy-links">
              <a href="#" className="policy-link">Privacy Policy</a>
              <a href="#" className="policy-link">Terms of Service</a>
              <a href="#" className="policy-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  const SocialIcon = ({ href, iconPath }) => (
    <a href={href} className="social-link">
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d={iconPath} />
      </svg>
    </a>
  );
  
  const FooterSection = ({ title, items, animationDelay }) => (
    <div className={`footer-section animate__animated animate__fadeIn ${animationDelay}`}>
      <h3 className="section-title">{title}</h3>
      <ul className="footer-links">
        {items.map((item, index) => (
          <li key={index} className="footer-link-item">
            <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="footer-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Footer;