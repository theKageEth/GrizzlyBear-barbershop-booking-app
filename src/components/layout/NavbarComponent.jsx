"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import ThemeSwitcher from "../toggle/ThemeSwitcher";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="bg-primary ">
      <NavbarContent>
        <div className="relative sm:hidden mr-3" onClick={handleClick}>
          <div className="w-6 h-6 relative">
            {/* Icon when closed */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute h-6 w-6 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            {/* Icon when open */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute h-6 w-6 transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        <Link
          className="hover:scale-125 transition duration-300 ease-in-out"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <NavbarBrand>
            <Image src="/logo.png" width={30} height={30} />
            <p className="font-bold  m-3">GrizzlyBeard</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/#opening"
            aria-current="page"
          >
            Opening Times
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/#services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/#contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" hover:font-bold hover:underline hover:text-secondary"
            href="/register"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>
      <div className={`absolute top-14 left-0 ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-primary shadow-md rounded-md p-4 space-y-3 border-b-2 border-r-2  border-t-2 border-secondary">
          <div>
            <Link
              className="hover:underline hover:text-secondary "
              color="foreground"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className="hover:underline hover:text-secondary "
              color="foreground"
              href="/#opening"
              onClick={() => setIsOpen(false)}
            >
              Opening Times
            </Link>
          </div>
          <div>
            <Link
              className="hover:underline hover:text-secondary "
              color="foreground"
              href="/#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className="hover:underline hover:text-secondary "
              color="foreground"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
