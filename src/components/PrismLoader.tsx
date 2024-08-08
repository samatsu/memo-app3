"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
// import "prismjs/plugins/toolbar/prism-toolbar.min.css";
// import "prismjs/plugins/toolbar/prism-toolbar";

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div className="hidden"></div>;
}
