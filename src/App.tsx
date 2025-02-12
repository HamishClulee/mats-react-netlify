import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home.route.tsx";
import { Cv } from "./routes/cv.route.tsx";
import { Blog } from "./routes/blog.route.tsx";
import { NotFound } from "./routes/not-found.route.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
