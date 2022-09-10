import type { NextPage } from "next";
import ExperienceDetail from "../components/experienceDetail";
import ProjectCard from "../components/projectCard";

const Home: NextPage = () => {
  return (
    <div className="pt-24 pb-10 flex flex-col justify-center items-center">
      <div className="max-w-3xl text-slate-600 font-ibm">
        <div id="section-description" className="tracking-widest">
          <h1 className="text-5xl">Asamaporn Bunmee</h1>
          <h2 className="text-2xl text-slate-400">{`<!-- Front-end developer -->`}</h2>
          <p className="mt-20 tracking-wider indent-16">
            HiHi, Welcome to My Portfolio! My name is Asamaporn Bunmee but you
            can call me Best. yep! Best is my nickname. I&apos;m a front-end
            developer from Samut Prakan, Thailand. I love to learn about new
            technologies. I&apos;m the type that learns on my own by doing it.
          </p>
        </div>
        <div id="section-experience" className="mt-20">
          <h2 className="font-bold text-2xl">Experience</h2>
          <div>
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
        <div id="section-project" className="mt-20">
          <h2 className="font-bold text-2xl">Projects</h2>
          <div className="flex flex-col justify-center items-center">
            <ProjectCard
              url="https://cryptoknights.games/"
              name="cryptoknights.games"
              img="./images/ck-img.jpg"
              detail="Landing page website of Cryptoknights game, Real-Time Fighting Game and Digital Collectible Card Game."
              tools={["Next.js", "Typescript", "Tailwindcss"]}
            />
            <ProjectCard
              url="https://monet.market/"
              name="monet.market"
              img="./images/monet-img.jpg"
              detail="NFT Marketplace, which features NFT auctions that never existed before, such as Multi Auctions, Dutch Auctions, and Simple Fixed Price Sales."
              tools={["Elm", "React", "Typescript", "Tailwindcss", "XState"]}
            />
          </div>
        </div>
        <div id="section-skill" className="mt-16">
          <h2 className="font-bold text-2xl">All my skills</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
