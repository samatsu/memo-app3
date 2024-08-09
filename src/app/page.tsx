import BlogPostList from "@/components/BlogPostList";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import { getBlogEntries } from "@/lib/blogPostClient";
import Image from "next/image";

export const revalidate = 600;

const pageSize = 6;
export default async function Home() {
  const posts = await getBlogEntries(0, pageSize);
  return (
    <>
      <BlogPostList posts={posts.items} />

      {/* ページングは記事数が増えてから実装 */}
      <div className="mt-3 flow-root">
        <a
          href="#"
          className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Previous
        </a>
        <a
          href="#"
          className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Next
        </a>
      </div>
    </>
  );
}
