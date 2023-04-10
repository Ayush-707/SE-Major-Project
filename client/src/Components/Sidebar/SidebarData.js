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
        path: '/User/Page-1',
        icon: <FaIcons.FaArrowUp/>,
        cName: 'nav-text'
    },

    {
        title: "Withdraw Money",
        path: '/User/Page-2',
        icon: <FaIcons.FaArrowDown/>,
        cName: 'nav-text'
    },

    {
        title: "Transact Money",
        path: '/User/Page-3',
        icon: <FaIcons.FaArrowCircleRight/>,
        cName: 'nav-text'
    },

    {
        title: "Page-4",
        path: '/User/Page-4',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },

    {
        title: "Search",
        path: '/User/Page-5',
        icon: <FaIcons.FaSearch/>,
        cName: 'nav-text'
    },
    {
        title: "Contact US",
        path: '/User/Page-6',
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