import ServicesListLeft from "./ServiceListLeft";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className=" flex flex-col justify-center items-center align-middle pt-20"
      >
        <h2 className="text-3xl justify-start mb-10 font-bold  bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent ">
          Services
        </h2>
        <ServicesList
          img="/haircut.png"
          title="Haircuts"
          desc="Get a stylish haircut from our experienced barbers. Whether you're looking for a classic trim or a trendy new style, we've got you covered"
        />
        <ServicesListLeft
          img="/beard.png"
          title="Beard Trimming"
          desc={
            "Keep your beard looking sharp with our professional beard trimming service. Our barbers will expertly shape and groom your beard to perfection"
          }
        />

        <ServicesList
          img="/shaving.png"
          title="Shaving"
          desc="Experience the ultimate shaving experience with our hot towel shave service. Relax and enjoy as our skilled barbers provide a close, comfortable shave"
        />
        <ServicesListLeft
          img="/styling.png"
          title="Hair Styling"
          desc={
            "Elevate your look with our professional hair styling service. Whether you want a sleek and sophisticated style or a bold and edgy look, our talented stylists will create the perfect hairstyle for you"
          }
        />
        <ServicesList
          img="/color.png"
          title="Hair Coloring"
          desc="Add dimension and depth to your hair with our coloring services. From subtle highlights to bold fashion colors, our color specialists will help you achieve the perfect hue"
        />
      </div>
    </>
  );
};

export default Services;
