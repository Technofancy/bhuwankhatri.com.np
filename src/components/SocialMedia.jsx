// import React from 'react'
import { LiaGithubSquare, LiaFacebookF, LiaYoutube   } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";




const SocialMedia = () => {

    const handleClick = () => {
        const githubURL = "https://github.com/Technofancy";

        window.open(githubURL, "_blank", 'noopener,noreferrer')
    }

    return (
        <>
            <div className="grid gap-20 justify-end mt-[-567px] my-3">

                    <LiaGithubSquare onClick={handleClick} title="Technofancy" className="w-[60px] h-[60px] hover:cursor-pointer text-white" />

                <div className="flex flex-col gap-10">
                    <CgMail className=" text-red-500" />
                    <ImLinkedin2 className=" text-blue-700" />
                    <RiTwitterXLine className=" text-black" />
                    <LiaFacebookF className=" text-blue-700" />
                    <LiaYoutube className=" text-red-500" />

                </div>

            </div>
        </>
    )
}

export default SocialMedia;