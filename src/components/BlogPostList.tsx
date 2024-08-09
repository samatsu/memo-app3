import BlogPostSummary from "@/components/BlogPostSummary";
import { BlogPostEntryType, getBlogEntries } from "@/lib/blogPostClient";

type BlogPostListProps = {
  posts: BlogPostEntryType[];
};

export default async function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="flex flex-wrap -mx-2">
      {posts.map((post) => (
        <BlogPostSummary key={post.sys.id} post={post} />
      ))}
    </div>
  );
}
