import React,{useState} from 'react';
import {PlusIcon} from '@heroicons/react/solid';
import './AddNew.css';

const AddNew = ({addNewClicked}) => {

  const handleAddNewButton =(e)=>{
    addNewClicked(true);
  }
  
  return (
        <div className='addnew_container' onClick={(e)=>handleAddNewButton(e)}>
            <PlusIcon className='addnew_icon'/> 
        </div>
  )
}

export default AddNew;