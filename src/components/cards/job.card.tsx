import { ReactNode } from "react";
import { SlideUp } from "../sections/slide-up.section.tsx";
import { TechIndicator } from "../util/tech-indicator.component.tsx";

type Props = {
  employer: string;
  title: string;
  dates: string;
  references?: boolean;
  wasRemote?: boolean;
  children?: ReactNode;
  tech: { name: string; value: number }[];
};

export const JobCard = ({
  employer,
  title,
  dates,
  references = false,
  wasRemote = true,
  children,
  tech,
}: Props) => {
  return (
    <section className="my-16">
      <SlideUp>
        <h2 className="text-4xl mb-2">{employer}</h2>
        <h3 className="text-2xl mb-1 font-display text-secondary">{title}</h3>
        <h5
          className={`text-xl mt-1 text-gray-500 ${references ? "mb-1" : "mb-4"}`}
        >
          {dates}
        </h5>
        {references && (
          <h6 className="italic mb-4 mt-1">References available</h6>
        )}
        <TechIndicator tech={tech} />
        {children}
        {wasRemote && (
          <span className="w-full align-center -mx-1 my-2 italic text-md text-gray-400">
            This was a 100% remote position
          </span>
        )}
      </SlideUp>
    </section>
  );
};
