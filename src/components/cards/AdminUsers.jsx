import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-primary bg-opacity-30 backdrop-filter backdrop-blur-3xl px-4 py-4 rounded-xl"
        >
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="ml-3">
                <span className="font-bold">{user.id}</span> <br />
                <span className="font-bold">{user.username}</span>
              </div>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
