import Link from "next/link";

const CtaOne = () => {
  return (
    <>
      <section className="cta-one">
        <div
          className="image-layer"
          /*  style={{ backgroundImage: `url(${BackgroundOne.src})` }} */
        style={{ backgroundImage: `url(${""})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one__inner">
                <div className="title">
                  <h2
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {" "}
                    Schedule your free water assessment
                  </h2>
                  <br />
                  <div className="number">
                    <p>
                      Call:{" "}
                      <Link href="tel:+18007893520">1 (800) 789-3520</Link>
                    </p>
                  </div>
                </div>
                <div className="button-box">
                  <Link href="/contact" className="thm-btn">
                    <span>Contact Us</span>
                    <div className="liquid"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaOne;
