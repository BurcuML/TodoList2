const btn = document.getElementById("button")
const output = document.getElementById("task-output");
const input = document.getElementById("input-text");
const clear = document.getElementById("clear");


// Enter tuşuna basıldığında addTask fonksiyonunu çağır
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (input.value === "") {
        return alert("Please enter a task");
    }
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("delete");
    button.addEventListener("click", () => {
        output.removeChild(li);
    });
    li.textContent = input.value;
    output.appendChild(li);
    li.appendChild(button);
    input.value = "";
    check.classList.toggle("visible")
}

function clearAll() {
    output.innerHTML = "";
}