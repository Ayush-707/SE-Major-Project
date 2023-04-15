import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';


function Navbar() {

  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    
      setSidebar(!sidebar);
    
  };

  const isClickable = location.pathname !== '/';

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className={`menu-bars ${isClickable ? '' : 'disabled'}`}>
                    <FaIcons.FaBars onClick={isClickable ? showSidebar : null} />
                </Link>
                <div className="mx-auto text-white font-semibold text-3xl tracking-wide text-center">
                    Bank Management App
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose lineClose />
                  </Link>
                </li>

                {SidebarData.map((item, index) => {
                      return(
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span className=''>{item.title}</span>
                          </Link>
                        </li>
                      );

                })}
              </ul>
            </nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;
