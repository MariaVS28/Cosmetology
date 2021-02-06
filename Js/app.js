$(function() {

  function openSignUp() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("popup__background").style.display = "block";
  }
  
function openSupport() {
    document.getElementById("supportForm").style.display = "block";
    document.getElementById("popup__background").style.display = "block";
  }
  
function closePopups() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("supportForm").style.display = "none";
    document.getElementById("popup__background").style.display = "none";
  }

  let popupBackground = $("#popup__background");
  let signupBtn = $("#signupBtn");
  let signupClose = $("#signupClose");
  let supportBtn = $("#supportBtn");
  let supportClose = $("#supportClose");

  signupBtn.on("click", openSignUp);
  supportBtn.on("click", openSupport);
  popupBackground.on("click", closePopups);
  signupClose.on("click", closePopups);
  supportClose.on("click", closePopups);
});