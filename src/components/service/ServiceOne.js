import { ServiceOneData } from "@/data/service";
import Link from "next/link";
import BackgroundOne from "../../../public/assets/images/pattern/services-v1-pattern.png";

const ServiceOne = () => {
  return (
    <>
      <section className="services-one pd-120-0-90">
        <div
          className="services-one__pattern"
          style={{ backgroundImage: `url(${BackgroundOne.src})` }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className=" section-title__title">Our Services</span>
            <Link
              href={"/appointment"}
              className="section-title__tagline"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textDecoration: "underline",
                marginTop: "6px",
              }}
            >
              Schedule your free water assessment
            </Link>
          </div>
          <div className="row">
            {ServiceOneData.map((item, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
                key={i}
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <div className="services-one__single-img-inner">
                      <img
                        className="parallax-img"
                        src={item.image}
                        alt={item.alt}
                      />
                    </div>
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div className="services-one__single-content text-center">
                    {/* <h2>
                     {item.heading}
                      </h2> */}
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

export default ServiceOne;
