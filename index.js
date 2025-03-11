const taskinput=document.getElementById("Task");
const addbtn=document.getElementById("Add");
const tasklist=document.getElementById("task-list");
addbtn.addEventListener("click",()=>{
    const tasktext=taskinput.value.trim();
    if (tasktext!=="")
    {
        createTask(tasktext);
        taskinput.value="";
    }
})
function createTask(text)
{
    const taskitem=document.createElement("li");
    taskitem.innerHTML=`<span>${text}</span><button class="delete">delete</button>`;
    tasklist.appendChild(taskitem);

const deleteButton = taskitem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        taskitem.remove(); // Remove the task item when the delete button is clicked
    });
    
    tasklist.appendChild(taskitem);
}