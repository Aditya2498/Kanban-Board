import React from 'react';
import {
        InboxIcon,
        HomeIcon,
        AdjustmentsIcon,
        ChatAltIcon,
        CalendarIcon,
        ClockIcon,
        UserIcon,
        ArchiveIcon
      } from '@heroicons/react/solid';
import './NavBar.css';


const NavBar = () => {
  return (
    <>
    <div className='container'>
      <div className='icon_inbox'>
      <InboxIcon className='main_icon'/>      
      </div>
      <div className='icon_crate'>
        <ArchiveIcon className='icon_style'/>
        <HomeIcon className='icon_style' />
        <ChatAltIcon className='icon_style'/>
        <CalendarIcon className='icon_style'/>
        <ClockIcon className='icon_style'/>
        <UserIcon className='icon_style'/>
        <AdjustmentsIcon className='icon_style'/>
      </div>
    </div>        
    </>
  )
}

export default NavBar;