import { Metadata, ResolvingMetadata } from "next";
import { getBlogEntryBySlug } from "@/lib/blogPostClient";
import { notFound } from "next/navigation";
import RichTextRenderer from "@/components/RichTextRenderer";
import Link from "next/link";
import Image from "next/image";
import GetPublicTagList from "@/lib/TagList";
import PrismLoader from "@/components/PrismLoader";

export const dynamicParams = true;

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const post = await getBlogEntryBySlug(params.slug);

  return {
    title: post?.fields?.title,
  };
}

export default async function BlogPost(props: BlogPageProps) {
  const slug = props.params.slug;
  const post = await getBlogEntryBySlug(slug);
  const img = post.fields.mainImage as any;
  const tags = await GetPublicTagList();

  if (post == null) {
    return notFound();
  }
  return (
    <article>
      <header className="mb-14">
        <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
          {post.fields.title}
        </h1>
        <div className="text-center">
          Published on: {new Date(post.fields.publishDate).toLocaleDateString()}
        </div>
        <div className="mt-3 text-center">
          {post.metadata.tags.map((t) => {
            return (
              <Link
                key={t.sys.id}
                href={`/tags/${t.sys.id}`}
                className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5"
              >
                #{tags.items.find((v) => v.sys.id == t.sys.id)?.name}
              </Link>
            );
          })}
        </div>
        <div className="mt-10 -mx-7 md:mx-0">
          {img && post.fields.showMainImageInDetailPage && (
            <Image
              className="w-full max-w-2xl mx-auto"
              src={`https:${img.fields.file.url}`}
              width="960"
              height="500"
              alt={img.fields.title}
            />
          )}
        </div>
      </header>
      <div id="content" className="prose text-slate-800 max-w-none">
        {<RichTextRenderer content={post.fields.body} />}
      </div>
      <PrismLoader />
    </article>
  );
}
