import BlogPostSummary from "@/components/BlogPostSummary";
import { getBlogEntries } from "@/lib/blogPostClient";

export default async function LatestBlogPosts() {
  const posts = await getBlogEntries();
  return (
    <div className="flex flex-wrap -mx-2">
      {posts.items.map((post) => (
        <BlogPostSummary key={post.fields.slug} post={post} />
      ))}
    </div>
  );
}
