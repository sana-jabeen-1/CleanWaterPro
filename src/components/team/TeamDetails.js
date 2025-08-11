import React from "react";
import TeamOne from "./TeamOne";

const TeamDetails = () => {
  return (
    <>
      <section className="team-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              {/* Start Team Details Img */}
              <div className="team-details__img js-tilt">
                <img
                  src="/assets/images/resources/team-detalis-img1.jpg"
                  alt=""
                />
              </div>
              {/* End Team Details Img */}
            </div>

            <div className="col-xl-7">
              {/* Start Team Details Content */}
              <div className="team-details__content">
                <div className="title">
                  <h2>Team Details</h2>
                </div>
                <div className="name">
                  <h6>Name : Md Imran Hossain</h6>
                </div>
                <div className="text">
                  <p>
                    About : Phis are bound to ensue; and equal blame belongs to
                    those who through weakness of will, which is the same as
                    through.We have the and industry expertise to develop
                    solutions that can connect.
                  </p>
                </div>
                <div className="number">
                  <p>
                    Call: <a href="tel:180050033333">++019999999</a>
                  </p>
                </div>
                <div className="social-icon">
                  <div className="title">
                    <h6>Follow us:</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Team Details Content */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
