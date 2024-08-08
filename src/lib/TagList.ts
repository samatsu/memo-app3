import { TagCollection } from "contentful";
import { getAllPublicTags } from "./blogPostClient";

let publicTagList: TagCollection;

export default async function GetPublicTagList() {
  if (!publicTagList) {
    publicTagList = await getAllPublicTags();
  }
  return publicTagList;
}
