import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo/logo.svg';

import './style.css';


import { navLinks } from '../../constants/helper.js';

const iconsData = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720181959/Instagram_yhfyd7.svg',
        alt: 'instagram',
        url: ''
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720181947/Facebook_vdftwz.svg',
        alt: 'facebook',
        url: ''
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720181965/TwitterX_wgqurf.svg',
        alt: 'twitter',
        url: ''
    },
];


const Footer = () => {
    const navigate = useNavigate();
    const handleCompanyLinkClick = () => {
        window.open('https://www.pitamaas.com/', '_blank', 'noopener,noreferrer');
    };
    const handleSocialMediaClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={Logo} alt="Landmark Homes" />
                    </div>
                    <div className="footer-social">
                        {iconsData.map((icon) => (
                            <img src={icon.img} alt={icon.alt} key={icon.id} className="social-icon" onClick={() => handleSocialMediaClick(icon.url)} loading='lazy' />
                        ))}
                    </div>
                    <div className="footer-links">
                        <ul>
                            {
                                navLinks.map((item) => (
                                    <>
                                        <li onClick={() => handleNavigationClick(item.link)} key={item.id}>{item.title}</li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <p className='conact-text'>Contact US</p>
                        <p onClick={() => window.open("tel:+16262464614", "_blank")} style={{ cursor: 'pointer' }}>+1 6262-464-614</p>
                        <p className='locate'>Locate Us</p>
                        <p onClick={() => window.open("https://maps.app.goo.gl/Ez3spstSczxtgAQZ8", "_blank")} style={{ cursor: 'pointer' }}>17 Springdale Way
                            Mechanicsburg,
                            P.A.17050, USA</p>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>© {currentYear} HOMES, All Rights Reserved.</p>
                    <p>Designed by <span className='company-link' onClick={handleCompanyLinkClick}>PITAMAAS</span></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
