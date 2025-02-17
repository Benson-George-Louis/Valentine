$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    $('#no-button').hover(function (e) {
        // Calculate the new position of the button
        var minDistance = 50; // Minimum distance from the cursor
        var containerWidth = $('.container').width();
        var containerHeight = $('.container').height();
        var buttonWidth = $(this).width();
        var buttonHeight = $(this).height();

        var newLeft, newTop;

        do {
            newLeft = Math.floor(Math.random() * (containerWidth - buttonWidth));
            newTop = Math.floor(Math.random() * (containerHeight - buttonHeight));
        } while (Math.abs(newLeft - e.pageX) < minDistance || Math.abs(newTop - e.pageY) < minDistance);

        $(this).css({
            position: 'relative',
            left: newLeft + 'px',
            top: newTop + 'px'
        });
    });
});
$('#yes-button').click(function () {
    // Redirect to another HTML page when "Yes" button is clicked
    window.location.href = 'vl.html'; // Replace 'your-new-page.html' with your actual HTML page
});