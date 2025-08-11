import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import SEO from "../../common/seo/Seo";
import IronBoss from "../../components/service/IronBoss";

export default function IronBossPage() {
  return (
    <>
      <SEO pageTitle={"IRON BOSS"} canonical="https://www.cleanwaterprosllc.com/dynamic-products/iron-boss" />
      <HeaderOne />
      <Breadcrumb
        heading=" IRON BOSS"
        currentPage=" IRON BOSS"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <IronBoss />
      {/*  <BrandOne /> */}
      <FooterOne />
    </>
  );
}
