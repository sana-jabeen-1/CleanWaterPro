import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import BlogDetails from "@/components/blog/BlogDetails";

export default function BlogDetailsPage() {
  return (
    <>
      <SEO pageTitle={"Blog Details Page"} />
      <HeaderOne />
      <Breadcrumb
        heading="Blog Detail Page"
        currentPage="Blog Detail"
        banner="/assets/images/blog/banner.webp"
        mobileBanner="/assets/images/blog/banner-mobile.webp"
      />
      <BlogDetails />
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}
