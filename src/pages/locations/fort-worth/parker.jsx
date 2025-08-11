import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";

const Parker = () => {
  return (
    <div>
      <SEO pageTitle={"Parker"} canonical="https://www.cleanwaterprosllc.com/locations/fort-worth/parker" />
      <HeaderOne />
      <Breadcrumb
        heading="Parker"
        currentPage="Parker"
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

export default Parker;
