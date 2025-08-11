import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import AboutOne from "../components/about/AboutOne";
import ContactOne from "../components/contact/ContactOne";

export default function AboutPage() {
  return (
    <>
      <SEO pageTitle={"About Us"} canonical="https://www.cleanwaterprosllc.com/about-us" />
      <HeaderOne />
      <Breadcrumb
        heading="About Us"
        currentPage="About-us"
        banner="/assets/images/about/about-us-banner.png"
        mobileBanner="/assets/images/about/about-us-banner-mobile.webp"
      />
      <AboutOne />
      {/* <ServiceOne /> */}
      <ContactOne />
      {/* <TeamOne />
      <BlogOne />
      <BrandOne /> */}
      <FooterOne />
    </>
  );
}
