// Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterMobileView.css';

import { navLinks } from '../../constants/helper.js';

const FooterMobileView = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigationClick = (link) => {
    if (!link) {
      return null;
    }

    navigate(link);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer className="footer">
      <div className="logo">
        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182290/logo_aa9m3n.svg"} alt="LYD Housing Logo" />
      </div>
      <div className="social-media-icons">
        
        <p onClick={() => handleSocialMediaClick('https://instagram.com')}><img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720181959/Instagram_yhfyd7.svg"} alt="Instagram" loading='lazy' /></p>
        <p onClick={() => handleSocialMediaClick('https://facebook.com')}><img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720181947/Facebook_vdftwz.svg"} alt="Facebook" loading='lazy' /></p>
        <p onClick={() => handleSocialMediaClick('https://x.com')}><img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720181965/TwitterX_wgqurf.svg"} alt="X" loading='lazy' /></p>
      </div>
      <nav className="footer-nav">
      <h2> Quick Links </h2>
        {navLinks.map((item) => (
          <p key={item.id} onClick={() => handleNavigationClick(item.link)}>{item.title}</p>
        ))}
      </nav>
      <div className="contact-info-mobile">
      <h2> Reach Us </h2>
        <p className='locate' onClick={() => window.open("tel:+16262464614", "_blank")}>+1 6262464614</p>
      </div>
      <div className="location-info">
        {/* <p>Locate Us</p> */}
        <p className='locate' onClick={() => window.open("https://maps.app.goo.gl/Ez3spstSczxtgAQZ8", "_blank")}>17 Springdale Way
          Mechanicsburg,
          P.A.17050, USA</p>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} HOMES, All Rights Reserved.</p>
        <p>Designed & Developed by<span className="company-link" onClick={() => window.open('https://www.pitamaas.com/', '_blank', 'noopener,noreferrer')}> {' '}PITAMAAS</span></p>
      </div>
    </footer>
  );
};

export default FooterMobileView;
