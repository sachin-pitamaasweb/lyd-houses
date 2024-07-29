import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import MoveIcon from '../../components/MoveIcon/index.jsx';

import './style.css';

const PropertyCard = ({ property }) => {
  console.log('property Desktop', property);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleContactUsClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="property-card">
        <div className="property-card-image">
          <img src={property.imgUrl} alt={property.title} />
        </div>
        <div className="property-card-content">
          <h3>{property.title}</h3>
          <h4>{property.subTitle}</h4>
          <p>{property.propertySummary}</p>
          <p className="property-address">{property.propertyAddress}</p>
          <MoveIcon />
          <p className="property-price">{property.price}</p>
        </div>
        {/* <div className='wishlist' onClick={handleIconClick}>
          {isFavorite ? <FavoriteIcon sx={{ color: '#881A1B' }} /> : <FavoriteBorderIcon />}
        </div> */}
        <div className='overlay-button'>
          <div className='top-section'>
            <button className='contact-us' onClick={handleContactUsClick}>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  )
};
export default PropertyCard