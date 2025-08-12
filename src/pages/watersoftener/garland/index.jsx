import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import CountyCard from "@/components/locations/CountyCard";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";
import WaterSoftener from "@/components/service/WaterSoftener";

const Garland = () => {
  const counties = [
    {
      title: "Dallas",
      link: "/locations/garland/dallas",
    },
    {
      title: "Collin",
      link: "/locations/garland/collin",
    },
  ];

  return (
    <div>
      {" "}
      <SEO pageTitle={"Garland"} canonical="https://www.cleanwaterprosllc.com/locations/garland" />
      <HeaderOne />
      <Breadcrumb
        heading="Garland"
        currentPage="Garland"
        banner="/assets/images/states/garland.webp"
        mobileBanner="/assets/images/states/garland.webp"
      />
       <WaterSoftener />
      <FooterOne />
    </div>
  );
};

export default Garland;
