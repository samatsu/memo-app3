"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    params.delete("p");
    router.replace(`/search?${params.toString()}`);
  }, 300);

  return (
    <form
      id="search"
      action="{{ '/search' }}"
      className="order-last sm:order-none flex-grow items-center justify-end hidden sm:block mt-6 sm:mt-0"
    >
      <label className="visually-hidden" htmlFor="header-searchbox">
        Search here ...
      </label>

      <input
        type="text"
        id="header-searchbox"
        name="q"
        placeholder="Search here ..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q") ?? ""}
        className="w-full sm:max-w-xs bg-slate-200 border border-transparent float-right focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm"
      ></input>
    </form>
  );
}
