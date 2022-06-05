let getTasks = window.localStorage.getItem('taskObj');
let parsedData = getTasks ? JSON.parse(getTasks) : null;
let taskIdArray;
if(parsedData ){
   taskIdArray = Object.keys( parsedData);
}



 const columnObj = {
   tasks:parsedData,
   columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds:taskIdArray
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "In Review",
      taskIds: []
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: []
    }
  },
  // columnOrder: ["column-1", "column-2", "column-3"]
  columnOrder: ["column-1", "column-2","column-3","column-4"]
}

export default columnObj; 