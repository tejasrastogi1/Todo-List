
const list = [];
function renderList(){
  let innerHtml=``;
  list.forEach((taskObj,index) => {
    const {task,date}=taskObj;
    innerHtml+=
    `<div>${task}</div>
    <div>${date}</div>
    <button class='delete-button' onclick="deleteTask(${index})">Delete</button>`;
  })
  document.querySelector('.finalList').innerHTML=innerHtml;
}

function deleteTask(i){
  list.splice(i,1);
  renderList();
}
function addTask(){
  const task= document.querySelector('.input-text');
  const taskDate=document.querySelector('.input-date');
  if(task.value!='' && taskDate.value!=''){
    list.push({task:task.value, date:taskDate.value});
    task.value='';
    taskDate.value='';
    renderList();
  }
}
document.querySelector('.add-button').addEventListener('click',()=>{
  addTask();
})