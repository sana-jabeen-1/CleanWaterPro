import React, { useEffect } from "react";
import { TestimonialTwoData } from "@/data/testimonial";

const TestimonialTwo = () => {
  useEffect(() => {
    if ($(".testimonial-two__carousel").length) {
      $(".testimonial-two__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10000,
        navText: [
          '<span className="icon-left-arrow"></span>',
          '<span className="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          800: {
            items: 2,
          },
          1024: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className="testimonial-two">
        <div className="shape1 wow slideInRight" data-wow-delay="500ms">
          <img src="/assets/images/shapes/shape-1.webp" alt="water umbrella" />
        </div>
        <div className="container">
          <div className="section-title__style2">
            <div className="section-title">
              <span className="section-title__tagline">Testimonials</span>
              <h2 className="section-title__title">
                Clients Feedback About Their <br /> Experience With Us
              </h2>
            </div>
            <div className="text-box">
              <p>
                At Clean Water Pro’s, we understand the importance of clean
                water. Whether it's for drinking, cooking, or maintaining a
                healthy lifestyle, our mission is to deliver products that
                guarantee the highest standards of water quality.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-two__carousel owl-carousel owl-theme owl-dot-style1">
                {TestimonialTwoData.map((item, i) => (
                  <div key={i} className="testimonial-two__single text-center">
                    <div className="testimonial-two__single-content">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>{item.description}</p>
                      <div className="rating">
                        <ul>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-two__single-thumb">
                      <img src={item.image} alt={item.alt} />
                    </div>
                    <div className="title-box">
                      <h2>{item.name}</h2>
                      <span>{item.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;
