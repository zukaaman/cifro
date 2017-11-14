document.addEventListener("DOMContentLoaded", function(event) {
  var servicesButtonRepair = document.querySelector(".main__button-order--repair");
  var servicesButtonModern = document.querySelector(".main__button-order--modern");
  var servicesButtonSale = document.querySelector(".main__button-order--sale");
  var servicesForm = document.querySelector(".main__form");
  var servicesButtonClose = document.querySelector(".main__button-close");
  var servicesModelOther = document.querySelector(".model-other");
  var servicesModelInput = document.querySelector(".model-list--other-input");
  var servicesModelClose = document.querySelector(".model-other__button-close");
  var servicesDefectInput = document.querySelector(".defect-other-input");
  var servicesDefectOther = document.querySelector(".defect-other");
  var servicesDefectClose = document.querySelector(".defect-other__button-close");
  var servicesCommentButton = document.querySelector(".main__form-button-comment");
  var servicesCommentOther = document.querySelector(".comment-other");
  var servicesCommentClose = document.querySelector(".comment-other__button-close");
  var servicesDefectModernInput = document.querySelector(".defect-modern-other-input");
  var servicesDefectModernOther = document.querySelector(".defect-modern-other");
  var servicesDefectModernClose = document.querySelector(".defect-modern-other__button-close");


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
  });
////////////////////////////////////////////////////////////
  servicesModelInput.addEventListener("focus", function() {
    servicesModelOther.classList.remove("model-other--closed");
  });

  servicesModelClose.addEventListener("click", function() {
    servicesModelOther.classList.add("model-other--closed");
  });

  servicesDefectInput.addEventListener("focus", function() {
    servicesDefectOther.classList.remove("defect-other--closed");
  });

  servicesDefectClose.addEventListener("click", function() {
    servicesDefectOther.classList.add("defect-other--closed");
  });

  servicesCommentButton.addEventListener("click", function() {
    servicesCommentOther.classList.remove("comment-other--closed");
  });

  servicesCommentClose.addEventListener("click", function() {
    servicesCommentOther.classList.add("comment-other--closed");
  });

  servicesDefectModernInput.addEventListener("focus", function() {
    servicesDefectModernOther.classList.remove("defect-modern-other--closed");
  });

  servicesDefectModernClose.addEventListener("click", function() {
    servicesDefectModernOther.classList.add("defect-modern-other--closed");
  });
});
