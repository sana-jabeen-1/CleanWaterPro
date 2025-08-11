import Image from "next/image";
import Link from "next/link";

const WestingHouseDynamicSeries = () => {
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
              </div>

              <div className="col-xl-8 order-1">
                <div className="service-details__top-img">
                  <img
                    src="/assets/images/resources/service-details-img1.webp"
                    alt="Black water softener unit with a cylindrical tank and lid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              Westinghouse Dynamic Series Water Refiner
            </h2>
            <div className="service-details__bottom-text1">
              <p>
                Transform Your Home’s Water Quality with the Westinghouse
                Dynamic Series Water Refiner from Clean Water Pro’s <br />
                Elevate your home’s water quality to new heights with the
                Westinghouse Dynamic Series Water Refiner. This state-of-the-art
                whole house refining system promises nothing short of
                consistently superior water for you and your family. Crafted
                with precision and designed to operate seamlessly around the
                clock, this sophisticated system ensures that every tap in your
                home delivers nothing but the most refined, clean, and soft
                water imaginable.
              </p>
            </div>

            {/* How it Works Section */}
            <div className="service-details__how-it-works">
              <h3>How it Works</h3>
              <p>
                Before water can enter your home, it must first pass through
                your Westinghouse water treatment system.
              </p>
              <ul>
                <li>
                  <strong>Unconditioned Water:</strong> enters the mineral tank,
                  coming into contact with specialized media that separate
                  contaminants from the water.
                </li>
                <li>
                  <strong>Clean, Treated Water:</strong> is distributed
                  throughout the home.
                </li>
                <li>
                  <strong>Backwash Water Flow:</strong> cleanses the media of
                  the contaminants that were removed from the water on its way
                  into the home.
                </li>
              </ul>
              <div
                className="how-it-works-images"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  width={500}
                  height={650}
                  src="/assets/images/resources/westinghouse-process.webp"
                  alt="How it Works Process 1"
                />
              </div>
              <p style={{ marginTop: "20px", textAlign: "center" }}>
                The Westinghouse Dynamic Series mixed bed system is provided
                with a specialized configuration of filtering media.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  width={500}
                  height={350}
                  src="/assets/images/resources/westinghouse-process-2.png"
                  alt="How it Works Process 2"
                  style={{
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                />
              </div>
            </div>

            <div className="service-details__bottom-text2">
              <h3>Say Goodbye to Hard Water Woes</h3>
              <p>
                With the Westinghouse Dynamic Series at the heart of your home’s
                water system, prepare to witness a remarkable transformation.
                Bid farewell to the frustrations of hard water as clothes and
                linens become noticeably softer, brighter, and more durable.
                Annoying water spots, appliance scaling, stubborn soap scum—all
                become distant memories, thanks to the dynamic purification
                power of the Dynamic Series.
              </p>
            </div>
            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/service-details-img4.jpg"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3>Innovation at Its Finest</h3>
                    <p>
                      But the benefits of the Westinghouse Dynamic Series extend
                      far beyond clean water. Encased in a sleek, contemporary
                      stainless-steel design, this system is a beacon of
                      innovation. Featuring EcoFlow regeneration, proportional
                      cleaning, and demand metering, along with a true-flow
                      media, it sets new standards in water conservation and
                      efficiency, significantly extending the lifespan of
                      filtering media.
                    </p>

                    <h3>Pioneering Technology for Thorough Purification</h3>
                    <p>
                      At the core of the Dynamic Series lies a pioneering
                      seven-step cleaning sequence. Highlighted by a
                      revolutionary process where a low electric current is
                      passed through two titanium plates, this system creates a
                      powerful decontamination solution. This unique feature
                      ensures that your water isn’t just softened but thoroughly
                      purified, providing you with the highest possible quality
                      with every drop.
                    </p>
                    <h3>Invest in Your Family’s Wellbeing</h3>
                    <p>
                      Choosing the Westinghouse Dynamic Series Water Refiner
                      isn’t just about softer clothes and scale-free
                      appliances—it’s about ensuring that every drop of water
                      you consume is of the highest possible quality.
                    </p>
                    <h3>Make the Switch Today</h3>
                    <p>
                      Make the switch to the Westinghouse Dynamic Series and
                      transform your home’s water into a source of purity and
                      luxury.
                    </p>
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
            .service-details__how-it-works {
              margin-top: 30px;
            }
            .service-details__how-it-works h3 {
              font-size: 1.5rem;
              font-weight: bold;
              margin-bottom: 15px;
            }
            .service-details__how-it-works ul {
              list-style-type: none;
              padding: 0;
            }
            .service-details__how-it-works li {
              margin-bottom: 10px;
              line-height: 1.6;
            }
            .how-it-works-images img {
              margin-top: 15px;
              width: 100%;
              height: auto;
              border-radius: 5px;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default WestingHouseDynamicSeries;
