import React from "react";
import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from "@mui/material";

import Banner from "../../common/Banner/index.jsx";
// import SearchForm from "../../components/SearchForm/index.jsx";
import PropertiesGrid from "../../components/PropertiesGrid/index.jsx";

import { webName } from "../../constants/helper.js";

import B1 from '../../assets/banner/about.svg';
import B2 from '../../assets/banner/build.svg';


const items = [
  {
    imgUrl: B1,
    title: 'Turning Dreams into Reality',
    description: 'Description for Image 1'
  },
  {
    imgUrl: B2,
    title: 'Creating Beautiful Spaces',
    description: 'Description for Image 2'
  },
  {
    imgUrl: B1,
    title: 'Innovative Designs',
    description: 'Description for Image 3'
  }
];

const QuickMoveIn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Helmet>
        <title>{webName} - Quick Move-In</title>
      </Helmet>
      <Banner
        isSearch={false}
        items={items}
        title="Quick Move-In"
        isMobile={isMobile}
      />
      {/* <SearchForm /> */}
      <PropertiesGrid />
    </>
  )
}
export default QuickMoveIn