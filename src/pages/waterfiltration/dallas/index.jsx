import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import FeaturesOne from "@/components/features/FeaturesOne";
import CountyCard from "@/components/locations/CountyCard";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";
import WaterFiltration from "@/components/service/WaterFiltration";

const Dallas = () => {
  const counties = [
    {
      title: "Collin",
      link: "/locations/dallas/collin",
    },
    {
      title: "Denton",
      link: "/locations/dallas/denton",
    },
    {
      title: "Rockwall",
      link: "/locations/dallas/rockwall",
    },
  ];

  return (
    <div>
      {" "}
      <SEO pageTitle={"Dallas"} canonical="https://www.cleanwaterprosllc.com/locations/dallas" />
      <HeaderOne />
      
      <Breadcrumb
        heading="Water Filtration Services dallas tx"
        currentPage="Dallas"
        banner="/assets/images/states/dallas.webp"
        mobileBanner="/assets/images/states/dallas.webp"
        />
       <WaterFiltration />
      <FooterOne />
    </div>
  );
};

export default Dallas;
