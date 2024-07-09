import React from "react";
import { Grid } from "@mui/material";

import "./style.css";


const imgUrl = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720180623/img-2_a9ye6i.svg'
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720180620/img-3_mwd1x4.svg'
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720180620/img-3_mwd1x4.svg'
    },
    {
        id: 4,
        img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720180616/img-5_nyzniy.svg'
    },
]
const AboutImage = () => {
    return (
        <>
            <Grid container className="about-image" spacing={2}>
                {
                    imgUrl.map((image) => (
                        <Grid item xs={12} sm={12} md={3} lg={3} key={image.id} className="image-section">
                            <img src={image.img} alt="About"  loading="lazy" />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
};

export default AboutImage;