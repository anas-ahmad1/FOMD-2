import Slider from "react-slick";
import { useState, useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [centerPadding, setCenterPadding] = useState("50px");
  const [isPc, setIsPc] = useState(false);

  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = Object.values(
        import.meta.glob("../../assets/gallery/*.jpg", {
          eager: true,
          import: "default",
        })
      );
      setImagePaths(images);
    };

    importImages();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCenterPadding(
        window.innerWidth >= 1400
          ? "150px"
          : window.innerWidth >= 768
          ? "100px"
          : "50px"
      );
      setIsPc(window.innerWidth >= 576);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrowStyles = {
    background: "black",
    display: "block",
    position: "absolute",
    transform: "translateY(-50%)",
    zIndex: 10,
    borderRadius: "50%",
    cursor: "pointer",
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...arrowStyles, right: "-20px", top: "50%" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...arrowStyles, left: "-20px", top: "50%" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: isPc,
    infinite: true,
    centerPadding,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: isPc,
    lazyLoad: true,
  };

  return (
    <>
      <title>Gallery | Flip on My Dime - Home Transformation Before & Afters</title>
      <meta name="description" content="See stunning before-and-after photos of home renovations by Flip on My Dime. Explore how we add value and increase selling price with every project." />
      <div className="gallery-main-container">
        <div
          className={
            isPc
              ? "d-flex align-items-center justify-content-center pt-4"
              : "vh-100 d-flex"
          }
        >
          {isPc && (
            <div
              className="flex-grow-1 vh-100 rounded-end"
              style={{ backgroundColor: "#001F3F" }}
            ></div>
          )}
          <div
            className={isPc ? "py-4" : "container"}
            style={isPc ? { width: "84%" } : {}}
          >
            {!isPc && (
              <>
                <div className="gallery-heading mb-2">Gallery</div>
                <div className="subHeading mb-6">
                  See the stunning spaces we've transformed!
                </div>
              </>
            )}
            <Slider {...settings}>
              {imagePaths.map((img, index) => (
                <div key={index} className="px-2 px-sm-3 px-md-4">
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-100 rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>
          {isPc && (
            <div
              className="flex-grow-1 vh-100 rounded-start"
              style={{ backgroundColor: "#001F3F" }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}
