import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import BlogThree from "../components/blog/BlogThree";

export default function BlogPage() {
  return (
    <>
      <SEO pageTitle={"Blog Page"} canonical="https://www.cleanwaterprosllc.com/blog" />
      <HeaderOne />
      <Breadcrumb
        heading="Blog Page"
        currentPage="Blog"
        banner="/assets/images/blog/banner.webp"
        mobileBanner="/assets/images/blog/banner-mobile.webp"
      />
      <BlogThree />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
