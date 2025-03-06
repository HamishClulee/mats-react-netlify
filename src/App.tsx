import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/home.route.tsx";
import { Cv } from "./routes/cv.route.tsx";
import { Blog } from "./routes/blog.route.tsx";
import { NotFound } from "./routes/not-found.route.tsx";
import { PostWrapper } from "./components/blog/post-wrapper.component.tsx";
import { PageNav } from "./components/layout/page-nav.component.tsx";
import { ScratchPad } from "./routes/scratch-pad.route.tsx";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Only render PageNav if not on the home page */}
      {location.pathname !== "/" && <PageNav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:urlName" element={<PostWrapper />} />
        <Route path="/oh-hi-bumble-buddy" element={<ScratchPad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
