
document.addEventListener("DOMContentLoaded", function () {
    
  // ENABLE MOBILE MENU
  const sitenav = document.querySelector(".site-nav");
  const menubutton = document.querySelector(".menubutton")

  menubutton.onclick = () => {
    
  //   IF MENU US CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open" ) {
      sitenav.setAttribute("data-menustate", "closed");
    } else {
      sitenav.setAttribute("data-menustate", "open");
    };
    
  };



  // Removing the data-attribute on resize to fix darawer nav animation
  window.onresize = () => {
    sitenav.removeAttribute("data-menustate");
  };

  // SCROLL-TRIGGERED ANIMATION
  // CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
  const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-viewstate", "active");
      } else {
        entry.target.setAttribute("data-viewstate", "inactive");
      };   
    });  
  });

  const mytargets = document.querySelectorAll('.observe-me');
  mytargets.forEach((el) => {
      myobserver.observe(el);
  });

});

// HOVER IMAGE



