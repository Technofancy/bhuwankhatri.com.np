// import React from 'react'
import profilePic from "../assets/pp/Bhuwan_Khatri_Profile_Picture_for_MobileView.png"
import SocialMedia from "../components/SocialMedia";

const FaceView = () => {
    return (
        <>
            <div className='relative rounded-lg mx-3'>

                <div className="flex justify-between">

                    <h1 className="ml-0 text-white font-bold text-left text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-wide">
                        BHUWAN
                        <span className="mx-0.5 text-slate-900">
                            {" "} KHATRI
                        </span>
                    </h1>

                    <div className="">
                        <SocialMedia />
                    </div>
                </div>

                <div className="bg-slate-900 w-[300px] h-[450px] rounded-full mx-auto my-10 overflow-hidden">
                    <img src={profilePic} alt="Profile picture" className="block w-full h-full" />
                </div>
            </div>

        </>
    )
};

export default FaceView;