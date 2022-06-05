import React,{useState} from 'react';
import Title from '../../components/Title/Title';
import Modal from '../../components/Modal/Modal';
import AddNew from '../../components/AddNew/AddNew';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import  columnObj  from '../../fakeData/columnObj';
import './TaskBoard.css';
import fakeTitleData from '../../fakeData/fakeTitleData';
import TaskColumn from '../../components/TaskColumn/TaskColumn';

const TaskBoard = () => {

  const [modalStatus, setmodalStatus] = useState(false);
  const [starter, setStarter] = useState(columnObj);
 

  const addNewClicked = (isClicked)=>{
    setmodalStatus(isClicked);
  }
  const closeModal =(isClicked)=>{
    setmodalStatus(isClicked);
  }
  


  const onDragEnd = ({ destination, source, draggableId, type }) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = starter.columns[source.droppableId];
    const end = starter.columns[destination.droppableId];

    if (type === "column") {
      
      const newOrder = [...starter.columnOrder];
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setStarter({
        ...starter,
        columnOrder: newOrder
      });
      return;
    }

    if (start === end) {
      const column = starter.columns[source.droppableId];
      const taskIds = [...column.taskIds];
      taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        taskIds
      };
      setStarter({
        ...starter,
        columns: {
          ...starter.columns,
          [column.id]: newColumn
        }
      });
      return;
    }

    const startTaskIds = [...start.taskIds];
    const endTaskIds = [...end.taskIds];

    startTaskIds.splice(source.index, 1);
    endTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      taskIds: startTaskIds
    };
    const endTaskColumn = {
      ...end,
      taskIds: endTaskIds
    };

    setStarter({
      ...starter,
      columns: {
        ...starter.columns,
        [start.id]: newStartColumn,
        [end.id]: endTaskColumn
      }
    });
  
  };

  return (
    <>
    <div className='taskBoard_align' >
      <Title data={fakeTitleData}/>
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-column" type="column" direction="horizontal">
        {(provided, snapshot)=>(
          <div 
            className='taskboard_layout'
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {starter.columnOrder.map((columnId, index) => {
              const column = starter.columns[columnId];
              if(column.taskIds){
                const tasks = column.taskIds && column.taskIds.map(taskId => starter.tasks[taskId]);
                return (
                  <TaskColumn
                    index={index}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                  />
                );
              }else{
                const tasks = [{taskDescription: "Add New Tasks",
                taskIds: "1234",
                taskName: "No tasks found"}];
                return (
                  <TaskColumn
                    index={index}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                  />
                );
              }

              
            })}
            {provided.placeholder}

          </div>
        )}
       </Droppable>
      </DragDropContext>
      
      
    </div>
        {modalStatus ? <></> : <AddNew addNewClicked={addNewClicked}/> }
        {modalStatus ? (<Modal closeModal={closeModal}/>) :<></>}
    </>
  )
}

export default TaskBoard;