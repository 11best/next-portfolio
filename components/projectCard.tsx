import ToolBadge from "./toolBadge";

export default function ProjectCard(props: {
  url: string;
  name: string;
  img: string;
  detail: string;
  tools: Array<string>;
}) {
  return (
    <div className="max-w-xs md:max-w-lg lg:max-w-2xl my-6 md:my-12">
      <img
        className="rounded-2xl border-solid border-4 border-orange-50 mb-2"
        src={props.img}
        alt={props.name}
      />
      <div className="group w-fit">
        <a
          href={props.url}
          title={props.name}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-orange-400 font-semibold text-sm lg:text-lg group-hover:text-xl duration-500"
        >
          {props.name}
          <div className="w-[40px] group-hover:w-full h-[2px] bg-orange-400 duration-700"></div>
        </a>
      </div>
      <p className="mt-2 text-sm lg:text-base">{props.detail}</p>
      <div className="flex flex-wrap">
        {props.tools.map((tool) => (
          <ToolBadge key={tool} name={tool} />
        ))}
      </div>
    </div>
  );
}
