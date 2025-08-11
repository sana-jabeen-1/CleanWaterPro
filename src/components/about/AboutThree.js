import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section className="about-three">
        <div className="container">
          <div className="row">
            {/* Start About Three Img */}
            <div className="col-xl-6">
              <div className="about-three__img clearfix">
                <div className="about-three__img1">
                  <div className="about-three__img1-inner js-tilt">
                    <Image
                      src="/assets/images/about/about-us.jpg"
                      alt="woman filling a glass of water"
                      width={570}
                      height={470}
                    />
                  </div>
                </div>
                <Image
                  src="/assets/images/about/westing-house-logo.webp"
                  alt="westing house authorized logo"
                  width={200}
                  height={100}
                  style={{
                    marginTop: "20px",
                    objectFit: "cover",
                  }}
                />
                <div className="about-three__img2"></div>
              </div>
            </div>
            {/* End About Three Img */}

            {/* Start About Three Content */}
            <div className="col-xl-6">
              <div className="about-three__content">
                <div className="section-title">
                  <span className="section-title__tagline">About Us</span>
                  <h2 className="section-title__title">
                    Clean Water Pro's <br />
                  </h2>
                </div>

                <div className="about-three__content-inner">
                  <div className="text">
                    <p>
                      Welcome to Clean Water Pro’s, your trusted partner in
                      providing top-tier water filtration solutions. We are
                      dedicated to ensuring that every drop of water in your
                      home or business is pure, safe, and crystal clear. As an
                      authorized dealer of Westinghouse Dynamic Series, we bring
                      you the best in water purification technology, backed by
                      years of industry expertise.
                    </p>
                  </div>
                  <div className="text">
                    <p>
                      At Clean Water Pro’s, we understand the importance of
                      clean water. Whether it's for drinking, cooking, or
                      maintaining a healthy lifestyle, our mission is to deliver
                      products that guarantee the highest standards of water
                      quality. Our cutting-edge filtration systems are designed
                      to remove impurities, harmful chemicals, and contaminants,
                      ensuring that your water is as clean and fresh as nature
                      intended.
                    </p>
                  </div>
                  <div className="about-three__content-counter">
                    <div className="row">
                      {/* Start Counter One Single */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                        data-wow-delay="0ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-certificate-1"></span>
                            </div>
                            <div className="text-box">
                              <h3 className="odometer">50</h3>
                              {/* <span className="counter-one__letter">K</span> */}
                              <span className="counter-one__plus">+</span>
                              <p className="counter-one__text">Awards Win</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Counter One Single */}

                      {/* Start Counter One Single */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                        data-wow-delay="100ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-rating"></span>
                            </div>
                            <div className="text-box">
                              <h3 className="odometer">2</h3>
                              <span className="counter-one__letter">K</span>
                              <span className="counter-one__plus">+</span>
                              <p className="counter-one__text">
                                Completed Project
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Counter One Single */}

                      {/* Start Counter One Single */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                        data-wow-delay="0ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-certificate"></span>
                            </div>
                            <div className="text-box">
                              <h3 className="odometer">1.6</h3>
                              <span className="counter-one__letter">K</span>
                              <span className="counter-one__plus">+</span>
                              <p className="counter-one__text">Happy Clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Counter One Single */}

                      {/* Start Counter One Single */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                        data-wow-delay="100ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-computer"></span>
                            </div>
                            <div className="text-box">
                              <h3 className="odometer">2</h3>
                              <span className="counter-one__letter">K</span>
                              <span className="counter-one__plus">+</span>
                              <p className="counter-one__text">
                                Finish The Job
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Counter One Single */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About Three Content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
