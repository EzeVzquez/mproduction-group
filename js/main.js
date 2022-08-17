const $menuButton = document.querySelector(".menu-button-container");
const $goToTopButton = document.getElementById("myBtn");

$menuButton.addEventListener("click", () => $menuButton.classList.toggle("clicked") );

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $goToTopButton.style.display = "block";
  } else {
    $goToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  // When the user scrolls down 20px from the top of the document, show the button
window.addEventListener ("scroll" ,scrollFunction)

$goToTopButton.addEventListener("click", topFunction)