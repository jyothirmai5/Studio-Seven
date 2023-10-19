import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickCarousel.css'; // Create a CSS file for custom styling
import Image1 from '../assets/Bedroom/B1/image1.jpeg';
import Image2 from '../assets/Bedroom/B1/image2.jpeg';

const images = [
 Image1,
 Image2
];

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:true,
    autoplay:true,
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