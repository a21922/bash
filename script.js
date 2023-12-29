function addItem() {
    var newItem = document.getElementById("new-item").value;
    var list = document.getElementById("todo-list");

    if (newItem !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));
        list.appendChild(li);
    }
}
