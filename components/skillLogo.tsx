export default function SkillLogo(props: { name: string; url: string }) {
  return (
    <div className="w-12 h-12">
      <div className="w-10 h-10 hover:w-12 hover:h-12 grayscale hover:grayscale-0 cursor-pointer duration-500 ease-out">
        <a
          href={props.url}
          title={props.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`/images/logo-${props.name}.svg`} alt={props.name} />
        </a>
      </div>
    </div>
  );
}
