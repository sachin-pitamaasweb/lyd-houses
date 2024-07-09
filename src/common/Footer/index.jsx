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
                        <p onClick={() => window.open("tel:+1123456789", "_blank")}>+1 1234 56 789</p>
                        <p className='locate'>Locate Us</p>
                        <p onClick={() => window.open("https://www.google.com/maps/place/PITAMAAS+PVT.+LTD/@30.8863979,75.8001616,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x391a83fa24e07b1b:0xc4b205480ff0d3e6!2sPitamaas,+Scf-61,+Main+Market,+opp.+CFC+School,+F+Block,+Bhai+Randhir+Singh+Nagar,+Ludhiana,+Punjab+141012!2m2!1d75.8027365!2d30.8863933!3m5!1s0x391a83fa24e07b1b:0xc4b205480ff0d3e6!8m2!3d30.8863933!4d75.8027365!16s%2Fg%2F1pp2wwk70?entry=ttu", "_blank")}>ABC Street, York City</p>
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
