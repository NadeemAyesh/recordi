/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    
    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        
        if ($('.side-menu').hasClass('.show')) {
            $('.side-menu').removeClass('show');
            $('.menu-overlay').fadeOut();
        } else {
            $('.side-menu').addClass('show');
            $('.menu-overlay').fadeIn();
        }

        $('.menu-overlay').on('click', function (e) {
            $('.side-menu').removeClass('show');
            $('.menu-overlay').fadeOut();
        });
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });

    //data-tab="#profile"
    $('.modal-toggle').on('click', function (e) {
        var tab = e.currentTarget.hash;
        console.log(tab)
        // $('.nav-tabs li > a[href="' + tab + '"]').tab("show");

        $('.login-register').on('show.bs.modal', function (e) {
            // $('#home').tab('dispose');
            $(tab).tab("show");

        });
    });

    // has-story
    $('.has-story').on('click', function (e) {
        e.preventDefault();
        $('.story').fadeIn('slow');

        $('.close-story').on('click', function (e) {
            e.preventDefault();
            $('.story').fadeOut('slow');
        });
    });

    $('.reactions-single a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active')
    });
    
});



/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
//         },
//         shape: {
//             type: ["circle"],
//             stroke: {
//                 width: 0,
//                 color: "#fff"
//             },
//             polygon: {
//                 nb_sides: 5
//             },
//             image: {
//                 src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
//                 width: 100,
//                 height: 100
//             }
//         },
//         opacity: {
//             value: 1,
//             random: false,
//             anim: {
//                 enable: false,
//                 speed: 1,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 8,
//             random: true,
//             anim: {
//                 enable: false,
//                 speed: 10,
//                 size_min: 10,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#808080",
//             opacity: 0.4,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 5,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//                 enable: false,
//                 rotateX: 600,
//                 rotateY: 1200
//             }
//         }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "grab"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             },
//             resize: true
//         },
//         modes: {
//             grab: {
//                 distance: 140,
//                 line_linked: {
//                     opacity: 1
//                 }
//             },
//             bubble: {
//                 distance: 400,
//                 size: 40,
//                 duration: 2,
//                 opacity: 8,
//                 speed: 3
//             },
//             repulse: {
//                 distance: 200,
//                 duration: 0.4
//             },
//             push: {
//                 particles_nb: 4
//             },
//             remove: {
//                 particles_nb: 2
//             }
//         }
//     },
//     retina_detect: true
// });
