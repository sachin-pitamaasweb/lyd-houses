import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import PropertyCard from '../PropertyCardForMove/index.jsx';

// import Img1 from '../../assets/move/img-1.svg'

import './style.css';

    const properties = [
        {
            image: "https://res.cloudinary.com/dtivafy25/image/upload/v1720182494/img-1_asuirm.svg",
            title: 'The Residence',
            details: 'Coming Soon in...',
            // details1: 'Open Floor Plan with 5 Bedrooms and a Loft',
            address: 'PA 171050, Highly Rated, C.U. School District',
            home: '2 Stories',
            beds: '4 Beds',
            baths: '4 Baths',
            sqft: 4500,
            price: '618,100',
            isDownload: false
        },
        {
            image: "https://res.cloudinary.com/dtivafy25/image/upload/v1720182504/img-2_ysb6cn.svg",
            title: 'The Villa',
            // details: 'Cumberland Estate Drives',
            // details1: 'Open Floor Plan with 5 Bedrooms and a Loft',
            address: '53, Cumberland Estate Drive, Mechanicsburg P.A, 17050, USA',
            home: '2 Stories',
            beds: '4 Beds',
            baths:' 4½ Baths',
            sqft: '5000 sqft',
            price: '618,100',
            isDownload: false
        },
        {
            image: "https://res.cloudinary.com/dtivafy25/image/upload/v1720177043/img-1_werkle.svg",
            title: 'The Manor',
            details: 'Mountain View Estates',
            // details1: 'Open Floor Plan with 5 Bedrooms and a Loft',
            address: '18 Town House at Derry Street, Harrisburg, PA 200101',
            home: '2 Stories',
            beds: '3 Beds',
            baths: '2 baths',
            sqft: '3335 sqft',
            price: '1,200,000',
            isDownload: false
        },
    ];

const PropertiesGrid = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    console.log('isFormSubmitted with grid', isFormSubmitted);

    useEffect(() => {
        const storedIsFormSubmitted = sessionStorage.getItem('isFormSubmitted');
        if (storedIsFormSubmitted) {
            setIsFormSubmitted(JSON.parse(storedIsFormSubmitted));
        }
    }, []);

      useEffect(() => {
        sessionStorage.setItem('isFormSubmitted', JSON.stringify(isFormSubmitted));
    }, [isFormSubmitted]);

    console.log('isFormSubmitted with grid', isFormSubmitted);


    return (
        <Box className="properties-grid-container">
            <Typography variant="h4" component="div" gutterBottom className='typo-text'>
                Ready to Welcome You
            </Typography>
            <Grid container spacing={4} className='mui-grid'>
                {properties.map((property, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={4} className='card-item-grid'>
                        <PropertyCard
                        isFormSubmitted={isFormSubmitted}
                        setIsFormSubmitted={setIsFormSubmitted}
                        property={property} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PropertiesGrid;
