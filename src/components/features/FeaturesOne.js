import { FeaturesOneData } from "@/data/features";
import Link from "next/link";

const FeaturesOne = () => {
  return (
    <>
      <section className="features-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title__style2">
                <div className="section-title">
                  <span className="section-title__tagline">
                    Learn about our Best
                  </span>
                  <h2 className="section-title__title">
                    Products for your <br /> home <br />
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
            </div>
          </div>

          <div className="row">
            {FeaturesOneData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated animated"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
              >
                <div className="features-one__single">
                  <div
                    className="layer-outer"
                    style={{ backgroundImage: `url(${""})` }}
                  ></div>
                  <div className="features-one__single-inner">
                    {/* <div className="icon-box">
                      <span>{item.icon}</span>
                    </div> */}
                    <div className="content-box">
                      <h2>
                        <Link href={item.link}>{item.heading}</Link>
                      </h2>
                      <p>{item.description}</p>
                      <div className="btn-box">
                        <Link href={item.link}>
                          Read More <span className="icon-plus"></span>
                        </Link>
                      </div>
                    </div>
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

export default FeaturesOne;
