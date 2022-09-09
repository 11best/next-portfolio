import IconPath from "./iconPath";

export default function SocialMediaButton(props: {
  social: string;
  url: string;
}) {
  return (
    <div className="w-[40px] h-[40px] flex justify-center items-center">
      <a
        href={props.url}
        title={props.social}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <IconPath social={props.social} />
      </a>
    </div>
  );
}
