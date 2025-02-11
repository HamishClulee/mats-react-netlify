import { InitialSection } from "./components/sections/initial.section.tsx";
import { CvSection } from "./components/sections/cv.section.tsx";
import { Footer } from "./components/sections/footer.section.tsx";

function App() {
  return (
    <main>
      <InitialSection />
      <CvSection />
      <Footer />
    </main>
  );
}

export default App;
