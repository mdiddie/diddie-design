// when I scroll down the page, add a class to make the header another color

const headerTag = document.querySelector("header")

const toggleHeader = function (){

    const pixels = window.pageYOffset
    if (pixels > 60){
        headerTag.classList.add("scrolled") 
    } else {
        headerTag.classList.remove("scrolled")
    }
    }
    



toggleHeader()


document.addEventListener("scroll", function () {
toggleHeader()
})