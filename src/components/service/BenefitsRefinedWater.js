import Image from "next/image";

const BenefitsRefinedWater = () => {
  const images = [
    "/assets/images/products/OIP.jpeg",
    "/assets/images/products/OIP2.jpeg",
    "/assets/images/products/OIP3.jpeg",
  ];

  return (
    <>
      <section className="service-details">
        <div className="container">
          <div className="service-details__bottom">
            <h1 className="service-details__bottom-title">
              {" "}
              Benefits Of Refined Water
            </h1>
            <div className="service-details__bottom-text1"></div>

            <div className="service-details__bottom-text3">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/benefits-of-refined-water.png"
                      alt=""
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
                    <ul>
                      <li>
                        <span className="icon-plus"></span> Eliminates hard
                        water deposits that plug up plumbing
                      </li>
                      <li>
                        <span className="icon-plus"></span>Increases the life
                        expectancy of water using appliances
                      </li>
                      <li>
                        <span className="icon-plus"></span>Maintains efficiency
                        of water using appliances like water heaters by
                        eliminating lime scale build-up
                      </li>
                      <li>
                        <span className="icon-plus"></span>Eliminates hard water
                        spots and etching on dishes, glasses, flatware and more
                      </li>
                      <li>
                        <span className="icon-plus"></span>Eliminates hard water
                        spots and soap scum deposits in sinks, tubs and showers
                      </li>
                      <li>
                        <span className="icon-plus"></span>Reduces the use of
                        soaps and cleaning products
                      </li>
                      <li>
                        <span className="icon-plus"></span>Often eliminates the
                        need for any harsh chemical cleaners in the home
                      </li>
                      <li>
                        <span className="icon-plus"></span>Eliminates hardness
                        deposits building up in shower heads and sink faucet
                        aerators significantly extending their life expectancy
                      </li>
                      <li>
                        <span className="icon-plus"></span>Significantly reduces
                        or eliminates chlorine from household water which dries
                        out your skin and hair and strips the colors from
                        clothes and linens when laundered
                      </li>
                      <li>
                        <span className="icon-plus"></span>Refined water rinses
                        cleanly in the shower eliminate soap scum on your hair
                        and skin
                      </li>

                      <li>
                        <span className="icon-plus"></span>Leaves laundry
                        feeling soft and clean rather than scratchy and stiff
                        because soap rinses completely away and no mineral
                        deposits are left in the fabric
                      </li>
                      <li>
                        <span className="icon-plus"></span>Refined water, all by
                        itself, is a powerful solvent, significantly aiding in
                        the cleaning process
                      </li>
                      <li>
                        <span className="icon-plus"></span>Reduces the demand
                        for household cleaning of faucets, sinks, tubs, and
                        showers
                      </li>
                    </ul>
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
        </div>
      </section>
    </>
  );
};

export default BenefitsRefinedWater;
