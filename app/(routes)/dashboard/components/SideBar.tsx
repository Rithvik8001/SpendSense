"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Currency, Layout, PiggyBankIcon, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SideBar({ open, setOpen }: SideBarProps) {
  const pathName = usePathname();
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBankIcon,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: Currency,
      path: "/dashboard/expenses",
    },
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0 md:static md:inset-y-auto md:left-auto"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 md:py-6 border-b border-gray-200 dark:border-gray-700">
        <Image src={"/logo.svg"} alt="logo" width={48} height={48} />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-4">
        {menuItems.map((menu) => (
          <Link key={menu.id} href={menu.path}>
            <div
              className={cn(
                "flex items-center px-6 py-3 text-sm font-medium transition-colors",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                pathName === menu.path
                  ? "text-primary bg-gray-100 dark:bg-gray-700"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              <menu.icon className="mr-3 h-5 w-5" />
              {menu.name}
            </div>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full p-6 border-t border-gray-200 dark:border-gray-700">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </div>
    </div>
  );
}
