// import React from 'react'
import profilePic from "../assets/pp/Bhuwan_Khatri_Profile_Picture_for_MobileView.png";
import SkillsAndProjects from "./SkillsAndProjects";
import { LiaGithubSquare } from "react-icons/lia";
import IconLinks from "../components/IconLinks";

const Home = () => {
  const handleClick = () => {
    const githubURL = "https://github.com/Technofancy";
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="flex relative">
        <div className="faceViewSideBar sm:ml-[10vw] mr-3"></div>

        <div className="w-full bg-slate-700 my-[7.5vh] md:my-[11vh] lg:my-[15vh] xl:my-[5vh] xl:mt-[9vh]">
          <div className="relative rounded mx-3">
            {/* Namebar */}
            <div className="flex sm:items-start justify-between 2xl:justify-center 2xl:gap-20 2xl:items-center">
              <h1 className="text-white font-bold text-left text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-wide hover:bg-slate-900">
                BHUWAN
                <span className="mx-0.5 text-slate-900 hover:bg-white"> KHATRI</span>
              </h1>
              <LiaGithubSquare
                onClick={handleClick}
                title="Technofancy"
                className="iconStyle text-white hover:bg-slate-900"
              />
            </div>

            {/* Profile picture */}
            <div className="bg-slate-900 w-[225px] h-[350px] rounded-full mx-auto my-5 overflow-hidden">
              {/* <img
                src={profilePic}
                alt="Profile picture"
                className="block w-full h-full"
              /> */}
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-10 mb-10 justify-center">
            <IconLinks />
          </div>
        </div>

        <div className="faceViewSideBar sm:mr-[10vw] ml-3"></div>
      </div>

      <SkillsAndProjects />
    </>
  );
};

export default Home;
