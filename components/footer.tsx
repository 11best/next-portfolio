import SocialMediaButton from "./socialmediaButton";

export default function Footer() {
  return (
    <footer className="font-ibm flex flex-col justify-center items-center mt-32 bg-white">
      {/* <div className="w-[500px] h-[2px] bg-orange-100"></div> */}
      <p className="text-slate-400 mt-4 text-sm md:text-base">
        asama_b@outlook.com
      </p>
      <div className="mt-4 flex gap-4">
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
      <p className="text-sm text-slate-300 mt-4">© 2022 Asamaporn Bunmee</p>
    </footer>
  );
}
