import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import ServiceTwo from "../components/service/ServiceTwo";

export default function ServicePageOne() {
  return (
    <>
      <SEO pageTitle={"Dynamic Products"} canonical="https://www.cleanwaterprosllc.com/dynamic-products" />
      <HeaderOne />
      <Breadcrumb
        heading="OUR PRODUCTS"
        currentPage="Products"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <ServiceTwo />
      {/*  <BrandOne /> */}
      {/* <CtaOne /> */}
      <FooterOne />
    </>
  );
}
