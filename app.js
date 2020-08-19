var shareToggle = document.querySelector(".shareIcon");
var makeActive = document.querySelector(".share");

shareToggle.addEventListener("click", () => {
  if (makeActive.classList.contains("active")) {
    makeActive.classList.remove("active");
  } else {
    makeActive.classList.add("active");
  }
});

// Debugging
// Problem 1 : Clicking does nothing.
// Console log out the click.
// Problem 2 : Console logs out properly but doesn't add the class.
// Improperly adding / selecting elements (removed the . in (.active))
