document.addEventListener("DOMContentLoaded", function(event) {
  var actionsButton = document.querySelector(".actions__open-button");
  var actionsText = document.querySelector(".actions__text");

  actionsButton.addEventListener("click", function() {
    actionsText.classList.toggle("actions__text--closed");
    actionsButton.classList.toggle("actions__open-button--open");
  });
});
