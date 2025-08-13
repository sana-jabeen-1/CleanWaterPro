import Link from "next/link";
import { FaqIronBoss } from "@/data/faq";
import { useEffect } from "react";

const IronBoss = () => {

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
<section className="faq-one pd-120-0-120">
              <div className="container">
                <div className="section-title__style2">
                  <div className="section-title">
                    <span className="section-title__tagline section-title__title">
                      Frequently Asked Questions
                    </span>
                  </div>
                 
                </div>
                
                    <div className="faq-one__content">
                      <div className="faq-one__faq">
                        <div
                          className="accrodion-grp faq-one-accrodion"
                          data-grp-name="faq-one-accrodion-1"
                        >
                          {FaqIronBoss.map((item, i) => (
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

export default IronBoss;
