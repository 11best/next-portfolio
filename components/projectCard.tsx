import ToolBadge from "./toolBadge";

export default function ProjectCard(props: { tools: Array<string> }) {
  return (
    <div className="w-[600px] mt-8">
      <div className="mb-2">
        <img
          className="rounded-2xl border-solid border-4 border-orange-200"
          src="./images/ck-img.jpg"
          alt="cryptoknight landing page"
        />
      </div>
      <div className="group w-fit">
        <a
          href="https://cryptoknights.games/"
          title="cryptoknights games landing page"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-orange-400 font-semibold text-lg group-hover:text-xl duration-500"
        >
          cryptoknights.games
          <div className="w-0 group-hover:w-full h-[2px] bg-orange-400 duration-700"></div>
        </a>
      </div>
      <p className="mt-2">
        Landing page website of Cryptoknights game, Real-Time Fighting Game and
        Digital Collectible Card Game.
      </p>
      <div className="mt-2 flex">
        {props.tools.map((tool) => (
          <ToolBadge name={tool} />
        ))}
      </div>
    </div>
  );
}
