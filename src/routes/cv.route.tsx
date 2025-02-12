import { SlideUp } from "../components/sections/slide-up.section.tsx";
import { Divider } from "../components/layout/divider.component.tsx";
import { LANGUAGES, SKILLS } from "../cv.config.tsx";
import { JobList } from "../components/cv/job-list.component.tsx";
import { Footer } from "../components/sections/footer.section.tsx";
import { useEffect } from "react";

export const Cv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="p-8 md:p-32 max-w-screen-2xl mx-auto">
        <SlideUp>
          <h1 className="text-3xl md:text-6xl font-display mb-2 md:mb-4">
            Hamish Clulee
          </h1>
          <h2 className="text-2xl md:text-4xl text-secondary font-display mb-1 md:mb-2">
            BSc, Software Engineering, University of Otago
          </h2>
          <span className="text-lg mb-1 flex flex-col md:flex-row text-gray-500">
            <span className="mr-4 italic">hamish.clulee@gmail.com</span>
            <span className="transform scale-x-150 hidden md:inline">-</span>
            <span className="mx-0 md:mx-4 italic">References upon request</span>
            <span className="transform scale-x-150 hidden md:inline">-</span>
            <span className="mx-0 md:mx-4 italic">New Zealand Citizen.</span>
          </span>
          <Divider />
        </SlideUp>

        <SlideUp>
          <p className="cv-paragraph text-lg">
            Lead Software Engineer with extensive expertise managing the people
            side of products.
          </p>
          <p className="cv-paragraph text-lg">
            Over 10 years of JavaScript and TypeScript experience across a wide
            range of frameworks, with a strong focus on NextJs, React, and Vue.
            I have built and contributed to numerous full-stack JavaScript
            applications.
          </p>
          <p className="cv-paragraph text-lg">
            I believe that successful software projects are driven more by
            people, relationships, and communication than by functions and
            variables.
          </p>
          <p className="cv-paragraph text-lg">
            Above all - I'm passionate about teams that{" "}
            <span style={{ fontSize: "24px" }}>&#128640;</span> great code. Send
            it.
          </p>
          <Divider />
        </SlideUp>

        <SlideUp>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
              {LANGUAGES.map(({ label, years }) => (
                <p key={label} className="my-2 flex justify-between">
                  {label} <span className="italic">{years}</span>
                </p>
              ))}
            </div>

            <div className="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
              {SKILLS.map(({ label, years }) => (
                <p key={label} className="my-2 flex justify-between">
                  {label} <span className="italic">{years}</span>
                </p>
              ))}
            </div>
          </div>
          <Divider />
        </SlideUp>

        <JobList />

        <Divider />
      </main>
      <Footer />
    </>
  );
};
