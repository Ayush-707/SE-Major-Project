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
        icon: <i class="fa-solid fa-circle-dollar-to-slot"></i>,
        cName: 'nav-text'
    },

    {
        title: "Deposit History",
        path: '/Admin/History',
        icon: <FaIcons.FaArrowUp/>,
        cName: 'nav-text'
    },

    {
        title: "Withdraw Money",
        path: '/Admin/Withdraw',
        icon: <i class="fa-solid fa-circle-dollar-to-slot"></i>,
        cName: 'nav-text'
    },

    {
        title: "Withdraw History",
        path: '/Admin/wHistory',
        icon: <FaIcons.FaArrowDown/>,
        cName: 'nav-text'
    },

    {
        title: "Account Requests",
        path: '/Admin/PendingReq',
        icon: <i class="fa-solid fa-circle-pause"></i>,
        cName: 'nav-text'
    },

    {
        title: "Investment Accounts",
        path: '/Admin/InvestDetail',
        icon: <i class="fa-solid fa-circle-pause"></i>,
        cName: 'nav-text'
    },

    {
        title: "Login",
        path: '/Admin/Auth',
        icon: <FaIcons.FaLockOpen/>,
        cName: 'nav-text'
    },
]