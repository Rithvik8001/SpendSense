"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isSignedIn } = useUser();

  return (
    <nav className="relative min-h-[10vh] bg-white border-b">
      <div className="w-full max-w-5xl flex justify-between items-center mx-auto p-6 sm:px-6 lg:px-8">
        <Link href={"/"}>
          <Image src="/logo.svg" width={40} height={30} alt="logo" />
        </Link>
        <div className="hidden sm:flex space-x-2">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className="space-x-4">
              <Link href="/sign-up">
                <Button className="px-6 py-2 text-sm" variant="outline">
                  Sign Up
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="px-6 py-2 text-sm">Sign In</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="sm:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <div>
                <X className="h-6 w-6" />
              </div>
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg sm:hidden"
          >
            {isSignedIn ? (
              <div className="w-[25%] flex mx-auto justify-center rounded-lg p-1 bg-white border m-2">
                <UserButton />
              </div>
            ) : (
              <div className="flex flex-col items-center py-4 space-y-2">
                <Link href="/sign-up" className="w-full px-4">
                  <Button
                    className="w-full py-2 text-sm"
                    variant="outline"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/sign-in" className="w-full px-4">
                  <Button className="w-full py-2 text-sm" onClick={toggleMenu}>
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
