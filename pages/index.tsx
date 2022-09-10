import type { NextPage } from "next";
import ExperienceDetail from "../components/experienceDetail";

const Home: NextPage = () => {
  return (
    <div className="pt-24 pb-10 flex flex-col justify-center items-center">
      <div className="max-w-3xl text-slate-600 font-ibm">
        <div id="section-description" className="tracking-widest">
          <h1 className="text-5xl">Asamaporn Bunmee</h1>
          <h2 className="text-2xl text-slate-400">{`<!-- Front-end developer -->`}</h2>
          <p className="mt-20 tracking-wider indent-16">
            HiHi, my name is Charles Bruyerre and I use Sharlee as my nickname
            across social medias. I’m a graphic designer, UX/UI designer &
            front-end web developer from France. I’m also passionate about pop
            music and make portraits and universes around what I listen to and
            I’m always curious to learn more when it comes to new technologies
            and creative coding.
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
              detail="implement ui implement ui implement ui implement ui implement ui implement ui implement ui implement ui implement ui implement ui implement ui implement ui "
            />
            <ExperienceDetail
              end
              companyName="Smart Finder"
              time="Jun 2021 - Dec 2021"
              role="Intern Frontend developer"
              detail="Implementing hotel management website which consists of the room management page and kitchen ingredients management page with Angular"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
