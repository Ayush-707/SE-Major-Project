import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
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
        title: "Page-5",
        path: '/User/Page-5',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },
]