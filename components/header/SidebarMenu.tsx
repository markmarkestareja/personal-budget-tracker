import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SidebarTab from "./SidebarTab";

export default function SidebarMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6h10M4 12h16M7 12h13M4 18h10"
          />
        </svg>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="flex flex-col justify-center items-center gap-3">
          <DrawerTitle className="flex flex-col items-center">
            <div className="h-15 w-15 rounded-full border relative">
              <Image
                src="/profile.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold">John Doe</span>
          </DrawerTitle>
          <DrawerDescription>
            <span className="text-[12px] opacity-75">
              Personal Budget Tracker
            </span>
          </DrawerDescription>
        </DrawerHeader>

        <SidebarTab />

        <DrawerFooter>
            <div className="flex gap-2 p-6 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                fill="currentColor"
                d="M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8z"
                />
            </svg>
            Logout
            </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
