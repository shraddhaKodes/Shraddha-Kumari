$(document).ready(function(){
    // Toggle dropdown menu when clicking on the dropdown button
    $(".dropbtn").click(function(){
        $(this).next(".dropdown-content").toggle();
    });

    // Hide dropdown menu when clicking outside of it
    $(document).click(function(e){
        if (!$(e.target).closest('.dropdown').length) {
            $(".dropdown-content").hide();
        }
    });

    
      
    $(document).ready(function(){
        $('.amazon-carousel-inner').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

});