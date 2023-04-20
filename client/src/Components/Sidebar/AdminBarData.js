import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const AdminOptions = [
    {
        title: "Home",
        path: '/Admin/Home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: "Deposit Money",
        path: '/Admin/Deposit',
        icon: <FaIcons.FaArrowUp/>,
        cName: 'nav-text'
    },

    {
        title: "Withdraw Money",
        path: '/Admin/Withdraw',
        icon: <FaIcons.FaArrowDown/>,
        cName: 'nav-text'
    },

    {
        title: "Login",
        path: '/Admin/Auth',
        icon: <FaIcons.FaLockOpen/>,
        cName: 'nav-text'
    },
]