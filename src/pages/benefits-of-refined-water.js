import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";

import BenefitsRefinedWater from "@/components/service/BenefitsRefinedWater";

export default function BusinessOptionsPage() {
  return (
    <>
      <SEO pageTitle={"Benefits Of Refined Water"} canonical="https://www.cleanwaterprosllc.com/benefits-of-refined-water" />
      <HeaderOne />
      <Breadcrumb
        heading="Benefits Of Refined Water"
        currentPage="Benefits Of Refined Water"
        banner="/assets/images/about/about-us-banner.png"
      />
      <BenefitsRefinedWater />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
