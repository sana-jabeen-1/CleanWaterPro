import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import CountyCard from "@/components/locations/CountyCard";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";
import WaterFiltration from "@/components/service/WaterFiltration";
import WaterFiltrationGarland from "@/components/service/WaterFiltrationGarland";

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
        heading="Water Filtration services Garland Tx"
        currentPage="Garland"
        banner="/assets/images/states/garland.webp"
        mobileBanner="/assets/images/states/garland.webp"
      />
     <WaterFiltrationGarland />
      <FooterOne />
    </div>
  );
};

export default Garland;
