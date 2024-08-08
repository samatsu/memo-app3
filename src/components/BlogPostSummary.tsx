import { BlogPostEntryType } from "@/lib/blogPostClient";
import Image from "next/image";
import Link from "next/link";

type BlogSummaryProps = {
  post: BlogPostEntryType;
};
import { TypeBlogPost, TypeBlogPostFields } from "@/types/contentful";

export default function BlogPostSummary(props: BlogSummaryProps) {
  const fields = props.post.fields as TypeBlogPostFields;
  const img = fields.mainImage as any;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
      <div className="rounded shadow-md h-full">
        <a href={`/articles/${fields.slug}`}>
          {img && (
            <Image
              className="w-full m-0 rounded-t lazy"
              src={`https:${img.fields.file.url}`}
              width="960"
              height="500"
              alt={img.fields.title}
            />
          )}
          {!img && (
            <Image
              className="w-full m-0 rounded-t lazy"
              src={"/assets/img/no-image.svg"}
              width="960"
              height="500"
              alt="no image"
            />
          )}
        </a>
        <div className="px-6 py-5">
          <div className="font-semibold text-lg mb-2">
            <Link
              className="text-slate-900 hover:text-slate-700"
              href={`/articles/${fields.slug}`}
            >
              {fields.title}
            </Link>
          </div>
          <p className="text-slate-700 mb-1" title="Published date">
            {new Date(fields.publishDate).toLocaleString()}
          </p>
          <p className="text-slate-800">{fields.summary}</p>
        </div>
      </div>
    </div>
  );
}
