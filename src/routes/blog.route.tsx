import { Footer } from "../components/sections/footer.section.tsx";
import { useEffect } from "react";
import { Divider } from "../components/layout/divider.component.tsx";
import { BlogLink } from "../components/blog/blog-link.component.tsx";
import { POSTS } from "../components/blog/posts.ts";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="min-h-screen w-full flex flex-col max-w-screen-lg mx-auto mt-64">
        {POSTS.map(({ title, date, brief, linkTo }, index) => (
          <BlogLink
            key={index}
            postTitle={title}
            date={date}
            brief={brief}
            linkTo={linkTo}
          />
        ))}

        <Divider />

        <section className="flex flex-col w-full justify-center items-center">
          <h4 className="mb-4 text-xl text-gray-500">No More Posts.</h4>
          <iframe
            src="https://giphy.com/embed/2fC4V2UeJveb6"
            width="480"
            height="263"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </section>

        <Divider />
      </main>
      <Footer />
    </>
  );
};
