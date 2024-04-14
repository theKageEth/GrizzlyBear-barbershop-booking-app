import Image from "next/image";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src="/logo.png" width={80} height={80} priority={true} />
      <p className="text-5xl font-bold m-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-3">
        Loading!
      </p>
    </div>
  );
};

export default loading;
