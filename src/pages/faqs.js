import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import ContactTwo from "../components/contact/ContactTwo";
import FaqOne from "../components/faq/FaqOne";

export default function FaqPage() {
  return (
    <>
      <SEO pageTitle={"Faqs"} canonical="https://www.cleanwaterprosllc.com/faqs" />
      <HeaderOne />
      <Breadcrumb
        heading="Frequently Asked Questions"
        currentPage="Faqs"
        banner="/assets/images/faqs/banner.png"
        mobileBanner="/assets/images/faqs/banner-mobile.webp"
      />
      <FaqOne />
      <ContactTwo />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
