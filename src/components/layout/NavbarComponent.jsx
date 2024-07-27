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
    <Navbar className="bg-primary fixed top-0 w-screen  bg-opacity-50 ">
      <NavbarContent>
        <div className="relative lg:hidden " onClick={handleClick}>
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
            <Image
              src="/logo.png"
              width={30}
              height={30}
              alt="logo brand GrizzlyBeard"
            />
            <p className="font-bold mx-1 px-2">Beard</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex  " justify="center">
        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/#opening"
            aria-current="page"
          >
            Opening
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/#services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/#contact"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/register"
          >
            Register
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/bookings"
          >
            Bookings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/admin"
          >
            Admin
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" relative">
        <NavbarItem className=" absolute right-20">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <div
        className={`absolute rounded-2xl bg-primary bg-opacity-90 top-14 left-1 ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <div className=" shadow-md rounded-2xl p-4 space-y-3 border-2 border-secondary">
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/#opening"
              onClick={() => setIsOpen(false)}
            >
              Opening Times
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/register"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/bookings"
              onClick={() => setIsOpen(false)}
            >
              Bookings
            </Link>
          </div>
          <div>
            <Link
              className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              color="foreground"
              href="/admin"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
