   // underline-nav

    $('nav .nav-part ul li').on('click', function(){
        $(this).addClass('current').siblings().removeClass('current');
    })


    $(document).ready(function(){
        // mix it up for galery
        var mixer = mixitup(".galery-slider");

        // venobox gallery 
    $('.venobox').venobox({
        arrowsColor:"#00bbff",
        closeColor:"orange",
        overlayColor:"rgba(0,0,0,0.8)",
        framewidth : '600px',
        spinner:"cube-grid",
    });

});


