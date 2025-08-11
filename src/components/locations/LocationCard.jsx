import Image from "next/image";
import Link from "next/link";

const LocationCard = ({ title, link }) => {
  return (
    <div style={{}}>
      <Link
        href={link}
        style={{
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          borderRadius: "15px",
          padding: "50px 80px",
          fontSize: "25px",
          fontWeight: "normal",
          color: "#007aff",
        }}
      >
        <Image
          src={"/assets/images/resources/location.svg"}
          alt="location svg"
          width={50}
          height={50}
        />
        {title}
      </Link>
    </div>
  );
};

export default LocationCard;
