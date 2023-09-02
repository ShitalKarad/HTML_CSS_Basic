function addData() {
    var fName = document.getElementById("name").value;
    var lName = document.getElementById("lName").value;
    if (fName.trim() !== "" && lName.trim() !== "") {
        const table = document.getElementById("tableContent");
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        cell1.textContent = fName;
        const cell2 = newRow.insertCell(1);
        cell2.textContent = lName;
        const colors = ["red-text", "blue-text", "green-text" , "pink-text","purple-text"];
        const randomColorClass1 = colors[Math.floor(Math.random() * colors.length)];
        const randomColorClass2 = colors[Math.floor(Math.random() * colors.length)];
        cell1.classList.add(randomColorClass1);
        cell2.classList.add(randomColorClass2);

        document.getElementById("name").value = "";
        document.getElementById("lName").value = "";

    }
}