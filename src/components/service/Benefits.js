import React from "react";
import Link from "next/link";
import { ServiceThreeData } from "@/data/service";

const Benefits = () => {
  return (
    <>
      <section className="services-three">
        <div className="container">
          <div className="section-title__style2">
            <div className="section-title">
              <span className="section-title__tagline">Clean Water Pro's</span>
              <h2 className="section-title__title">
                The Health Benefits of Purified and Refined Water
              </h2>
            </div>
            <div className="text-box">
              <p>
                Our cutting-edge filtration systems are designed to remove
                impurities, harmful chemicals, and contaminants, ensuring that
                your water is as clean and fresh as nature intended.
              </p>
            </div>
          </div>
          <div className="row">
            {ServiceThreeData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay={item.delay}
              >
                <div className="services-three__single text-center">
                  <div className="services-three__single-icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="services-three__single-content">
                    <h3>
                      <Link href={item.link}>{item.heading}</Link>
                    </h3>
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

export default Benefits;
