import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

//mui
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import { navLinks } from "../../constants/helper.js";

import './Header.css';

const HeaderForMobileView = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleLogoClick = () => {
        navigate('/');
    };

    const handleMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <>
            <header className="header">
                <div
                    className="logo"
                    onClick={handleLogoClick}
                >
                    <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182290/logo_aa9m3n.svg"} alt="Landmark Homes" loading="lazy" />
                </div>
                <div className='menu-icon' onClick={handleMenuClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
            <Drawer
                anchor="top"
                open={isMobileMenuOpen}
                onClose={handleMenuClick}
                className='drawer-mobile'
            >
                <List className="drawer-content">
                    {navLinks.map((link, index) => (
                        <ListItem button component={Link} to={link.link} onClick={handleMenuClick} key={index}>
                            <ListItemText primary={link.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default HeaderForMobileView;