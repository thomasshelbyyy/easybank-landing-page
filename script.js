const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close")
const mobileNav = document.querySelector(".mobile-nav")

hamburger.addEventListener("click", function () {
    hamburger.classList.remove("active")
    closeBtn.classList.add("active")
    mobileNav.classList.add("active")
    mobileNav.querySelector(".links").classList.add("active")
})

closeBtn.addEventListener("click", function () {
    closeBtn.classList.remove("active")
    hamburger.classList.add("active")
    mobileNav.classList.remove("active")
    mobileNav.querySelector(".links").classList.remove("active")
})