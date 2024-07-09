import React from 'react';

import { Grid } from '@mui/material';

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
        Title="What are the advantages of light steel framing construction?"
        text="Light gauge steel construction is stronger and more durable than wood or concrete construction. Because light gauge steel framing is not biodegradable, it is not susceptible to decay or termite attack, and is moisture resistant so it will not shrink, rot, or warp in adverse weather conditions"
      />
      <div className='grid-div-gallery'>
        <Grid container spacing={2} className='grid-container'>
          {images.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} className="gallery-item">
              <img src={item.img} alt={`Gallery ${index + 1}`} className='gallery-item-img' loading="lazy" />
            </Grid>
          )
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;
