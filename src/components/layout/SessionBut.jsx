import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";
import Link from "next/link";

const SessionBut = async () => {
  const session = await auth();
  return (
    <div className="fixed top-3  right-28 z-40 ml-3 px-3">
      {session ? (
        <form action={handleLogout}>
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-black  py-2 px-4 border border-secondary hover:border-transparent rounded-full transition-all duration-500">
            Logout
          </button>
        </form>
      ) : (
        <Link href={"/login"}>
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-black  py-2 px-4 border border-secondary hover:border-transparent rounded-full transition-all duration-500">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default SessionBut;
