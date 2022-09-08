import SocialMediaButton from "./socialmediaButton";

export default function Footer() {
  return (
    <footer className="font-ibm flex flex-col justify-center items-center">
      <p className="text-slate-600">asama_b@outlook.com</p>
      <div className="mt-4 flex justify-center gap-5">
        <SocialMediaButton
          social="github"
          url="https://www.facebook.com/toukishiro/"
        />
        <SocialMediaButton
          social="linkedin"
          url="https://www.facebook.com/toukishiro/"
        />
        <SocialMediaButton
          social="facebook"
          url="https://www.facebook.com/toukishiro/"
        />
        <SocialMediaButton
          social="instagram"
          url="https://www.facebook.com/toukishiro/"
        />
        <SocialMediaButton
          social="discord"
          url="https://www.facebook.com/toukishiro/"
        />
      </div>
      <p className="text-sm text-slate-400 mt-4">© 2022 Asamaporn Bunmee</p>
    </footer>
  );
}
