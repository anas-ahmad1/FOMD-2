import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Neal and Puja guided me through every step of selling my home. Their attention to detail and genuine care made the process stress-free, and I ended up with a better offer than I expected.",
      name: "Sarah Mitchell",
      date: "01 Sep, 2023",
    },
    {
      id: 2,
      text: "Flip On My Dime completely transformed my property before listing. The renovations and staging made such a huge difference, my home sold within days at top value!",
      name: "James Rodriguez",
      date: "15 Nov, 2023",
    },
    {
      id: 3,
      text: "Working with this team was a game-changer. Their market expertise and negotiation skills helped us get our dream home at a price we could afford. Couldn't be happier!",
      name: "Emily Chen",
      date: "22 Jan, 2024",
    },
    {
      id: 4,
      text: "From our first meeting to closing day, the professionalism and dedication were outstanding. They turned what could have been a stressful experience into a smooth journey.",
      name: "Michael Thompson",
      date: "08 Mar, 2024",
    },
    {
      id: 5,
      text: "The staging and photography services elevated my listing beyond my expectations. Multiple offers came in within the first week. Truly exceptional service!",
      name: "Lisa Anderson",
      date: "17 Apr, 2024",
    },
    {
      id: 6,
      text: "As a first-time buyer, I was nervous about the process. The team's patience and guidance made everything clear and manageable. I'm now a proud homeowner!",
      name: "David Park",
      date: "29 May, 2024",
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
      className="testimonial-carousel py-5"
      style={{
        background: "#1a1a1a",
      }}
    >
      {/* CSS overrides */}
      <style>{`
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
  }
`}</style>

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
