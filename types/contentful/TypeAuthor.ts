import type { Asset, Entry, EntryFields } from "contentful";
import { EntrySkeletonType } from "contentful";

export interface TypeAuthorFields {
  name: EntryFields.Symbol;
  avator?: Asset;
}

type AuthorType = EntrySkeletonType & {
  fields: TypeAuthorFields;
};

export type TypeAuthor = AuthorType;
