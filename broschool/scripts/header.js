document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .then(() => {
            document.querySelector("main").style.marginTop = "140px"; // Ensure content moves down after header loads
        })
        .catch(error => console.log("Error loading header:", error));
});