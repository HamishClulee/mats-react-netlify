import { Footer } from "../components/sections/footer.section.tsx";
import { FourOhFourIcon } from "../components/svgs/FourOhFour.icon.tsx";

export const NotFound = () => {
  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-center items-center max-w-screen-lg mx-auto">
        <FourOhFourIcon />
        <h5>There is nothing to see here...</h5>
      </main>
      <Footer />
    </>
  );
};
