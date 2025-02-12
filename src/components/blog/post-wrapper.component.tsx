import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { POSTS } from "./posts";
import { Divider } from "../layout/divider.component.tsx";
import { Footer } from "../sections/footer.section.tsx";
import { CursorLoader } from "./cursor-loader.component.tsx";

import Prism from "prismjs";
import { marked } from "marked";

export const PostWrapper = () => {
  const { urlName } = useParams();
  const navigate = useNavigate();

  const [markdown, setMarkdown] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const htmlContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true);
      try {
        const post = POSTS.find((post) => post.linkTo.urlName === urlName);

        if (!post) throw new Error("Post not found");

        const mdFileName = post.linkTo.mdFileName.replace(".md", "").trim();

        const markdownModule = await import(`./posts/${mdFileName}.md?raw`);

        const parsedMarkdown = await marked(markdownModule.default);
        setMarkdown(parsedMarkdown);
      } catch (error) {
        navigate("/notfound");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [urlName, navigate]);

  useEffect(() => {
    if (markdown) {
      Prism.highlightAll();
      prepareCodeBlockHighlighting();
    }
  }, [markdown]);

  const prepareCodeBlockHighlighting = () => {
    if (!htmlContainerRef.current) return;

    const codeBlocks = htmlContainerRef.current.getElementsByTagName("code");

    for (let block of codeBlocks) {
      const text = block.innerHTML;
      const langIndicatorStartIndex = text.indexOf("&lt;&lt;&lt;");
      const langIndicatorEndIndex = text.indexOf("&gt;&gt;&gt;");
      const langIndicatorLength = "&lt;&lt;&lt;".length;
      const language = text.substring(
        langIndicatorStartIndex + langIndicatorLength,
        langIndicatorEndIndex - langIndicatorLength
      );

      if (langIndicatorStartIndex !== -1) {
        block.innerHTML = block.innerHTML.replace(
          `&lt;&lt;&lt;${language}&gt;&gt;&gt;`,
          ""
        );
        block.style.position = "relative";
        block.style.bottom = "4px";
        block.parentElement!.classList.add(`language-${language}`);
        block.parentElement!.style.paddingTop = "0px";
      }
    }
  };

  return (
    <>
      <main className="post-wrapper max-w-screen-2xl mx-auto">
        {isLoading && <CursorLoader />}
        <div
          ref={htmlContainerRef}
          className="p-2 md:p-12 leading-7"
          dangerouslySetInnerHTML={{ __html: markdown || "" }} // Inject Markdown content
        />
        <Divider />
      </main>
      <Footer />
    </>
  );
};
