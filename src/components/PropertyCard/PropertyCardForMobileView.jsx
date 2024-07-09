import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



import './PropertyCardForMobileView.css';

import MoveIcon from '../MoveIcon';

const PropertyCardForMobileView = ({ property }) => {

    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Card className="property-card-mobile">
        <CardMedia
            component="img"
            height="200"
            image={property.imgUrl}
            alt={property.title}
            className='img-card-mobile'
             loading="lazy"
        />
        <CardContent>
            <Typography variant="h6" component="div" className='typo-title-mobile'>
                {property.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" className='typo-details-mobile'>
                {property.subTitle}
                <br />
            </Typography>
            <div className='span-div'><span style={{ textAlign: 'left' }}>{property.propertySummary}</span></div>
            <Typography variant="body2" color="textSecondary" className='typo-address-mobile'>
                {property.propertyAddress}
            </Typography>
            <MoveIcon />
            <Box className="property-price-mobile">
                <AttachMoneyIcon />
                <Typography variant="body2">${property.price}</Typography>
            </Box>
            <Button variant="contained" className="contact-button-mobile" onClick={handleContact}>
                Contact Us
            </Button>
        </CardContent>
    </Card>
    );
}

export default PropertyCardForMobileView;