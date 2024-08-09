export default function Footer() {
  return (
    <footer className="mt-20 px-10 py-8 bg-slate-200">
      <div className="max-w-5xl mx-auto text-slate-700 text-center">
        &copy;{new Date().getUTCFullYear()}{" "}
        <a href="/" className="font-medium" target="_blank" rel="noopener">
          Net plant-es
        </a>
        .
      </div>
      <div className="max-w-5xl mx-auto text-slate-700 text-center">
        This site is built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener">
          Next.js
        </a>
        {", "}
        <a href="https://www.contentful.com" target="_blank" rel="noopener">
          Contentful
        </a>
        {", "}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener">
          Tailwind CSS
        </a>
        {", "}
        <a href="https://vercel.com" target="_blank" rel="noopener">
          Vercel
        </a>
        {", "}
        <a href="https://resend.com/" target="_blank" rel="noopener">
          Resend
        </a>
        {" and "}
        <a
          href="https://www.tailwindawesome.com/resources/vredeburg"
          target="_blank"
          rel="noopener"
        >
          vredeburg design template
        </a>
        .
      </div>
    </footer>
  );
}
