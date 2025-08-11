import React from "react";

const NewsletterOne = () => {
  return (
    <>
      <section className="subscribe-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="subscribe-one__content">
                <div className="subscribe-title">
                  <h3>Subscribe Our Newsletters</h3>
                </div>
                <div className="subscribe-box">
                  <form className="subscribe-form" action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <button className="btn-one" type="submit">
                      <span className="txt">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterOne;
