document.addEventListener("DOMContentLoaded", function(event) {
  var openButton = document.querySelector(".careers__open-button");
  var careerList = document.querySelector(".careers__wrapper");

  openButton.addEventListener("click", function () {
    if (careerList.classList.contains("careers__wrapper--closed")) {
      careerList.classList.remove("careers__wrapper--closed");
    } else {
      careerList.classList.add("careers__wrapper--closed");
    }
  });
});
