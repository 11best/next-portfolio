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
      <span>
        test
        {/* <img src={`./images/icon_${props.social}.svg`} alt="" /> */}
      </span>
    </a>
  );
}
