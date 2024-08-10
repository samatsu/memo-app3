import { Metadata, ResolvingMetadata } from "next";
import BlogPostSummary from "@/components/BlogPostSummary";
import { searchBlogEntries } from "@/lib/blogPostClient";
import Link from "next/link";

export const dynamicParams = true;

type SearchPageProps = {
  searchParams?: {
    q?: string;
    p?: string;
  };
};

export async function generateMetadata(
  { searchParams }: SearchPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const term = searchParams?.q || "";
  return {
    title: `"${term}"の検索結果`,
  };
}

const postsPerPage = 12;

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const term = searchParams?.q || "";
  const currentPage = searchParams?.p ? parseInt(searchParams?.p) : 1;

  const posts = await searchBlogEntries(
    term,
    (currentPage - 1) * postsPerPage,
    postsPerPage
  );
  function HasNext(skip: number, limit: number, total: number) {
    return skip + limit < total;
  }
  function HasPrev(skip: number, total: number) {
    return skip > 0 && total > 0;
  }
  return (
    <>
      <header className="mb-14">
        <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
          Search Term: {term}, Total: {posts.total}
        </h1>
      </header>
      <div className="flex flex-wrap -mx-2">
        {posts.items.map((post) => (
          <BlogPostSummary key={post.fields.slug} post={post} />
        ))}
      </div>

      <div className="mt-3 flow-root">
        {HasPrev(posts.skip, posts.total) && (
          <Link
            href={`/search?q=${term}&p=${currentPage - 1}`}
            className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
          >
            Previous
          </Link>
        )}
        {!HasPrev(posts.skip, posts.total) && (
          <Link
            href="#"
            aria-disabled
            className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
          >
            Previous
          </Link>
        )}
        {HasNext(posts.skip, posts.limit, posts.total) && (
          <Link
            href={`/search?q=${term}&p=${currentPage + 1}`}
            className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
          >
            Next
          </Link>
        )}
        {!HasNext(posts.skip, posts.limit, posts.total) && (
          <Link
            href="#"
            aria-disabled
            className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
