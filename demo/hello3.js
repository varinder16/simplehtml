console.log("hello world");

document.getElementById("add-item").addEventListener("click", function() {
    let ul = document.querySelector("ul"); // Select the <ul> element
    let newitem = document.createElement("li");
    newitem.textContent = document.getElementById("text").value;
    ul.appendChild(newitem);
});


document.getElementById("remove-item").addEventListener("click", function() {

    let ul = document.querySelector("ul"); // Select the <ul> element
    let lastItem = ul.firstElementChild; // Get the last <li> element
    if (lastItem) {
        ul.removeChild(lastItem); // Remove the last <li> element
    }


});