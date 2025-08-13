import Image from "next/image";
import Link from "next/link";
import { ServiceFilration } from "@/data/service";
import { ProductsFiltration } from "@/data/service";
import { FaqFiltration } from "@/data/faq";
import { useEffect } from "react";

const WaterFiltrationGarland = () => {

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
             Reliable Water Filtration Solutions by Clean Water Pro LLC in Garland, TX

            </h2>
            <p>
                If you're searching for water filtration services in Garland, TX, Clean Water Pro LLC offers reliable solutions that ensure your home or business enjoys clean, purified water. 
              .
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
                Our services include water purification services in Garland, TX, designed to remove harmful contaminants, improving both the taste and safety of your water. Whether you're in need of home water filtration service in Garland, TX or commercial water filtration service companies near me 
                we’ve got you covered with top-notch systems tailored to your needs
                We are a trusted water filtration service company in Garland, TX, offering a variety of customizable options for your home or business. Our water treatment services in Garland, TX include whole home water filtration services in Garland, TX, ensuring that every tap in your home provides safe and clean water.
                 Whether you're searching for water filtration system maintenance services in Garland, TX or need a new water filtration system company,
                 our experts at Clean Water Pro LLC will help you find the right solution.
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
                      src="/assets/images/resources/service-details-img1.webp"
                      alt="Three distinct water filtration systems"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="service-details__bottom-text2">
              <h3>Comprehensive Water Filtration and Purification for Homes and Businesses</h3>
              <p>
                When it comes to your home’s water, having a home water filtration system near me is essential for maintaining good health. Our home water filtration services in Garland, TX, at Clean Water Pro LLC, include everything from installation to regular water filtration system maintenance services. We provide advanced filtration systems that remove a wide range of contaminants including chlorine, sediment, and lead, offering you cleaner water for drinking, cooking, and bathing.

              </p>
            </div>
            <div className="service-details__bottom-text3 ">
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
                    <h3></h3>
                    <p>
                      Our water purification services in Garland, TX are designed to tackle common issues in city or well water, removing impurities like chlorine, chloramines, bacteria, and more. Clean Water Pro LLC offers tailored solutions that suit the needs of different homes and businesses, ensuring you get the purest water possible. If you're looking for water filtration services near me,
                       we provide high-quality systems designed to fit your lifestyle.<br/>
                       For businesses in need of clean water, our commercial water filtration service companies near me specialize in providing reliable, large-scale filtration systems. Whether you run a restaurant, hotel, or other commercial establishment, Clean Water Pro LLC offers water treatment services in Garland, TX, to ensure your customers and staff have access to clean, safe water. Our commercial systems are designed for efficiency and long-lasting performance, helping you save on maintenance and water costs in the long run.

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
                         <h3>Efficient Maintenance and Reliable Filtration Systems for Homes and Businesses</h3>
                         <p style={{ marginTop: "20px", textAlign: "left" }}>
                           Are you in need of a water filtration system company near me? Clean Water Pro LLC offers a variety of systems, 
                           including whole home water filtration services in Garland, TX, that address the needs of every home. Whether you have city water or a private well,
                            we have the right filtration technology to give you the clean water you deserve.<br/>
                            For a water filtration system to perform at its best, regular maintenance is key. Clean Water Pro LLC offers water filtration system maintenance services in Garland,
                             TX, to ensure your system is running smoothly, catching any issues early on to prevent costly repairs. From routine filter changes to system inspections, 
                             our experts will keep your system in top shape, providing you with fresh, clean water all year long.<br />
                             Looking for trusted water filtration service companies in Garland, TX? Clean Water Pro LLC is a leading provider of filtration systems that remove harmful chemicals and impurities from your water supply. 
                             Our systems are built to last, offering long-term protection for your home and health. Whether you need a whole-house system or a point-of-use filter, we have options that fit your needs.



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
                             src="/assets/images/resources/service-details-img7.webp"
                             alt="How it Works Process 2"
                             style={{
                               marginBottom: "20px",
                               marginTop: "20px",
                             }}
                           />
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
      <div className="service-details__how-it-works" style={{ textAlign: 'center', padding: '35px'}}>
              <h3>Benefits of the Water Filtration</h3>
              </div>
     
      <div className="row" style={{ display: 'flex' , flexWrap: 'wrap' , marginTop: '45px' }}>
            {ServiceFilration.map((item, i) => (
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
  {ProductsFiltration.map((item, i) => (
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
                    {FaqFiltration.map((item, i) => (
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

export default WaterFiltrationGarland;
