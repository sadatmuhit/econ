$(document).ready(function () {
    //onepagenav
    $('.navbar').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
        easing: "Linear"
    });
    //progressbar
    $('#progressbar1').LineProgressbar({
        percentage: 95,
        backgroundColor: '#fff',
        fillBackgroundColor: '#36c36e',
    });
    $('#progressbar2').LineProgressbar({
        percentage: 75,
        backgroundColor: '#fff',
        fillBackgroundColor: '#36c36e',
    });
    $('#progressbar3').LineProgressbar({
        percentage: 80,
        backgroundColor: '#fff',
        fillBackgroundColor: '#36c36e',
    });
    $('#progressbar4').LineProgressbar({
        percentage: 55,
        backgroundColor: '#fff',
        fillBackgroundColor: '#36c36e',
    });
    $('#progressbar5').LineProgressbar({
        percentage: 85,
        backgroundColor: '#fff',
        fillBackgroundColor: '#36c36e',
    });
    //scrollToTop
    $(function () {
        $('.bck').backToTop({
            iconName: 'fas fa-arrow-up',
            fxName: 'rightToLeft'
        });
    });
});
