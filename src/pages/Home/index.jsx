import React from 'react';
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from '@mui/material';

//common
import Banner from '../../common/Banner/index.jsx';

//components
import Experience from '../../components/Experience/index.jsx';
import PropertyCard from '../../components/PropertyCard/index.jsx';
import CraftedwithLove from '../../components/CraftedwithLove/index.jsx';
import GetConnected from '../../components/GetConnected/index.jsx';
import Testimonials from '../../components/Testimonials/index.jsx';

//mobile
import ExperienceForMobile from '../../components/Experience/ExperienceForMobile.jsx';
import PropertyCardForMobileView from '../../components/PropertyCard/PropertyCardForMobileView.jsx';

import { webName, EstatesCard } from '../../constants/helper.js';

import './style.css';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile1 = useMediaQuery(theme.breakpoints.down('md'));
  const items = [
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/home_nuzo8h.svg',
      title: 'Turning Dreams into Reality',
      description: 'Description for Image 1'
    },
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
      title: 'Creating Beautiful Spaces',
      description: 'Description for Image 2'
    },
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177043/img-1_werkle.svg',
      title: 'Innovative Designs',
      description: 'Description for Image 3'
    }
  ];


  return (
    <>
      <Helmet>
        <title>{webName} - Home</title>
      </Helmet>
      <Banner
        isSearch={false}
        title="Your Dream Home Awaits"
        items={items}
        isMobile={isMobile}
      />

      {isMobile1 ? <ExperienceForMobile /> : <Experience />}
      <div className={isMobile ? "home-estates-mobile" : "home-estates"}>
        {isMobile ? (
          EstatesCard.map((property) => (
            <PropertyCardForMobileView key={property.id} property={property} />
          ))
        ) : (
          EstatesCard.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}


      </div>
      <CraftedwithLove />
      <GetConnected />
      <Testimonials />
    </>
  );
}
export default Home;