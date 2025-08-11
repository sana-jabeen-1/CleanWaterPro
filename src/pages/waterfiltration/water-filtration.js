import DrinkingWaterD550 from "@/components/service/DrinkingWaterD550";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

export default function WaterFiltrationPage() {
  return (
    <>
      <SEO pageTitle={"Water Filtration "} canonical="https://www.cleanwaterprosllc.com/services/water-filtration" />
      <HeaderOne />
      <Breadcrumb
        heading="Water Filtration"
        currentPage="Water Filtration"
        banner="/assets/images/backgrounds/banner.webp"
        mobileBanner="/assets/images/backgrounds/banner-2-mobile.webp"
      />

      <DrinkingWaterD550 />
      <FooterOne />
    </>
  );
}
