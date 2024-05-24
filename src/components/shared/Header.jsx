"use client";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import LogoBlack from "../../../public/Logo black.png";
import Avatar from "../../../public/user-vector.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [signedIn, isSignedIn] = useState(false);
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-6 py-6 bg-white  dark:bg-gray-950 dark:text-gray-50 md:px-6 rounded-3xl">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="rounded-full md:hidden"
              size="icon"
              variant="ghost"
            >
              <MenuIcon className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <Link
                className="flex items-center py-2 text-lg font-semibold"
                href="#"
              >
                New Drops
              </Link>
              <Link
                className="flex items-center py-2 text-lg font-semibold"
                href="#"
              >
                Men
              </Link>
              <Link
                className="flex items-center py-2 text-lg font-semibold"
                href="#"
              >
                Women
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link className="hover:underline" href="#">
            New Drops
          </Link>
          <Link className="hover:underline" href="#">
            Men
          </Link>
          <Link className="hover:underline" href="#">
            Women
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Link
          className="flex items-center justify-center text-2xl font-bold"
          href="/"
        >
          <Image src={LogoBlack} height={120} width={120} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button className="rounded-full" size="icon" variant="ghost">
          <SearchIcon className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button
          onClick={() => router.push("/cart")}
          className="rounded-full"
          size="icon"
          variant="ghost"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="sr-only">Cart</span>
        </Button>
        {signedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <Image src={Avatar} height={20} width={20} alt="avatar" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href={"/register"}
            className=" bg-[#232321] text-white px-4 py-2 rounded-md"
          >
            Sign Up
          </Link>
        )}
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
