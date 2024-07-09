import React, { Suspense } from "react";
import { useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./common/Header/index.jsx";
import Loader from "./common/Loader/index.jsx";
import Footer from "./common/Footer/index.jsx";

//Mobile View
import HeaderForMobileView from "./common/Header/HeaderForMobileView.jsx";
import FooterMobileView from "./common/Footer/FooterMobileView.jsx";

const Home = React.lazy(() => import("./pages/Home/index.jsx"));
const About = React.lazy(() => import("./pages/About/index.jsx"));
const WhatWeBuild = React.lazy(() => import("./pages/WhatWeBuild/index.jsx"));
const QuickMoveIn = React.lazy(() => import("./pages/QuickMoveIn/index.jsx"));
const Contact = React.lazy(() => import("./pages/Contact/index.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound/index.jsx"));

const  App=()=> {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
   <>
   <Router>
   {isMobile ? <HeaderForMobileView /> : <Header />}
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/what-we-build" element={<WhatWeBuild />} />
      <Route path="/move-in" element={<QuickMoveIn />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
    { isMobile ? <FooterMobileView /> : <Footer />}
   </Router>
   </>
  );
}

export default App;
