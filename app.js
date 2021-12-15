// Grabbing all buttons
const btns = document.querySelectorAll(".tab-btn");

// Grabbing about section
const about = document.querySelector(".about");

// Grabbing articles
const articles = document.querySelectorAll(".content");

// Putting event listener
about.addEventListener("click", (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // Removing active status from all buttons
    btns.forEach(removeActive);
    // Setting one button to active
    e.target.classList.add("active");
  }
  // hide other articles
  articles.forEach(removeActive);
  const element = document.getElementById(id);
  element.classList.add("active");
});

function removeActive(button) {
  button.classList.remove("active");
}
