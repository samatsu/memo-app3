export default function Footer() {
  return (
    <footer className="mt-20 px-10 py-8 bg-slate-200">
      <div className="max-w-5xl mx-auto text-slate-700 text-center">
        © 2020
        <a href="/" className="font-medium" target="_blank" rel="noopener">
          Vredeburg
        </a>
        . Made by
        <a href="https://github.com/daflh" target="_blank" rel="noopener">
          Dafiul Haq
        </a>
        using
        <a href="https://www.11ty.dev" target="_blank" rel="noopener">
          Eleventy
        </a>
        and
        <a href="https://tailwindcss.com" target="_blank" rel="noopener">
          Tailwind CSS
        </a>
        .
      </div>
    </footer>
  );
}
