import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css';

const Task = ({task,index}) => { 

  
  return (
    <Draggable draggableId={task.taskIds} index={index} type="task">
      {(provided, snapshot)=>(
        <div 
          className='task_container'
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          >
            <h4 className='task_title'>
              {task.taskName}
            </h4>
            <div className='task_description'>
              {task.taskDescription}
            </div>
            <div>
              {task.taskImage ?
              <img src={task.taskImage} alt='img' height={30} width={30}/>
              :<></>}
            </div>
        </div>
      )}
    </Draggable>
  )
}

export default Task