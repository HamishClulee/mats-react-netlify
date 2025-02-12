import { Link } from "react-router-dom";

type Props = {
  linkTo: { urlName: string };
  postTitle: string;
  date: string;
  brief: string;
};

export const BlogLink = ({ linkTo, postTitle, date, brief }: Props) => {
  return (
    <section className="mb-12 flex flex-col justify-start items-start">
      <Link
        to={`/blog/${linkTo.urlName}`}
        className="w-full text-2xl text-secondary"
      >
        {postTitle}
      </Link>
      <div className="date text-gray-500">{date}</div>
      <p className="short-des">{brief}</p>
    </section>
  );
};
