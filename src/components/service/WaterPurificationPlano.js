import Image from "next/image";
import Link from "next/link";
import { ProductsPurification, ServicePurification } from "@/data/service";
import { ProductsFiltration } from "@/data/service";
import { FaqPurification } from "@/data/faq";
import { useEffect } from "react";

const WaterpurificationPlano = () => {

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
          {/* <div className="service-details__top">
            <div className="row">
              <div className="col-xl-4 col-lg-8 order-2">

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
          </div> */}

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              Water Purification Solutions for Your Home in Plano, TX | Clean Water Pro LLC
            </h2>
            <p>
                At Clean Water Pro LLC, we specialize in providing expert water purification services in Plano, TX, ensuring that you and your family have access to clean, safe, and healthy water. We offer customized water purification systems for home Plano,
                 TX, designed to address various water quality issues such as chlorine, heavy metals,
                 bacteria, sediments, and odors.
              </p>
            {/* <div className="service-details__bottom-text1">
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
            </div> */}

            {/* How it Works Section */}
            <div className="service-details__bottom-text3 ">
              <div className="row">
               
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3> </h3>
              <p>
                Plano homes often experience issues with tap water quality, ranging from chemical contamination to sediment buildup. Our team at Clean Water Pro LLC offers comprehensive solutions to address these concerns. Whether you're using municipal water or relying on well water, we have a variety of systems tailored to meet your needs. From point-of-use filters to whole house water purification systems Plano, TX, our solutions provide purified water for drinking,
                 cooking, bathing, and every other use in your home.<br />
                 With Clean Water Pro LLC, you can trust that your water is free from harmful impurities. Our water purification systems Plano, TX are designed to target a wide range of contaminants, providing the best possible water quality for you and your family.
              </p>
              {/* <ul>
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
                */}
                    {/* <h3>Pioneering Technology for Thorough Purification</h3>
                    <p>
                      At the core of the Dynamic Series lies a pioneering
                      seven-step cleaning sequence. Highlighted by a
                      revolutionary process where a low electric current is
                      passed through two titanium plates, this system creates a
                      powerful decontamination solution. This unique feature
                      ensures that your water isn’t just softened but thoroughly
                      purified, providing you with the highest possible quality
                      with every drop.
                    </p> */}
                    
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/service-details-img1.webp"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="service-details__bottom-text2">
              <h3>Tailored Water Filtration Systems for All Your Needs</h3>
              <p>
                At Clean Water Pro LLC, we understand that every home has unique water quality needs. That’s why we offer a variety of water purification systems Plano, TX, each designed to address specific concerns. Whether you need a whole house filtration system or targeted purification 
                for specific sources, we’ve got you covered.
              </p>
            </div>
            <div className="service-details__bottom-text3 ">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/service-details-img5.jpg"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3>Whole House Water Purification System Plano, TX</h3>
                    <p>
                      Our whole house water purification systems Plano, TX filter all the water entering your home, ensuring that every faucet provides purified water. These systems are ideal for families looking for an all-encompassing solution to remove contaminants like chlorine, heavy metals, sediments, and organic chemicals. With our full house water purification systems Plano,
                       TX, you can enjoy clean water throughout your home without the hassle of installing multiple point-of-use filters.
                    </p>
                    <br/>
                    <h3>Water Purification Systems for Well Water Plano, TX</h3>
                    <p>
                      For homes using well water, we offer specialized water purification systems for well water Plano, TX.
                       Well water can contain higher levels of iron, sulfur, bacteria, and other impurities. Our customized systems are designed to tackle these specific contaminants,
                        ensuring your well water is free from unpleasant odors, staining, and potential health risks.

                    </p>

                    {/* <h3>Pioneering Technology for Thorough Purification</h3>
                    <p>
                      At the core of the Dynamic Series lies a pioneering
                      seven-step cleaning sequence. Highlighted by a
                      revolutionary process where a low electric current is
                      passed through two titanium plates, this system creates a
                      powerful decontamination solution. This unique feature
                      ensures that your water isn’t just softened but thoroughly
                      purified, providing you with the highest possible quality
                      with every drop.
                    </p> */}
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
            <div className="service-details__how-it-works">
                        
                         </div>
                          <h3>Why Choose Clean Water Pro LLC?</h3>
                         <p style={{ marginTop: "20px", textAlign: "left" }}>
                           Clean Water Pro LLC is the trusted water purification service provider Plano, TX, with years of experience in delivering high-quality filtration systems that cater to the diverse needs of our clients.
                            Here’s why we stand out:
                         </p>
                           <ul>
                <li>
                  <strong>Expert Knowledge and Experience:</strong> Our team is highly skilled and experienced in designing, installing, and maintaining water purification systems Plano, TX. We understand the unique water quality challenges faced by homeowners in Plano, whether from municipal or well water sources.

                </li>
                <li>
                  <strong>Customized Solutions:</strong>  We don’t offer one-size-fits-all systems. Whether you need a whole house water purification system Plano, TX, or a more specific water purification system for well water Plano, TX, we work with you to determine the best solution tailored to your needs.

                </li>
                <li>
                  <strong>Quality and Reliability:</strong>  At Clean Water Pro LLC, we use only the highest quality filtration systems that are designed to last. Our water purification systems Plano, TX are built to provide reliable, long-term performance, giving you peace of mind knowing your water is always clean.

                </li>
                <li>
                  <strong>Easy Maintenance and Support:</strong>  Our filtration systems are designed for simple maintenance, and our team is always available to provide ongoing support to ensure your system operates efficiently.

                </li>
              </ul>
               
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
                             src="/assets/images/resources/service-details-img6.webp"
                             alt="How it Works Process 2"
                             style={{
                               marginBottom: "20px",
                               marginTop: "20px",
                             }}
                           />
                         </div>
                         <p>
                      Trust Clean Water Pro LLC to deliver effective, long-lasting solutions for all your water purification needs in Plano, TX.
                       Contact us today to get started and improve the quality of your water!
                    </p>
                        
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
      <div className="service-details__how-it-works" style={{ textAlign: 'center', padding: '35px'}}>
              <h3>Benefits of the Water Purification</h3>
              </div>
     
      <div className="row" style={{ display: 'flex' , flexWrap: 'wrap' , marginTop: '45px' }}>
            {ServicePurification.map((item, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
                key={i}
                style={{ flex: '1 1 25%' }}
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <div className="services-one__single-img-inner">  
                    </div>
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div className="services-one__single-content text-center">
                    
                    <h2>
                     {item.heading}
                      </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

<div className="service-details__how-it-works" style={{ textAlign: 'center', padding: '35px'}}>
              <h3>Product Reviews</h3>
              </div>
<div className="roww" style={{ display: 'flex', flexWrap: 'nowrap',  overflowX: 'auto', marginTop:'5px' }}>
  {ProductsPurification.map((item, i) => (
    <div
      className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
      data-wow-delay={item.delay}
      data-wow-duration={item.duration}
      key={i}
      style={{ flex: '1 1 75%', marginRight: '10px' }} 
    >
      <div className="services-one__singlee">
        <div className="services-one__single-img">
          <div className="services-one__single-img-inner">
            {/* Image Section */}
          </div>
          <div>
            <Image
              src={item.productImage}
              alt={item.productTitle}
              width={200}
              height={120}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="services-one__single-contentt text-center">
          {/* Display Product Title */}
          <p style={{ fontWeight: 'bold' }}>{item.productTitle}</p>

          {/* Star Rating */}
          <div className="stars" style={{ color: '#FFD700' }}>
            {Array.from({ length: item.rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
            {Array.from({ length: 5 - item.rating }).map((_, index) => (
              <span key={index}>☆</span>
            ))}
          </div>

          {/* Reviews Count */}
          <p>{item.reviewsCount} Reviews</p>
        </div>
      </div>
    </div>
  ))}
</div>

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
                    {FaqPurification.map((item, i) => (
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


export default WaterpurificationPlano;
