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

  function toggleScrollLock() {
    $("html").toggleClass("scrollLock");
    $("body").toggleClass("scrollLock");
  }

  function toggleNav() {
    $("#nav").toggleClass("show");
    toggleScrollLock();
  }

  let popupBackground = $("#popup__background");
  let signupBtn = $("#signupBtn");
  let signupBurgerBtn = $("#signupBurgerBtn");
  let signupClose = $("#signupClose");
  let supportBtn = $("#supportBtn");
  let supportClose = $("#supportClose");

  signupBtn.on("click", openSignUp);
  signupBurgerBtn.on("click", function(){
    openSignUp();
    toggleNav();
  });
  supportBtn.on("click", openSupport);
  popupBackground.on("click", closePopups);
  signupClose.on("click", closePopups);
  supportClose.on("click", closePopups);

  let burger = $("#navToggle"); 
  burger.on("click", toggleNav);
});