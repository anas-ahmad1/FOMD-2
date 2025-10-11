import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with Neal and Puja was a delight. They provided guidance and calmness throughout the entire sale. I've already recommended them to my family and friends.",
      name: "Tony A",
      date: "12 Sep, 2025",
    },
    {
      id: 2,
      text: "We utilized their services and ended up with a much higher sales price. They even covered all repairs and necessary updates. We fully trusted their excellent negotiation skills.",
      name: "Paul S",
      date: "28 Jun, 2025",
    },
    {
      id: 3,
      text: "Puja and Neal listed our home and managed the renovations and staging beautifully. After inspections, they handled all repairs efficiently. We got much more than expected and are happy to refer them!",
      name: "Laura F",
      date: "15 Mar, 2025",
    },
    {
      id: 4,
      text: "We had a home in Friendswood that Puja and Neal sold for us. Their service and care were unbeatable. They helped us find contractors for small fixes, and we still ended up selling for over asking!",
      name: "Patsy",
      date: "22 Dec, 2024",
    },
    {
      id: 5,
      text: "Neal purchased my home for more than any other company offered. They closed on the exact day I chose and took the house as-is. Couldn’t have asked for a smoother process.",
      name: "Mervin",
      date: "03 Sep, 2024",
    },
    {
      id: 6,
      text: "Puja was a gem — professional and detail-oriented. Neal executed the renovation perfectly. Our home sold in just eight days at full asking price!",
      name: "Dixie",
      date: "10 May, 2024",
    },
    {
      id: 7,
      text: "I enjoyed working with Puja and Neal. They were understanding, patient, and always responsive. Selling a home can be stressful, but their honesty and communication made all the difference.",
      name: "Tara D",
      date: "18 Jan, 2024",
    },
    {
      id: 8,
      text: "Neal made my home-selling experience effortless. I had a house full of furniture and items I didn’t want to deal with — they bought the home for a fair price and even managed the estate sale profits. Smooth and professional!",
      name: "Mary B",
      date: "22 Oct, 2023",
    },
    {
      id: 9,
      text: "I went with their cash offer because they were efficient, fair, and understanding of my situation. Neal made the process simple and handled all associated costs.",
      name: "Sandy K",
      date: "15 Dec, 2023",
    },
    {
      id: 10,
      text: "We sold our house in just two weeks! It needed major work, but Neal and Puja’s renovation efforts exceeded all expectations. The home sold for more than we ever hoped for — thank you both!",
      name: "Mary Kay",
      date: "09 Sep, 2023",
    },
  ];

  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`custom-arrow ${direction}`}
      style={{
        background: "#3a3a3a",
        border: "none",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        color: "#ffffff",
        fontSize: "1.2rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#4a4a4a";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#3a3a3a";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {direction === "prev" ? "←" : "→"}
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);

  return (
    <div
      className="testimonial-carousel"
      style={{
        background: "#141515",
        margin: "8rem 0",
      }}
    >
      <div
        className="testimonial-carousel-header px-0 px-md-5 mb-5"
        style={{
          maxWidth: "1200px",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "3.5rem",
            fontWeight: "400",
            lineHeight: "1.2",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Don't take our word for it,
          <br />
          see what our clients say
        </h2>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            maxWidth: "700px",
          }}
        >
          Real stories from clients who turned to us for guidance,
          <br />
          and left with results beyond expectations.
        </p>
      </div>

      {/* CSS overrides */}
      <style>
        {`
        /* Heading alignment - center on mobile, left on desktop */
        .testimonial-carousel .testimonial-carousel-header {
          text-align: center !important;
        }

        .testimonial-carousel .testimonial-carousel-header p {
          margin: 0 auto !important;
        }

        @media (min-width: 768px) {
          .testimonial-carousel .testimonial-carousel-header {
            text-align: left !important;
          }
          .testimonial-carousel .testimonial-carousel-header p {
            margin: 0 !important;
          }
        }

        /* Responsive font sizes for mobile */
        @media (max-width: 767px) {
          .testimonial-carousel .testimonial-carousel-header h2 {
            font-size: 2.5rem !important;
          }
          
          .testimonial-carousel .testimonial-carousel-header p {
            font-size: 1rem !important;
          }
        }

        /* Responsive font sizes for mobile */
        @media (max-width: 500px) {
          .testimonial-carousel .testimonial-carousel-header h2 {
            font-size: 2rem !important;
          }
          
          .testimonial-carousel .testimonial-carousel-header p {
            font-size: 0.9rem !important;
          }
        }

        /* Hide arrows on mobile */
        @media (max-width: 991px) {
          .testimonial-carousel .carousel-controls-desktop {
            display: none !important;
          }
        }

        /* === Slick structure fixes === */
        .testimonial-carousel .slick-slider {
          margin: 0;
          max-width: 100%;
        }

        .testimonial-carousel .slick-list {
          overflow: hidden !important;
          padding-right: 120px;
        }

        @media (min-width: 992px) {
          .testimonial-carousel .slick-list {
            overflow: visible;
          }
        }

        /* === Equal height core logic === */
        .testimonial-carousel .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }

        .testimonial-carousel .slick-slide {
          display: flex !important;
          height: auto !important;
        }

        /* This wrapper inside each slide must also flex */
        .testimonial-carousel .slick-slide > div {
          display: flex !important;
          flex: 1 1 auto !important;
          height: 100% !important;
          padding: 0 20px;
        }

        /* === Testimonial card === */
        .testimonial-carousel .testimonial-card {
          background-color: #1e2020 !important;
          border-radius: 12px;
          padding: 40px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .testimonial-carousel .testimonial-card:hover {
          transform: translateY(-5px);
        }

        /* === Card content === */
        .testimonial-carousel .testimonial-card .star-rating {
          color: #fbbf24 !important;
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .testimonial-carousel .testimonial-card p {
          color: #ffffff !important;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .testimonial-carousel .testimonial-card .testimonial-name {
          color: #ffffff !important;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .testimonial-carousel .testimonial-card .testimonial-date {
          color: #cfcfcf !important;
          font-size: 0.9rem;
        }

        /* === Responsive adjustments === */
        @media (max-width: 900px) {
          .testimonial-carousel .slick-list {
            padding-right: 60px;
          }
          .testimonial-carousel .testimonial-card {
            padding: 30px;
            min-height: 280px;
          }
          .testimonial-carousel .slick-slide > div {
            padding: 0 10px;
          }
        }

        @media (max-width: 600px) {
          .testimonial-carousel .slick-list {
            padding-right: 40px;
          }
          .testimonial-carousel .testimonial-card {
            padding: 25px;
            min-height: 260px;
          }
        }`}
      </style>

      <div style={{ position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{ padding: "0 15px" }}>
              <div className="testimonial-card">
                <div className="star-rating">★★★★★</div>
                <p>{testimonial.text}</p>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </Slider>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
            marginTop: "60px",
            marginRight: "60px",
          }}
          className="carousel-controls-desktop"
        >
          <CustomArrow
            direction="prev"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <CustomArrow
            direction="next"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
