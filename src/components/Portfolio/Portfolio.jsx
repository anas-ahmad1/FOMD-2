import "./Portfolio.css";
import Slider from "react-slick";

const Portfolio = () => {
  const images = [
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=533&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=533&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=533&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=533&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=533&h=800&fit=crop",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    focusOnSelect: true,
    arrows: false,
    swipeToSlide: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      className="portfolio-carousel"
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "90vh",
        padding: "40px 10px",
      }}
    >
      <h1 className="featured-title">FEATURED PORTFOLIO</h1>

      <style>{`
        .featured-title {
          text-align: center;
          color: #ffffff;
          font-size: 3rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          margin-bottom: 80px;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .featured-title {
            font-size: 2.5rem; /* smaller font below 900px */
            letter-spacing: 0.25em;
          }
        }

        @media (max-width: 768px) {
          .featured-title {
            font-size: 2rem; /* smaller font below 768px */
            letter-spacing: 0.2em;
            margin-bottom: 0px;
          }
        }

        .portfolio-carousel .slick-slider {
          max-width: 1400px;
          margin: 0 auto;
          overflow: visible;
          padding-top: 50px;
        }

        .portfolio-carousel .slick-list {
          overflow: visible !important;
          margin: 0 auto;
        }
        
        .portfolio-carousel .slick-track {
          display: flex !important;
          margin-left: 0 !important;
        }

        .portfolio-carousel .slick-slide {
          padding: 0 12rem;
          transition: all 0.3s ease;
          opacity: 0.5;
          transform: scale(0.85) translateY(60px);
          display: flex;
          align-items: flex-end;
        }

        .portfolio-carousel .slick-slide.slick-center {
          opacity: 1;
          transform: scale(1.05) translateY(-30px);
          z-index: 10;
        }

        .portfolio-carousel .slick-slide > div {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          width: 100%;
        }


        .portfolio-carousel .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portfolio-carousel .slick-dots {
          bottom: -50px;
        }

        .portfolio-carousel .slick-dots li button:before {
          font-size: 12px;
          color: #ffffff;
          opacity: 0.5;
        }

        .portfolio-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #ffffff;
        }

        // .portfolio-carousel .image-container {
        //   position: relative;
        //   width: 100%;
        //   padding-bottom: 150%; /* 2:3 aspect ratio (height = 1.5x width) */
        //   overflow: hidden;
        // }

        .portfolio-carousel .image-container {
          position: relative;
          height: 70vh; /* Set height first */
          width: calc(70vh * 2 / 3); /* Calculate width based on height (2:3 ratio) */
          margin: 0 auto; /* Center horizontally */
          max-width: 100%; /* Prevent overflow on small screens */
          overflow: hidden;
        }

        /* Gradually reduce padding for smaller screens */
        @media (max-width: 1536px) {
          .portfolio-carousel .slick-slide {
            padding: 0;
          }
        }

        @media (max-width: 1280px) {
          .portfolio-carousel .image-container {
            position: relative;
            height: 60vh; /* Set height first */
            width: calc(60vh * 2 / 3); /* Calculate width based on height (2:3 ratio) */
            margin: 0 auto; /* Center horizontally */
            max-width: 100%; /* Prevent overflow on small screens */
            overflow: hidden;
          }
        }

        // @media (max-width: 1024px) {
        //   .portfolio-carousel .slick-slide {
        //     padding: 0 4rem;
        //   }
        // }

        // @media (max-width: 900px) {
        //   .portfolio-carousel .slick-slide {
        //     padding: 0 2rem;
        //   }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .portfolio-carousel .slick-slide {
            opacity: 1;
            transform: scale(1);
            padding: 0;
            align-items: center;
          }

          .portfolio-carousel .slick-slide.slick-center {
            transform: scale(1) translateY(0);
          }

          .portfolio-carousel .image-container {
            width: 500px;
            max-height: 750px; /* 500px * 1.5 = 750px */
            padding-bottom: 0; /* Remove percentage-based height */
            height: 750px; /* Fixed height */
            margin: 0 auto;
            
          }
        }

        /* Allow images to scale down on very small screens */
        @media (max-width: 500px) {
          .portfolio-carousel .image-container {
            max-width: 100%;
            max-height: none;
            height: auto;
            padding-bottom: 150%; /* Restore ratio-based sizing */
          }
        }

        /* Ensure proper spacing on larger screens */
        @media (min-width: 769px) {
          .portfolio-carousel .slick-list {
            overflow: visible !important;
          }
          
          .portfolio-carousel .slick-track {
            display: flex !important;
            align-items: flex-end;
          }   
        }
      `}</style>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <div className="image-container">
                <img src={img} alt={`Portfolio ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
