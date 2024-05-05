import AdminUsers from "@/components/cards/AdminUsers";
import BookingCards from "@/components/cards/BookingCards";
import BookingForm from "@/components/forms/BookingForm";
import ParticlesAdmin from "@/components/home/ParticlesAdmin";

import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <BookingForm userId={session.user.id} />

      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <AdminUsers />
      <h1 className="text-3xl font-bold my-8">Bookings</h1>
      <BookingCards />
      <ParticlesAdmin />
    </div>
  );
};

export default AdminPage;
