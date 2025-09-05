import { getAllBlogPosts } from "../../lib/queries";
import { AllPosts } from "../components/Posts";

export default async function Page() {
  const posts = await getAllBlogPosts();

  return (
    <section className="container py-5">
      <AllPosts data={posts} />
    </section>
  );
}
