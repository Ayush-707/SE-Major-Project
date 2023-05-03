import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link, useLocation} from 'react-router-dom';
import {SidebarData} from './UserBarData';
import {AdminOptions} from './AdminBarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  let isClickable;

  if (location.pathname === '/' || location.pathname === '/User/Auth' || location.pathname === '/Admin/Auth') {
    isClickable = false;
  }

  else isClickable = true;

  let navData = SidebarData;
  if (location.pathname.startsWith('/Admin')) {
    navData = AdminOptions;
  }

  let text;
      switch (location.pathname) {
        case '/Admin/PendingReq':
          text = 'New Account Requests';
          break;
        case '/Admin/Transactions':
          text = 'Transaction Management';
          break;
        case '/Admin/Users':
          text = 'User Management';
          break;
        case '/User/Contact':
          text = 'Contact US';
          break;
        case '/User/New-Account':
          text = 'Open New Account';
          break;
        case '/User/Investment':
          text = 'Invest';
          break;
        
        
        default:
          text = 'Bank Management App';
      }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
          <Link to="#" className={`menu-bars ${isClickable ? '' : 'disabled'}`}>
            <FaIcons.FaBars onClick={isClickable ? showSidebar : null} />
          </Link>
          let text;
          <Link to="/" className="mx-auto text-white font-semibold text-3xl tracking-wide text-center hover:underline">
            {text}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose lineClose />
              </Link>
            </li>

            {navData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className=''>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
