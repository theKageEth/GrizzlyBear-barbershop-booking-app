import { getAllPosts } from "@/lib/data";
import { deletePost } from "@/lib/action";

const BookingCards = async () => {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => {
        // Convert the date to a string if it's not already a string
        const dateString =
          typeof post.desc === "string" ? post.desc : post.desc.toISOString();

        return (
          <div
            className="max-w-sm  overflow-hidden shadow-lg bg-primary bg-opacity-30 backdrop-filter backdrop-blur-3xl px-4 rounded-xl"
            key={post.id}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <p className="">
                UserID: {post.userId}
                <br />
                Date: {dateString.split("T")[0]} <br />
                Time: {post.slug}
              </p>
            </div>
            <div className="px-6 py-4">
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingCards;
