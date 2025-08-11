import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import AboutSection from "../components/about/AboutThree";
import FeaturesOne from "../components/features/FeaturesOne";
import HeroSection from "../components/hero/HeroThree";
import Benefits from "../components/service/Benefits";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import VideoOne from "../components/video/VideoOne";

export default function HomeThree() {
  return (
    <>
      <SEO pageTitle={"Home"} canonical="https://www.cleanwaterprosllc.com/" />
      <HeaderOne />
      <HeroSection />
      <AboutSection />
      <Benefits />
      <FeaturesOne />
      {/* <ProjectTwo />
			<TeamThree /> */}
      <VideoOne />
      {/*  <PricingOne /> */}
      <TestimonialTwo />
      {/*  <BlogTwo /> */}
      {/*  <BrandOne /> */}
      <FooterOne />
    </>
  );
}
