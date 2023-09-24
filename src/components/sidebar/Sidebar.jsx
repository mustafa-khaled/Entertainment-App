import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";
import UserIcon from "./UserIcon";

function Sidebar() {
  return (
    <div className="flex h-[70px] w-[90vw] items-center  justify-between rounded-2xl bg-colorSemiDarkBlue   p-[20px]  md:my-auto md:h-[90vh] md:w-[80px]  md:flex-col">
      <Logo />
      <SidebarLinks />
      <UserIcon />
    </div>
  );
}

export default Sidebar;
