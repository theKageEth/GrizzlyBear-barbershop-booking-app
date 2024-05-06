import SingleBooking from "@/components/cards/SingleBooking";
import BookingForm from "@/components/forms/BookingForm";
import ParticlesAdmin from "@/components/home/ParticlesAdmin";
import { auth } from "@/lib/auth";

const BookingPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <BookingForm userId={session.user.id} />

      <h1 className="text-3xl font-bold my-8">Bookings</h1>
      <SingleBooking />
      <ParticlesAdmin />
    </div>
  );
};

export default BookingPage;
