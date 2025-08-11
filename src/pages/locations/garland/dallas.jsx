import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import Products from "@/components/locations/Products";
import ServiceOne from "@/components/service/ServiceOne";

const Dallas = () => {
  return (
    <div>
      <SEO pageTitle={"Dallas"} canonical="https://www.cleanwaterprosllc.com/locations/garland/dallas" />
      <HeaderOne />
      <Breadcrumb
        heading="Dallas"
        currentPage="Dallas"
        banner="/assets/images/states/garland.webp"
        mobileBanner="/assets/images/states/garland.webp"
      />
      <section>
        <Products />
        <ServiceOne />
      </section>
      <FooterOne />
    </div>
  );
};

export default Dallas;
