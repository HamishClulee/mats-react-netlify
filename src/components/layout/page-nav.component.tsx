import { Link } from "react-router-dom";
import { HomeIcon } from "../svgs/home.icon.tsx";
import { BlogIcon } from "../svgs/blog.icon.tsx";
import { CvIcon } from "../svgs/cv.icon.tsx";

export const PageNav = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-row space-x-4">
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/blog">
        <BlogIcon />
      </Link>
      <Link to="/cv">
        <CvIcon />
      </Link>
    </div>
  );
};
