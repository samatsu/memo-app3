import { Metadata, ResolvingMetadata } from "next";
import BlogPostList from "@/components/BlogPostList";
import BlogPostSummary from "@/components/BlogPostSummary";
import { getBlogEntriesByTag } from "@/lib/blogPostClient";
import { decode } from "querystring";

type TaggedBlogPostsProps = {
  params: {
    tag: string;
  };
};

function splitTagInfo(tagid_name: string) {
  let name = "";
  let id = "";
  const idAndName = tagid_name.split("_");
  if (idAndName.length > 1) {
    id = idAndName[0];
    name = decodeURI(idAndName[1]);
  } else {
    id = tagid_name;
  }
  return { id, name };
}
export async function generateMetadata(
  { params }: TaggedBlogPostsProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id, name } = splitTagInfo(params.tag);
  return {
    title: `"${name}"にタグ付けされた記事一覧`,
  };
}

export default async function TaggedBlogPosts(props: TaggedBlogPostsProps) {
  const { id, name } = splitTagInfo(props.params.tag);
  const posts = await getBlogEntriesByTag(id);

  return (
    <>
      <div className="mb-8 text-center">
        <h3 className="text-xl font-medium text-slate-700 my-0">Tagged with</h3>
        <h1 className="text-4xl font-medium leading-normal mt-0">
          {name}({id})
        </h1>
      </div>
      <BlogPostList posts={posts.items} />
    </>
  );
}
