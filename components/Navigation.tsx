
import SidebarMenu from "@/components/header/SidebarMenu";
import BtnAdd from "@/components/BtnAdd";

export default function Navigation() {

  return (
    <div className="px-4 py-5 md:hidden">
      <div className="flex justify-between md:justify-end">
        <div>
          <SidebarMenu />
        </div>
        
        <BtnAdd />
      </div>
    </div>
  );
}
