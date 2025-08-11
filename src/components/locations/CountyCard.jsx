import Link from "next/link";
import BackgroundOne from "../../../public/assets/images/pattern/services-v1-pattern.png";
import LocationCard from "./LocationCard";

const CountyCard = ({ countiesArray }) => {
  return (
    <>
      <section className="services-one pd-120-0-90">
        <div
          className="services-one__pattern"
          style={{ backgroundImage: `url(${BackgroundOne.src})` }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className=" section-title__title">Counties We Serve</span>
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
            {countiesArray.map((item, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
                key={i}
                style={{
                  margin: "10px 0px",
                }}
              >
                <div className="">
                  <div className="">
                    <LocationCard {...item} key={i} />
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

export default CountyCard;
