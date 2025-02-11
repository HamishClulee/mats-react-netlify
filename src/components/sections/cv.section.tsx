import { ReactNode } from "react";
import { SlideUp } from "./slide-up.section.tsx";
import { Divider } from "../layout/divider.component.tsx";
import { JobList } from "../cv/job-list.component.tsx";
import { LANGUAGES, SKILLS } from "../../cv.config.tsx";

type Props = {
  children?: ReactNode;
};

export const CvSection = ({}: Props) => {
  return (
    <div className="p-8 md:p-32 max-w-screen-2xl mx-auto">
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
          I'm happy to wear any of these three hats: an engineer, a tech lead,
          or a consultant/architect. No matter which hat I'm wearing, I'm
          committed to simplicity, ease of maintenance and smooth delivery.
        </p>
        <p className="cv-paragraph text-lg">
          When consulting, I favor robust and simple solutions that will stick
          around for the long haul, expecting the things we build together to
          last long after I'm gone. As a leader, I believe that positive
          attitudes are key to building great teams. In an engineering role, I
          credit myself with being self-sufficient, always shipping, and fun to
          work with.
        </p>
        <p className="cv-paragraph text-lg">
          Above all - I'm passionate about teams that{" "}
          <span style={{ fontSize: "24px" }}>&#128640;</span> great code daily
          while never losing sight of the longer-term destinations.
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
    </div>
  );
};
