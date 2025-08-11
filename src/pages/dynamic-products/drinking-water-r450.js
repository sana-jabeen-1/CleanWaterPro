import DrinkingWaterR450 from "@/components/service/DrinkingWaterR450";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

export default function DrinkingWaterR450Page() {
  return (
    <>
      <SEO pageTitle={"Drinking Water R450"} canonical="https://www.cleanwaterprosllc.com/dynamic-products/drinking-water-r450" />
      <HeaderOne />
      <Breadcrumb
        heading="Drinking Water R450"
        currentPage="Drinking Water R450"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <DrinkingWaterR450 />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
