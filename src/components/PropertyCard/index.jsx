import React from 'react';
import { useNavigate } from 'react-router-dom';
import MoveIcon from '../../components/MoveIcon/index.jsx';

import './style.css';

const PropertyCard = ({ property }) => {
  console.log('property Desktop', property);
  const navigate = useNavigate();
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
          <MoveIcon 
           home={property.home}
           bed={property.bed}
           bath={property.bath}
           sqft={property.sq}
           garages={property.garages}
          />
          {/* <p className="property-price">{property.price}</p> */}
        </div>
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