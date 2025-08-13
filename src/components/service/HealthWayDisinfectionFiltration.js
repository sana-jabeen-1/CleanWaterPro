import { FaqDisInfaction } from "@/data/faq";
import Link from "next/link";
import { useEffect } from "react";

const HealthWayDisinfectionFiltration = () => {

   useEffect(() => {
    if ($(".accrodion-grp").length) {
      var accrodionGrp = $(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find(".accrodion-content").slideDown();
              }
            });
        });
      });
    }
  }, []);
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
<section className="faq-one pd-120-0-120">
        <div className="container">
          <div className="section-title__style2">
            <div className="section-title">
              <span className="section-title__tagline section-title__title">
                Frequently Asked Questions
              </span>
            </div>
            <div className="text-box">
              <p>
                At Clean Water Pro’s, we are committed to providing high-quality
                water filtration solutions that ensure safe, clean, and healthy
                water for your home or business. Our services range from
                advanced water purification systems to efficient maintenance,
                all designed to improve the quality of your water and your
                overall well-being.
              </p>
            </div>
          </div>
          
              <div className="faq-one__content">
                <div className="faq-one__faq">
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion-1"
                  >
                    {FaqDisInfaction.map((item, i) => (
                      <div
                        key={i}
                        className={`accrodion wow fadeInUp ${item.open}`}
                        data-wow-delay={item.delay}
                        data-wow-duration={item.duration}
                      >
                        <div className="accrodion-title">
                          <div className="accrodion-title-inner">
                            <div className="icon">
                              <span className="icon-maps-and-flags"></span>
                            </div>
                            <div className="text">
                              <h4>{item.heading}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="accrodion-content">
                          <div className="">
                            {/* <div className="img-box">
                              <img src={item.image} alt={item.alt} />
                            </div> */}
                            <div className="text">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End Faq One Content */}

            {/* Start Faq One Img */}
            
            {/* End Faq One Img */}
          
      </section>

    </>
  );
};

export default HealthWayDisinfectionFiltration;
