// src/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone } from '@mui/icons-material';
import { Link as MuiLink } from '@mui/material';

import './Header.css';

import { navLinks } from '../../constants/helper.js';

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div
        className="logo"
        onClick={handleLogoClick}
      >
        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182290/logo_aa9m3n.svg"} alt="Landmark Homes" loading="lazy" />
      </div>
      <nav className="nav">
        <ul>
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className={link.link === activeLink ? 'active' : ''}
                  onClick={() => handleLinkClick(link.link)}
                >
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="contact">
        <MuiLink href="tel:+1789123456" b color="inherit" underline="none" display="flex" alignItems="center">
          <Phone /> +1 789 123 456
        </MuiLink>
      </div>
    </header>
  );
};

export default Header;
