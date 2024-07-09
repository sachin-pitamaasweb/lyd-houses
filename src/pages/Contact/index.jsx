import React from "react";
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from '@mui/material';

import Banner from "../../common/Banner/index.jsx";


import { webName } from "../../constants/helper.js";
import ContactForm from "../../components/ContactForm/index.jsx";

const Conact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const items = [
    {
      imgUrl: isMobile ? 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg' : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177043/img-1_werkle.svg',
      title: 'Turning Dreams into Reality',
      description: 'Description for Image 1'
    },
    {
      imgUrl: isMobile ? 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg' : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
      title: 'Creating Beautiful Spaces',
      description: 'Description for Image 2'
    },
    {
      imgUrl: isMobile ? 'https://res.cloudinary.com/dtivafy25/image/upload/v1720177007/home_ktah2y.svg' : 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/home_nuzo8h.svg',
      title: 'Innovative Designs',
      description: 'Description for Image 3'
    }
  ];
    return (
        <>
        <Helmet>
            <title>{webName} - Contact Us</title>
        </Helmet>
            <Banner
                isSearch={false}
                items={items}
                title="Homes Built with Heart"
                isMobile={isMobile}
            />
            <ContactForm />
        </>
    )
}
export default Conact