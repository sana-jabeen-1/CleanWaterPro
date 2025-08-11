const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Products",
    link: "/dynamic-products",
    sub_menus: [
      {
        link: "/westinghouse-dynamic-series",
        title: "Westinghouse Dynamic Series",
      },
      { link: "/dynamic-products/iron-boss", title: "Iron Boss" },
      { link: "/dynamic-products/qualitair", title: "Qualitair" },
      {
        link: "/dynamic-products/ultraviolet-lite-sterilization",
        title: "Ultraviolet Lite Sterilization ",
      },
      {
        link: "/dynamic-products/healthway-disinfection-filtration-system",
        title: "Disinfection Filtration",
      },
      {
        link: "/dynamic-products/drinking-water-d550",
        title: "Drinking Water D550",
      },
      {
        link: "/dynamic-products/drinking-water-r450",
        title: "Drinking Water R450",
      },
    ],
  },
  {
    id: 4,
    has_dropdown: true,
    title: "Locations",
    link: "/locations",
    sub_menus: [
      {
        title: "Dallas",
        link: "/locations/dallas",
        layout: [
          {
            link: "/locations/dallas/collin",
            title: "Collin",
          },
          {
            link: "/locations/dallas/denton",
            title: "Denton",
          },
          {
            link: "/locations/dallas/rockwall",
            title: "Rockwall",
          },
        ],
      },
      {
        title: "Fort Worth",
        link: "/locations/fort-worth",
        layout: [
          {
            link: "/locations/fort-worth/tarrant",
            title: "Tarrant",
          },
          {
            link: "/locations/fort-worth/denton",
            title: "Denton",
          },
          {
            link: "/locations/fort-worth/parker",
            title: "Parker",
          },
          {
            link: "/locations/fort-worth/wise",
            title: "Wise",
          },
        ],
      },
      {
        title: "Garland",
        link: "/locations/garland",
        layout: [
          {
            link: "/locations/garland/dallas",
            title: "Dallas",
          },
          {
            link: "/locations/garland/collin",
            title: "Collin",
          },
        ],
      },
      {
        title: "Plano",
        link: "/locations/plano",
        layout: [
          {
            link: "/locations/plano/collin",
            title: "Collin",
          },
          {
            link: "/locations/plano/denton",
            title: "Denton",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/services",
     sub_menus: [
      {
        link: "/services/water-filtration",
        title: "Water Filtration",
        layout: [
          {
        title: "Dallas",
        link: "/waterfiltration/dallas",
      },
      { title: "Fort Worth",
        link: "/waterfiltration/fort-worth",
       },
      {  title: "Garland",
        link: "/waterfiltration/garland",
       },
      {
        title: "Plano",
        link: "/waterfiltration/plano",
      },

],
      },
      {
        link: "/services/water-softener",
        title: "water softener",
        layout: [
          {
        title: "Dallas",
        link: "/watersoftener/dallas",
      },
      { title: "Fort Worth",
        link: "/watersoftener/fort-worth",
       },
      {  title: "Garland",
        link: "/watersoftener/garland",
       },
      {
        title: "Plano",
        link: "/watersoftener/plano",
      },

],
      },
      {
        link: "/services/water-purification",
        title: "water purification services",
        layout: [
          {
        title: "Dallas",
        link: "/waterpurification/dallas",
      },
      { title: "Fort Worth",
        link: "/waterpurification/fort-worth",
       },
      {  title: "Garland",
        link: "/waterpurification/garland",
       },
      {
        title: "Plano",
        link: "/waterpurification/plano",
      },

],
      },
    ],
    
  },
  {
    id: 6,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Faqs",
    link: "/faqs",
  },
  {
    id: 8,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
  },
];

export default menu_data;
