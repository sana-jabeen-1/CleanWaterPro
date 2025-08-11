import WestingHouseRelianceSeries from "@/components/service/WestingHouseRelianceSeries";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

export default function FocusEmergencyPage() {
  return (
    <>
      <SEO pageTitle={"Reliance Series"} />
      <HeaderOne />
      <Breadcrumb
        heading="Westinghouse Reliance Series Water Refiner"
        currentPage="UV STERILIZATION"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <WestingHouseRelianceSeries />
      {/*  <BrandOne /> */}
      <FooterOne />
    </>
  );
}
