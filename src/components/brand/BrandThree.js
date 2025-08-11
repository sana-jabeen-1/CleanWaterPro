import React from "react";
import { BrandThreeData } from "@/data/brand";

const BrandThree = () => {
  return (
    <>
      <section className="client-page">
        <div className="container">
          <div className="row">
            {BrandThreeData.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="client-page__single text-center">
                  <a href={item.link}>
                    <img src={item.image} alt={item.alt} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandThree;
