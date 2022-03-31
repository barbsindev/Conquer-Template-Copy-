const myButton = document.querySelector(".upBtn");

// When the user scrolls down 200px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
myButton.addEventListener("click", topFunction);


//Showing hamburger menu on mobile and tablet

const menu = document.querySelector(".navbar");
const hamburger = document.querySelector("#burger");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});


//Closing hamburger menu  when each link is clicked
function handleRequest() {
  const menu = document.querySelector(".navbar");
  console.log(menu);
  menu.classList.remove("show");
}
let links = document.querySelectorAll(".navbar__li");
console.log(links);
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", handleRequest);
 }