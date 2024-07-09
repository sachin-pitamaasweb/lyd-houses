import React from 'react';
import Slider from 'react-slick';
import './ExperienceForMobile.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExperienceForMobile = () => {
  const slides = [
   {
    id: 1,
    name: 'Supper Area',
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720179952/unsplash_HR1x0_5dakE_omqrld.svg'
   },
   {
    id:2,
    name: 'Kitchen',
    imgUrl:'https://res.cloudinary.com/dtivafy25/image/upload/v1720179950/unsplash_AQl-J19ocWE_foaxho.svg'
   },
   {
    id:3,
    name: 'Living Room',
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720179948/unsplash_yMhBYpf64sM_oztu5q.svg',
   },
   {
    id:4,
    name:'Garage',
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720179941/unsplash_HASgVRE48KY_sbiti7.svg'
   },
   {
    id: 5,
    name: 'Clean Space',
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720179941/unsplash_5MG8cQbw-T8_hpwqec.svg'
   },
   {
    id: 6,
    name:'Pool Area',
    imgUrl:'https://res.cloudinary.com/dtivafy25/image/upload/v1720180299/unsplash_so3wgJLwDxo_fkqezt.svg'
   },
   {
    id: 7,
    name: 'Cozy Area',
    imgUrl: 'https://res.cloudinary.com/dtivafy25/image/upload/v1720179944/unsplash_T5BF4OyQLwU_ll36km.svg',
   },
   {
    id: 8,
    name: 'Fitness Studio',
    imgUrl:'https://res.cloudinary.com/dtivafy25/image/upload/v1720179949/full-shot-man-exercising-with-gym-ball_2_hvbq7z.svg'
   }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Screens less than 768px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600, // Screens less than 480px wide
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <div className="experience-text">
        <h4>What You’ll Get</h4>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="overlay">
              <span>{slide.name}</span>
            </div>
            <img src={slide.imgUrl} alt={`Slide ${index}`} className="carousel-image" loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceForMobile;
