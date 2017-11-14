document.addEventListener("DOMContentLoaded", function(event) {
  var servicesButtonRepair = document.querySelector(".main__button-order--repair");
  var servicesButtonModern = document.querySelector(".main__button-order--modern");
  var servicesButtonSale = document.querySelector(".main__button-order--sale");
  var servicesForm = document.querySelector(".main__form");
  var servicesButtonClose = document.querySelector(".main__button-close");

  servicesButtonRepair.addEventListener("click", function() {
    servicesForm.classList.remove("main__form--closed");
    servicesButtonClose.classList.remove("main__button-close-closed");
    servicesButtonRepair.classList.remove("main__button-order--closed");
  });

  servicesButtonModern.addEventListener("click", function() {
    servicesForm.classList.remove("main__form--closed");
    servicesButtonClose.classList.remove("main__button-close-closed");
    servicesButtonModern.classList.remove("main__button-order--closed");
  });

  servicesButtonSale.addEventListener("click", function() {
    servicesForm.classList.remove("main__form--closed");
    servicesButtonClose.classList.remove("main__button-close-closed");
    servicesButtonSale.classList.remove("main__button-order--closed");
  });

  servicesButtonClose.addEventListener("click", function() {
    servicesForm.classList.add("main__form--closed");
    servicesButtonClose.classList.add("main__button-close-closed");
    servicesButtonRepair.classList.add("main__button-order--closed");
    servicesButtonModern.classList.add("main__button-order--closed");
    servicesButtonSale.classList.add("main__button-order--closed");
  })
});
