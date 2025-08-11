import WestingHouseDynamicSeries from "@/components/service/WestingHouseDynamicSeries";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";

export default function WestingHouseDynamicSeriesPage() {
  return (
    <>
      <SEO pageTitle={"Dynamic Series"} canonical="https://www.cleanwaterprosllc.com/westinghouse-dynamic-series" />
      <HeaderOne />
      <Breadcrumb
        heading="Westinghouse Dynamic Series"
        currentPage="Dynamic Series"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <WestingHouseDynamicSeries />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
