import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarData = [
    {
        title: "Home",
        path: '/User/Home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    

    {
        title: "Transaction",
        path: '/User/Transaction',
        icon: <FaIcons.FaArrowCircleRight/>,
        cName: 'nav-text'
    },

    {
        title: "Transaction History",
        path: '/User/display',
        icon: <FaIcons.FaArrowUp/>,
        cName: 'nav-text'
    },


    {
        title: "Open Account",
        path: '/User/New-Account',
        icon: <i class="fa-solid fa-money-bill-transfer"></i>,
        cName: 'nav-text'
    },


    {
        title: "Open Investment Account",
        path: '/User/InAccount',
        icon: <i class="fa-solid fa-money-bill-transfer"></i>,
        cName: 'nav-text'
    },


    {
        title: "Contact US",
        path: '/User/Contact',
        icon: <FaIcons.FaAddressBook/>,
        cName: 'nav-text'
    },

    {
        title: "Signup/Login",
        path: '/User/Auth',
        icon: <FaIcons.FaLockOpen/>,
        cName: 'nav-text'
    },
]