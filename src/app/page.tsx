import BlogPostList from "@/components/BlogPostList";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import { getBlogEntries } from "@/lib/blogPostClient";
import Image from "next/image";
import { HasNext, HasPrev } from "@/lib/PagingHelper";
import Link from "next/link";

export const revalidate = 600;

type HomePageProps = {
  searchParams?: {
    p?: string;
  };
};

const pageSize = 6;
export default async function Home(props: HomePageProps) {
  const { searchParams } = props;
  const currentPage = searchParams?.p ? parseInt(searchParams?.p) : 1;

  const posts = await getBlogEntries((currentPage - 1) * pageSize, pageSize);
  return (
    <>
      <BlogPostList posts={posts.items} />

      <div className="mt-3 flow-root">
        {HasPrev(posts.skip, posts.total) && (
          <Link
            href={`/?p=${currentPage - 1}`}
            className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
          >
            Previous
          </Link>
        )}
        {!HasPrev(posts.skip, posts.total) && (
          <Link
            href="#"
            aria-disabled
            scroll={false}
            className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
          >
            Previous
          </Link>
        )}
        {HasNext(posts.skip, posts.limit, posts.total) && (
          <Link
            href={`/?p=${currentPage + 1}`}
            className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
          >
            Next
          </Link>
        )}
        {!HasNext(posts.skip, posts.limit, posts.total) && (
          <Link
            href="#"
            aria-disabled
            scroll={false}
            className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
