import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components/sections/footer.section.tsx";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main
        className="w-full min-h-screen flex-col justify-end items-end"
        style={{ background: "#f0db4f" }}
      >
        <div className="absolute right-10 -bottom-30 flex items-end">
          <h1 className="text-[#3c3a3a] josefin-sans">HC</h1>
        </div>
      </main>
      <div className="w-full flex flex-row items-center justify-center space-x-8 my-32">
        <div className="space-y-6 text-lg ml-12 mr-6">
          <p>
            I'm the type of engineer you love. I ship a lot of code, I do it
            with a smile, and I communicate well.
          </p>
          <p>
            I've been doing this for around 10 years, and I still love getting
            up each day and being involved in the process of building software.
          </p>
          <p>
            If you need me to lead a team, I'll lead a team. If you need me to
            help a junior, I'll take them under my wing and make sure they
            progress at a good pace and have a great time doing it. If you need
            me to design or architect a project, I'll do it, and you can rest
            assured that the results will be measured, reasonable, and within
            any constraints you defined at the outset.
          </p>
          <p>
            If things get busy, I crunch. If things are quiet, I fix up the code
            base.
          </p>
          <p>Happy to provide examples and references to back all this up!</p>
          <p>
            I think the best next step is for us to have a chat and work out how
            we can build something together{" "}
            <span className="text-blue-600">hamish.clulee@gmail.com</span>
          </p>
          <p>
            <strong>Quick piece of housekeeping:</strong> I'm a New Zealand
            citizen who has worked remotely (mostly in Asia, but did a year or
            so in Europe as well) for NZ, US, and Australian companies for the
            last 8 years. I'm in a position where I can move back to Australia
            or NZ if I find the right gig, or you can feel confident employing
            me while overseas, because the experience speaks for itself.
          </p>
          <p>Looking forward to hearing from you!</p>
        </div>
        <h3 className="cursor-pointer text-4xl font-bold underline">
          <Link to={"/blog"}>Blog</Link>
        </h3>
        <h3 className="cursor-pointer text-4xl font-bold underline mr-6">
          <Link to={"/cv"}>CV</Link>
        </h3>
      </div>
      <Footer />
    </>
  );
};
