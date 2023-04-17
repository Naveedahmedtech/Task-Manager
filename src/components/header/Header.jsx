import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from './logo_icon.png';
import './header.css';

const Header = () => {
  return (
    <>
      <nav className='header'>              
        <div className='logo-container'>
          <NavLink to='/home'>
              <img src={logo} alt="" className='logo' />
        </NavLink>
        </div>
        <div>
          <NavLink to='/home'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/add-task'>
            <li>Add Task</li>
          </NavLink>
          <NavLink to='/manage-task'>
            <li>Manage Task</li>
          </NavLink>
        </div>
      </nav>
      <MobileNavBar />
    </>
  );
}

export default Header;

export const MobileNavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  const hideNav = () => {
    setShowNav(false);
  }

  return (
    <>
      <nav className='mobile-header'>              
        <div className='mobile-logo-container'>
          <img src={logo} alt="" className='logo' />
        </div>
        <div className={`nav-items ${showNav ? 'show' : ''}`}>
          <div onClick={hideNav}>
            <NavLink to='/home'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/add-task'>
              <li>Add Task</li>
            </NavLink>
            <NavLink to='/manage-task'>
              <li>Manage Task</li>
            </NavLink>
          </div>
        </div>
        <i className="fa-solid fa-bars menu" onClick={toggleNav}></i>
      </nav>
    </>
  );
}
