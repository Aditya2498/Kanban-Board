import React,{useRef,useState} from 'react';
import {XIcon} from '@heroicons/react/solid';
import {v4 as uuid} from 'uuid';
import './Modal.css';

const Modal = ({closeModal}) => {
    
    const formRef = useRef(null);
    const [isModalOpen, setisModalOpen] = useState(false);


    function imageConverter(image){
        return new Promise((resolve,reject)=>{
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(image);
        })
        // console.log(image);
        // const imageData = reader.readAsDataURL(image.file[0]);
        // console.log(imageData);
    }

    const handleAddNewTask = async (e)=>{
        const form = formRef.current;
        let id = uuid();
        let image64 = await imageConverter(form['taskImage'].files[0]);
        let formData = {
            [id]:{ 
                taskIds:id, 
                taskName:form['taskName'].value,
                taskDescription:form['taskDescription'].value,
                taskImage:image64
            }
        }
        let existingTasks = window.localStorage.getItem('taskObj');
        let parsedTasks = existingTasks ? JSON.parse(existingTasks) : {};
        parsedTasks = {...parsedTasks,...formData}
         window.localStorage.setItem("taskObj",JSON.stringify(parsedTasks)); 
    }
    
    const handleModalClose = ()=>{
        setisModalOpen(false);
        closeModal(isModalOpen);
    }


  return (
    <>
        <div className='modal_container'>
            <div className='modal_title'>
                <h2>Add New Task</h2>
            </div>
            <form ref={formRef} className='form_box'>
                <XIcon className='icon_close' onClick={()=>handleModalClose()}/>
                <div>
                    <p>Task Name:</p>
                    <input placeholder='Add Name' name='taskName' autoComplete='off'/>
                </div>
                <div>
                    <p>Task Description:</p>
                    <textarea placeholder='Add Description' name='taskDescription'autoComplete='off'/>
                </div>
                <div>
                    <p>Task Images:</p>
                    <input type='file' name='taskImage' alt='addImage' accept='image/*'/>
                </div>
                <div className='submit_container'>
                 <input className='submit_button' type='submit'onClick={(e)=>handleAddNewTask(e)}/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Modal;