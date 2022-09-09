import SocialMediaButton from "./socialmediaButton";

export default function Footer() {
  return (
    <footer className="font-ibm flex flex-col justify-center items-center">
      <p className="text-slate-600">asama_b@outlook.com</p>
      <div className="mt-4 flex justify-center items-center gap-4">
        <SocialMediaButton social="github" url="https://github.com/11best" />
        <SocialMediaButton
          social="linkedin"
          url="https://www.linkedin.com/in/asamaporn-bunmee-7b27931b1/"
        />
        <SocialMediaButton
          social="facebook"
          url="https://www.facebook.com/toukishiro/"
        />
        <SocialMediaButton
          social="instagram"
          url="https://www.instagram.com/touki__/"
        />
      </div>
      <p className="text-sm text-slate-400 mt-4">© 2022 Asamaporn Bunmee</p>
    </footer>
  );
}
