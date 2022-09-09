import IconPath from "./iconPath";

export default function SocialMediaButton(props: {
  social: string;
  url: string;
}) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <IconPath social={props.social} />
    </a>
  );
}
