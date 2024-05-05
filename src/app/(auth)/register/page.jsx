"use client";
import { register } from "@/lib/action";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ParticlesBackrgound from "@/components/home/ParticlesBackrgound";

const Register = () => {
  const [value, setValue] = useState("");
  const [armPositionR, setArmPositionR] = useState("");
  const [armPositionL, setArmPositionL] = useState("");
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      const redirectTimer = setTimeout(() => {
        router.push("/login");
      }, 2000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(redirectTimer);
    }
  }, [state?.success, router]);

  useEffect(() => {
    updateArmPosition();
  }, [value]);

  const updateArmPosition = () => {
    if (value.length >= 6) {
      setArmPositionR("translate-x-[-40px]");
      setArmPositionL("translate-x-[40px]");
    } else if (value.length >= 3) {
      setArmPositionR("translate-x-[-20px] ");
      setArmPositionL("translate-x-[20px]");
    } else {
      setArmPositionR("");
      setArmPositionL("");
    }
  };

  const handleValueChange = (value) => {
    setValue(value);
    updateArmPosition();
  };

  return (
    <div className="h-screen  flex flex-col  justify-center items-center align-middle p-10  mt-10 mb-20">
      <div className="relative">
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          className=" pointer-events-none select-none"
        />
        <img
          src="/arm_bear.png"
          alt="bear arm"
          className={` ${armPositionR} absolute top-[5px] left-[80px]  w-[60px] h-[60px] -rotate-45 z-20 transition-transform duration-500`}
        />
        <img
          src="/arm_bear.png"
          alt="bear arm"
          className={` ${armPositionL} absolute top-[5px] right-[80px]  w-[60px] h-[60px] rotate-45 scale-x-[-1] z-20 transition-transform duration-500`}
        />
      </div>

      <form
        className="pt-10 flex flex-col gap-1 bg-primary bg-opacity-30 backdrop-filter backdrop-blur-3xl px-4 rounded-xl mx-2"
        action={formAction}
      >
        <h3 className="text-3xl mb-4 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
          Register!
        </h3>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="rounded-full border-gray-300 focus:border-secondary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full px-3 py-2 mt-1 mb-2"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="rounded-full border-gray-300 focus:border-secondary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full px-3 py-2 mt-1 mb-2"
        />
        <input
          className="rounded-full border-gray-300 focus:border-secondary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full px-3 py-2 mt-1 mb-2"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleValueChange(e.target.value)}
        />
        <input
          className="rounded-full border-gray-300 focus:border-secondary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full px-3 py-2 mt-1 mb-2"
          type="password"
          placeholder="repeat password"
          name="passwordRepeat"
          onChange={(e) => handleValueChange(e.target.value)}
        />

        <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-black  py-2 px-4 border border-secondary hover:border-transparent rounded-full transition-all duration-500">
          Register
        </button>
        <p className=" mt-2 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
          {state?.error}
        </p>
        <p className=" mt-2 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
          {state?.message}
        </p>
        <Link
          href="/login"
          className=" mb-4 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent"
        >
          Have an account? <b>Login</b>
        </Link>
      </form>
      <ParticlesBackrgound />
    </div>
  );
};

export default Register;
