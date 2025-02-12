import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main
        className="w-full min-h-screen flex-col justify-end items-end"
        style={{ background: "#f0db4f" }}
      >
        <div className="absolute right-10 -bottom-30 flex items-end">
          <h1 className="text-[#3c3a3a] josefin-sans">HC</h1>
        </div>
      </main>
      <div className="w-full flex flex-row items-center justify-center space-x-8 my-32">
        <h3 className="cursor-pointer text-4xl font-bold underline">
          <Link to={"/blog"}>Blog</Link>
        </h3>
        <h3 className="cursor-pointer text-4xl font-bold underline">
          <Link to={"/cv"}>CV</Link>
        </h3>
      </div>
    </>
  );
};
