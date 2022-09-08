import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SocialMediaButton from "../components/socialmediaButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="pt-24 pb-10 flex flex-col justify-center items-center">
        <div className="max-w-3xl text-slate-600">
          <div className="font-ibm tracking-widest">
            <h1 className="text-5xl">Asamaporn Bunmee</h1>
            <h2 className="text-2xl text-slate-400">// Front-end developer</h2>
            <p className="mt-20 tracking-wider">
              I'm a fast learner!!I'm a fast learner!!I'm a fast learner!!I'm a
              fast learner!!I'm a fast learner!!I'm a fast learner!!I'm a fast
              learner!!I'm a fast learner!!I'm a fast learner!!I'm a fast
              learner!!I'm a fast learner!!I'm a fast learner!!I'm a fast
              learner!!I'm a fast learner!!I'm a fast learner!!I'm a fast
            </p>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Home;
