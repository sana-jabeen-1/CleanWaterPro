import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import CountyCard from "@/components/locations/CountyCard";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";

const Plano = () => {
  const counties = [
    {
      title: "Collin",
      link: "/locations/plano/collin",
    },
    {
      title: "Denton",
      link: "/locations/plano/denton",
    },
  ];

  return (
    <div>
      {" "}
      <SEO pageTitle={"Plano"} canonical="https://www.cleanwaterprosllc.com/locations/plano" />
      <HeaderOne />
      <Breadcrumb
        heading="Plano"
        currentPage="Plano"
        banner="/assets/images/states/plano.webp"
        mobileBanner="/assets/images/states/plano.webp"
      />
      <section>
        <Products />
        <ServiceOne />
        <CountyCard countiesArray={counties} />
      </section>
      <FooterOne />
    </div>
  );
};

export default Plano;
