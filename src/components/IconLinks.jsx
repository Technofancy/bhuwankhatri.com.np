// import React from 'react'
import { LiaFacebookF, LiaYoutube } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";


const IconLinks = () => {

    const icons = [
        {
            title: <CgMail className="iconStyle text-red-500" />,
            url: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsnSDLHHGRZDJlNWqSMZvgWdJvMWxCQDLNjgdqJBXkwSvsZBRrvkJhxMXCmvJKNHdhgGv"
        },
        {
            title: <ImLinkedin2 className="iconStyle text-blue-700" />,
            url: "https://www.linkedin.com/in/bhuwan-khatri-012b87257/"
        },
        {
            title: <RiTwitterXLine className="iconStyle text-black" />,
            url: "https://x.com/KhatriVhoo", color: "text-black"
        },
        {
            title: <LiaFacebookF className="iconStyle text-blue-700" />,
            url: "https://www.facebook.com/profile.php?id=100006177108591"
        },
        {
            title: <LiaYoutube className="iconStyle text-red-500" />,
            url: "https://www.youtube.com/channel/UCW6D58Oo_lBwKRqHyuz3woQ"
        },
    ];

    return (
        <div className="iconStyle flex gap-10 justify-center">
            {
                icons.map((icon, index) => {
                    return (
                        <a key={index} href={icon.url} target="_blank" rel="noopener, noreferrer">
                            {icon.title}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default IconLinks;