import { useEffect, useState } from "react";
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlides, setActiveSlides] = useState(images.slice(0, 7));
  const [sliderDirection, setSliderDirection] = useState(null);

  function setSlider(number) {
    const newIndex = slideIndex + number * 7;

    if (newIndex < 0) {
      setSlideIndex(0);
      setSliderDirection(number);
    } else if (newIndex >= images.length) {
      setSlideIndex(Math.floor((images.length - 1) / 7) * 7);
      setSliderDirection(number);
    } else {
      setSlideIndex(newIndex);
      setSliderDirection(number);
    }
  }

  useEffect(() => {
    setActiveSlides(images.slice(slideIndex, slideIndex + 7));
  }, [slideIndex, images]);

  return (
    <div id="slider" className="container-slider-text">
      {activeSlides.length > 0 && (
        <div className="container-slider">
          <div className="slider-imgs">
            {activeSlides.map((slide, index) => (
              <img
                key={index}
                className="img-item"
                src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`}
                alt={`Img ${slide}`}
              />
            ))}
          </div>
          <AiOutlineArrowLeft
            className={`btn-prev ${
              sliderDirection === -1 ? `animate-prev` : ""
            }`}
            onClick={() => setSlider(-1)}
          />
          <AiOutlineArrowRight
            className={`btn-next ${
              sliderDirection === 1 ? `animate-next` : ""
            }`}
            onClick={() => setSlider(1)}
          />
        </div>
      )}
    </div>
  );
};

export default Slider;

/*   const data = [];
  for (let i = 0; i < images.length; i++) {
    data.push(images[i].poster_path);
  } */
