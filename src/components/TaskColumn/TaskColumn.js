import React from 'react';
import Task from '../Task/Task';
import './TaskColumn.css';
import { Droppable, Draggable } from "react-beautiful-dnd";


const TaskColumn = ({tasks,column,index}) => {
  
  return (
    <Draggable draggableId={column.id} index={index} type={'column'}>
     {(provided)=>(
       <div 
         className='taskcolumn_container'
         ref={provided.innerRef}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
       >
         <h4 className='taskcolumn_title'>
           {column.title}
           </h4>
           <Droppable droppableId={column.id} type='task'>
             {(provided,snapshot)=>(
                <div 
                 className='taskcolumn_tasklist'
                 isDraggingOver={snapshot.isDraggingOver}
                 ref={provided.innerRef}
                 {...provided.droppableProps} 
                 > 
                {
                 tasks && tasks.map((task,index)=>
                    (                 
                        <Task key={task.taskIds} task={task} index={index} />
                    )
                  )
                }
                </div> 
             )}
           </Droppable>
         
       </div>
     )}
   </Draggable>)
}

export default TaskColumn