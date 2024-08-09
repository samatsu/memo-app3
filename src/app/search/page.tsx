import { Metadata, ResolvingMetadata } from "next";
import BlogPostSummary from "@/components/BlogPostSummary";
import { searchBlogEntries } from "@/lib/blogPostClient";

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

const postsPerPage = 25;

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const term = searchParams?.q || "";
  const currentPage = searchParams?.p ? parseInt(searchParams?.p) : 1;

  const posts = await searchBlogEntries(
    term,
    (currentPage - 1) * postsPerPage,
    postsPerPage
  );

  return (
    <>
      <header className="mb-14">
        <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
          Search Term: {term}
        </h1>
      </header>
      <div className="flex flex-wrap -mx-2">
        {posts.items.map((post) => (
          <BlogPostSummary key={post.fields.slug} post={post} />
        ))}
      </div>
    </>
  );
}
