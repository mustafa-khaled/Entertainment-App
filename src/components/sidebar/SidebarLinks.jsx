import { NavLink } from "react-router-dom";
import { sidebarLinksData } from "../../data/data";

function SidebarLinks() {
  return (
    <div className="sidebar-links flex flex-row items-center gap-[20px] md:mb-auto md:flex-col md:gap-[40px]">
      {sidebarLinksData?.map((link) => {
        return (
          <NavLink key={link.id} to={link.linkHref}>
            <i
              className={`${link.icon} text-xl text-colorGreyishBlue hover:text-colorRed`}
              alt=""
            ></i>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SidebarLinks;
