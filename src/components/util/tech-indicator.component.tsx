type Props = {
  tech: { name: string; value: number }[];
};

export const TechIndicator = ({ tech }: Props) => {
  const colors = ["#fbc02d", "#00bfa5", "#ff5722", "#03A9F4", "#545454"];

  return (
    <div className="mt-4 mb-4 flex flex-col md:flex-row w-full">
      {tech.map(({ name, value }, index) => (
        <div
          key={index}
          className="flex flex-row mr-0 md:mr-6 my-2 md:my-0 items-center"
        >
          <div
            style={{ backgroundColor: colors[index] }}
            className="w-4 h-4 rounded-full mr-2"
          />
          <span className="text-sm">
            {name} {value}%
          </span>
        </div>
      ))}
    </div>
  );
};
