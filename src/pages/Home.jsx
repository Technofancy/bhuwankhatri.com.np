// import React from 'react'
import profilePic from "../assets/pp/Bhuwan_Khatri_Profile_Picture_for_MobileView.png"

import { LiaGithubSquare } from "react-icons/lia";
import IconLinks from "../components/IconLinks";

const Home = () => {

    const handleClick = () => {
        const githubURL = "https://github.com/Technofancy";

        window.open(githubURL, "_blank", 'noopener,noreferrer')
    }

    return (
        <>
            <div className='relative rounded mx-3'>
                {/* Namebar */}
                <div className="flex sm:items-start justify-between 2xl:justify-center 2xl:gap-20 2xl:items-center">

                    <h1 className="text-white font-bold text-left text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-wide">
                        BHUWAN
                        <span className="mx-0.5 text-slate-900">
                            {" "} KHATRI
                        </span>
                    </h1>

                    <LiaGithubSquare onClick={handleClick} title="Technofancy" className="iconStyle text-white" />

                </div>

                {/* Profile picture */}
                <div className="bg-slate-900 w-[300px] h-[450px] rounded-full mx-auto my-5 overflow-hidden">
                    {/* <img src={profilePic} alt="Profile picture" className="block w-full h-full" /> */}
                </div>
            </div>

            {/* Social media icons */}
            <div className="flex gap-10 mb-10 justify-center">
                <IconLinks />
            </div>

        </>
    )
};

export default Home;