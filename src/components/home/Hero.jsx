import Image from "next/image";
import TypeAnimations from "./TypeAnimations";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className=" min-h-screen flex flex-col lg:flex-row text-center justify-center items-center gap-5 mt-20  "
      >
        <div className=" mx-2 ">
          <h1 className="text-5xl font-bold  bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent p-3 text-center">
            GrizzlyBeard
          </h1>
          <TypeAnimations />
          <div className=" px-20 w-[30rem] mt-4 text-balance">
            <p>
              At GizzlyBeard, we offer professional barbering services with a
              touch of style and sophistication.
            </p>
            <p>
              From classic haircuts to modern grooming techniques, our
              experienced barbers are dedicated to providing you with the best
              experience.
            </p>
          </div>
          <div className=" space-x-5 p-4">
            <Button
              as={Link}
              href="/#services"
              color="secondary"
              variant="ghost"
              className=""
            >
              Explore Services
            </Button>
            <Button as={Link} href="/login" color="secondary" variant="shadow">
              Book
            </Button>
          </div>
        </div>
        <div>
          <Image
            className=" rounded-full lg:ml-15 lg:mr-5 px-4  py-2 pointer-events-none select-none"
            src="/barber1.gif"
            alt="Barber banner image for GrizzlyBeard"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
