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

$(function() {

  let popupBackground = $("#popup__background");
  let signupForm = $("#signupForm");
  let supportForm = $("#supportForm");

  //popupBackground.on("click", closePopups);
});