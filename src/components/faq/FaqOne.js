import { FaqOneData } from "@/data/faq";
import { useEffect } from "react";

const FaqOne = () => {
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
          <div className="row">
            {/* Start Faq One Content */}
            <div className="col-xl-7">
              <div className="faq-one__content">
                <div className="faq-one__faq">
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion-1"
                  >
                    {FaqOneData.map((item, i) => (
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
            <div className="col-xl-5">
              <div className="faq-one__img">
                <img
                  src="/assets/images/faqs/section.webp"
                  alt="modern kitchen with vibrant blue cabinets and a sleek sink"
                />
              </div>
            </div>
            {/* End Faq One Img */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
