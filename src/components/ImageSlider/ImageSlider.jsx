import React, { useState, useEffect } from "react";
import image1 from "../../assets/carousalImg1.jpeg";
import image2 from "../../assets/carousalImg2.jpeg";
import image3 from "../../assets/carousalImg3.jpeg";

const images = [
  image1,
  image2,
  image3
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[index]} alt="Sliding Image" />
    </div>
  );
};

export default ImageSlider;
