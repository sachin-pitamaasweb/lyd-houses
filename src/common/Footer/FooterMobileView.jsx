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
        {navLinks.map((item) => (
          <p key={item.id} onClick={() => handleNavigationClick(item.link)}>{item.title}</p>
        ))}
      </nav>
      <div className="contact-info-mobile">
        <p>Contact US</p>
        <p className='locate' onClick={() => window.open("tel:+1123456789", "_blank")}>+1 1234 56 789</p>
      </div>
      <div className="location-info">
        <p>Locate Us</p>
        <p className='locate' onClick={() => window.open("https://www.google.com/maps/place/PITAMAAS+PVT.+LTD/@30.8863979,75.8001616,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x391a83fa24e07b1b:0xc4b205480ff0d3e6!2sPitamaas,+Scf-61,+Main+Market,+opp.+CFC+School,+F+Block,+Bhai+Randhir+Singh+Nagar,+Ludhiana,+Punjab+141012!2m2!1d75.8027365!2d30.8863933!3m5!1s0x391a83fa24e07b1b:0xc4b205480ff0d3e6!8m2!3d30.8863933!4d75.8027365!16s%2Fg%2F1pp2wwk70?entry=ttu", "_blank")}>ABC Street, York City</p>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} HOMES, All Rights Reserved.</p>
        <p>Designed by<span className="company-link" onClick={() => window.open('https://www.pitamaas.com/', '_blank', 'noopener,noreferrer')}> {' '}PITAMAAS</span></p>
      </div>
    </footer>
  );
};

export default FooterMobileView;
