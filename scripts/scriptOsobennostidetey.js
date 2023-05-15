var dropDownButtons = document.getElementsByClassName("dropbtn");

const dropDownButtonsMap = new Map();

for (let i = 0; i < dropDownButtons.length; i++) {
    dropDownButtonsMap.set(dropDownButtons[i], Boolean(false));
    dropDownButtons[i].onclick = function () {
        console.log("clicked")
        let rootNode = dropDownButtons[i].getRootNode();
        let elements = rootNode.getElementsByClassName("dropdown-content");
        if (dropDownButtonsMap.get(dropDownButtons[i])) {
            elements[i].style.display = "none";
            dropDownButtonsMap.set(dropDownButtons[i], Boolean(false));
        } else {
            elements[i].style.display = "block";
            dropDownButtonsMap.set(dropDownButtons[i], Boolean(true));
        }
    }
}