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
        title: "Deposit Money",
        path: '/User/Deposit',
        icon: <FaIcons.FaArrowUp/>,
        cName: 'nav-text'
    },

    {
        title: "Withdraw Money",
        path: '/User/Withdraw',
        icon: <FaIcons.FaArrowDown/>,
        cName: 'nav-text'
    },

    {
        title: "Transact Money",
        path: '/User/Transaction',
        icon: <FaIcons.FaArrowCircleRight/>,
        cName: 'nav-text'
    },

    {
        title: "Open Account",
        path: '/User/New-Account',
        icon: <FaIcons.FaEnvelopeOpenText/>,
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
        path: '/',
        icon: <FaIcons.FaLockOpen/>,
        cName: 'nav-text'
    },
]