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

  function getNavWidthAndReset(){
    let navWidth = $("#nav").css("width");
    $("#nav").css("width", 0);
    return navWidth;
  }

  function clearNavWidth() {
    $("#nav").css("width", '');
  }

  function showBurgerNav(navWidth) {
    let properties = {
      width: navWidth
    };
    $(".nav.show").animate(properties, {duration: 1000});
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
  burger.on("click", function() {
    let navWidth = getNavWidthAndReset();
    toggleNav();
    showBurgerNav(navWidth);
    clearNavWidth();
  });


//slider
  let beforeAndAfterSlider = $(".beforeAndAfter__photo__slider");
  let indexSlider = $(".index__photo__slider");

  beforeAndAfterSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
  
  indexSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500
  });
  
//zoom
  let beforeAndAfterLensZoom = $(".beforeAndAfter__lensZoom");

  beforeAndAfterLensZoom.ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200
  });

});