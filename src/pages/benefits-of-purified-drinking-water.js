import BenefitsDrinkingWater from "@/components/service/BenefitsDrinkingWater";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";

export default function BusinessOptionsPage() {
  return (
    <>
      <SEO pageTitle={"Benefits of purified Drinking water "} canonical="https://www.cleanwaterprosllc.com/benefits-of-purified-drinking-water" />
      <HeaderOne />
      <Breadcrumb
        heading="Benefits Of Purified Drinking Water"
        currentPage="Benefits Of Purified Drinking Water"
        banner="/assets/images/about/about-us-banner.png"
      />
      <BenefitsDrinkingWater />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
