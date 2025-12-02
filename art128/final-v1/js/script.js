
document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA-ATTRIBUTE
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'closed') {
            menunav.setAttribute('data-navstate', 'open');
        } else {
            menunav.setAttribute('data-navstate', 'closed');
        }
    });


    // STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function() {
            menunav.setAttribute('data-navstate', 'closed');
        };   
    }


// CLOSES THE MAIN ONLOAN JS
});