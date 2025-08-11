import FooterOne from "@/common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";
import SEO from "@/common/seo/Seo";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Certifications = () => {
  const data = [
    {
      heading: "Westinghouse Water Refiners Are Certified by IAPMO",
      description: [
        "Westinghouse water refiners are now certified by IAPMO Research and Testing, Inc to NSF/ANSI 44, 42, and 372 in compliance with the International Plumbing Code (IPC®️). Each system will proudly bear the UPC seal shown above.",
        "Westinghouse Water Treatment chose to partner with the International Association of Plumbing and Mechanical Officials (IAPMO) R&T because of their more than 85 years experience certifying products. The UPC®️ shield is recognized throughout the industry as the premier mark of conformity for plumbing products in North America.",
        "The UPC®️ mark of conformity demonstrates compliance with applicable codes and NSF/ANSI 44, 42, and 372 standards. It signifies accredited third-party recognition, meaning it has been certified by an organization outside of the manufacturer’s industry. And the UPC®️ mark is widely recognized and trusted by the inspectors who approve your system’s installation. The UPC®️ mark assures buyers that they are purchasing a product that has been manufactured, tested, and inspected to industry standards, giving them peace of mind that they have made the right decision.",
        "Our systems are listed to NSF/ANSI 44 and NSF/ANSI 42 and NSF/ANSI 372 (No Lead), UPC®️, and IPC®️.",
      ],
    },
    {
      heading: "NSF/ANSI 44",
      points: [
        {
          heading: "Product",
          description: "Residential Cation Exchange Water Softeners",
        },
        {
          heading: "Characteristics",
          description:
            "Residential cation exchange water softeners intended for removal of hardness and the reduction of specific contaminants from drinking water supplies (public or private) considered to be microbiologically safe and of known quality.",
        },
      ],
    },
    {
      heading: "NSF/ANSI 42",
      points: [
        {
          heading: "Product",
          description: "Drinking Water Treatment Units - Aesthetic Effects",
        },
        {
          heading: "Characteristics",
          description:
            "Materials or products that come into contact with drinking water and/or drinking water treatment chemicals. Products and materials may include process media, protective materials, joining and sealing materials, pipes and related products, mechanical devices used with treatment/transmission/distribution systems, and mechanical plumbing devices.",
        },
      ],
    },
    {
      heading: "NSF/ANSI 372",
      points: [
        {
          heading: "Product",
          description: "Lead Free Plumbing Products",
        },
        {
          heading: "Characteristics",
          description:
            "Products may include any pipe, pipe fitting, solder, flux, or other plumbing products providing water for human consumption.",
        },
      ],
    },
  ];

  return (
    <>
      <SEO pageTitle={"Certifications"} canonical="https://www.cleanwaterprosllc.com/certifications" />
      <HeaderOne />
      <Breadcrumb
        heading="Certifications"
        currentPage="Certifications"
        banner="/assets/images/products/banner.webp"
        mobileBanner="/assets/images/products/banner-mobile.webp"
      />
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "80px",
          paddingRight: "80px",
          marginBottom: "80px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Certifications
        </h1>
        {data.map((certificate, idx) => (
          <div key={idx}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              {certificate.heading}
            </h2>
            {certificate.description &&
              certificate.description.map((desc, idx) => (
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                  key={idx}
                >
                  {desc}
                </p>
              ))}
            {certificate.points &&
              certificate.points.map((point, idx) => (
                <div key={idx}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    {point.heading}
                  </h3>
                  <p
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <FooterOne />
    </>
  );
};

export default Certifications;
