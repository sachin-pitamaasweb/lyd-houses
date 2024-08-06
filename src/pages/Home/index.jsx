import React from 'react';
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from '@mui/material';

//common
import Banner from '../../common/Banner/index.jsx';
import Text from '../../common/Text/index.jsx';

//components
import Experience from '../../components/Experience/index.jsx';
import PropertyCard from '../../components/PropertyCard/index.jsx';
import CraftedwithLove from '../../components/CraftedwithLove/index.jsx';
import GetConnected from '../../components/GetConnected/index.jsx';
// import Testimonials from '../../components/Testimonials/index.jsx';
import WhyChoose from '../../components/WhyChoose/index.jsx';

//mobile
import ExperienceForMobile from '../../components/Experience/ExperienceForMobile.jsx';
import PropertyCardForMobileView from '../../components/PropertyCard/PropertyCardForMobileView.jsx';

import { webName, EstatesCard } from '../../constants/helper.js';

import './style.css';
import ThreeDExperience from '../../components/ThreeDExperience/index.jsx';


const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile1 = useMediaQuery(theme.breakpoints.down('md'));
  const items = [
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/home_nuzo8h.svg',
      title: 'Your Dream Home Awaits',
      description: 'Description for Image 1'
    },
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1722596992/img-1_rf704d.png" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
      title: 'Experience the Difference',
      description: 'Description for Image 2'
    },
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1722596988/unsplash__HqHX3LBN18_gglu72.png" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177043/img-1_werkle.svg',
      title: 'Turning Dreams into Reality',
      description: 'Description for Image 3'
    },
    {
      imgUrl: isMobile ? "https://res.cloudinary.com/dtivafy25/image/upload/v1722596981/unsplash_1ddol8rgUH8_z6gdxh.png" : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177043/img-1_werkle.svg',
      title: 'Homes Built with Heart',
      description: 'Description for Image 3'
    },
  ];


  return (
    <>
      <Helmet>
        <title>{webName} - Home</title>
      </Helmet>
      <Banner
        isSearch={false}
        // title="Your Dream Home Awaits"
        items={items}
        isMobile={isMobile}
      />
      <Text
        startText="At"
        midText="LYD Housing LLC"
        endText="we are dedicated to crafting dream homes that embody your dreams, aspirations, and lifestyle. Our mission is to deliver high-quality, affordable, and environmentally friendly houses that cater to your diverse needs."
      />
      <ThreeDExperience />
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
      <div class="port">
        <div >
          <h3 class="porthead"> PORTABLE STORAGE</h3>

        </div>
        <div class="equgrid">
          <div class="box1">
            
          </div>
          <div className="boxi">
            <p class="boxit">
              Portable storage units featuring a steel frame and body with heavy-duty shutters. Available in a range of sizes to suit your needs.
            </p>
          </div>
        </div>
      </div>
      <CraftedwithLove />

      <WhyChoose />
      <GetConnected />
    </>
  );
}
export default Home;