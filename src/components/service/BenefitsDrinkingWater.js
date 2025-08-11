import Image from "next/image";

const BenefitsDrinkingWater = () => {
  const images = [
    "https://images.pexels.com/photos/16884368/pexels-photo-16884368/free-photo-of-plastic-bottles-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6287490/pexels-photo-6287490.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/266943/pexels-photo-266943.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <section className="service-details">
        <div className="container">
          <div className="service-details__bottom">
            <h1 className="service-details__bottom-title">
              {" "}
              Benefits Of Purified Drinking Water
            </h1>
            <div className="service-details__bottom-text1"></div>

            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/benefits-of-drinking-water.png"
                      alt="a image containing benefits of drinking water"
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
                    <h4>Eliminating the need to buy and store bottled water</h4>
                    <br />
                    <h4>
                      Eliminating the disposal of bottles or containers that
                      house filtered water
                    </h4>
                    <br />
                    <h4>
                      Never run dry with a supply of excellent quality water
                      constantly on standby
                    </h4>
                    <br />
                    <h4>Enriches the taste of drinks made from water</h4>
                    <h4>
                      Reduces the quantity of ingredients for flavored or mixed
                      drinks
                    </h4>
                    <br />
                    <h4>
                      Improves the quality of foods cooked or prepared in the
                      purified water
                    </h4>

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
        </div>
      </section>
    </>
  );
};

export default BenefitsDrinkingWater;
