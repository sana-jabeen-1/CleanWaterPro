import ContactMap from "@/components/contact/ContactMap";
import ContactTwo from "@/components/contact/ContactTwo";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import ContactInfo from "../components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <SEO pageTitle={"Contact Page"} canonical="https://www.cleanwaterprosllc.com/contact" />
      <HeaderOne />
      <Breadcrumb
        heading="Contact Page"
        currentPage="Contact"
        banner="/assets/images/contact/banner.png"
        mobileBanner="/assets/images/contact/banner-mobile.webp"
      />
      <ContactInfo />
      <ContactTwo />
      <ContactMap />
      <FooterOne />
    </>
  );
}
