import Link from "next/link";
import menu_data from "./menu-data";

const NavMenu = () => {
  // Check if any sub_menu has layout property
  const hasLayoutDropdown = (sub_menus) => {
    return sub_menus && sub_menus.some((sub_item) => sub_item.layout);
  };

  return (
    <>
      <ul className="main-menu__list">
        {menu_data.map((item, i) => (
          <li
            key={i}
            className={`${
              item.has_dropdown
                ? hasLayoutDropdown(item.sub_menus)
                  ? "layout-dropdown"
                  : "dropdown"
                : ""
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.sub_menus && (
              <ul>
                {item.sub_menus.map((sub_item, sub_i) => (
                  <li
                    key={sub_i}
                    className={sub_item.layout ? "has-side-menu" : ""}
                  >
                    <Link href={sub_item.link}>{sub_item.title}</Link>
                    {sub_item.layout && (
                      <ul className="side-menu">
                        {sub_item.layout.map((county, county_i) => (
                          <li key={county_i}>
                            <Link href={county.link}>{county.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
