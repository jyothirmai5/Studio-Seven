import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickCarousel.css'; // Create a CSS file for custom styling
import Image1 from '../assets/banner/hero_banner_pc/studioseven_hero_banner_1.jpg';
import Image2 from '../assets/banner/hero_banner_pc/studioseven_hero_banner_2.jpg';
import Image3 from '../assets/banner/hero_banner_pc/studioseven_hero_banner_3.jpg';
import Image4 from '../assets/banner/hero_banner_pc/studioseven_hero_banner_4.jpg';

const images = [
  Image1,
  Image2,
  Image3,
  Image4
];

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;