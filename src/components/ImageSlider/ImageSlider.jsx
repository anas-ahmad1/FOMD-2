import React, { useState, useEffect } from "react";
import image1 from "../../assets/gallery/Gallery16.jpg";
import image2 from "../../assets/gallery/Gallery25.jpg";
import image3 from "../../assets/gallery/Gallery29.jpg";
import image4 from "../../assets/gallery/Gallery32.jpg";
import image5 from "../../assets/gallery/Gallery40.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
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
