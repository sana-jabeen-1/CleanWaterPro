import Link from "next/link";

const IronBoss = () => {
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
                    src="/assets/images/resources/service-details-img3.webp"
                    alt="water softener"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">Iron Boss</h2>
            <div className="service-details__bottom-text1">
              <p>
                Iron Boss is a specialized water treatment solution offered by
                Clean Water Pro’s, designed to remove excess iron from your
                water, ensuring cleaner, safer, and better-tasting water for
                your home or business.{" "}
              </p>
            </div>

            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/products/diamonte-logo.webp"
                      alt="Diamonte logo"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <div className="service-details__bottom-text1">
                      <p>
                        <b>Step 1: </b>Iron Boss relies on its patented
                        technology to supercharge the filtration chamber with
                        oxygen. When oxygen comes in contact with the iron and
                        hydrogen sulfide in your water, their physical
                        properties are altered on a molecular level as they
                        become oxidized.{" "}
                      </p>
                    </div>
                    <div className="service-details__bottom-text1">
                      <p>
                        <b>Step 2: </b> The new iron oxide and elemental sulfur
                        are then physically filtered out of your water utilizing
                        Iron Boss’s equally unique feature – Diamonite
                        filtration media. When combined, these two features work
                        perfectly together, naturally removing unwanted elements
                        from your water without the need for chemical oxidizing
                        agents.{" "}
                      </p>
                    </div>
                    <div className="service-details__bottom-text1">
                      <p>
                        <b>Step 3: </b> After your water has been filtered, it
                        can either flow directly into your home for consumption,
                        or into additional filtration systems like the
                        Westinghouse whole-house refiner. The Iron Boss system
                        is self-cleaning; automatically rinsing and
                        re-oxygenating the Diamonite media bed.{" "}
                      </p>
                    </div>
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
            .content-box p {
              margin: 12px 0px;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default IronBoss;
