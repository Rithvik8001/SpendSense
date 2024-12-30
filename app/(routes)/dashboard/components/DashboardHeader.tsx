import { UserButton } from "@clerk/nextjs";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex justify-between items-center h-[75px] md:h-[80px] w-full">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-4 md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Welcome to SpendSense
            </h1>
          </div>
          <div className="flex justify-end flex-1">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 md:h-10 md:w-10",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
