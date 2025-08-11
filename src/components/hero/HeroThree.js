import React, { useEffect, useState } from "react";
import Link from "next/link";
// import BackgroundOne from "../../../public/assets/images/backgrounds/main-slider-v3-img1.jpg";
import BackgroundOne from "../../../public/assets/images/backgrounds/banner.webp";
import BackgroundTwo from "../../../public/assets/images/backgrounds/banner-2.webp";
import BackgroundOneMobile from "../../../public/assets/images/backgrounds/banner-mobile.webp";
import BackgroundTwoMobile from "../../../public/assets/images/backgrounds/banner-2-mobile.webp";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if ($(".main-slider-three__carousel").length) {
      $(".main-slider-three__carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 9000,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className="main-slider-three">
        <div className="main-slider-three__carousel owl-carousel owl-theme">
          {/* Start Main Slider Three Single */}
          <div className="main-slider-three__single">
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${
                  isMobile ? BackgroundOneMobile.src : BackgroundOne.src
                })`,
              }}
            ></div>
            <div className="container">
              <div className="main-slider-three__content text-center">
                <div className="tagline">
                  <p>Welcome to Clean Water Pro's.</p>
                </div>
                <div className="title">
                  <h1>
                    Purity You Can Taste.
                    <br /> Quality You Can Trust.
                  </h1>
                </div>
                <div className="text">
                  <p
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Trusted manufacturer producing <br /> high quality products
                    for over 139 years
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/contact" className="thm-btn">
                    <span>Contact Us</span>
                    <div className="liquid"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Slider Three Single */}

          {/* Start Main Slider Three Single */}
          <div className="main-slider-three__single">
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${
                  isMobile ? BackgroundTwoMobile.src : BackgroundTwo.src
                })`,
              }}
            ></div>
            <div className="container">
              <div className="main-slider-three__content text-center">
                <div className="tagline">
                  <p>Welcome to Clean Water Pro's.</p>
                </div>
                <div className="title">
                  <h1>
                    Purity You Can Taste.
                    <br /> Quality You Can Trust.
                  </h1>
                </div>
                <div className="text">
                  <p
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Trusted manufacturer producing <br /> high quality products
                    for over 139 years
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/contact" className="thm-btn">
                    <span>Contact US</span>
                    <div className="liquid"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Slider Three Single */}

          {/* Start Main Slider Three Single */}
          {/* <div className="main-slider-three__single">
            <div className="shape1"></div>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${BackgroundThree.src})` }}
            ></div>
            <div className="container">
              <div className="main-slider-three__content text-center">
                <div className="tagline">
                  <p>Welcome to Clean Water Pro's.</p>
                </div>
                <div className="title">
                  <h2>
                    Purity You Can Taste.
                    <br /> Quality You Can Trust.
                  </h2>
                </div>
                <div className="text">
                  <p>
                    We will help you to feel better and enjoy every single day
                    of <br /> may be the fastest growing health.
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/contact" className="thm-btn">
                    <span>Discover Now</span>
                    <div className="liquid"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Main Slider Three Single */}
        </div>

        {/* <div className="bubbleContainer">
          <div className="bubble-1"></div>
          <div className="bubble-2"></div>
          <div className="bubble-3"></div>
          <div className="bubble-4"></div>
          <div className="bubble-5"></div>
          <div className="bubble-6"></div>
          <div className="bubble-7"></div>
          <div className="bubble-8"></div>
          <div className="bubble-9"></div>
          <div className="bubble-10"></div>
          <div className="bubble-11"></div>
          <div className="bubble-12"></div>
          <div className="bubble-13"></div>
          <div className="bubble-14"></div>
          <div className="bubble-15"></div>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
