// Start Nav Scrolling
window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav")
    if (window.scrollY> 0) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }
})

const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", function navHighlighter() {
  
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");
      
      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector("nav .nav-list li a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector("nav .nav-list li a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  );
// End Nav Scrolling

// Start toggler
document.querySelector(".menue").addEventListener("click", function (){
  document.querySelector("nav ul").classList.add("active");
})
document.querySelector(".close").addEventListener("click", function (){
  document.querySelector("nav ul").classList.remove("active");
})
document.querySelectorAll("nav ul li").forEach((e) => {
  e.addEventListener("click", function (){
  document.querySelector("nav ul").classList.remove("active");
})
})
// End toggler
