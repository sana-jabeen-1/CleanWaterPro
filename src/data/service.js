import { BiHomeHeart } from "react-icons/bi";
import { FaHandHoldingWater, FaWater } from "react-icons/fa";
import { GiClothes, GiHairStrands, GiWaterRecycling } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { MdEco, MdOutlineWaterDrop , MdBrandingWatermark ,MdWater } from "react-icons/md";
import { TbVirusOff } from "react-icons/tb";
import Image from "next/image";

//Service One
export const ServiceOneData = [
  {
    id: 1,
    icon: <FaWater />,
    heading: "Water Filtration",
    description:
      "Experience pure, great-tasting water through advanced filtration that removes harmful contaminants, chlorine and impurities for healthier drinking and cooking water.",
   link: "/services/water-filtration",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop />,
    heading: "Water Softener",
    description:
      "Experience soft, mineral-free water through advanced softening that removes hard minerals, prevents scale buildup and extends the lifespan of your home appliances.",
    link: "/services/water-softener",
    delay: "200ms",
    duration: "1500ms",
  },
   {
    id: 3,
    icon: <MdWater />,
    heading: "Water Purification",
    description:
      "Experience clean, safe, great-tasting and purified water with our expert water purification services, ensuring the highest quality for your home or business.",
   link: "/services/water-purification",
    delay: "400ms",
    duration: "1500ms",
  },
];



export const ServiceFilration = [
  {
    id: 1,
    icon: <FaWater />,
    heading: "Improved Quality",
    description:
      "Removes harmful contaminants.",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop />,
    heading: "Better Taste",
    description:
      "Eliminates bad odors and flavors.",
    
    delay: "200ms",
    duration: "1500ms",
  },
   {
    id: 3,
    icon: <MdWater />,
    heading: "Healthier Water",
    description:
      "Reduces exposure to toxins.",
    delay: "400ms",
    duration: "1500ms",
  },
   {
    id: 4,
    icon: <MdOutlineWaterDrop />,
    heading: "Cost-Effective",
    description:
      "Cuts down on bottled water expenses.",
     link: "/dynamic-products/iron-boss",
    delay: "200ms",
    duration: "1500ms",
  },
   
];

export const ServiceSoftener = [
  {
    id: 1,
    icon: <FaWater />,
    heading: "Prevents Damage",
    description:
      "Stops mineral buildup in pipes.",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop />,
    heading: "Boosts Appliance Life",
    description:
      "Protects appliances from hard water.",
    
    delay: "200ms",
    duration: "1500ms",
  },
   {
    id: 3,
    icon: <MdWater />,
    heading: " Enhances Skin & Hair",
    description:
      "Reduces dryness from hard water. ",
    delay: "400ms",
    duration: "1500ms",
  },
   {
    id: 4,
    icon: <MdOutlineWaterDrop />,
    heading: "Saves on Detergents",
    description:
      "Works better with soap and detergent.",
     link: "/dynamic-products/iron-boss",
    delay: "200ms",
    duration: "1500ms",
  },
   
];

export const ServicePurification = [
  {
    id: 1,
    icon: <FaWater />,
    heading: "Removes Contaminants",
    description:
      "Filters out harmful substances.",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop />,
    heading: "Improves Taste",
    description:
      "Makes water taste fresher. ",
    
    delay: "200ms",
    duration: "1500ms",
  },
   {
    id: 3,
    icon: <MdWater />,
    heading: "Promotes Health",
    description:
      "Reduces exposure to pollutants.  ",
    delay: "400ms",
    duration: "1500ms",
  },
   {
    id: 4,
    icon: <MdOutlineWaterDrop />,
    heading: "Eco-Friendly",
    description:
      "Reduces plastic waste.",
     link: "/dynamic-products/iron-boss",
    delay: "200ms",
    duration: "1500ms",
  },
   
];



export const ProductsFiltration = [
  {
    id: 1,
    productImage: "/assets/images/resources/service-details-img1.webp",
    productTitle: "Westinghouse Dynamic Series ",
    delay: "0.3s",
    duration: "1s",
    rating: 4, 
    reviewsCount: 120, 
  },
  {
    id: 2,
    productImage: "/assets/images/resources/service-details-img4.jpg",
    productTitle: "Drinking Water D550",
    delay: "0.5s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 3,
    productImage: "/assets/images/resources/service-details-img6.webp",
    productTitle: "Disinfection Filtration",
    delay: "0.7s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
    {
    id: 4,
    productImage: "/assets/images/resources/service-details-img4.jpg",
    productTitle: "Drinking Water R450",
    delay: "0.10s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 5,
    productImage: "/assets/images/resources/service-details-img6.webp",
    productTitle: "Qualitair ",
    delay: "0.13s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  
];

export const ProductsSoftener = [
  {
    id: 1,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.3s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 2,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.5s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 3,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.7s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
    {
    id: 4,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.10s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 5,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.13s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  
];

export const ProductsPurification = [
  {
    id: 1,
    productImage: "/assets/images/resources/service-details-img1.webp",
    productTitle: "Westinghouse Dynamic Series",
    delay: "0.3s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 2,
    productImage: "/assets/images/resources/service-details-img5.jpg",
    productTitle: "Ultraviolet Lite Sterilization",
    delay: "0.5s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 3,
    productImage: "/assets/images/resources/service-details-img6.webp",
    productTitle: "Disinfection Filtration",
    delay: "0.7s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
    {
    id: 4,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.10s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  {
    id: 5,
    productImage: "/assets/images/resources/service-details-img3.webp",
    productTitle: "Iron Boss ",
    delay: "0.13s",
    duration: "1s",
    rating: 5, 
    reviewsCount: 350, 
  },
  
];



// export const ServiceOneData = [
//   {
//     id: 1,
//     icon: <TbVirusOff />,
//     heading: "Remove Contaminants",
//     description:
//       "Fresh-tasting water that removes chlorine and contaminants to make better coffee, tea, and food for you and your family.",
//     link: "/bedroom-cleaning",
//     delay: "00ms",
//     duration: "1500ms",
//   },
//   {
//     id: 2,
//     icon: <GiClothes />,
//     heading: "Softer, Brighter Clothing",
//     description:
//       "Keep your cozy sweaters softer and your t-shirt’s colors brighter with soft water that preserves their structure.",
//     link: "/bedroom-cleaning",
//     delay: "200ms",
//     duration: "1500ms",
//   },
//   {
//     id: 3,
//     icon: <GiHairStrands />,
//     heading: "Softer Hair and Cleaner Skin",
//     description:
//       "You are only as clean as your water. Purify your body with soft bath water that helps with eczema, psoriasis, and dry skin",
//     link: "/bedroom-cleaning",
//     delay: "400ms",
//     duration: "1500ms",
//   },
//   {
//     id: 4,
//     icon: <BiHomeHeart />,
//     heading: "Love Your Loves",
//     description:
//       "Show your family, pets and plants you love them by giving them the best filtered water.",
//     link: "/bedroom-cleaning",
//     delay: "00ms",
//     duration: "1500ms",
//   },

//   {
//     id: 5,
//     icon: <MdEco />,
//     heading: "Reduce Plastic Waste",
//     description: "You won't need to buy cases of bottled water anymore.",
//     link: "/bedroom-cleaning",
//     delay: "200ms",
//     duration: "1500ms",
//   },
// ];
/* export const ServiceOneData = [
  {
    id: 1,
    icon: "icon-house-1",
    heading: "DYNAMIC SERIES",
    description:
      "Home’s Water Quality with the Westinghouse Dynamic Series  Refiner from Clean Water Pro’s.",
    link: "/bedroom-cleaning",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: "icon-house-2",
    heading: "QUALITAIR",
    description:
      "Breathe Easier with Qualitair: The Premier Air Treatment System from Clean Water Pro’s.",
    link: "/bedroom-cleaning",
    delay: "200ms",
    duration: "1500ms",
  },
  {
    id: 3,
    icon: "icon-carpet-cleaner",
    heading: "IRON BOSS",
    description:
      "Iron Boss relies on its patented technology to supercharge the filtration chamber with oxygen.",
    link: "/bedroom-cleaning",
    delay: "400ms",
    duration: "1500ms",
  },
  {
    id: 4,
    icon: "icon-electric-vehicle",
    heading: "UV STERILIZATION",
    description:
      "Ensure Ultimate Water Safety with Ultraviolet Lite Sterilization from Clean Water Pro’s.",
    link: "/bedroom-cleaning",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 5,
    icon: "icon-window-cleaning",
    heading: "DISINFECTION FILTRATION",
    description:
      "The Healthway Disinfection Filtration System utilizes technology developed .",
    link: "/bedroom-cleaning",
    delay: "200ms",
    duration: "1500ms",
  },
]; */

//Service Two
export const ServiceTwoData = [
  {
    id: 1,
    icon: "icon-house-1",
    heading: "DYNAMIC SERIES",
    description:
      "Home’s Water Quality with the Westinghouse Dynamic Series  Refiner from Clean Water Pro’s.",
    link: "/westinghouse-dynamic-series",
    delay: "00ms",
    duration: "1500ms",
  },
  {
    id: 2,
    icon: "icon-house-2",
    heading: "QUALITAIR",
    description:
      "Breathe Easier with Qualitair: The Premier Air Treatment System from Clean Water Pro’s.",
    link: "/dynamic-products/qualitair",
    delay: "200ms",
    duration: "1500ms",
  },
  {
    id: 3,
    icon: "icon-carpet-cleaner",
    heading: "IRON BOSS",
    description:
      "Iron Boss relies on its patented technology to supercharge the filtration chamber with oxygen.",
    link: "/dynamic-products/iron-boss",
    delay: "400ms",
    duration: "1500ms",
  },
  {
    id: 4,
    icon: "icon-electric-vehicle",
    heading: "UV STERILIZATION",
    description:
      "Ensure Ultimate Water Safety with Ultraviolet Lite Sterilization from Clean Water Pro’s.",
    link: "/dynamic-products/ultraviolet-lite-sterilization",
    delay: "300ms",
    duration: "1500ms",
  },
  {
    id: 5,
    icon: "icon-window-cleaning",
    heading: "DISINFECTION FILTRATION",
    description:
      "The Healthway Disinfection Filtration System utilizes technology developed .",
    link: "/dynamic-products/healthway-disinfection-filtration-system",
    delay: "300ms",
    duration: "1500ms",
  },
  {
    id: 6,
    icon: "icon-window-cleaning",
    heading: "Drinking Water D550",
    description:
      "After the water entering your home is initially treated by the Westinghouse whole house refiner it is then polished even further.",
    link: "/dynamic-products/drinking-water-d550",
    delay: "400ms",
    duration: "1500ms",
  },
  {
    id: 7,
    icon: "icon-window-cleaning",
    heading: "Drinking Water R450",
    description:
      "The technology at work with the Westinghouse R450 Drinking Water System is impressive, removing nearly all of the remaining contaminants in your water. You are left with nothing but pure, clean, fresh tasting water to enjoy.",
    link: "/dynamic-products/drinking-water-r450",
    delay: "400ms",
    duration: "1500ms",
  },
];

//Service Three
export const ServiceThreeData = [
  {
    id: 1,
    icon: <FaHandHoldingWater />,
    heading: "BENEFITS OF PURIFIED DRINKING WATER",
    description:
      "You are what you drink. About 60% of the human body is made up of water. So what’s in your water?",
    link: "/benefits-of-purified-drinking-water",
    delay: "0ms",
  },
  {
    id: 2,
    icon: <GiWaterRecycling />,
    heading: "BENEFITS OF REFINED WATER",
    description:
      "Water runs throughout your home. Understand the many ways that refined water benefits you, your home and your wallet.",
    link: "/benefits-of-refined-water",
    delay: "100ms",
  },
  {
    id: 3,
    icon: <IoWaterOutline />,
    heading: "COMMON WATER CHALLENGES",
    description:
      "What do your pipes, appliances, faucets, tubs, sinks, dishes and more want you to know?",
    link: "/common-water-challenges",
    delay: "200ms",
  },
];
