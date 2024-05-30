import Home from "./pages/Home";
import SkillsAndProjects from "./pages/SkillsAndProjects";

function App() {
  return (
    <>
      <div className="bg-slate-900">

        {/* First view section */}
        <div className="flex relative">
          <div className="faceViewSideBar sm:ml-[10vw] mr-3"></div>

          <div className="w-full h-fit bg-slate-700 my-[7.5vh] md:my-[11vh] lg:my-[15vh] xl:my-[5vh] xl:mt-[9vh]">
            <Home />
          </div>

          <div className="faceViewSideBar sm:mr-[10vw] ml-3"></div>
        </div>

        {/* Skill and project section */}
        <div className="bg-slate-900
        ">
          <SkillsAndProjects />
        </div>

      </div>

    </>
  );
}

export default App;