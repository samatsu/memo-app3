import Link from "next/link";
import SearchBox from "./SearchBox";
import { Suspense } from "react";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-white w-full px-6 py-5 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500"
    >
      <div className="max-w-5xl mx-auto flex items-center flex-wrap justify-between">
        <div className="sm:mr-8">
          <a className="flex items-center" href="/">
            <span className="text-xl text-teal-700 font-semibold self-center">
              Planet-es
            </span>
          </a>
        </div>
        <nav
          id="menu"
          className="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex hidden mt-2 md:mt-0"
        >
          <Link
            href="/tags"
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            Tag List
          </Link>

          <Link
            href="/contact"
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            Contact Us
          </Link>
        </nav>
        <Suspense fallback={<div>Loadiing</div>}>
          <SearchBox />
        </Suspense>
        <div
          id="menu-toggle"
          className="flex items-center md:hidden text-slate-700 hover:text-teal-600 cursor-pointer sm:ml-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </header>
  );
}
