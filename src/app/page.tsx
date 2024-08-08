import LatestBlogPosts from "@/components/LatestBlogPosts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LatestBlogPosts />
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/typography/">
              <Image
                className="w-full m-0 rounded-t lazy"
                src={"/assets/img/typography.png"}
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/typography/"
                >
                  Typography
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                21 June 2020 08:04 AM
              </p>
              <p className="text-slate-800">
                Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                est et expeditasi distincti...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/traveling-ultralight/">
              <img
                className="w-full m-0 rounded-t lazy"
                src="/assets/img/traveling-kuy.jpg"
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/traveling-ultralight/"
                >
                  Getting Started with Traveling Ultralight
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                23 April 2020 07:00 PM
              </p>
              <p className="text-slate-800">
                Start by getting a small backpack and then just travel with what
                fits in that
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/untitled-post/">
              <img
                className="w-full m-0 rounded-t lazy"
                src="/assets/img/windows-7.jpg"
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/untitled-post/"
                >
                  Untitled
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                20 April 2020 06:30 PM
              </p>
              <p className="text-slate-800">Example of post without a title</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/typography/">
              <Image
                className="w-full m-0 rounded-t lazy"
                src={"/assets/img/typography.png"}
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/typography/"
                >
                  Typography
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                21 June 2020 08:04 AM
              </p>
              <p className="text-slate-800">
                Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                est et expeditasi distincti...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/traveling-ultralight/">
              <img
                className="w-full m-0 rounded-t lazy"
                src="/assets/img/traveling-kuy.jpg"
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/traveling-ultralight/"
                >
                  Getting Started with Traveling Ultralight
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                23 April 2020 07:00 PM
              </p>
              <p className="text-slate-800">
                Start by getting a small backpack and then just travel with what
                fits in that
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
          <div className="rounded shadow-md h-full">
            <a href="/untitled-post/">
              <img
                className="w-full m-0 rounded-t lazy"
                src="/assets/img/no-image.svg"
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </a>
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <a
                  className="text-slate-900 hover:text-slate-700"
                  href="/untitled-post/"
                >
                  Untitled
                </a>
              </div>
              <p className="text-slate-700 mb-1" title="Published date">
                20 April 2020 06:30 PM
              </p>
              <p className="text-slate-800">Example of post without a title</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flow-root">
        <a
          href="#"
          className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Previous
        </a>
        <a
          href="#"
          className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Next
        </a>
      </div>
    </>
  );
}
