import React from "react";
import Link from "next/link";

const AboutOne = () => {
  return (
    <>
      <section className="about-one pd-120-0-120">
        <div
          className="about-one__img2 wow slideInRight"
          data-wow-delay="500ms"
        >
          {/* <img
            className="float-bob-x"
            src="/assets/images/about/about-v1-img2.png"
            alt="About"
          /> */}
        </div>
        <div className="container">
          <div className="row">
            {/* Start About One Img */}
            <div className="col-xl-6">
              <div className="about-one__img clearfix">
                <div className="about-one__img-inner">
                  <img
                    src="/assets/images/about/about-us-section-1.webp"
                    alt="About"
                  />
                </div>
                <div className="experince-box">
                  <h2>25 +Years Experience</h2>
                </div>
              </div>
            </div>
            {/* End About One Img */}

            {/* Start About One Content */}
            <div className="col-xl-6">
              <div className="about-one__content">
                <div className="section-title">
                  <span className="section-title__tagline">About Us</span>
                  <h2 className="section-title__title">
                    Clean Water Pro’s <br />{" "}
                  </h2>
                </div>
                <div className="about-one__content-inner">
                  <p className="about-one__content-text1">
                    is committed to providing high-quality water treatment
                    solutions to ensure your family enjoys the purest,
                    healthiest water possible. We focus on helping families
                    across the DFW area experience the numerous benefits of
                    clean, contaminant-free water.{" "}
                  </p>
                  <p className="about-one__content-text1">
                    We believe that access to purified water is essential for a
                    healthy lifestyle, and we are dedicated to delivering
                    customized water filtration systems that meet your home's
                    unique needs. Our team is passionate about making a positive
                    impact on the well-being of our community by offering
                    reliable, effective water treatment services.{" "}
                  </p>{" "}
                  <p className="about-one__content-text1">
                    Thank you for considering us as your trusted partner in
                    achieving clean, safe water for your home. We look forward
                    to the opportunity to serve you.
                  </p>
                  {/* <div className="about-one__content-list">
                    <ul>
                      <li>
                        <p>
                          Thank you for considering us as your trusted partner
                          in achieving clean, safe water for your home. We look
                          forward to the opportunity to serve you.
                        </p>
                      </li>
                      <li>
                        <p>Tonstantly evolving and your brand must evolve.</p>
                      </li>
                      <li>
                        <p>Tempor incididunt ut labore dolore magna aliqua.</p>
                      </li>
                    </ul>
                  </div> */}
                  {/*  <div className="about-one__content-btn">
                    <Link href="/about" className="thm-btn">
                      <span>About More</span>
                      <div className="liquid"></div>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* End About One Content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
