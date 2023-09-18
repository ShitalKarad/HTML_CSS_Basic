const myArray = [];

function addUserInput() {
    const nameInput = document.getElementById("name").value;
    //const name = nameInput.value.trim(); // Trim to remove leading/trailing spaces
    if (nameInput === "") {
        alert("Please enter a name.");
        return;
    }
    myArray.push(nameInput);
    display();
}

function display() {
    const outputList = document.getElementById("itemList");
    const search = document.getElementById("search").value.trim().toLowerCase(); // Convert search term to lowercase for case-insensitive search

    outputList.innerHTML = "";

    myArray.forEach(function (value) {
        const list = document.createElement("li");
        const lowerCaseValue = value.toLowerCase(); // Convert the name to lowercase for case-insensitive search

        if (search !== "" && lowerCaseValue.includes(search)) {
            // Highlight the search term if found in the name
            const startIndex = lowerCaseValue.indexOf(search);
            const endIndex = startIndex + search.length;

            list.innerHTML = value.substring(0, startIndex) +
                "<span class='highlight'>" + value.substring(startIndex, endIndex) + "</span>" +
                value.substring(endIndex);
        } else {
            list.textContent = value;
        }

        outputList.appendChild(list);
    });
}
