import WestingHouseDynamicSeries from "@/components/service/WestingHouseDynamicSeries";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

import Waterpurification from "@/components/service/Waterpurification";

export default function WaterPurificationPage() {
  return (
    <>
      <SEO pageTitle={"Water Purification"} canonical="https://www.cleanwaterprosllc.com/services/water-purification" />
      <HeaderOne />
      <Breadcrumb
        heading="Water Purification"
        currentPage="Water Purification"
        banner="/assets/images/backgrounds/main-slider-v1-img1.jpg"
        mobileBanner="/assets/images/backgrounds/main-slider-v1-img1.jpg"
      />

      <Waterpurification/>
      <FooterOne />
    </>
  );
}
