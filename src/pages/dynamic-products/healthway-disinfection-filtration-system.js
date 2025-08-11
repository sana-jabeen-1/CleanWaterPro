import HealthWayDisinfectionFiltration from "@/components/service/HealthWayDisinfectionFiltration";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

export default function HealthWayDisinfectionFiltrationPage() {
  return (
    <>
      <SEO pageTitle={"HealthWay Disinfection Filtration System"} canonical="https://www.cleanwaterprosllc.com/dynamic-products/healthway-disinfection-filtration-system" />
      <HeaderOne />
      <Breadcrumb
        heading="Healthway Disinfection Filtration System"
        currentPage="Healthway Disinfection "
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <HealthWayDisinfectionFiltration />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
