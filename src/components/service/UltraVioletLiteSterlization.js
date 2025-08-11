import Link from "next/link";

const UltraVioletLiteSterlization = () => {
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
                    src="/assets/images/resources/service-details-img5.jpg"
                    alt="A razor featuring a blue handle and a red handle, showcasing a dual-color design for easy grip and use"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service-details__bottom">
            <h2 className="service-details__bottom-title">
              Ultraviolet Lite Sterlization Water Disinfectant
            </h2>
            <div className="service-details__bottom-text1"></div>
            <div className="service-details__bottom-text2">
              <p>
                Ensure Ultimate Water Safety with Ultraviolet Lite Sterilization
                from Clean Water Pro’s
              </p>

              <p>
                Securing the purity and safety of your home’s water supply
                transcends mere preference—it’s a necessity. For homes where the
                source water may arrive untreated, introducing an effective
                disinfection method is paramount. The Ultraviolet Lite
                Sterilization system offered by Clean Water Pro’s presents an
                advanced, chemical-free solution to this critical need, ensuring
                your water is not just clear, but confidently clean.
              </p>
            </div>
            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/uv-sterilization.webp"
                      alt="UV Sterilization"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="content-box">
                    <h3> A Leap Beyond Traditional Disinfection Methods</h3>
                    <p>
                      While chlorine has been the go-to for water disinfection
                      for decades, its use comes with notable drawbacks. The
                      reaction of chlorine with natural organic materials in
                      water can lead to the formation of unpleasant odors and
                      tastes, not to mention potentially harmful by-products
                      like chloroform and trihalomethanes. These concerns
                      highlight the need for a safer, more efficient method of
                      ensuring water safety without compromising on quality.
                    </p>
                    <h3>Harnessing the Power of UV Sanitation</h3>
                    <p>
                      Ultraviolet Lite Sterilization leverages the potent,
                      purifying properties of UV light to offer a superior
                      disinfection solution. This technology has garnered global
                      recognition for its effectiveness and reliability. By
                      directing water through a specially designed disinfection
                      chamber, UV light works to sterilize any organisms with
                      nucleic acids—effectively neutralizing pathogens such as
                      Salmonella, Hepatitis, E. coli, and even protozoan
                      organisms like Giardia and Cryptosporidium. The process is
                      swift, thorough, and entirely chemical-free, eliminating
                      the risks associated with chemical disinfection methods.
                    </p>
                    <h3>The Ultimate Guardian of Your Home’s Water</h3>
                    <p>
                      Choosing the Ultraviolet Lite Sterilization system means
                      opting for peace of mind. This cutting-edge solution
                      ensures that your water is free from pathogenic microbes
                      without introducing any chemicals into your water supply.
                      It represents a significant step forward in home water
                      treatment technology, providing a level of safety and
                      purity that traditional disinfection methods simply cannot
                      match.
                    </p>
                    <h3>Embrace the Future of Water Disinfection</h3>
                    <p>
                      With the Ultraviolet Lite Sterilization system from Clean
                      Water Pro’s, you’re not just making a choice for cleaner
                      water, you’re making a commitment to the health and
                      well-being of your household. This system offers an
                      efficient, effective, and eco-friendly way to ensure your
                      water is safe and pleasant to use and consume. By evading
                      the pitfalls of chemical disinfection, you’re ensuring
                      that your water remains pure, safe, and free of any
                      unwanted tastes or odors.
                    </p>
                    <br />
                    <p>
                      Transform the safety and quality of your home’s water
                      supply with the Ultraviolet Lite Sterilization system.
                      It’s time to move beyond the limitations of traditional
                      disinfection methods and step into a future where your
                      water is as safe as it is crystal clear. Visit Clean Water
                      Pro’s today and discover how UV disinfection can make a
                      profound difference in your home.
                    </p>
                    {/*  <ul>
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
            .content-box h3 {
              margin: 15px 0px;
            }
            .content-box p {
              margin-bottom: 15px;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default UltraVioletLiteSterlization;
