import React, { useState } from 'react';
import './style.css';

import Text from '../../common/Text/index.jsx';

const Experience = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="experience">
            <div className="experience-text">
                <h4>What You’ll Get Experience</h4>
            </div>
            <div className="container">
                <div className="gallery">
                    <div
                        className={`img-box ${!isHovered ? 'first-default' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Supper Area</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Kitchen</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Living Room</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Garage</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Clean Space</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Pool Area</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Cozy Area</h3>
                    </div>
                    <div className="img-box"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Fitness Studio</h3>
                    </div>
                </div>
            </div>
            <Text
                text={`
          A home is more than just a shelter; it's a sanctuary where memories are made, dreams are nurtured,
          and love is always present. It's a place where you find comfort, joy, and a sense of belonging. At Landmark Homes,
          we believe every home should reflect the unique spirit of the family within, creating a haven of warmth, beauty,
          and personal expression.
        `}
            />
        </div>
    );
};

export default Experience;
