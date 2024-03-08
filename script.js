/* Initialize bar, close and nav variabkes */

const open = document.getElementById("open");
    const close = document.getElementById("close");
    const navBar = document.getElementById("nav__links");

/* Open and close the navbar */

if (open && navBar) {
    open.addEventListener("click", () => {
        navBar.classList.add("active");
    })
}

if (close && navBar) {
    close.addEventListener("click", () => {
        navBar.classList.remove("active");
    })
}


/* Targetting wave emoji */

const wavingEmoji = document.getElementById("waving__emoji");

wavingEmoji.classList.add('emoji');