import GetPublicTagList from "@/lib/TagList";
import Link from "next/link";

export default async function Tags() {
  const tags = await GetPublicTagList();
  return (
    <>
      <h1 className="text-3xl leading-normal font-bold mt-0 mb-7 text-center">
        Tag List
      </h1>
      <div className="flex justify-center flex-wrap">
        {tags.items.map((t) => (
          <Link
            className="inline-block mx-1 mb-3 px-4 py-2 bg-slate-200 text-slate-700 font-medium rounded-full"
            href={`/tags/${t.sys.id}`}
          >
            {t.name}
            {/* {" "}
            <span className="px-2 py-1 ml-1 text-xs font-semibold bg-teal-300 text-teal-800 rounded-full">
              #
            </span> */}
          </Link>
        ))}
      </div>
    </>
  );
}
