import React, { useEffect } from "react";

const ProjectOne = () => {
  useEffect(() => {
    if ($(".img-popup").length) {
      var groups = {};
      $(".img-popup").each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }, []);
  return (
    <>
      <section className="projects-one pd-120-0-90">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Recent Work</span>
            <h2 className="section-title__title">Explore Projects</h2>
          </div>
          <div className="row">
            {/* Start Projects One Single */}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <img
                    className="parallax-img"
                    src="/assets/images/projects/projects-v1-img1.jpg"
                    alt=""
                  />
                  <div className="overlay-icon">
                    <a
                      className="img-popup"
                      href="/assets/images/projects/projects-v1-img1.jpg"
                    >
                      <span className="icon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Projects One Single */}
            {/* Start Projects One Single */}
            <div
              className="col-xl-8 col-lg-8 col-md-8 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <img
                    className="parallax-img"
                    src="/assets/images/projects/projects-v1-img2.jpg"
                    alt=""
                  />
                  <div className="overlay-icon">
                    <a
                      className="img-popup"
                      href="/assets/images/projects/projects-v1-img2.jpg"
                    >
                      <span className="icon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Projects One Single */}
            {/* Start Projects One Single */}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <img
                    className="parallax-img"
                    src="/assets/images/projects/projects-v1-img3.jpg"
                    alt=""
                  />
                  <div className="overlay-icon">
                    <a
                      className="img-popup"
                      href="/assets/images/projects/projects-v1-img3.jpg"
                    >
                      <span className="icon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Projects One Single */}
            {/* Start Projects One Single */}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <img
                    className="parallax-img"
                    src="/assets/images/projects/projects-v1-img4.jpg"
                    alt=""
                  />
                  <div className="overlay-icon">
                    <a
                      className="img-popup"
                      href="/assets/images/projects/projects-v1-img4.jpg"
                    >
                      <span className="icon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Projects One Single */}
            {/* Start Projects One Single */}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <img
                    className="parallax-img"
                    src="/assets/images/projects/projects-v1-img5.jpg"
                    alt=""
                  />
                  <div className="overlay-icon">
                    <a
                      className="img-popup"
                      href="/assets/images/projects/projects-v1-img5.jpg"
                    >
                      <span className="icon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Projects One Single */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectOne;
