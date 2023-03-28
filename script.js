const placeholders = document.querySelectorAll(".placeholder")
const item = document.querySelector(".item")

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

for (placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragdrop)
}

function dragstart(event) {
    event.target.classList.add("hold")
    setTimeout(() => event.target.classList.add("hide"), 0)
}
function dragend(event) {
    event.target.className = "item"
}
function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add("hovered")
}
function dragleave(event) {
    event.target.classList.remove("hovered")
}
function dragdrop(event) {
    event.target.classList.remove("hovered")
    event.target.append(item)
}
let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}