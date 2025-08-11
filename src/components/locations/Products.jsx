import { FeaturesOneData } from "@/data/features";
import Link from "next/link";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      icon: "icon-house-1",
      heading: "DYNAMIC SERIES",
      description:
        "Home’s Water Quality with the Westinghouse Dynamic Series  Refiner from Clean Water Pro’s.",
      link: "/westinghouse-dynamic-series",
      delay: "00ms",
      duration: "1500ms",
    },
    {
      id: 2,
      icon: "icon-window-cleaning",
      heading: "Drinking Water D550",
      description:
        "After the water entering your home is initially treated by the Westinghouse whole house refiner it is then polished even further.",
      link: "/dynamic-products/drinking-water-d550",
      delay: "400ms",
      duration: "1500ms",
    },
    {
      id: 3,
      icon: "icon-carpet-cleaner",
      heading: "IRON BOSS",
      description:
        "Iron Boss relies on its patented technology to supercharge the filtration chamber with oxygen.",
      link: "/dynamic-products/iron-boss",
      delay: "400ms",
      duration: "1500ms",
    },
    {
      id: 4,
      icon: "icon-house-2",
      heading: "QUALITAIR",
      description:
        "Breathe Easier with Qualitair: The Premier Air Treatment System from Clean Water Pro’s.",
      link: "/dynamic-products/qualitair",
      delay: "200ms",
      duration: "1500ms",
    },

    {
      id: 5,
      icon: "icon-electric-vehicle",
      heading: "UV STERILIZATION",
      description:
        "Ensure Ultimate Water Safety with Ultraviolet Lite Sterilization from Clean Water Pro’s.",
      link: "/dynamic-products/ultraviolet-lite-sterilization",
      delay: "300ms",
      duration: "1500ms",
    },
    {
      id: 6,
      icon: "icon-window-cleaning",
      heading: "DISINFECTION FILTRATION",
      description:
        "The Healthway Disinfection Filtration System utilizes technology developed .",
      link: "/dynamic-products/healthway-disinfection-filtration-system",
      delay: "300ms",
      duration: "1500ms",
    },

    {
      id: 7,
      icon: "icon-window-cleaning",
      heading: "Drinking Water R450",
      description:
        "The technology at work with the Westinghouse R450 Drinking Water System is impressive, removing nearly all of the remaining contaminants in your water. You are left with nothing but pure, clean, fresh tasting water to enjoy.",
      link: "/dynamic-products/drinking-water-r450",
      delay: "400ms",
      duration: "1500ms",
    },
    // {
    //   id: 8,
    //   icon: "icon-window-cleaning",
    //   heading: "Reliance Series",
    //   description:
    //     "As the name implies, the Westinghouse Reliance Series refiner delivers exceptional quality water in a package you can rely on.",
    //   link: "/dynamic-products/westinghouse-reliance-series",
    //   delay: "400ms",
    //   duration: "1500ms",
    // },
  ];

  return (
    <>
      <section className="features-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title__style2">
                <div className="section-title">
                  <span className="section-title__tagline">
                    Learn about our Best
                  </span>
                  <h2 className="section-title__title">
                    Products for your <br /> home <br />
                  </h2>
                </div>
                <div className="text-box">
                  <p>
                    At Clean Water Pro’s, we understand the importance of clean
                    water. Whether it's for drinking, cooking, or maintaining a
                    healthy lifestyle, our mission is to deliver products that
                    guarantee the highest standards of water quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {ProductsData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated animated"
                data-wow-delay={item.delay}
                data-wow-duration={item.duration}
              >
                <div className="features-one__single">
                  <div
                    className="layer-outer"
                    style={{ backgroundImage: `url(${""})` }}
                  ></div>
                  <div className="features-one__single-inner">
                    {/* <div className="icon-box">
                      <span>{item.icon}</span>
                    </div> */}
                    <div className="content-box">
                      <h2>
                        <Link href={item.link}>{item.heading}</Link>
                      </h2>
                      <p>{item.description}</p>
                      <div className="btn-box">
                        <Link href={item.link}>
                          Read More <span className="icon-plus"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
