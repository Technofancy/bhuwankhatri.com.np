// import React from 'react'
import { Link } from "react-router-dom";
import bhuwanImage from "../../assets/profile_pics/Bhuwan_Khatri_Profile_Picture_for_MobileView.png";

const Hero = () => {
  return (
    <div className="w-full h-[93vh] bg-slate-300 flex justify-center items-center">
      <div className="flex justify-center items-center">
        {/* Mohanmitra */}
        <Link to={"/mohanmitra"}>
          <div className="w-[40vw] sm:w-[30vw] lg:w-[20vw] h-[50vh] bg-slate-900 hover:bg-slate-300 rounded-l-full -mr-16 border-y-4 border-slate-500 flex items-center">

            <h2 className="text-xs lg:text-lg lg:px-1 text-slate-500 hover:text-slate-900 text-center">
              <strong>मोहनमित्र</strong> <br /> <hr />
              काविता आदि रचना
            </h2>

          </div>
        </Link>

        {/* Bhuwan */}
        <Link to={"/bhuwan"} className="z-10">

          <div className="relative w-[50vw] sm:w-[55vw] lg:w-[30vw] h-[77vh] bg-slate-900 hover:bg-slate-300 rounded-full border-x-4 border-slate-500 overflow-hidden flex flex-col justify-center lg:gap-4">

            <div className="flex flex-col items-center lg:absolute lg:top-2 self-center">

              <h1 className="py-2 lg:text-lg text-slate-500 hover:text-slate-900 text-center">
                <strong>भुवन खत्री</strong> <br />
                Bhuwan Khatri
              </h1>

              <hr />

              <h2 className="py-2 text-xs lg:text-lg text-slate-500 hover:text-slate-900 text-center">
                <strong>स्व-पत्र, सर्वकार्य संग्रह</strong> | Self-folio, Portfolio
              </h2>
            </div>

            <img
              src={bhuwanImage}
              alt="bhuwan"
              className="h-full w-fit lg:h-2/3 lg:w-fit lg:absolute bottom-0 self-center"
            />

          </div>
        </Link>

        {/* Technofancy */}
        <Link to={"/technofancy"}>
          <div className="w-[40vw] sm:w-[30vw] lg:w-[20vw] h-[50vh] bg-slate-900 hover:bg-slate-300 rounded-r-full -ml-16 border-y-4 border-slate-500 flex justify-end items-center">

            <h2 className="text-xs lg:text-lg lg:px-1 text-slate-500 hover:text-slate-900 text-center">
              <strong>Technofancy</strong> <br /> <hr />
              Soft Tech & Tools
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
