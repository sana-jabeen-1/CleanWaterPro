import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";
import Sidebar from "./sidebar";

const HeaderOne = () => {
  // useEffect(() => {
  //   $("select").niceSelect();

  //   if ($("#polyglot-language-options").length) {
  //     $("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({
  //       effect: "slide",
  //       animSpeed: 500,
  //       testMode: true,
  //       onChange: function (evt) {
  //         alert("The selected language is: " + evt.selectedItem);
  //       },
  //     });
  //   }
  // }, []);
  const [isActive, setIsActive] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="main-header clearfix">
        <div className="main-header__top clearfix">
          <div className="container clearfix">
            <div className="main-header__top-inner clearfix">
              <div className="main-header__top-left">
                <ul className="main-header__top-address">
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:jeff@cleanwaterprosllc.com">
                          jeff@cleanwaterprosllc.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        color="white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      <Link href={"tel:18007893520"}>1 (800) 789-3520</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="main-header__top-right">
                {/* <div className="main-header__top-right-search">
                  <a
                    href="#"
                    className="search-toggler"
                    variant="primary"
                    onClick={handleShow}
                  >
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                  <div className="search-popup">
                    <Modal
                      show={show}
                      onHide={handleClose}
                      className="search-popup__overlay search-toggler"
                    >
                      <div className="search-popup__content">
                        <form action="#">
                          <label for="search" className="sr-only">
                            search here
                          </label>
                          <input
                            type="text"
                            id="search"
                            placeholder="Search Here..."
                          />
                          <button
                            type="submit"
                            aria-label="search submit"
                            className="thm-btn"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </form>
                      </div>
                    </Modal>
                  </div>
                </div> */}

                <div className="main-header__top-right-social">
                  <a
                    href="https://www.facebook.com/people/Clean-Water-Pros-LLC/61565018964527/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/cleanwaterprosllc/"
                    target="_blank"
                    className="text-yellow-400"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/clean-water-pro-s-llc/"
                    target="_blank"
                    className="text-yellow-400"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>

                {/* <div className="language-switcher">
                  <div id="polyglotLanguageSwitcher">
                    <form action="#">
                      <select id="polyglot-language-options">
                        <option id="en" value="en" selected>
                          England
                        </option>
                        <option id="fr" value="fr">
                          France
                        </option>
                        <option id="de" value="de">
                          Germany
                        </option>
                        <option id="it" value="it">
                          Italy
                        </option>
                        <option id="es" value="es">
                          Span
                        </option>
                      </select>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <nav className="main-menu clearfix" style={{}}>
          <div className=" clearfix">
            <div
              className="main-menu-wrapper clearfix"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="main-menu-wrapper__left"
                style={
                  {
                    // border: "1px solid red",
                  }
                }
              >
                <div className="main-menu-wrapper__logo" style={{}}>
                  <Link href="/" style={{}}>
                    <img
                      src="/assets/images/resources/logo.png"
                      alt="clean water pro llc logo"
                      style={{
                        width: "120px",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <div className="main-menu-wrapper__main-menu">
                  <a
                    onClick={() => setIsActive(true)}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                  <NavMenu />
                </div>
                <Link href="/appointment" className="thm-btn main-header__btn ">
                  <span>Book An Appointment</span>
                  <div className="liquid"></div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />

      <div className="body-overlay"></div>
    </>
  );
};

export default HeaderOne;
