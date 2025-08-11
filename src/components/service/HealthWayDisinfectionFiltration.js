import Link from "next/link";

const HealthWayDisinfectionFiltration = () => {
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
              </div>

              <div className="col-xl-8 order-1">
                <div className="service-details__top-img">
                  <img
                    src="/assets/images/resources/service-details-img6.webp"
                    alt="Mobile air purifier"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              Healthway Disinfection Filtration System
            </h2>
            <div className="service-details__bottom-text1">
              <p>
                Studies show that we spend 90% of our time indoors. The EPA
                states that air pollutants may be 2-5 times higher indoors than
                outdoors. The EPA lists indoor air pollution as one of the top
                five risks to our health.{" "}
              </p>
            </div>
            <div className="service-details__bottom-text2">
              <p></p>
            </div>
            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/benefits-of-refined-water.png"
                      alt="three images of bacteria viruses and molds"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <p>
                      The Healthway Disinfection Filtration System (DFS)
                      utilizes technology developed through a United States
                      Military Grant focused on germ warfare. The professional
                      line of air cleaning by Healthway is the only system to
                      effectively address all three pollutant categories. The
                      systems have been proved to capture 99.99% of all
                      particles as small as .002 micron in size.
                    </p>
                    <br />
                    <p>
                      A commercial-grade gas and odor filter eliminates most
                      gases and the patented DFS technology kills 94-100% of
                      harmful viruses, molds, and bacteria, leaving you with
                      fresh, pure, healthy air. This technology is currently
                      used in hospitals, medical clean rooms, government
                      buildings and military applications.
                    </p>

                    {/* <ul>
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
          `}
        </style>
      </section>
    </>
  );
};

export default HealthWayDisinfectionFiltration;
