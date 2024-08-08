import React from 'react';

import { Grid, Box } from '@mui/material';

import Text from "../../common/Text/index.jsx";


import './style.css';

const images = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720421262/build_zfndsq.svg',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720421279/build-1_v9mawt.svg',
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h5>What we</h5>
      <h4>BUILD?</h4>
      <Text
        Title="What are the advantages of light steel frame houses construction?"
        text="light steel gauge frame houses construction is stronger and more durable than wood or concrete construction. Because light gauge steel framing is not biodegradable, it is not susceptible to decay or termite attack, and is moisture resistant so it will not shrink, rot, or warp in adverse weather conditions"
      />
      <div className='grid-div-gallery'>
        <Grid container spacing={2} className='grid-container'>
          {/* {images.map((item, index) => ( */}
          <Grid item xs={12} sm={12} md={12} lg={12} className="gallery-item">
            <img src={images[0].img} alt={`Gallery ${images[0].id}`} className='gallery-item-img' loading="lazy" />
          </Grid>
          {/* )
          )} */}
          <Box p={2}>
            <h4 className="title">Our Vision & Services</h4>
            <p className="text">
              At LYD Housing LLC, we are dedicated to crafting dream homes that embody your dreams, aspirations, and lifestyle. Our mission is to deliver high-quality, affordable, and environmentally friendly houses that cater to your diverse needs.
            </p>
            <br />
            <p className="text">
              From residential to commercial development, from single-family homes to multi-family units, and large-scale retail, we develop properties that suit your needs. Our custom home building service brings your vision to life with our experience and expertise. Bring us your dream plan, and we will ensure you live in your dream house.
            </p>
          </Box>
          <Grid item xs={12} sm={12} md={12} lg={12} className="gallery-item">
            <img src={images[1].img} alt={`Gallery ${images[1].id}`} className='gallery-item-img' loading="lazy" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;
