function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("done");
  };

  const delBtn = document.createElement("span");
  delBtn.innerHTML = "🗑️";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
