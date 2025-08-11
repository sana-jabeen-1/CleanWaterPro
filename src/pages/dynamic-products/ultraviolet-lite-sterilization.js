import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";
import UltraVioletLiteSterlization from "../../components/service/UltraVioletLiteSterlization";

export default function UltravioletLiteSterlizationPage() {
  return (
    <>
      <SEO pageTitle={"UV STERILIZATION"} canonical="https://www.cleanwaterprosllc.com/dynamic-products/ultraviolet-lite-sterilization" />
      <HeaderOne />
      <Breadcrumb
        heading="Ultraviolet Lite Sterlization Water Disinfectant"
        currentPage="UV STERILIZATION"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <UltraVioletLiteSterlization />
      {/*       <BrandOne /> */}
      <FooterOne />
    </>
  );
}
