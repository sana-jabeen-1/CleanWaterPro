import CommonWaterChallenges from "@/components/service/CommonWaterChallenges";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";

export default function BusinessOptionsPage() {
  return (
    <>
      <SEO pageTitle={"Common Water Challenges"} canonical="https://www.cleanwaterprosllc.com/common-water-challenges" />
      <HeaderOne />
      <Breadcrumb
        heading="Common Water Challenges"
        currentPage="Common Water Challenges"
        banner="/assets/images/about/about-us-banner.png"
      />
      <CommonWaterChallenges />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
