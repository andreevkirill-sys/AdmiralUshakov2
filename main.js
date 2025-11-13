let closeTimer;

$('.path').hover(
    function() {
        clearTimeout(closeTimer);
        $('.description').html($(this).attr('description-data'));
        $('.description').stop(true, true).fadeIn(200);
    },
    function() {
        closeTimer = setTimeout(function() {
            $('.description').stop(true, true).fadeOut(200);
        }, 500); 
    }
);

$('.description').hover(
    function() {
        clearTimeout(closeTimer);
        $(this).stop(true, true).fadeIn(100);
    },
    function() {
        closeTimer = setTimeout(function() {
            $('.description').stop(true, true).fadeOut(200);
        }, 300);
    }
);