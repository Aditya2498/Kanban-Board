import React from 'react';
import {ArrowLeftIcon,SearchIcon,BellIcon,ChevronDownIcon} from '@heroicons/react/solid';
import './Title.css';

const Title = ({data}) => {
  return (
    <>
      <div className='title_container'>
            <div className='title_nav'> 
                <ArrowLeftIcon className='back_arrow'/>
                <h2>{data.title}</h2>
            </div>
            <div className='title_proj_name'>
                <h1>{data.projName}</h1>
                <ChevronDownIcon className='back_arrow'/>
            </div>
            <div className='user_icons'>
                <SearchIcon className='user_icons_size'/>
                <BellIcon className='user_icons_size'/>
                <img src={data.userIcon} alt='user' className='user_icons_size'/>
            </div>
      </div>
    </>
  )
}

export default Title;