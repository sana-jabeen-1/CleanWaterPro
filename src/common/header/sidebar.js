import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className="tt-offcanvas-wrapper">
        <div className={`tt-offcanvas ${isActive ? "opened" : ""}`}>
          <div
            className="tt-offcanvas-close"
            onClick={() => setIsActive(false)}
          >
            <span>
              <i className="fas fa-times"></i>
            </span>
          </div>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="/assets/images/resources/footer-logo1.png"
                width="155"
                alt="Clean Water pros logo"
              />
            </Link>
          </div>
          <div className="mobile-nav__container"></div>

          <div className={`tt-mobile-menu mean-container d-xl-none`}>
            <div className="mean-bar">
              <MobileMenus />
            </div>
          </div>

          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:jeff@cleanwaterprosllc.com">
                jeff@cleanwaterprosllc.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:18007893520">1-(800)-789-3520</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a
                href="https://www.facebook.com/people/Clean-Water-Pros-LLC/61565018964527/"
                target="_blank"
                className="fab fa-facebook-square"
              ></a>
              <a
                href="https://www.linkedin.com/company/clean-water-pro-s-llc/"
                target="_blank"
                className="text-yellow-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/cleanwaterprosllc/"
                target="_blank"
                className="fab fa-instagram-square"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`body-overlay ${isActive ? "opened" : ""}`}
        onClick={() => setIsActive(false)}
      ></div>
    </>
  );
};

export default Sidebar;
