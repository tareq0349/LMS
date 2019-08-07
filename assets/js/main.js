/*
    Template  Name: 
    Template URI:
    Description: 
    Author:
    Author URI: 
    Version: 
*/

/*==============================================
[  Table of contents  ]
================================================

    01. 
    02. 
    03. 
    04. 
    05. 

======================================
[ End table content ]
======================================*/

(function($) {
    "use strict";

    jQuery(document).ready(function($) {



        /*---------------------------------------------*
         * Sticky Menu
         ---------------------------------------------*/
     
/*
            $(".header").sticky({stopSpacing: 0 });
*/


        /*---------------------------------------------*
         * MOBILE MENU - HOME
         ---------------------------------------------*/


        $('.menu-trigger').on('click', function() {
            $('.menu').addClass('slide-in');
            $('.overlay').removeClass('hide');
        });


        $('.menu-close, .overlay, .menu-page-link').on('click', function() {
            $('.menu').removeClass('slide-in');
            $('.overlay').addClass('hide');
        });








        /*---------------------------------------------*
         * SCROLL TO TOP - ALL VIDEOS PAGE
         ---------------------------------------------*/
            
        
/*        jQuery("#scrollTop").click(function () {
            jQuery("body,html").animate({
                scrollTop: 0
            }, 600);
        });
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() > 250) {
                jQuery("#scrollTop").addClass("visible");
            } else {
                jQuery("#scrollTop").removeClass("visible");
            }
        });
*/


        /*---------------------------------------------*
         *  CAROUSEL -
         ---------------------------------------------*/

/*        $(".your-carousel-class").owlCarousel({
            items: 3,
            dots: true,
            loop: true,
            margin: 60,
            nav: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsiveClass: true,
            navText: ["<i class='fas fa-chevron-left video-left'></i>", "<i class='fas fa-chevron-right video-right'></i>"]
            responsive: {
                0: {
                    items: 1
                },
                375: {
                    items: 1
                },
                480: {
                    items: 1
                },
                769: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            },
        });
*/



    });

    /*====  Window Load Function =====*/
    jQuery(window).load(function() {



    });

}(jQuery));




