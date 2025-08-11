import React from "react";
import Link from "next/link";

const QualitAir = () => {
  return (
    <>
      <section className="service-details">
        <div className="container">
          <div className="service-details__top">
            <div className="row">
              <div className="col-xl-4 col-lg-8 order-2">
                <div className="service-details__sidebar">
                  <h2 className="service-details__sidebar-title">
                    All Products
                  </h2>
                  <ul className="service-details__sidebar-list">
                    <li className="service-details__sidebar-list-item">
                      <Link href="/westinghouse-dynamic-series">
                        DYNAMIC SERIES
                      </Link>
                    </li>
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/iron-boss">IRON BOSS</Link>
                    </li>
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/qualitair">QUALITAIR</Link>
                    </li>
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/ultraviolet-lite-sterilization">
                        UV STERILIZATION
                      </Link>
                    </li>
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/healthway-disinfection-filtration-system">
                        DISINFECTION FILTRATION
                      </Link>
                    </li>
                    {/* <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/westinghouse-reliance-series">
                        RELIANCE SERIES
                      </Link>
                    </li> */}
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/drinking-water-d550">
                        DRINKING WATER D550
                      </Link>
                    </li>
                    <li className="service-details__sidebar-list-item">
                      <Link href="/dynamic-products/drinking-water-r450">
                        DRINKING WATER R450
                      </Link>
                    </li>
                  </ul>
                </div>
                s
              </div>

              <div className="col-xl-8 order-1">
                <div className="service-details__top-img">
                  <img
                    src="/assets/images/resources/service-details-img7.webp"
                    alt="Digital air purifier"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              Qualitair Air Filtration System
            </h2>
            <div className="service-details__bottom-text1">
              <p>
                Breathe Easier with Qualitair: The Premier Air Treatment System
                from Clean Water Pro’s{" "}
              </p>
            </div>
            <div className="service-details__bottom-text1">
              <p>
                In an era where indoor living has become the norm, ensuring the
                air within our homes is clean and safe is more important than
                ever. With research indicating that indoor air pollutants may be
                significantly higher than those outdoors, the quest for a
                healthier indoor environment has led to groundbreaking solutions
                like the Qualitair air treatment system offered by Clean Water
                Pro’s.
              </p>
            </div>
            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/service-details-img2.jpg"
                      alt="microscopic view showing a group of bacteria surrounding a single cell"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3>
                      {" "}
                      Addressing the Silent Threat of Indoor Air Pollution
                    </h3>
                    <p>
                      The Environmental Protection Agency (EPA) has highlighted
                      indoor air pollution as one of the top five environmental
                      risks to public health. This concern is amplified by the
                      fact that almost every home’s central heating and air
                      conditioning system, while essential for comfort, can
                      inadvertently distribute pollutants throughout your home.
                      More concerning is these systems’ potential to serve as
                      breeding grounds for biological contaminants, exacerbating
                      the problem and posing a significant risk to your health
                      and well-being.
                    </p>

                    <h3>
                      {" "}
                      Innovative UV Sterilization for Ultimate Air Quality
                    </h3>
                    <p>
                      Enter Qualitair, a state-of-the-art air treatment system
                      ingeniously designed to purify the air you breathe
                      indoors. By integrating UV sterilization technology
                      directly into your home’s main duct system, Qualitair
                      actively eliminates the conditions that allow biological
                      contaminants to thrive. But it doesn’t stop there; this
                      powerful system also tackles common household odors from
                      sources like cigarette smoke, cooking, and pets through
                      oxidation, transforming your home’s atmosphere into one of
                      freshness and cleanliness.
                    </p>
                    <h3> A Breath of Fresh Air for Your Entire Home</h3>
                    <p>
                      What sets Qualitair apart is its comprehensive approach to
                      air treatment. Installed in your main duct, it is
                      engineered to purify the air throughout your entire home.
                      As air circulates through the system, it undergoes a
                      purification process that neutralizes pollutants and
                      odors. By the time it re-enters your living space, the
                      ozone used in the oxidation process has reverted back to
                      oxygen, ensuring that the air you breathe is not just
                      clean, but revitalized.
                    </p>

                    <h3> Embrace the Qualitair Advantage</h3>
                    <p>
                      The Qualitair system represents a significant leap forward
                      in indoor air quality technology. It’s an investment in
                      the health and comfort of your home environment, providing
                      peace of mind that you and your loved ones are protected
                      from the invisible threats that lurk indoors. With
                      Qualitair, you’re not just filtering air; you’re
                      transforming it, ensuring that every breath you take is as
                      pure and fresh as nature intended.
                    </p>
                    <br />
                    <p>
                      In our increasingly indoor-centric world, taking proactive
                      steps to ensure the air in our homes is clean and safe is
                      crucial. With the Qualitair air treatment system from
                      Clean Water Pro’s, you’re choosing a healthier, happier
                      indoor environment. Say goodbye to indoor air pollutants
                      and hello to cleaner, fresher air with Qualitair. It’s
                      time to breathe easier, knowing your home is protected by
                      the leading edge of air purification technology.
                    </p>

                    {/*   <ul>
                      <li>
                        <span className="icon-plus"></span> Mbarrassing hidden
                        in the middle of text
                      </li>
                      <li>
                        <span className="icon-plus"></span> Mbarrassing hidden
                        in the middle of text
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .content-box {
              margin: 40px 0px;
            }
            .content-box h3 {
              margin: 15px 0px;
            }
            .content-box p {
              margin-bottom: 15px;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default QualitAir;
