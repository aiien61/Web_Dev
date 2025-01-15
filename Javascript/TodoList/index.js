const textArea = document.querySelector('.textarea');
const itemList = document.querySelector('.itemlist');
const button = document.querySelector('.btn');

function addItem() {
    if (textArea.value === "") {
        return;
    }
    const item = document.createElement("li");
    item.innerHTML = `
    <input type="checkbox" class="checkbox">
    <label>${textArea.value}</label>
    <button class="bin">🗑️</button>
    `;
    
    const bin = item.querySelector(".bin");
    const checkBox = item.querySelector("checkbox");

    itemList.append(item);
    textArea.value = "";

    bin.addEventListener("click", function () {
        item.remove();
    });

    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            item.style.textDecoration = "line-through";
            item.style.color = "#999";
            itemList.append(item);
        }else {
            item.style.textDecoration = "none";
            item.style.color = "";
            itemList.prepend(item);
        }
    });
}

button.addEventListener("click", addItem)

// textArea.addEventListener("keyup", function (e) {
//     if (e.key === 'Enter') {
//         addItem();
//     }
// })