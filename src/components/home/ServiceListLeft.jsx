"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesListLeft({ img, title, desc }) {
  return (
    <>
      <div className=" border-b-5 px-20 lg:px-10 border-double border-secondary  flex flex-col lg:flex-row-reverse  text-center justify-center items-center">
        <div>
          <h1 className="mt-5 text-2xl font-bold bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent p-3 mb-8 text-center">
            {title}
          </h1>

          <div className=" px-12 sm:px-5 w-[30rem] mt-4 text-balance">
            <p>{desc}</p>
          </div>
          <div className=" p-4">
            <Button
              as={Link}
              href="/login"
              color="secondary"
              variant="shadow"
              className=""
            >
              Book
            </Button>
          </div>
        </div>
        <div>
          <Image
            className=" rounded-full mb-5  p-12 sm:p-10 lg:p-10 pointer-events-none select-none  "
            src={img}
            alt="Barber banner image for GrizzlyBeard"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
