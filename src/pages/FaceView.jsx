// import React from 'react'
import profilePic from "../assets/pp/Bhuwan_Khatri_Profile_Picture_for_MobileView.png"

const FaceView = () => {
    return (
        <div className='relative rounded-lg m-3 mt-1'>
            <h1 className="ml-0 text-white font-bold text-left text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-wide">
                BHUWAN
                <span className="inline text-slate-900">
                   {" "} KHATRI
                </span>
            </h1>

            <div className="bg-slate-900 w-[300px] h-[450px] rounded-full mx-auto my-10 overflow-hidden">
                <img src={profilePic} alt="Profile picture" className="block w-full h-full" />
            </div>
        </div>
    )
};

export default FaceView;