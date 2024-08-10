import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  skip: number;
  limit: number;
  total: number;
  term: string;
  path: string;
};
function HasNext(skip: number, limit: number, total: number) {
  return skip + limit < total;
}
function HasPrev(skip: number, total: number) {
  return skip > 0 && total > 0;
}

export default function Pagination(props: PaginationProps) {
  const { skip, limit, total, path, term, currentPage } = props;
  return (
    <div className="mt-3 flow-root">
      {HasPrev(skip, total) && (
        <Link
          href={`/search?q=${term}&p=${currentPage - 1}`}
          className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Previous
        </Link>
      )}
      {!HasPrev(skip, total) && (
        <Link
          href="#"
          aria-disabled
          className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
        >
          Previous
        </Link>
      )}
      {HasNext(skip, limit, total) && (
        <Link
          href={`${path}?q=${term}&p=${currentPage + 1}`}
          className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
        >
          Next
        </Link>
      )}
      {!HasNext(skip, limit, total) && (
        <Link
          href="#"
          aria-disabled
          className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
        >
          Next
        </Link>
      )}
    </div>
  );
}
