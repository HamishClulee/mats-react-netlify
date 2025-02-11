import { JSX } from "react";
import { TECH_CONFIG } from "./tech.config.ts";

export type Job = {
  employer: string;
  title: string;
  dates: string;
  wasRemote?: boolean;
  references?: boolean;
  description: JSX.Element;
  tech: { name: string; value: number }[];
};

type LanguageExperience = {
  label: string;
  years: string;
};

export const LANGUAGES: LanguageExperience[] = [
  { label: "ReactJs", years: "5+ years" },
  { label: "VueJs", years: "6+ years" },
  { label: "Javascript", years: "10+ years" },
  { label: "Java", years: "6+ years" },
  { label: "SASS/SCSS/CSS", years: "6+ years" },
  { label: "NodeJs", years: "8+ years" },
];

type SkillExperience = {
  label: string;
  years: string;
};

export const SKILLS: SkillExperience[] = [
  { label: "Mentoring", years: "7+ years" },
  { label: "Coaching", years: "4+ years" },
  { label: "Team Leadership", years: "6+ years" },
  { label: "UI/UX Design", years: "6+ years" },
  { label: "Working Remote", years: "8+ years" },
  { label: "Linux", years: "10+ years" },
];

export const JOBS: Job[] = [
  {
    employer: "Betfair Au",
    title: "Engineering Consultant",
    dates: "March 2021 - Current (~32 months)",
    wasRemote: true,
    references: true,
    tech: TECH_CONFIG.betfair,
    description: (
      <>
        <p className="cv-paragraph">
          Betfair Australia is a high-revenue peer-to-peer sports and racing
          betting platform.
        </p>
        <p className="cv-paragraph">
          I was initially contracted to implement the technical aspects of a
          complete marketing tech overhaul. After completion, my daily routine
          evolved to be more consultancy and architecture-focused. I still cut
          code, but also moved into handling tech strategy and product design
          responsibilities. The change also brought developer mentoring into the
          course of a normal week.
        </p>
        <p className="cv-paragraph">
          By the end of the ~32 months, I'm happy to have claimed significant
          ownership over a transformed tech landscape and large changes in
          long-term strategy. I'm sure that when I'm next in Melbourne and we
          end up having a few beers, I'll get to hear about how the changes we
          made have grown into even larger increases in revenue and customer
          engagement.
        </p>
        <p className="cv-paragraph">Overall, an incredible experience.</p>
      </>
    ),
  },
  {
    employer: "Contractor",
    title: "Lead Software Engineer",
    dates: "June 2020 - March 2021",
    references: true,
    tech: TECH_CONFIG.contract,
    description: (
      <>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">Watercare NZ (9 months).</h5>
          <p>
            A leadership, mentoring, and engineering role. Bringing an outdated
            and somewhat dysfunctional code base into line with industry best
            practices. Writing the foundation and first cycle features for a new
            Watercare product. 100% Frontend work.
          </p>
        </div>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">Zer0 (3 months).</h5>
          <p>
            Short run contract for a US-based Blockchain startup. I shipped a
            reasonably large-scale UI prototype to spec while maintaining
            mentorship and leadership functions for internal Zer0 devs.
          </p>
        </div>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">
            Streem Media Australia (3 months).
          </h5>
          <p>
            Short run contract working with Vue and Ruby on Rails. Shipped a
            full overhaul of a legacy PDF reporting platform.
          </p>
        </div>
        <div className="w-full align-center -mx-1 my-2 text-md italic text-gray-400">
          All the positions above were 100% remote
        </div>
      </>
    ),
  },
  {
    employer: "Dovetail Studios",
    title: "Senior Javascript Developer",
    dates: "January 2021 - June 2021 (6 month contract)",
    wasRemote: true,
    references: true,
    tech: TECH_CONFIG.dovetail,
    description: (
      <>
        <p className="cv-paragraph">
          Dovetail leads product development for rapidly growing companies
          worldwide, offering digital and growth strategy, design, and
          development services across private and public sectors.
        </p>
        <p className="cv-paragraph">
          I worked as a Senior JavaScript Developer for Fluenccy, a new currency
          hedging and business intelligence (BI) platform. My responsibilities
          were divided between front-end and back-end development.
        </p>
        <p className="cv-paragraph">
          Dovetail was an incredible place to work, and we both hope to do it
          again sometime.
        </p>
      </>
    ),
  },
  {
    employer: "AduroLabs Vietnam",
    title: "Frontend Tech Lead",
    dates: "January 2020 - January 2021 (1 year)",
    references: true,
    tech: TECH_CONFIG.aduro,
    description: (
      <>
        <p className="cv-paragraph">
          AduroLabs is a Health and Wellness service provider.
        </p>
        <p className="cv-paragraph">
          I was primarily tasked with leadership and mentoring for the frontend
          teams. Daily responsibilities included code reviews, coaching, writing
          technical documentation, making architecture decisions, and managing
          sprints and tickets.
        </p>
        <p className="cv-paragraph">
          Higher-level responsibilities included interviewing potential hires,
          technical product management, building better agile processes, and
          interfacing with other teams and departments within the company.
        </p>
      </>
    ),
  },
  {
    employer: "Fusion Sport Inc.",
    title: "Software Developer",
    dates: "August 2016 - August 2018 (2 years)",
    wasRemote: true,
    references: true,
    tech: TECH_CONFIG.fusion,
    description: (
      <>
        <p className="cv-paragraph">
          Fusion is a sports science company, based in Brisbane, Australia. They
          sell hardware products and provide a web app, all designed to provide
          athletes and sports teams with competitive advantages.
        </p>
        <p className="cv-paragraph">
          The Fusion Sport Client list is impressive, you can check it out{" "}
          <a
            href="https://www.fusionsport.com/clients/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , working directly for internationally recognizable sports teams was a
          real buzz.
        </p>
        <p className="cv-paragraph">
          Noteworthy achievement: Being granted leadership of the Dashboard
          Builder project. After identifying the most commonly requested items
          in customer dashboards with the team, I prototyped an application that
          enabled creation of dashboards without developer involvement. It was
          approved for resourcing by management, and the Dashboard Builder was
          born.
        </p>
        <p className="cv-paragraph">
          Noteworthy achievement: Rebuilding the tooling used by the Frontend
          team, replacing Gulp and JQuery with a custom Webpack and{" "}
          <em>VueJs</em> boilerplate. The new boilerplate reduced lead time by a
          significant amount and is still in use today.
        </p>
      </>
    ),
  },
];
