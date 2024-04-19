"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useState, useMemo } from "react";

const Contact = () => {
  const [value, setValue] = useState("you@example.com");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const formHandler = () => {
    setMsg(`${name} Your message has been sent to GrizzlyBeard@info.com`);
  };
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  return (
    <>
      <div
        id="contact"
        className="h-[125vh]  flex flex-col  justify-center items-center align-middle pt-24 space-y-5 mt-10 mb-20"
      >
        <h2 className="text-3xl p-5 font-bold mb-5 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent ">
          Contact Us
        </h2>
        <div className=" ">
          <form
            className="flex flex-col gap-4 bg-primary bg-opacity-30 backdrop-filter backdrop-blur-3xl p-6 rounded-xl "
            action=""
            method="post"
            enctype="text/plain"
          >
            <h3 className="text-xl p-5 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
              Hi {name}!
            </h3>
            <p className="mb-5 p-2">
              {" "}
              We'd love to hear from you! Please fill out the form below
            </p>
            <Input
              type="text"
              label="name"
              id="name"
              placeholder="Your Name"
              isRequired
              radius="full"
              labelPlacement="inside"
              onValueChange={setName}
            />
            <Input
              type="email"
              label="Email"
              id="Email"
              placeholder="you@example.com"
              isRequired
              radius="full"
              labelPlacement="inside"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : ""}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
            />
            <Input
              type="tel"
              label="Phone Number"
              id="phoneNumber"
              placeholder="Your Phone Number"
              required
              radius="full"
              labelPlacement="inside"
            />
            <Textarea
              label="Description"
              placeholder="Enter your Message"
              isRequired
            />
            <Button onClick={formHandler} color="secondary" variant="ghost">
              Sumbit
            </Button>
            <h3 className="p-3 font-semibold bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent ">
              {msg}
            </h3>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Contact;
