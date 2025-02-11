import { LinkedInIcon } from "../svgs/linkedin.icon.tsx";
import { GithubIcon } from "../svgs/github.icon.tsx";

export const Footer = () => {
  return (
    <section className="bg-[#3c3a3a] h-[300px] flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center space-x-4">
        <button
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/hamish-clulee/", "_blank")
          }
        >
          <LinkedInIcon />
        </button>
        <button
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/HamishClulee", "_blank")
          }
        >
          <GithubIcon />
        </button>
      </div>
    </section>
  );
};
