const newTask=document.getElementById("input-text");
const listItems=document.getElementById("list-items")

function addTask(){
    if(newTask == ""){
        alert("You must add some task")
    }
    else{
        let li=document.createElement("li");
         li.innerHTML = newTask.value;
         listItems.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML= "\u00d7";
         li.appendChild(span);
    }
    newTask.value="";
    saveData();
}

listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listItems.innerHTML);

}

function showTask(){
    listItems.innerHTML= localStorage.getItem("data");
}
showTask();