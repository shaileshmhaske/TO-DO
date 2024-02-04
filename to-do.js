function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(taskInput.value));
      
      li.addEventListener("click", function () {
          this.classList.toggle("completed");
      });

      const deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("X"));
      deleteButton.addEventListener("click", function () {
          li.remove();
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = "";
  }
}
