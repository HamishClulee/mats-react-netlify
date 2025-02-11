import { ReactNode } from "react";
import { SlideUp } from "./slide-up.section.tsx";
import { JobCard } from "../cards/job.card.tsx";
import { Divider } from "../layout/divider.component.tsx";
import { TECH_CONFIG } from "../../tech.config.ts";
import { TechIndicator } from "../util/tech-indicator.component.tsx";

const { dovetail, betfair, aduro, netograph, allow, fusion, contract } =
  TECH_CONFIG;

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
            {[
              { label: "ReactJs", years: "5+ years" },
              { label: "VueJs", years: "6+ years" },
              { label: "Javascript", years: "10+ years" },
              { label: "Java", years: "6+ years" },
              { label: "SASS/SCSS/CSS", years: "6+ years" },
              { label: "NodeJs", years: "8+ years" },
            ].map(({ label, years }) => (
              <p key={label} className="my-2 flex justify-between">
                {label} <span className="italic">{years}</span>
              </p>
            ))}
          </div>

          <div className="mx-0 md:mx-8 mt-4 mb-8 w-full md:w-96">
            {[
              { label: "Mentoring", years: "7+ years" },
              { label: "Coaching", years: "4+ years" },
              { label: "Team Leadership", years: "6+ years" },
              { label: "UI/UX Design", years: "6+ years" },
              { label: "Working Remote", years: "8+ years" },
              { label: "Linux", years: "10+ years" },
            ].map(({ label, years }) => (
              <p key={label} className="my-2 flex justify-between">
                {label} <span className="italic">{years}</span>
              </p>
            ))}
          </div>
        </div>
        <Divider />
      </SlideUp>

      <JobCard
        employer="Betfair Au"
        title="Engineering Consultant"
        dates="March 2021 - Current (~27 months)"
        wasRemote
        references
      >
        <TechIndicator tech={betfair} />
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
          By the end of the ~27 months, I'm happy to have claimed significant
          ownership over a transformed tech landscape and large changes in
          long-term strategy. I'm sure that when I'm next in Melbourne and we
          end up having a few beers, I'll get to hear about how the changes we
          made have grown into even larger increases in revenue and customer
          engagement.
        </p>
        <p className="cv-paragraph">Overall, an incredible experience.</p>
      </JobCard>

      <JobCard
        employer="Contractor"
        title="Lead Software Engineer"
        dates="June 2020 - March 2021"
        references
      >
        <TechIndicator tech={contract} />
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
      </JobCard>

      <JobCard
        employer="Dovetail Studios"
        title="Senior Javascript Developer"
        dates="January 2021 - June 2021 (6 month contract)"
        wasRemote
        references
      >
        <TechIndicator tech={dovetail} />
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
      </JobCard>

      <JobCard
        employer="AduroLabs Vietnam"
        title="Frontend Tech Lead"
        dates="January 2020 - January 2021 (1 year)"
        references
      >
        <TechIndicator tech={aduro} />
        <p className="cv-paragraph">
          AduroLabs is a Health and Wellness service provider.
        </p>
        <p className="cv-paragraph">
          I was primarily tasked with leadership and mentoring for the frontend
          teams. Daily responsibilities included code reviews, coaching, writing
          technical documentation, making architecture decisions and managing
          sprints and tickets.
        </p>
        <p className="cv-paragraph">
          Higher level responsibilities included interviewing potential hires,
          technical product management, building better agile processes and
          interfacing with other teams and departments within the company.
        </p>
      </JobCard>

      <JobCard
        employer="Netograph"
        title="Lead Frontend Developer"
        dates="July 2018 - January 2020 (1.5 years)"
        wasRemote
        references
      >
        <TechIndicator tech={netograph} />
        <p className="cv-paragraph">
          Netograph provides a web app and API. Their frontend is written in{" "}
          <em>VueJs</em>
          and Typescript, backed by a custom webpack configuration.
          Visualisations are written in d3.js. I designed the UI and website,
          and wrote the vast majority frontend code.
        </p>
        <p className="cv-paragraph">Note worthy achievements include:</p>

        <ul>
          <li>
            Site design; the CEO wanted a no nonsence UI, free of clutter and
            easy to understand. Due to the staggering amount of data handled by
            Netograph, this posed some fun challenges.
          </li>

          <li>
            The infinite scroll library which had to act in place of pagination
            due to how lists are displayed and indexed.
          </li>
          <li>
            A system of custom masonry cards designed to show the user a sample
            of the data associated with the first class object (IPs, domains,
            superdomains) viewing, remembering that each list could contain over
            a million items, and each first class object could contain up to 10
            lists.
          </li>
          <li>
            A search component to help users find needles in a gigantic
            haystack, in a manner that was quick and easy.
          </li>
        </ul>
        <p className="cv-paragraph">
          Overall, this was an awesome development experience, and an
          unforgettable opportunity.
        </p>
      </JobCard>

      <JobCard
        employer="Allow Design"
        title="Contract Frontend Developer"
        dates="Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)"
        wasRemote
      >
        <TechIndicator tech={allow} />
        <p className="cv-paragraph">
          Allow Design was a studio based in Dunedin, New Zealand. They had one
          primary client, a US healthcare giant. They would create functioning
          mini applications as development templates for devs that worked
          directly for healthcare firm.
        </p>
        <p className="cv-paragraph">
          I was employed on and off for a number of these prototypes, creating
          small, standalone web apps from a series of Photoshop files provided
          by an Allow designer.
        </p>
        <p className="cv-paragraph">
          I was also responsible for overhauling the frontend tooling and build
          system to help make other contract developers more productive. I
          created a<em>VueJs</em> and Webpack boilerplate to function as a base
          for new prototypes. It included a large number of UI components that
          conformed to the Allow Design styleguide. The boilerplate was
          successful in reducing the lag created between designers and
          developers which occurred when prototypes didn't match the style
          guide, and reduced lead time. It remained in usage until the company
          folded early in 2019.
        </p>
        <p className="cv-paragraph">
          Some fun challenges, especially building a component library from
          scratch.
        </p>
      </JobCard>

      <JobCard
        employer="Fusion Sport Inc."
        title="Software Developer"
        dates="August 2016 - August 2018 (2 years)"
        wasRemote
        references
      >
        <TechIndicator tech={fusion} />
        <p className="cv-paragraph">
          Fusion is a sports science company, based in Brisbane, Australia. They
          sell hardware products and provide a web app, all designed to provide
          athletes and sports teams with competitive advantages.
        </p>
        <p className="cv-paragraph">
          The Fusion Sport Client list is impressive, you can check it out
          <a href="https://www.fusionsport.com/clients/" target="_blank">
            here
          </a>
          , working directly for internationally recognisable sports teams was a
          real buzz.
        </p>
        <p className="cv-paragraph">
          Note worthy achievement: Being granted leadership of the Dashboard
          Builder project. After identifying the most commonly requested items
          in customer dashboards with the team, I prototyped an application that
          enabled creation of dashboards without developer involvement. It was
          approved for resourcing by management, and the Dashboard Builder was
          born. based on feedback from colleagues still working at Fusion it
          appears to remain a customer favorite. More details are available on
          the <a href="/work">projects page</a>.
        </p>
        <p className="cv-paragraph">
          Note worthy achievement: Rebuilding the tooling used by the Frontend
          team, replacing Gulp and JQuery with a custom Webpack and{" "}
          <em>VueJs</em> boilerplate. The new boilerplate reduced lead time by a
          significant amount, and is still in usage today.
        </p>
      </JobCard>

      <Divider />
    </div>
  );
};
