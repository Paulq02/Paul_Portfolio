const mainMenu = document.querySelector(".mainMenu")
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu")





openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close)




function show() {
    mainMenu.style.display = "flex"
    mainMenu.style.top = "0"

}

function close () {
    mainMenu.style.top = "-100%"
}

setTimeout(() => {
    mainMenu.style.display = "none"
}, 500) // Adjust the timeout duration to match the transition duration
