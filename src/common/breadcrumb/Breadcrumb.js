import { useEffect, useState } from "react";

const Breadcrumb = ({
  heading = "About Us",
  currentPage = "About",
  banner = "/assets/images/backgrounds/page-header-img1.jpg",
  mobileBanner,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px or less is generally considered mobile
    };

    // Check on initial render
    handleResize();

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url(${
              isMobile && mobileBanner ? mobileBanner : banner
            })`,
            height: "100%",

            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h1
                    style={
                      heading === "Services" && isMobile
                        ? {
                            paddingBottom: 215,
                          }
                        : heading === "Locations"
                        ? {
                            color: "white",
                            marginLeft: isMobile ? "0px" : "0px",
                            // marginLeft: isMobile ? "60px" : "-165px",
                            // marginTop: isMobile ? "-175px" : "0px",
                            marginTop: isMobile ? "0px" : "0px",
                          }
                        : undefined
                    }
                  >
                    {heading}
                  </h1>
                  {/* <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>

                      <li>
                        <Link href="/">{currentPage.toUpperCase()}</Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
