function addTask(){
    const titleInput = document.getElementById("taskInput");
    const noteInput = document.getElementById("taskNote");
    const taskList = document.getElementById("taskList");
    const title = titleInput.value.trim();
    const note = noteInput.value.trim();
    if(title === ""){
        alert("Please enter task title");
        return;
    }
    const card = document.createElement("div");
    card.className = "task-card";
    const h3 = document.createElement("h3");
    h3.textContent = title;
    const p = document.createElement("p");
    p.textContent = note || "No description added.";
    const actions = document.createElement("div");
    actions.className = "task-actions";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done";
    doneBtn.onclick = () => card.classList.toggle("completed");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => card.remove();
    actions.appendChild(doneBtn);
    actions.appendChild(delBtn);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(actions);
    taskList.appendChild(card);
    titleInput.value = "";
    noteInput.value = "";
}