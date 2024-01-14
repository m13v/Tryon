import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const imgs = () => {
  let content = [];
  for (let index = 1; index <= 10; index++) {
    content.push(
      <Image
        src={`https://humanaigc.github.io/outfit-anyone/content/images/style/style${index}.jpg`}
        width={1797}
        height={1600}
        alt="Bizarre Fashion"
        key={index}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    );
  }
  return content;
};

export default function AutoSlider() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    handleOrientationChange();

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: isPortrait ? 0.5 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings} className="h-full">
        {imgs()}
      </Slider>
    </div>
  );
}
