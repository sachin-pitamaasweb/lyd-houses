// src/Banner.js
import React, { useState, useEffect, useCallback } from 'react';

import { ArrowBack, ArrowForward } from '@mui/icons-material';

import './style.css';



const Banner = ({ isSearch, title, items, isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Function to move to the next item
    const goToNext = useCallback(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
            setIsAnimating(false);
        }, 100); // Adjust the timeout to match your desired animation duration
    }, [items.length]);

    // Function to move to the previous item
    const goToPrev = useCallback(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
            setIsAnimating(false);
        }, 100); // Adjust the timeout to match your desired animation duration
    }, [items.length]);

    useEffect(() => {
        const interval = setInterval(goToNext, 3000);
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [goToNext]);

    // Function to handle manual click on previous button
    const handlePrev = () => {
        if (!isAnimating) {
            goToPrev();
        }
    };

    // Function to handle manual click on next button
    const handleNext = () => {
        if (!isAnimating) {
            goToNext();
        }
    };
    return (
        <div className={isSearch ? "banner" : "banner-without-row"}>
            <div className={isSearch ? "banner-content" : "banner-content-without-search"}>
                <div className="banner-text">
                    <h1>{items[currentIndex].title}</h1>
                </div>
            </div>
            {isSearch && (
                <div className="search-container">
                    <h2>Search Communities</h2>
                    <div className="search-options">
                        <div className="search-option">
                            <select>
                                <option>Minimum Price</option>
                            </select>
                        </div>
                        <div className="search-option">
                            <select>
                                <option>Maximum Price</option>
                            </select>
                        </div>
                        <div className="search-option">
                            <select>
                                <option>Counties</option>
                            </select>
                        </div>
                        <div className="search-option">
                            <select>
                                <option>School District</option>
                            </select>
                        </div>
                    </div>
                    <button className="search-button">SEARCH</button>
                </div>
            )}
            <div className={isSearch ? "banner-image" : "banner-image-without-search"}>
                <img
                    src={items[currentIndex].imgUrl}
                    alt="Dream Home"
                    style={{ transition: 'opacity 1s ease-in-out' }} 
                     loading="lazy"
                />
                {isMobile ? null :
                    (
                        <div className="banner-buttons">
                            <button className="arrow-button left" onClick={handlePrev}>
                                <ArrowBack />
                            </button>
                            <button className="arrow-button right" onClick={handleNext}>
                                <ArrowForward />
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Banner;
