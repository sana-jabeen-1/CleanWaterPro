import React from "react";
import Link from "next/link";
import { ServiceTwoData } from "@/data/service";

const ServiceTwo = () => {
  return (
    <>
      <section className="service-two">
        <div className="container">
          <div className="section-title__style2">
            <div className="section-title">
              <span className="section-title__tagline">Our Products</span>
              <h2 className="section-title__title">We Provide Our Best ...</h2>
            </div>
            <div className="text-box">
              <p>
                Our Products range from advanced water purification systems to
                efficient maintenance, all designed to improve the quality of
                your water and your overall well-being.
              </p>
            </div>
          </div>
          <div className="row">
            {ServiceTwoData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
              >
                <div className="service-two__single">
                  <div className="service-two__single-img">
                    {/* <div className="service-two__single-img-inner">
                      <img
                        className="parallax-img"
                        src={item.image}
                        alt={item.alt}
                      />
                    </div>
                    <div className="icon-box">
                      <span className={item.icon}></span>
                    </div> */}
                  </div>
                  <div className="service-two__single-content text-center">
                    <h2>
                      <Link href={item.link}>{item.heading}</Link>
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTwo;
