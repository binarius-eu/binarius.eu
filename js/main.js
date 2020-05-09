$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){

    wow = new WOW({
        mobile:       false,       // default
      }
    )
    wow.init();

     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-default").addClass("animated");
        } else {
            $(".navbar-default").removeClass('animated');
        }
    });

    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      11,
            'month':    3,
            'year':     2017,
            'hour':     00,
            'min':      00,
            'sec':      01
        },
        omitWeeks: true
    });

    $('.init-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        video:true,
        smartSpeed: 600
    });

    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:$(form).attr("action"),
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

});

// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 16,
//
//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(23.751945, 90.384590), // Dhaka ,
//         scrollwheel: false,
//
//         // How you would like to style the map.
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
//     };
//
//     // Get the HTML DOM element that will contain your map
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map-canvas');
//
//     // Create the Google Map using our element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);
//
//     // Let's also add a marker while we're at it
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(23.751945, 90.384590),
//         map: map,
//         icon: 'img/map.png',
//         title: 'Twing!'
//     });
// }

document.addEventListener('DOMContentLoaded', function() {
    // sslider = Simple SLIDER
    function sslider() {

        var current = 0,
          i,
          slider = document.querySelector('[data-js="sslide"]'),
          allImages =  slider.querySelectorAll('img'),
          imgWidth = Math.ceil(100 / allImages.length),
          sliderWidth = allImages.length * 100;


        slider.style.width = sliderWidth + '%';
        console.log(sliderWidth);
        for(i = 0; i <= allImages.length - 1; i++) {
            allImages[i].style.width = imgWidth + '%';
        }

        function animateRight(cur) {
            var i = imgWidth,
              time = 50;
            var animate = setInterval(function() {
                if(i <= sliderWidth) {
                    allImages[cur].style.marginLeft = "-" + i + "%";
                    i--;
                } else {
                    clearInterval(animate);
                }
            }, time);
        }

        function reset() {
            for(i = 0; i <= allImages.length - 1; i++) {
                animateRight(i);
            }
            // resseting the current image to the first image
            current = 0;
        }

        function animateLeft(cur) {
            var i = 0,
              time = 50;
            var animate = setInterval(function() {
                if(i <= imgWidth) {
                    allImages[cur].style.marginLeft = "-" + i  + "%";
                    i++;
                } else {
                    clearInterval(animate);
                }
            }, time);
        }

        setInterval(function () {
            if(current <= allImages.length - 2) {
                animateLeft(current);
                current++;

            } else {
                reset();
            }
        }, 3000);
    } // end
    sslider();
});
