import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";

const Denton = () => {
  return (
    <div>
      <SEO pageTitle={"Denton"} canonical="https://www.cleanwaterprosllc.com/locations/dallas/denton" />
      <HeaderOne />
      <Breadcrumb
        heading="Denton"
        currentPage="Denton"
        banner="/assets/images/states/dallas.webp"
        mobileBanner="/assets/images/states/dallas.webp"
      />
      <section>
        <Products />
        <ServiceOne />
      </section>
      <FooterOne />
    </div>
  );
};

export default Denton;
