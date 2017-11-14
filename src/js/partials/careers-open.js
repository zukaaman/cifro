document.addEventListener("DOMContentLoaded", function(event) {
  var careersButton = document.querySelector(".careers__open-button");
  var careerList = document.querySelector(".careers__wrapper");

  careersButton.addEventListener("click", function() {
    careerList.classList.toggle("careers__wrapper--closed");
    careersButton.classList.toggle("careers__open-button--open");
  })
});
