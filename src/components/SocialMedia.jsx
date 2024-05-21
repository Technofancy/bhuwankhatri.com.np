// import React from 'react'
import { LiaGithubSquare } from "react-icons/lia";


const SocialMedia = () => {

    const handleClick = () => {
        const githubURL = "https://github.com/Technofancy";

        window.open(githubURL, "_blank", 'noopener,noreferrer')
    }

    return (
        <>
            <button onClick={handleClick} title="Technofancy" className="w-[63px] h-[63px] hover:cursor-pointer">
                <LiaGithubSquare className="w-full h-full text-white"/>
            </button>
            <div className="flex justify-around">

            </div>
        </>
    )
}

export default SocialMedia;