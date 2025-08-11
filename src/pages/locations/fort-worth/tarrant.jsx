import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";

const Tarrant = () => {
  return (
    <div>
      <SEO pageTitle={"Tarrant"} canonical="https://www.cleanwaterprosllc.com/locations/fort-worth/tarrant" />
      <HeaderOne />
      <Breadcrumb
        heading="Tarrant"
        currentPage="Tarrant"
        banner="/assets/images/states/fort-worth.webp"
        mobileBanner="/assets/images/states/fort-worth.webp"
      />
      <section>
        <Products />
        <ServiceOne />
      </section>
      <FooterOne />
    </div>
  );
};

export default Tarrant;
