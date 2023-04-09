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
        title: "Page-1",
        path: '/User/Page-1',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },

    {
        title: "Page-2",
        path: '/User/Page-2',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },

    {
        title: "Page-3",
        path: '/User/Page-3',
        icon: <IoIcons.IoMdPeople/>,
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