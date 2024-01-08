var display = document.getElementById("display")
var btn = document.getElementById("btn")
var navbar = document.getElementById("navbar")

btn.addEventListener("click", () => {
    if (navbar.style.visibility === "visible") {
        navbar.style.visibility = "hidden"
        navbar.style.opacity = "0"

    } else {
        navbar.style.visibility = "visible"
        navbar.style.opacity = "1"
    }
})
