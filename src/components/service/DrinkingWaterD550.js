import { FaqDrinkingD } from "@/data/faq";
import Link from "next/link";
import { useEffect } from "react";

const DrinkingWaterD550 = () => {

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
                    src="/assets/images/resources/service-details-img4.jpg"
                    alt="Three distinct water filtration systems"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              {" "}
              Drinking Water D550
            </h2>
            <div className="service-details__bottom-text1">
              <p>
                After the water entering your home is initially treated by the
                Westinghouse whole house refiner, it is then polished even
                further. The Westinghouse® Drinking Water System incorporates
                several stages of advanced treatment, including Reverse Osmosis
                technology, to deliver fresh, purified water on demand, which is
                conveniently dispensed from a special faucet installed at your
                kitchen sink.
              </p>
            </div>

            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/drinking-water-d550.webp"
                      alt="a white block, a blue block, and a mound of white powder against a neutral backdrop."
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <p>
                      The technology at work is impressive, utilizing Reverse
                      Osmosis to remove nearly all of the remaining contaminants
                      in your water. You are left with nothing but pure, clean,
                      fresh tasting water to enjoy. If you’re buying bottled
                      water, you can stop. If you’re relying on faucet or
                      refrigerator filters, this is a new level of purity.
                    </p>

                    <p>
                      The Westinghouse Drinking Water System provides a
                      limitless supply of higher quality water than all these
                      filtering methods combined.
                    </p>

                    {/*  <ul>
                      <li>
                        <span className="icon-plus"></span> Mbarrassing hidden in
                        the middle of text
                      </li>
                      <li>
                        <span className="icon-plus"></span> Mbarrassing hidden in
                        the middle of text
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
                          {FaqDrinkingD.map((item, i) => (
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

export default DrinkingWaterD550;
