import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeAuthor } from "./TypeAuthor";
import { EntrySkeletonType } from "contentful";

export interface TypeBlogPostFields {
  title: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  category: "ツーリングスポット" | "未分類" | "観光地" | "食事";
  summary?: EntryFields.Text;
  body?: EntryFields.RichText;
  publishDate: EntryFields.Date;
  mainImage?: Asset;
  author?: TypeAuthor;
}

type BlogPostType = EntrySkeletonType & {
  fields: TypeBlogPostFields;
};

export type TypeBlogPost = BlogPostType;
