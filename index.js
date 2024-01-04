// number of slides to initialize values for
let maxSlides = 6;

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

let i;
let slideIndex = [];
for (i = 0; i < maxSlides; i++) {
    slideIndex.push(1);
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n);
}

function showSlides(n, no) {
    let i;
    // each slide is named "slide" followed by the index of that slideshow instance, e.g. all slides in the first slideshow will have class "slides0"
    let x = document.getElementsByClassName("slides" + no.toString());
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
} 

function onLoad() {
    let i;
    for (i = 0; i < maxSlides; i++) {
        showSlides(1, i); 
    }
}

document.onload = onLoad();