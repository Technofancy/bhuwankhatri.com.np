// import React from 'react'
import { LiaFacebookF, LiaYoutube } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";

const IconLinks = () => {

    const icons = [
        {
            mediaIcon: <CgMail className="text-red-500" title="gmail"/>,
            url: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsnSDLHHGRZDJlNWqSMZvgWdJvMWxCQDLNjgdqJBXkwSvsZBRrvkJhxMXCmvJKNHdhgGv"
        },
        {
            mediaIcon: <ImLinkedin2 className="text-blue-700" title="linkedin" />,
            url: "https://www.linkedin.com/in/bhuwan-khatri-012b87257/"
        },
        {
            mediaIcon: <RiTwitterXLine className="text-black" title="X" />,
            url: "https://x.com/KhatriVhoo", color: "text-black"
        },
        {
            mediaIcon:<FaGithubSquare className="text-black" title="github" />,
            url: "https://github.com/Technofancy/",
        },
        {
            mediaIcon: <LiaFacebookF className="text-blue-900" title="facebook" />,
            url: "https://www.facebook.com/profile.php?id=100006177108591"
        },
        {
            mediaIcon: <LiaYoutube className="text-red-500" title="youtube "/>,
            url: "https://www.youtube.com/channel/UCW6D58Oo_lBwKRqHyuz3woQ"
        },
        
    ];

    return (
        <div className="flex justify-center gap-10 sm:gap-16 lg:gap-20 xl:gap-32 p-2">
            {
                icons.map((icon, index) => {
                    return (
                        <a key={index} 
                        href={icon.url} 
                        target="_blank"
                        rel="noopener, noreferrer"
                        className="hover:bg-black rounded p-1 text-xl sm:text-2xl lg:3xl 3xl:text-5xl"
                        >
                            {icon.mediaIcon}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default IconLinks;