import DrinkingWaterD550 from "@/components/service/DrinkingWaterD550";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

export default function DrinkingWaterD550Page() {
  return (
    <>
      <SEO pageTitle={"Drinking Water D550 "} canonical="https://www.cleanwaterprosllc.com/dynamic-products/drinking-water-d550" />
      <HeaderOne />
      <Breadcrumb
        heading="Drinking Water D550"
        currentPage="Drinking Water D550"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />

      <DrinkingWaterD550 />
      <FooterOne />
    </>
  );
}
