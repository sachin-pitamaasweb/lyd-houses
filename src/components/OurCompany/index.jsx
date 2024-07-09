import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";

import "./style.css";

const  OurCompanyImage ="https://res.cloudinary.com/dtivafy25/image/upload/v1720180618/img-1_twhhrk.svg";

const OurCompany = () => {

    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Grid container className="our-company" spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} className="company-section">
                    <div className="company-content">
                        <h2>Inside</h2>
                        <h1>OUR COMPANY</h1>
                        <p>
                            At <span className="highlight">LYD Housing</span>, we believe in building more than just houses; we create homes where families can thrive and memories are made. Our team is dedicated to crafting high-quality, personalized homes that reflect your unique style and needs. Join our community and let us help you <span className="highlight">build the home of your dreams.</span>
                        </p>
                        <button className="get-in-touch-button" onClick={handleNavigateToContact}>GET IN TOUCH</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="company-image">
                    <img src={OurCompanyImage} alt="Company"  loading="lazy" />
                </Grid>
            </Grid>
        </>
    )
};
export default OurCompany;