import { Link } from "react-router-dom";
import { HomeIcon } from "../svgs/home.icon.tsx";
import { BlogIcon } from "../svgs/blog.icon.tsx";
import { CvIcon } from "../svgs/cv.icon.tsx";
import cn from "classnames";
import { useScreenWidth } from "../../hooks/use-screen-width.hook.ts";
import { useEffect } from "react";

const ROUND_BUTTON_BASE =
  "rounded-full p-4 cursor-pointer hover:bg-gray-100 focus:outline-none focus:shadow-outline shadow-lg transition duration-600 ease-in-out";

export const PageNav = () => {
  const [screenWidth, screenWidthName] = useScreenWidth();

  useEffect(() => {
    console.log({ screenWidth, screenWidthName });
  }, [screenWidth]);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-4">
      <button className={cn(ROUND_BUTTON_BASE, "bg-blue-400")}>
        <Link to="/">
          <HomeIcon />
        </Link>
      </button>
      <button className={cn(ROUND_BUTTON_BASE, "bg-orange-400")}>
        <Link to="/blog">
          <BlogIcon />
        </Link>
      </button>
      <button className={cn(ROUND_BUTTON_BASE, "bg-yellow-400")}>
        <Link to="/cv">
          <CvIcon />
        </Link>
      </button>
    </div>
  );
};
