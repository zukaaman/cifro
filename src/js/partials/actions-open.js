document.addEventListener("DOMContentLoaded", function(event) {
  var actionsButton = document.querySelector(".actions__open-button");
  var actionsText = document.querySelector(".actions__text");
  var shareButton = document.querySelector(".actions__share-button");
  var shareList = document.querySelector(".actions__share");

  actionsButton.addEventListener("click", function() {
    actionsText.classList.toggle("actions__text--closed");
    actionsButton.classList.toggle("actions__open-button--open");
  });

  shareButton.addEventListener("click", function() {
    shareList.classList.toggle("actions__share--open");
  });
});
