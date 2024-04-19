const Opening = () => {
  return (
    <div id="opening" className="text-center   py-20 min-h-screen ">
      <div>
        <h2 className="text-3xl my-10  font-bold  bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent ">
          Opening Times
        </h2>
      </div>
      <div className=" border-5 rounded-3xl border-secondary inline-block p-10 border-double border-y-content">
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Monday
          </h3>
          <p className="mb-2">9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Tuesday
          </h3>
          <p className="mb-2">9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Wednesday
          </h3>
          <p className="mb-2">9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Thursday
          </h3>
          <p className="mb-2">9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Friday
          </h3>
          <p className="mb-2">9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Saturday
          </h3>
          <p className="mb-2">9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Sunday
          </h3>
          <p className="mb-2">Closed</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-10 mb-3 bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Location
          </h2>
          <p className=" hover:text-content hover:scale-110 ease-in-out transition duration-1000 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/Gc8je5o2TDGJJhLy6"
            >
              150 Corporation St, Birmingham B4 6TB
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opening;
