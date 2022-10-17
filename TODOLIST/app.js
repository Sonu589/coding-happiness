const input = document.querySelector(".entered-list");
const addBtn = document.querySelector(".add-list");
const tasks = document.querySelector(".tasks");

const list = [];

input.addEventListener("keyup", () => {
  input.value.trim() !== 0 ? addBtn.classList.add("active") : addBtn.classList.remove("active");
});

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${input.value}</p >
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"/>
            <i class="fa-sharp fa-solid fa-chevron-up"/>
            <i class="fa-solid fa-chevron-down"/>
            <i class="fa-solid fa-xmark"/>
        </div>`;
    tasks.appendChild(newItem);
    input.value = "";
    list.push(newItem);
    input.value = "";
    const up = newItem.querySelector(".fa-chevron-up");
    up.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] === newItem && i !== 0) {
          console.log("text");
          const temp = list[i - 1];
          list[i - 1] = list[i];
          list[i] = temp;
        }
      }
      AddR();
    });
    const Down = newItem.querySelector(".fa-chevron-down");
    Down.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] == newItem && i != list.length - 1) {
          const temp = list[i + 1];
          list[i + 1] = list[i];
          list[i] = temp;
          break;
        }
      }
      AddR();
    });
    const delet = newItem.querySelector(".fa-xmark");
    delet.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] == newItem) {
          delete list[i];
        }
      }
      AddR();
    });
    AddR();
  } else {
    alert("please enter a task");
  }
});

// mark completed ---optional---

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

function AddR() {
  const AllIn = tasks.querySelectorAll(".item");
  AllIn.forEach((element) => {
    element.remove();
  });
  list.forEach((element) => {
    tasks.appendChild(element);
  });
}
