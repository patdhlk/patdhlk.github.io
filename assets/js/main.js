// Smooth scrolling to anchor targets
function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - $(window).scrollTop();
    var perTick = difference / duration * 10;
    this.scrollToTimerCache = setTimeout(function() {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, $(window).scrollTop() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}

// lenny wanted this, sorry. smooth scrolling for all the anchors
$("a.anchor").on("click", function (e) {
    e.preventDefault();
    var hash = $(e.currentTarget).prop("hash");

    smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top, 200);

    // $("body").scrollTo($(hash), 500);
    if(window.history.pushState) {
        window.history.pushState(null, null, hash);
    } else {
        window.location.hash = hash;
    }
})