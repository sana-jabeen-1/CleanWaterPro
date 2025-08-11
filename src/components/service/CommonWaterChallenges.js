import Image from "next/image";

const CommonWaterChallenges = () => {
  const images = [
    "/assets/images/products/pipe1.jpeg",
    "/assets/images/products/pipe2.jpeg",
    "/assets/images/products/pipe3.jpeg",
    "/assets/images/products/pipe4.jpeg",
    "/assets/images/products/pipe6.jpeg",
    "/assets/images/products/pipe7.jpeg",
  ];

  return (
    <>
      <section className="service-details">
        <div className="container">
          <div className="service-details__bottom">
            <h1 className="service-details__bottom-title">
              Water touches every aspect of our lives and it is essential to our
              survival.{" "}
            </h1>
            <p>
              The water we utilize every day is constantly being recycled and
              likely contains a host of contaminants, both from nature and
              man-made sources. First, consider the water system in your own
              home. As the water enters your home it travels through your walls
              through a series of pipes and plumbing.
            </p>
            <div className="service-details__bottom-text1"></div>

            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/common-water-challenges.webp"
                      alt="man with a pipe, a sink, and a hose, illustrating plumbing tools and tasks."
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div
                    className="content-box"
                    style={{
                      marginBottom: "45px",
                    }}
                  >
                    <span>
                      These pipes lead to water using appliances, faucets and
                      fixtures where the water is utilized or dispensed. All
                      your plumbing, appliances, faucets and fixtures are
                      affected to some degree by the quality of your water.
                      Common contaminants like calcium, lime, magnesium and iron
                      can and will prematurely plug up your plumbing, damage
                      water using appliances, and stain and plug up fixtures.
                      Deposits from these minerals will also interfere with the
                      actions of household soaps combining to form soap scum
                      which is then deposited on your dishes, your sinks, your
                      showers, your tubs, your clothing and linens, your skin
                      and your hair. This soap scum creates that “squeaky”
                      feeling on your skin and hair after you bathe. These
                      unsightly deposits cause lots of extra household cleaning,
                      which in some cases require harsh toxic cleaning chemicals
                      which are then introduced into the environment.
                    </span>
                    <br />
                    <span>
                      Beyond hardness minerals that negatively affect everyday
                      household water use is the higher water quality demand of
                      the water we consume. We drink it, cook with it, make
                      coffee, juice, tea, and ice cubes with it. This water
                      should be of the highest water quality. Most homeowners
                      today supplement their water for consumption with either
                      bottled water or some sort of filtered water.
                    </span>
                    <br />
                    <h5>
                      Whether it comes from the tap, the bottle or some type of
                      filtering device, do you know much about the quality of
                      these sources? Schedule a free, no obligation water
                      analysis today to find out.
                    </h5>
                    <br />

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

            {/* Images */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "50px",
                margin: "80px 0px",
              }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={350}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonWaterChallenges;
