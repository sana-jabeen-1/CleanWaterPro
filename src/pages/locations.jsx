import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import LocationCard from "@/components/locations/LocationCard";

const Locations = () => {
  const serviceLocations = [
    {
      title: "Dallas",
      link: "/locations/dallas",
    },
    {
      title: "Fort Worth",
      link: "/locations/fort-worth",
    },
    {
      title: "Garland",
      link: "/locations/garland",
    },
    {
      title: "Plano",
      link: "/locations/plano",
    },
  ];

  return (
    <div>
      <SEO pageTitle={"Locations"} canonical="https://www.cleanwaterprosllc.com/locations" />
      <HeaderOne />
      <Breadcrumb
        heading="Locations"
        currentPage="Locations"
        banner="/assets/images/services/banner.jpg"
        mobileBanner="/assets/images/services/banner.jpg"
      />
      <section className="locations-container">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            textTransform: "capitalize",
            fontWeight: 600,
          }}
        >
          We serve in the following locations
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {serviceLocations.map((location, index) => (
            <LocationCard {...location} key={index} />
          ))}
        </div>
      </section>
      <FooterOne />
    </div>
  );
};

export default Locations;
