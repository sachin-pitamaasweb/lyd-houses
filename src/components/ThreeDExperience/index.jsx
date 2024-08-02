import React from 'react';
import { useMediaQuery } from '@mui/material';

const ThreeDExperience = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const containerStyle = {
    padding: isMobile ? '0' : '50px',
    
  };

  const titleStyle = {
    fontSize: 'calc(1em + 1vw)', 
    marginBottom: '20px',
    padding: isMobile ?'10px 20px 0px': '0px',
  };

  const iframeTitleStyle = {
    fontSize: 'calc(0.75em + 0.5vw)', 
    padding: isMobile ?'0px 20px 5px': '0px',
  };

  const iframeStyle = {
    width: '100%',
    height: 'calc(100vh - 200px)', 
    border: 'none',
    borderRadius: '10px',
    // padding: isMobile ? '20' : '0px',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Experience</div>
      <div style={iframeTitleStyle}>3D Viewer</div>
      <iframe
        style={iframeStyle}
        src="https://yun.kujiale.com/design/3FO3OQ995PI9/show"
        title="3D Viewer"
      ></iframe>
    </div>
  );
};

export default ThreeDExperience;
