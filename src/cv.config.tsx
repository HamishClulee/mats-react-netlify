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
  { label: "ReactJs", years: "8+ years" },
  { label: "VueJs", years: "6+ years" },
  { label: "Javascript", years: "12+ years" },
  { label: "Java", years: "6+ years" },
  { label: "SASS/SCSS/CSS", years: "10+ years" },
  { label: "NodeJs", years: "10+ years" },
];

type SkillExperience = {
  label: string;
  years: string;
};

export const SKILLS: SkillExperience[] = [
  { label: "Mentoring", years: "7+ years" },
  { label: "Coaching", years: "6+ years" },
  { label: "Team Leadership", years: "8+ years" },
  { label: "UI/UX Design", years: "6+ years" },
  { label: "Working Remote", years: "8+ years" },
  { label: "Linux", years: "10+ years" },
];

export const JOBS: Job[] = [
  {
    employer: "Betfair Au",
    title: "Lead Engineer",
    dates: "March 2022 - Feb 2025 (~3 years)",
    wasRemote: true,
    references: true,
    tech: TECH_CONFIG.betfair,
    description: (
      <>
        <ul className="cv-paragraph list-disc list-inside">
          <li>
            Implemented registrations through a strict regulatory framework
            (NextJs, AWS)
          </li>
          <li>Implemented Customer Preferences (NextJs, AWS)</li>
          <li>Implemented customer and Affiliate Watchlists (NextJs, AWS)</li>
          <li>
            Implemented a Preact application within Google Tag Manager with
            CI/CD through AWS
          </li>
          <li>
            Implemented a large system of client-side event tracking across web
            and mobile
          </li>
          <li>Team sizes: 3-5 engineers</li>
        </ul>
        <p className="cv-paragraph">
          The impact of my contributions continues to drive innovation, and the
          changes implemented have had a lasting effect on Betfair's technology
          landscape, customer engagement, and revenue expansion.
        </p>
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
          <h5 className="contractor-main-heading">Paloma Venture Studio</h5>
          <p>
            6 month contract building the MVP for Fluenccy a currency hedging
            and trading start up. Weekly interactions with founders, heavy usage
            and development of d3.js and charting libraries to build some really
            incredible UI.
          </p>
        </div>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">Watercare NZ</h5>
          <p>
            A leadership, mentoring, and engineering role. Bringing an outdated
            and somewhat dysfunctional code base into line with industry best
            practices. Writing the foundation and first cycle features for a new
            Watercare product. 100% Frontend work.
          </p>
        </div>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">Zer0</h5>
          <p>
            Short run contract for a US-based Blockchain startup. I shipped a
            reasonably large-scale UI prototype to spec while maintaining
            mentorship and leadership functions for internal Zer0 devs.
          </p>
        </div>
        <div className="cv-paragraph">
          <h5 className="contractor-main-heading">Streem Media Australia</h5>
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
    employer: "AduroLabs Vietnam (Microsoft International Usage)",
    title: "Frontend Tech Lead",
    dates: "December 2019 - January 2021 (~1 year)",
    references: true,
    tech: TECH_CONFIG.aduro,
    description: (
      <>
        <p className="cv-paragraph">
          Led a ~20-engineer team for Aduro, a US-based health and wellness
          platform located in Vietnam.
        </p>
        <ul className="cv-paragraph list-disc list-inside">
          <li>
            Rebuilt the code pipelines and developer experience across the
            landscape (Webpack, Azure).
          </li>
          <li>Led training and developer skill updates across the team.</li>
          <li>
            Reduced the percentage of developer hours spent on bugs vs. features
            from 60% down to 15%.
          </li>
          <li>
            Collaborated cross-functionally with engineering, product, and
            leadership teams to align technical vision with business goals.
          </li>
          <li>
            Managed hiring and interviewing for 5 new developers across a year.
          </li>
        </ul>
        <p className="cv-paragraph">
          This role reinforced my ability to lead an engineering team and manage
          the social and business side of tech leadership.
        </p>
      </>
    ),
  },
  {
    employer: "Netograph (MIT backed startup)",
    title: "Frontend Tech Lead",
    dates: "July 2018 - December 2019 (1 year)",
    references: true,
    tech: TECH_CONFIG.netograph,
    description: (
      <>
        <p className="cv-paragraph">
          Architected and developed a high-performance front-end application
          heavily reliant on D3.js designed to handle millions of data points.
        </p>
        <ul className="cv-paragraph list-disc list-inside">
          <li>
            Built and designed a component-driven front-end architecture using
            Vue.js, TypeScript, and Webpack.
          </li>
          <li>
            Designed and implemented highly interactive UI components, adhering
            to I18N and accessibility standards.
          </li>
          <li>
            Implemented a portable OSS Authorization library for Vue.js and
            Golang, including OAuth from major socials.
          </li>
          <li>
            Implemented a custom infinite scroll library in Vue, using Google
            Big Table resume tokens.
          </li>
          <li>Implemented some incredible D3.js visuals.</li>
        </ul>
        <p className="cv-paragraph">
          This experience strengthened my expertise in scalable front-end
          architecture, performance optimization, and engineering leadership.
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
          Fusion is a sports science company based in Brisbane, Australia,
          providing hardware products and a web app designed to give athletes
          and sports teams a competitive edge.
        </p>
        <p className="cv-paragraph">
          The Fusion Sport client list includes internationally recognized
          sports teams. You can check it out{" "}
          <a
            href="https://www.fusionsport.com/clients/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . Working directly with elite sports teams was an exciting experience.
        </p>
        <ul className="cv-paragraph list-disc list-inside">
          <li>
            Led the development of the Dashboard Builder project, enabling
            non-technical users to create dashboards without developer
            involvement. Identified key customer needs, prototyped the solution,
            and secured management approval for full implementation.
          </li>
          <li>
            Rebuilt frontend tooling, replacing Gulp and jQuery with a custom
            Webpack and Vue.js boilerplate, significantly improving developer
            efficiency and reducing lead time.
          </li>
        </ul>
        <p className="cv-paragraph">
          This role strengthened my ability to drive technical improvements,
          optimize developer workflows, and build scalable frontend systems.
        </p>
      </>
    ),
  },
];
