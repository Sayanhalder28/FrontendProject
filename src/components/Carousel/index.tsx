import { useEffect, useState } from "react";
import Style from "./index.module.css";

type propType = {
  className: string;
};

function Carousel({ className }: propType) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const numberOfSlides = 3;

  // change slide function
  const changeSlide = (n: number) => {
    //change slide
    setCurrentSlideIndex(n);
    //colour change of dots
    const dots = document.getElementsByClassName(Style.dot);
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove(Style.active);
    }
    dots[n].classList.add(Style.active);
  };

  useEffect(() => {
    //set the first dot to active
    const dots = document.getElementsByClassName(Style.dot);
    dots[currentSlideIndex].classList.add(Style.active);

    // auto slide function
    const autoSlide = () => {
      const slideNumber = (currentSlideIndex + 1) % numberOfSlides;
      changeSlide(slideNumber);
    };

    // auto slide interval set
    const interval = setInterval(autoSlide, 3000);

    //clear interval during unmount
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const slideStyle = {
    transform: `translateX(-${currentSlideIndex * 100}%)`,
  };

  return (
    <div className={className}>
      <div className={Style.container}>
        <div className={Style.slides} style={slideStyle}>
          <div className={Style.slide}>
            <h1>
              Enhance fortune 50 company’s insights teams research capabilities
            </h1>
          </div>
          <div className={Style.slide}>
            <h1>
              Enhance fortune 50 company’s insights teams research capabilities
            </h1>
          </div>
          <div className={Style.slide}>
            <h1>
              Enhance fortune 50 company’s insights teams research capabilities
            </h1>
          </div>
        </div>
      </div>
      <div className={Style.dots}>
        <span className={Style.dot} onClick={() => changeSlide(0)}></span>
        <span className={Style.dot} onClick={() => changeSlide(1)}></span>
        <span className={Style.dot} onClick={() => changeSlide(2)}></span>
      </div>
    </div>
  );
}

export default Carousel;
