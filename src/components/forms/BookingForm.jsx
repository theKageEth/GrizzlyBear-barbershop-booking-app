"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const BookingForm = ({ userId }) => {
  function getCurrentDate() {
    const today = new Date();
    let month = today.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = today.getDate();
    day = day < 10 ? "0" + day : day;
    const formattedDate = today.getFullYear() + "-" + month + "-" + day;
    return formattedDate;
  }

  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <div className="flex flex-col justify-center items-center align-middle mb-24">
      <div className="h-1/2">
        <form
          className="pt-10 flex flex-col gap-1 bg-primary bg-opacity-30 backdrop-filter backdrop-blur-3xl px-4 rounded-xl mx-2"
          action={formAction}
        >
          <h3 className="text-3xl mb-4 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            Create Your Booking!
          </h3>
          <input type="hidden" name="userId" value={userId} />

          <select name="title">
            <option value="" disabled selected>
              Select a service
            </option>
            <option value="Haircut">Haircut</option>
            <option value="Shave">Shave</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Hair Style">Hair Style</option>
            <option value="Hair Colour">Hair Colour</option>
          </select>
          <input
            type="date"
            name="desc"
            placeholder="Date"
            min={getCurrentDate()}
          />
          <select name="slug" placeholder="Time">
            <option value="" disabled selected>
              Select Time
            </option>
            <option value="09:00">9:00 AM</option>
            <option value="09:30">9:30 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="14:30">2:30 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="15:30">3:30 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="16:30">4:30 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="21:30">9:30 PM</option>
            <option value="22:00">10:00 PM</option>
          </select>
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-black  py-2 px-4 border border-secondary hover:border-transparent rounded-full transition-all duration-500">
            Create
          </button>
          <p className=" mt-2 font-bold  text-center bg-gradient-to-br from-content to-secondary bg-clip-text text-transparent">
            {state?.error}
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
