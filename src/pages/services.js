import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import CtaOne from "../components/cta/CtaOne";
import ServiceOne from "../components/service/ServiceOne";

export default function ServicePageOne() {
  return (
    <>
      <SEO pageTitle={"Services"} canonical="https://www.cleanwaterprosllc.com/services" />
      <HeaderOne />
      <Breadcrumb
        heading="Services"
        currentPage="Services"
        banner="/assets/images/services/banner.jpg"
        mobileBanner="/assets/images/services/banner.jpg"
      />
      <ServiceOne />
      {/* <BrandOne /> */}
      <CtaOne />
      <FooterOne />
    </>
  );
}
