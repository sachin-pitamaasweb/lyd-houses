import React from "react";
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from "@mui/material";

import Banner from "../../common/Banner/index.jsx";

import Gallery from '../../components/Gallery/index.jsx';

import { webName } from "../../constants/helper.js";

const items = [
  {
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/build_bevmnq.svg',
    title: 'Turning Dreams into Reality',
    description: 'Description for Image 1'
  },
  {
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720174730/about_ionz4d.svg',
    title: 'Creating Beautiful Spaces',
    description: 'Description for Image 2'
  },
];
const WhatWeBuild = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Helmet>
        <title>{webName} - What We Build</title>
      </Helmet>
      <Banner
        isSearch={false}
        items={items}
        title="Experience the Difference"
        isMobile={isMobile}
      />
      <Gallery />
    </>
  )
}

export default WhatWeBuild