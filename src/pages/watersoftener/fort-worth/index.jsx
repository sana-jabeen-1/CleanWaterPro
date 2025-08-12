import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import CountyCard from "@/components/locations/CountyCard";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";
import WaterSoftener from "@/components/service/WaterSoftener";

const FortWorth = () => {
  const counties = [
    {
      title: "Tarrant",
      link: "/locations/fort-worth/tarrant",
    },
    {
      title: "Denton",
      link: "/locations/fort-worth/denton",
    },
    {
      title: "Parker",
      link: "/locations/fort-worth/parker",
    },
    {
      title: "Wise",
      link: "/locations/fort-worth/wise",
    },
  ];

  return (
    <div>
      {" "}
      <SEO pageTitle={"Fort Worth"} canonical="https://www.cleanwaterprosllc.com/locations/fort-worth" />
      <HeaderOne />
      <Breadcrumb
        heading="Fort Worth"
        currentPage="Fort Worth"
        banner="/assets/images/states/fort-worth.webp"
        mobileBanner="/assets/images/states/fort-worth.webp"
      />
       <WaterSoftener />
      <FooterOne />
    </div>
  );
};

export default FortWorth;
