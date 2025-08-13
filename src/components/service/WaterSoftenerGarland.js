import Image from "next/image";
import Link from "next/link";
import { ProductsSoftener, ServiceSoftener } from "@/data/service";
import { ProductsFiltration } from "@/data/service";
import { FaqSoftener } from "@/data/faq";
import { useEffect } from "react";

const WaterSoftenerGarland = () => {

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
             Professional Water Softener Services in Garland, TX

            </h2>
            <p>
               At <strong>Clean Water Pro LLC</strong>, we specialize in providing high-quality<strong> water softener services in Garland, TX</strong>. 
               Our team of licensed professionals is dedicated to ensuring that your home or business has access to clean, 
               soft water free from the harmful effects of hard water. Hard water can damage your plumbing, appliances, and even affect the health of your skin and hair. 
               With over 20 years of experience, we offer a comprehensive range of water softener installation services Garland TX, including custom water softening systems designed to meet your specific needs.

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
                    <h3> Water Softener Installation Service in Garland, TX</h3>
              <p>
                  Water Softener Installation Service in Garland, TX is the first step toward protecting your home from the negative effects of hard water. 
                  We help you select the right water softener system that suits your home's water needs, ensuring a smooth installation process. Whether you need a water softener company near me or a specialized water softener technician near me, Clean Water Pro LLC is ready to serve your needs with professionalism and efficiency.
              </p>
               <p>
                 When you choose Clean Water Pro LLC, you're opting for a hassle-free water softener installation experience, 
                 where we manage every aspect of the process from start to finish. Our technicians are trained to handle both residential and commercial water softener repair Garland TX needs.
                  So, whether you're dealing with a small problem at home or need an industrial-strength solution, we’ve got you covered.
              </p>
              <p>
                We provide water softener maintenance near me services to keep your system running efficiently over the years. Regular maintenance can help prevent issues and ensure your water softener continues to perform at its best. 
                We recommend periodic inspections, salt replenishment, and cleaning to avoid any costly repairs down the line. 
                Our water softener service Garland TX is designed to offer peace of mind by keeping your system running smoothly, offering both repair and servicing when required.
              </p><br />

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
              </ul> */}
               
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
                      src="/assets/images/resources/service-details-img3.webp"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="service-details__bottom-text2">
              <h3>Comprehensive Water Softener Repair and Maintenance</h3>
              <p>
                A water softener is a significant investment in the well-being of your home, and like any appliance, it requires regular water softener servicing and occasional repairs.
                 At Clean Water Pro LLC, we provide a full range of water softener repair and maintenance services in Garland, TX, to ensure that your system remains in optimal condition. 
                 Whether you’re experiencing issues with water pressure, mineral buildup, or strange noises, our expert team is just a call away.

              </p>
            </div>
            <div className="service-details__bottom-text3 ">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/service-details-img3.webp"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3>water softener servicing near me</h3>
                    <p>
                     Our water softener servicing near me includes a complete system check-up where we assess the internal components of your water softener and make necessary adjustments. From<strong> salt replenishment </strong>to checking for leaks or clogs, we ensure that your system continues to work efficiently. If you're in need of a water softener repairman near me, 
                     Clean Water Pro LLC is available to troubleshoot and fix any issues that may arise with your water softener system.
                    </p>
                     <p>
                      Having a<strong> water softener system service near me</strong> can save you from unexpected breakdowns. Over time, 
                     water softeners can experience issues such as mineral buildup, which can reduce their efficiency.
                      Our technicians specialize in<strong> water softener repair Garland TX</strong>, providing solutions to all types of water softener problems. 
                      Whether you're dealing with a faulty valve, resin bed issues, or clogged pipes, we have the expertise to restore your system to perfect working order.
                    </p>
                    <p>
                      In addition to repairs, we also offer<strong> water softener system maintenance near me</strong> to help prolong the life of your system. 
                      Regular maintenance ensures that your water softener continues to operate at peak performance, reducing the chances of future repairs and lowering your long-term costs.
                       We work with all types of water softener systems, including<strong> commercial water softener repair Garland TX</strong>, so no matter the size or scope of the issue, Clean Water Pro LLC is here to help.

                    </p><br />
                    
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
                         <h3>Why Choose Clean Water Pro LLC for Water Softener Services in Garland, TX</h3>
                         <p style={{ marginTop: "20px", textAlign: "left" }}>
                           When it comes to <strong>water softener companies in my area</strong>, Clean Water Pro LLC stands out as a trusted provider of water softening solutions in Garland, TX, and surrounding areas. We pride ourselves on our reputation for quality service, customer satisfaction, and reliable results. Whether you're searching for<strong> 
                            water softener companies near me </strong>or need a specialized <strong>water softener service company Garland TX</strong>, 
                           we are the go-to choice for homeowners and businesses alike.ut the most refined, clean, and soft
                           water imaginable.
                         </p>
                         <p>
                           At Clean Water Pro LLC, our <strong>water softener service Garland TX </strong>goes beyond installation and repairs. 
                           We offer ongoing support with regular maintenance packages that ensure your water softener operates efficiently and effectively. By working with us, you’ll never have to worry about<strong> water softener system maintenance</strong> again. Our team is always available to provide expert advice, diagnose issues, 
                           and recommend the best solutions for your water quality needs.
                         </p><br />
                         <p>
                           We understand the unique water issues faced by residents in Garland, TX, and we offer tailored solutions that will address your specific needs. 
                           As your local<strong> water softener company near me</strong>, we focus on providing a personalized, friendly experience. Our technicians will not only install or repair your system but also educate you on how to maintain it for optimal performance.

                         </p><br />
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
                             src="/assets/images/resources/service-details-img3.webp"
                             alt="How it Works Process 2"
                             style={{
                               marginBottom: "20px",
                               marginTop: "20px",
                             }}
                           />
                        
                         </div>
                         <p>
                           Whether you are looking for<strong> water softener servicing Garland TX</strong> or need urgent repairs, we’re the local experts who you can rely on for fast, efficient, 
                           and affordable solutions. We work with a variety of water softener systems and offer advice on which system is best suited for your home.
                            If you're searching for a water softener company Garland TX, Clean Water Pro LLC is here to provide you with the highest level of service and expertise.
                         </p><br />
                      
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
              <h3>Benefits of the Water Softener</h3>
              </div>
     
      <div className="row" style={{ display: 'flex' , flexWrap: 'wrap' , marginTop: '45px' }}>
            {ServiceSoftener.map((item, i) => (
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
  {ProductsSoftener.map((item, i) => (
    <div
      className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
      data-wow-delay={item.delay}
      data-wow-duration={item.duration}
      key={i}
      style={{ flex: '1 1 25%', marginRight: '10px' }} 
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
                    {FaqSoftener.map((item, i) => (
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


export default WaterSoftenerGarland;
