import { EntrySkeletonType } from "contentful";
import * as cf from "./contentful";

export type BlogPostType = EntrySkeletonType & {
  fields: cf.TypeBlogPostFields;
};
