document.addEventListener("DOMContentLoaded", function(event) {
  var careersButton = document.querySelector(".careers__open-button");
  var careerList = document.querySelector(".careers__wrapper");

  // careersButton.addEventListener("click", function () {
  //   if (careerList.classList.contains("careers__wrapper--closed")) {
  //     careerList.classList.remove("careers__wrapper--closed");
  //     careersButton.classList.add("careers__open-button--open");
  //   } else {
  //     careerList.classList.add("careers__wrapper--closed");
  //     careersButton.classList.remove("careers__open-button--open");
  //   }
  // });

  careersButton.addEventListener("click", function() {
    careerList.classList.toggle("careers__wrapper--closed");
    careersButton.classList.toggle("careers__open-button--open");
  })
});
