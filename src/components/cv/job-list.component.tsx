import { JOBS } from "../../cv.config.tsx";
import { JobCard } from "../cards/job.card.tsx";

export const JobList = () => {
  return (
    <div>
      {JOBS.map(
        ({
          employer,
          title,
          dates,
          wasRemote,
          references,
          description,
          tech,
        }) => (
          <JobCard
            key={employer}
            employer={employer}
            title={title}
            dates={dates}
            wasRemote={wasRemote}
            references={references}
            tech={tech}
          >
            {description}
          </JobCard>
        )
      )}
    </div>
  );
};
