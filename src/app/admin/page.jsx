import AdminUsers from "@/components/cards/AdminUsers";
import BookingCards from "@/components/cards/BookingCards";

import ParticlesAdmin from "@/components/home/ParticlesAdmin";

const AdminPage = async () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <AdminUsers />
      <h1 className="text-3xl font-bold my-8">Bookings</h1>
      <BookingCards />
      <ParticlesAdmin />
    </div>
  );
};

export default AdminPage;
