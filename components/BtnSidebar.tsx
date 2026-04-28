import React from "react";
import { usePathname, useRouter } from "next/navigation";

type BtnSidebarProps = {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export default function BtnSidebar({ name, href, icon }: BtnSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;


  return (
    <div className="w-full">
      <button
        className={`flex items-center gap-2 p-4 w-full rounded-[8px] transition
            ${isActive
                ? "bg-primary-muted text-primary"
                : "hover:text-dark/50"
            }
            `}
        onClick={() => router.push(`${href}`)}
      >
        {icon && <span className="text-xl">{icon}</span>}
        {name}
      </button>
    </div>
  );
}
