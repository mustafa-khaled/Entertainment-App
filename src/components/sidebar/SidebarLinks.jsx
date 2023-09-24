import { Link } from "react-router-dom";
import { sidebarLinksData } from "../../data/data";

function SidebarLinks() {
  return (
    <div className="flex flex-row items-center gap-[20px] md:mb-auto md:flex-col md:gap-[40px]">
      {sidebarLinksData?.map((link) => {
        return (
          <Link key={link.id} to={link.linkHref}>
            <i
              className={`${link.icon} text-xl text-colorWhite hover:text-colorRed`}
              alt=""
            ></i>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarLinks;
