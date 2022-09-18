import type { NextPage } from "next";
import ExperienceDetail from "../components/experienceDetail";
import ProjectCard from "../components/projectCard";
import SkillLogo from "../components/skillLogo";

const Home: NextPage = () => {
  return (
    <div className="pt-24 pb-10 px-4 flex flex-col justify-center items-center">
      <div className="max-w-xs md:max-w-lg lg:max-w-3xl text-slate-600 font-ibm">
        <div id="section-description" className="tracking-widest">
          <h1 className="text-3xl lg:text-5xl">Asamaporn Bunmee</h1>
          <h2 className="text-md lg:text-2xl text-slate-400">{`<!-- Front-end developer -->`}</h2>
          <p className="mt-16 lg:mt-24 text-sm lg:text-base tracking-wider indent-16">
            HiHi, Welcome to My Portfolio! My name is Asamaporn Bunmee but you
            can call me Best. yep! Best is my nickname. I&apos;m a front-end
            developer...
          </p>
        </div>
        <div id="section-experience" className="mt-16 lg:mt-32">
          <h2 className="font-bold text-lg lg:text-2xl">Experience</h2>
          <div className="mt-6">
            <ExperienceDetail
              start
              companyName="Biggest Fan Productions"
              time="Jan 2022 - Now"
              role="Frontend developer"
              detail="Implemented the Front-end things of website related to live streaming biggestfan.live, landing page of cryptoknights.games and NFT Marketplace monet.market"
            />
            <ExperienceDetail
              end
              companyName="Smart Finder"
              time="Jun 2021 - Dec 2021"
              role="Intern Frontend developer"
              detail="Implemented hotel management website which consists of the room management page and kitchen ingredients management page with Angular"
            />
          </div>
        </div>
        <div id="section-project" className="mt-36">
          <h2 className="font-bold text-2xl">Projects</h2>
          <div className="flex flex-col justify-center items-center">
            <ProjectCard
              url="https://cryptoknights.games/"
              name="cryptoknights.games"
              img="/images/ck-img.jpg"
              detail="Landing page website of Cryptoknights game, Real-Time Fighting Game and Digital Collectible Card Game."
              tools={["Next.js", "Typescript", "Tailwindcss"]}
            />
            <ProjectCard
              url="https://monet.market/"
              name="monet.market"
              img="/images/monet-img.jpg"
              detail="NFT Marketplace, which features NFT auctions that never existed before, such as Multi Auctions, Dutch Auctions, and Simple Fixed Price Sales."
              tools={[
                "Elm",
                "React",
                "Typescript",
                "Web3.js",
                "Tailwindcss",
                "XState",
              ]}
            />
          </div>
        </div>
        <div id="section-skill" className="mt-28">
          <h2 className="font-bold text-2xl">All my skills</h2>
          <div className="mt-4 h-28 flex justify-center items-center">
            <div className="flex gap-8 justify-around">
              <SkillLogo
                name="javascript"
                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              />
              <SkillLogo
                name="typescript"
                url="https://www.typescriptlang.org/"
              />
              <SkillLogo name="elm" url="https://guide.elm-lang.org/" />
              <SkillLogo name="angular" url="https://angular.io/" />
              <SkillLogo name="astro" url="https://astro.build/" />
              <SkillLogo name="react" url="https://reactjs.org/" />
              <SkillLogo name="next" url="https://nextjs.org/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
