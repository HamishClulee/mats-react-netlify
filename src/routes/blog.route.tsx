import { Footer } from "../components/sections/footer.section.tsx";
import { useEffect } from "react";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-center items-center max-w-screen-lg mx-auto">
        TBD
      </main>
      <Footer />
    </>
  );
};
