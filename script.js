let count = 0;
let taskToUpdate = null;

function addTodo() {
  let current_Date = new Date();
  let current_time =
    current_Date.getHours() +
    ":" +
    current_Date.getMinutes() +
    ":" +
    current_Date.getSeconds();
  let nowDate =
    current_Date.getDate() +
    "/" +
    current_Date.getMonth() +
    "/" +
    current_Date.getFullYear();
  let noHead = document.querySelector(".noHead");
  noHead.classList.add("noHeadInvisible");
  let wrap = document.querySelector(".wrapper");

  let todo_style = document.createElement("div");
  todo_style.classList.add("todo-style");
  todo_style.classList.add("todo" + count);
  let date_time = document.createElement("p");
  date_time.classList.add("time");
  date_time.innerHTML = current_time + " " + nowDate;
  let todo_head = document.createElement("div");
  todo_head.classList.add("todo-head");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("check");
  check.addEventListener("change", function () {
    let textSpan = this.nextElementSibling.querySelector("h1");
    if (check.checked) {
      if (!textSpan.querySelector("del")) {
        const delTag = document.createElement("del");
        delTag.textContent = textSpan.textContent;
        textSpan.textContent = "";
        textSpan.appendChild(delTag);
      }
    } else {
      const delTag = textSpan.querySelector("del");
      if (delTag) {
        textSpan.textContent = delTag.textContent;
      }
    }
  });
  let task = document.createElement("h1");
  let extra_div = document.createElement("div");
  extra_div.classList.add("extra");
  task.classList.add("task" + count);
  todo_head.appendChild(check);
  todo_head.appendChild(extra_div);
  extra_div.appendChild(task);
  todo_style.appendChild(todo_head);
  extra_div.appendChild(date_time);
  let parent = document.getElementById("content");
  parent.appendChild(todo_style);

  let todo_btn = document.createElement("div");
  todo_btn.classList.add("todo-btn");
  let btnDel = document.createElement("button");
  let icon1 = document.createElement("i");
  icon1.classList.add("fa-solid", "fa-trash-can", "icon");
  btnDel.appendChild(icon1);

  let btnUpdate = document.createElement("button");
  btnUpdate.classList.add("update_btn");
  let icon2 = document.createElement("i");
  icon2.classList.add("fa-solid", "fa-pen-to-square", "icon");
  btnUpdate.appendChild(icon2);

  todo_btn.appendChild(btnDel);
  todo_btn.appendChild(btnUpdate);
  todo_style.appendChild(todo_btn);
  let inputData = document.querySelector("input");
  task.innerHTML = inputData.value;
  inputData.value = "";

  btnDel.addEventListener("click", function () {
    parent.removeChild(todo_style);
    count--;

    if (count === 0) {
      noHead.classList.remove("noHeadInvisible");
    }
  });

  btnUpdate.addEventListener("click", function () {
    taskToUpdate = task;
    let input_update = document.querySelector(".input-update");
    input_update.value = taskToUpdate.innerHTML;
    let update_box = document.querySelector(".update");
    update_box.classList.remove("updateShow");
    wrap.classList.add("filter");
  });

  count++;
}

let update_btn1 = document.querySelector(".update-btn1");
update_btn1.addEventListener("click", function () {
  if (taskToUpdate) {
    let input_update = document.querySelector(".input-update");
    taskToUpdate.innerHTML = input_update.value; // Update the specific task element
    let update_box = document.querySelector(".update");
    update_box.classList.add("updateShow");
    let wrap = document.querySelector(".wrapper");
    wrap.classList.remove("filter");
  }
});

let cancel_btn = document.querySelector(".cancel-btn");
cancel_btn.addEventListener("click", function () {
  let update_box = document.querySelector(".update");
  update_box.classList.add("updateShow");
  let wrap = document.querySelector(".wrapper");
  wrap.classList.remove("filter");
});
