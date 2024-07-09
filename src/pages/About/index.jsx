import React from "react";
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from '@mui/material';


import Banner from "../../common/Banner/index.jsx";
import Text from "../../common/Text/index.jsx";

import OurCompany from "../../components/OurCompany/index.jsx";
import AboutImage from "../../components/AboutImage/index.jsx";

import { webName } from "../../constants/helper.js";

const items = [
    {
      imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/about_ionz4d.svg',
      title: 'Turning Dreams into Reality',
      description: 'Description for Image 1'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
      title: 'Creating Beautiful Spaces',
      description: 'Description for Image 2'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
      title: 'Innovative Designs',
      description: 'Description for Image 3'
    }
  ];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Helmet>
                <title>{webName} - About Us</title>
            </Helmet>
            <Banner
                isSearch={false}
                items={items}
                title="Turning Dreams into Reality"
                isMobile={isMobile}
            />
            <OurCompany />
            <Text
                text={`
                  "Home is a shelter from storms – all sorts of storms. It is the place where we are loved and where we can love.
                   It is the heart of life and the source of all dreams."
                  - Wilferd Peterson
            `}
                className="about-text"
                isText={true}
            />
            <AboutImage />
        </>
    )
}

export default About