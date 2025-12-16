import React from 'react'
import Buttons from '../Component/Buttons'
import '../Styles/home.css'

import { currentEmail, currentGithubUrl, currentLinkedinUrl, currentMobileNo } from '../Shared/Constant'


function ContactOptions() {
    return (
        <div className="flex flex-wrap justify-center gap-3 mt-2">
        <Buttons
            altText="Email"
            onClick={() => window.open(`mailto:${currentEmail}`, '_blank')}
            extraClass="logos-mail"
            width="50px"
            height="40px"
            bgColor="bg-terracotta dark:bg-sea"
            textColor="text-white"
            hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
        <Buttons
            altText="LinkedIn"
            onClick={() => window.open(currentLinkedinUrl, '_blank')}
            extraClass="logos-linkedin"
            width="50px"
            height="40px"
            bgColor="bg-terracotta dark:bg-sea"
            textColor="text-white"
            hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
        <Buttons
            altText="Call"
            onClick={() => window.open(`tel:${currentMobileNo}`, '_self')}
            extraClass="logos-call" 
            width="50px"
            height="40px"
            bgColor="bg-terracotta dark:bg-sea"
            textColor="text-white"
            hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
        <Buttons
            altText="GitHub"
            onClick={() => window.open(currentGithubUrl, '_blank')}
            extraClass="logos-github"
            width="50px"
            height="40px"
            bgColor="bg-terracotta dark:bg-sea"
            textColor="text-white"
            hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
        <Buttons
            altText="WhatsApp"
            onClick={() => window.open(`https://api.whatsapp.com/send?phone=${currentMobileNo}`, '_blank')}
            extraClass="logos-wts"
            width="50px"
            height="40px"
            bgColor="bg-terracotta dark:bg-sea"
            textColor="text-white"
            hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
    </div>
);
}

export default ContactOptions