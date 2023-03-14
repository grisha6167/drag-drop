const placeholders = document.querySelectorAll(".placeholder") 
const item = document.querySelector(".item")

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

for(placeholder of placeholders){
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragdrop)
}

function dragstart(){
    console.log("взяли карту мира")
}
function dragend(){
    console.log("dragend")
}
function dragover(){
    console.log("dragover")
}
function dragenter(){
    console.log("dragenter")
}
function dragleave(){
    console.log("dragleave")
}
function dragdrop(){
    console.log("dragdrop")
}