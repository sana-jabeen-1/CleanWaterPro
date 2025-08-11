import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import QualitAir from "@/components/service/QualitAir";

export default function OfficeCleaningPage() {
  return (
    <>
      <SEO pageTitle={"Qualitair"} canonical="https://www.cleanwaterprosllc.com/dynamic-products/qualitair" />
      <HeaderOne />
      <Breadcrumb
        heading="Qualitair Air Filtration System"
        currentPage="Qualitair"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <QualitAir />
      {/*  <BrandOne /> */}
      <FooterOne />
    </>
  );
}
