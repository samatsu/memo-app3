"use client";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  Text,
  Document,
} from "@contentful/rich-text-types";
import { useEffect, useState } from "react";
import ZoomedImage from "@/components/ZoomedImage";

const renderOptions: Options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/articles/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        // <img
        //   src={`https://${node.data.target.fields.file.url}`}
        //   height={node.data.target.fields.file.details.image.height}
        //   width={node.data.target.fields.file.details.image.width}
        //   alt={node.data.target.fields.description}
        // />
        <ZoomedImage img={node.data.target} />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        (node.content[0] as Text)?.marks.find((x) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className="text-3xl font-bold leading-normal text-slate-900 mt-0 mb-3">
          {children}
        </h1>
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => {
      const regex = /^lang:(\w+)/;
      const codeSnippet = (text as string) || "";
      // If the code snippet doesn't have the expected metadata
      if (!regex.test(codeSnippet)) {
        return <code>{codeSnippet}</code>;
      }
      // Extract the language
      const matches = regex.exec(codeSnippet);
      const language = matches && matches?.length > 1 ? matches[1] : "";

      // Remove the first line to avoid including metadata in the rendered version
      return (
        <pre className={`language-${language} line-numbers`}>
          <code>{codeSnippet.split("\n").slice(1).join("\n")}</code>
        </pre>
      );
    },
  },
};

import Prism from "prismjs";

export default function RichTextRenderer({ content }: { content?: Document }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient || !content) {
    return <div>No Document</div>;
  } else {
    return documentToReactComponents(content, renderOptions);
  }
}
