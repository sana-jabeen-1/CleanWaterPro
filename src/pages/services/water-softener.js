import WestingHouseDynamicSeries from "@/components/service/WestingHouseDynamicSeries";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";

import WaterSoftener from "@/components/service/WaterSoftener";

export default function WaterSoftenerPage() {
  return (
    <>
      <SEO pageTitle={"Water Softener"} canonical="https://www.cleanwaterprosllc.com/services/water-softener" />
      <HeaderOne />
      <Breadcrumb
        heading="Water Softener"
        currentPage="Water Softener"
        banner="/assets/images/backgrounds/banner.webp"
        mobileBanner="/assets/images/backgrounds/banner-2-mobile.webp"
      />

      <WaterSoftener />
      <FooterOne />
    </>
  );
}
